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
import { TALENT_CATEGORIES } from "../talentCategories";
import { useLanguage, Rich } from "../i18n/LanguageContext";
import { Link } from "react-router-dom";

export default function Upload() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    sponsorCode: "",
    displayName: "",
    email: "",
    lane: "",
    title: "",
    description: "",
  });

  const [file, setFile] = useState(null);
  const [agree, setAgree] = useState(false);
  const [isAdult, setIsAdult] = useState(false);
  const [isOriginal, setIsOriginal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const onChange = (e) => {
    setForm((previousForm) => ({
      ...previousForm,
      [e.target.name]: e.target.value,
    }));
  };

  async function validateSponsorCode(code) {
    const sponsorCodeQuery = query(
      collection(db, "sponsorCodes"),
      where("code", "==", code.trim()),
      where("isActive", "==", true)
    );

    const snapshot = await getDocs(sponsorCodeQuery);

    return !snapshot.empty;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMsg("");

    if (!isAdult || !isOriginal || !agree) {
      setMsg(t("upload.errConfirm"));
      return;
    }

    if (!file) {
      setMsg(t("upload.errFile"));
      return;
    }

    if (!form.sponsorCode || !form.displayName || !form.email || !form.title) {
      setMsg(t("upload.errRequired"));
      return;
    }

    setLoading(true);

    let currentStep = "start";

    try {
      currentStep = "code";
      console.log("Step 1: Validating invitation code");

      const validCode = await validateSponsorCode(form.sponsorCode);

      console.log("Invitation code is valid:", validCode);

      if (!validCode) {
        setMsg(t("upload.errCode"));
        return;
      }

      const isVideo = file.type.startsWith("video/");
      const isAudio = file.type.startsWith("audio/");
      const isImage = file.type.startsWith("image/");

      if (!isVideo && !isAudio && !isImage) {
        setMsg(t("upload.errType"));
        return;
      }

      currentStep = "upload";
      console.log("Step 2: Uploading file to Firebase Storage");

      const safeFileName = file.name.replace(/\s+/g, "_");

      const storagePath = `submissions/${form.sponsorCode.trim()}/${Date.now()}_${safeFileName}`;

      const storageRef = ref(storage, storagePath);

      await uploadBytes(storageRef, file);

      currentStep = "url";
      console.log("Step 3: Getting file download URL");

      const downloadURL = await getDownloadURL(storageRef);

      currentStep = "save";
      console.log("Step 4: Saving submission to Firestore");

      await addDoc(collection(db, "submissions"), {
        sponsorCode: form.sponsorCode.trim(),

        // Participant fields. childName/sponsorName are kept for compatibility
        // with the existing admin review and gallery code.
        participantType: "adult",
        displayName: form.displayName.trim(),
        childName: form.displayName.trim(),
        childAge: null,
        sponsorName: form.displayName.trim(),
        phone: "",
        email: form.email.trim(),
        lane: form.lane || "",

        ageConfirmed18: true,
        originalWorkConfirmed: true,
        ownershipAcknowledged: true,

        title: form.title.trim(),
        description: form.description.trim() || "",

        fileURL: downloadURL,
        fileType: file.type,
        storagePath,

        approved: false,
        status: "pending",

        createdAt: serverTimestamp(),
      });

      console.log("Submission saved successfully");

      setMsg(t("upload.success"));

      setForm({
        sponsorCode: "",
        displayName: "",
        email: "",
        lane: "",
        title: "",
        description: "",
      });

      setFile(null);
      setAgree(false);
      setIsAdult(false);
      setIsOriginal(false);

      const fileInput = document.querySelector('input[type="file"]');

      if (fileInput) {
        fileInput.value = "";
      }
    } catch (error) {
      console.error("Upload failed during:", currentStep);
      console.error("Firebase error code:", error.code);
      console.error("Full error:", error);

      setMsg(
        t("upload.failed", {
          step: t(`upload.steps.${currentStep}`),
          error: error.code || error.message || t("upload.unknownError"),
        })
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: 820,
        margin: "0 auto",
      }}
    >
      <h1>{t("upload.title")}</h1>

      <p
        style={{
          color: "#4b5563",
          lineHeight: 1.6,
        }}
      >
        <Rich text={t("upload.intro")} />{" "}
        <Link to="/rules" style={{ color: "#2563eb", fontWeight: 700 }}>{t("common.readRules")} →</Link>
      </p>

      <div
        style={{
          marginTop: 10,
          padding: 12,
          border: "1px solid #e5e7eb",
          borderRadius: 12,
        }}
      >
        <Rich text={t("upload.privacy")} />
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: "1rem",
        }}
      >
        <h3>{t("upload.codeTitle")}</h3>

        <p
          style={{
            marginTop: -6,
            color: "#6b7280",
            fontSize: 13,
          }}
        >
          {t("upload.codeHelp")}
        </p>

        <input
          name="sponsorCode"
          value={form.sponsorCode}
          onChange={onChange}
          placeholder={t("upload.codePlaceholder")}
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 12,
          }}
        />

        <h3>{t("upload.aboutTitle")}</h3>

        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <input
            name="displayName"
            value={form.displayName}
            onChange={onChange}
            placeholder={t("upload.displayName")}
            style={{
              flex: 1,
              padding: 10,
              marginBottom: 12,
              minWidth: 260,
            }}
          />

          <input
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder={t("upload.email")}
            type="email"
            style={{
              flex: 1,
              padding: 10,
              marginBottom: 12,
              minWidth: 260,
            }}
          />
        </div>

        <select
          name="lane"
          value={form.lane}
          onChange={onChange}
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 12,
          }}
        >
          <option value="">{t("upload.category")}</option>
          {TALENT_CATEGORIES.map((category) => (
            <option key={category.id} value={category.id}>{t(`categories.${category.id}.name`)}</option>
          ))}
        </select>

        <h3>{t("upload.workTitle")}</h3>

        <input
          name="title"
          value={form.title}
          onChange={onChange}
          placeholder={t("upload.titlePlaceholder")}
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 12,
          }}
        />

        <textarea
          name="description"
          value={form.description}
          onChange={onChange}
          placeholder={t("upload.description")}
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 12,
            minHeight: 90,
          }}
        />

        <label
          htmlFor="talent-file"
          style={{ display: "block", fontWeight: 600, marginBottom: 6 }}
        >
          {t("upload.fileLabel")}
        </label>

        <input
          id="talent-file"
          type="file"
          accept="audio/*,video/*,image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          style={{
            marginBottom: 12,
          }}
        />

        {[
          [isAdult, setIsAdult, t("upload.confirmAdult")],
          [isOriginal, setIsOriginal, t("upload.confirmOriginal")],
          [agree, setAgree, t("upload.confirmOwnership")],
        ].map(([checked, setChecked, label], index) => (
          <label
            key={index}
            style={{
              display: "block",
              marginBottom: 10,
              lineHeight: 1.5,
            }}
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />{" "}
            {label}
          </label>
        ))}

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "10px 16px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? t("upload.submitting") : t("upload.submit")}
        </button>

        {msg && (
          <p
            style={{
              marginTop: 12,
              lineHeight: 1.5,
            }}
          >
            {msg}
          </p>
        )}
      </form>
    </div>
  );
}