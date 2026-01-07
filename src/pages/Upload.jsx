// Upload.jsx
import { useState } from "react";
import { db, storage } from "../Firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function Upload() {
  const [form, setForm] = useState({
    sponsorCode: "",
    childName: "",
    childAge: "",
    sponsorName: "",
    phone: "",
    email: "",
    title: "",
    description: "",
  });

  const [file, setFile] = useState(null);
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const onChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  async function validateSponsorCode(code) {
    const q = query(
      collection(db, "sponsorCodes"),
      where("code", "==", code.trim()),
      where("isActive", "==", true)
    );
    const snap = await getDocs(q);
    return !snap.empty;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMsg("");

    if (!agree) return setMsg("Please confirm permission to upload.");
    if (!file) return setMsg("Please choose an audio/video/image file.");

    // Required fields (kept minimal)
    if (!form.sponsorCode || !form.childName || !form.sponsorName || !form.title) {
      return setMsg("Please fill all required fields.");
    }

    setLoading(true);

    try {
      // Validate invitation code in Firestore
      const ok = await validateSponsorCode(form.sponsorCode);
      if (!ok) {
        setLoading(false);
        return setMsg("Invalid invitation code or inactive code.");
      }

      const isVideo = file.type.startsWith("video/");
      const isAudio = file.type.startsWith("audio/");
      const isImage = file.type.startsWith("image/");

      if (!isVideo && !isAudio && !isImage) {
        setLoading(false);
        return setMsg("Only audio, video, or image files are allowed.");
      }

      // Upload file to Storage
      const safeName = file.name.replace(/\s+/g, "_");
      const storagePath = `submissions/${form.sponsorCode.trim()}/${Date.now()}_${safeName}`;
      const storageRef = ref(storage, storagePath);

      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      // Save submission in Firestore
      await addDoc(collection(db, "submissions"), {
        sponsorCode: form.sponsorCode.trim(),

        childName: form.childName.trim(), // nickname/initials
        childAge: form.childAge ? Number(form.childAge) : null,

        sponsorName: form.sponsorName.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),

        title: form.title.trim(),
        description: form.description.trim() || "",

        fileURL: downloadURL,
        fileType: file.type,
        storagePath,

        approved: false,
        status: "pending",

        createdAt: serverTimestamp(),
      });

      setMsg("✅ Submitted! This entry is pending admin review.");

      // Reset
      setForm({
        sponsorCode: "",
        childName: "",
        childAge: "",
        sponsorName: "",
        phone: "",
        email: "",
        title: "",
        description: "",
      });
      setFile(null);
      setAgree(false);
    } catch (err) {
      console.error("Upload error:", err);
      setMsg("❌ Upload failed. Check the console.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: "2rem", maxWidth: 820, margin: "0 auto" }}>
      <h1>Submit Talent</h1>

      <p style={{ color: "#4b5563", lineHeight: 1.6 }}>
        Sponsors/parents can submit an <b>audio/video/image</b>.
        Please do <b>NOT</b> share school name, home address, schedules, or other sensitive personal details.
      </p>

      <div style={{ marginTop: 10, padding: 12, border: "1px solid #e5e7eb", borderRadius: 12 }}>
        <b>Privacy note:</b> Use a child nickname/initials (example: “A.B.”) instead of a full name.
      </div>

      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <h3>Invitation Code *</h3>
        <p style={{ marginTop: -6, color: "#6b7280", fontSize: 13 }}>
          This helps prevent spam and keeps submissions review-only during the MVP stage.
        </p>
        <input
          name="sponsorCode"
          value={form.sponsorCode}
          onChange={onChange}
          placeholder="Example: FTF-0001"
          style={{ width: "100%", padding: 10, marginBottom: 12 }}
        />

        <h3>Child Information *</h3>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <input
            name="childName"
            value={form.childName}
            onChange={onChange}
            placeholder="Child nickname / initials (e.g., A.B.)"
            style={{ flex: 1, padding: 10, marginBottom: 12, minWidth: 260 }}
          />
          <input
            name="childAge"
            value={form.childAge}
            onChange={onChange}
            placeholder="Age (optional)"
            style={{ width: 160, padding: 10, marginBottom: 12 }}
          />
        </div>

        <h3>Sponsor / Parent Information *</h3>
        <input
          name="sponsorName"
          value={form.sponsorName}
          onChange={onChange}
          placeholder="Sponsor/Parent name"
          style={{ width: "100%", padding: 10, marginBottom: 12 }}
        />

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <input
            name="phone"
            value={form.phone}
            onChange={onChange}
            placeholder="Phone (optional — for follow-up)"
            style={{ flex: 1, padding: 10, marginBottom: 12, minWidth: 260 }}
          />
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="Email (optional — for follow-up)"
            style={{ flex: 1, padding: 10, marginBottom: 12, minWidth: 260 }}
          />
        </div>

        <h3>Talent Details *</h3>
        <input
          name="title"
          value={form.title}
          onChange={onChange}
          placeholder="Talent title (e.g., Piano performance)"
          style={{ width: "100%", padding: 10, marginBottom: 12 }}
        />

        <textarea
          name="description"
          value={form.description}
          onChange={onChange}
          placeholder="Short description (optional)"
          style={{ width: "100%", padding: 10, marginBottom: 12, minHeight: 90 }}
        />

        <input
          type="file"
          accept="audio/*,video/*,image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          style={{ marginBottom: 12 }}
        />

        <label style={{ display: "block", marginBottom: 12 }}>
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />{" "}
          I confirm I am the sponsor/parent/guardian and I have permission to submit this media.
        </label>

        <button disabled={loading} style={{ padding: "10px 16px" }}>
          {loading ? "Submitting..." : "Submit"}
        </button>

        {msg && <p style={{ marginTop: 12 }}>{msg}</p>}
      </form>
    </div>
  );
}
