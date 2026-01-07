import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  deleteDoc,
  where,
} from "firebase/firestore";
import { db } from "../Firebase";

import { getStorage, ref as storageRef, deleteObject } from "firebase/storage";

export default function Admin() {
  const [subs, setSubs] = useState([]);
  const [loading, setLoading] = useState(true);

  const storage = getStorage();

  const loadSubmissions = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "submissions"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      const rows = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setSubs(rows);
    } catch (e) {
      console.error("Load submissions error:", e);
      alert("Failed to load submissions. Check console.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSubmissions();
  }, []);

  // Helper: find & delete published talent(s) made from a submission
  const deleteTalentBySubmissionId = async (submissionId) => {
    const q = query(
      collection(db, "talents"),
      where("sourceSubmissionId", "==", submissionId)
    );
    const snap = await getDocs(q);

    // could be 0 or more docs (usually 1)
    for (const d of snap.docs) {
      await deleteDoc(doc(db, "talents", d.id));
    }
    return snap.size; // how many were deleted
  };

  const approveSubmission = async (sub) => {
    try {
      // 1) Create a published talent doc (this is what /talents reads)
      await addDoc(collection(db, "talents"), {
        name: sub.childName || "Anonymous Child",
        age: sub.childAge ?? null,
        title: sub.title || "Untitled Talent",
        description: sub.description || "Shared with permission. Personal details are protected.",
        mediaUrl: sub.fileURL,
        mediaType: sub.fileType?.startsWith("audio/")
          ? "audio"
          : sub.fileType?.startsWith("video/")
          ? "video"
          : sub.fileType?.startsWith("image/")
          ? "image"
          : "unknown",
        approved: true,
        createdAt: serverTimestamp(),
        sourceSubmissionId: sub.id,
        sponsorCode: sub.sponsorCode || null,

        // ✅ keep storage path so we can delete later if needed
        storagePath: sub.storagePath || null,
      });

      // 2) Mark submission approved
      await updateDoc(doc(db, "submissions", sub.id), {
        approved: true,
        status: "approved",
        reviewedAt: serverTimestamp(),
      });

      alert("✅ Approved and published to Talents!");
      loadSubmissions();
    } catch (e) {
      console.error("Approve error:", e);
      alert("❌ Approve failed. Check console.");
    }
  };

  const rejectSubmission = async (sub) => {
    try {
      await updateDoc(doc(db, "submissions", sub.id), {
        approved: false,
        status: "rejected",
        reviewedAt: serverTimestamp(),
      });

      alert("✅ Rejected (submission only).");
      loadSubmissions();
    } catch (e) {
      console.error("Reject error:", e);
      alert("❌ Reject failed. Check console.");
    }
  };

  // ✅ Unpublish from talents (does NOT delete the submission)
  const unpublish = async (sub) => {
    try {
      const deletedCount = await deleteTalentBySubmissionId(sub.id);

      await updateDoc(doc(db, "submissions", sub.id), {
        status: "unpublished",
        approved: false,
        reviewedAt: serverTimestamp(),
      });

      alert(`✅ Unpublished. Removed ${deletedCount} item(s) from Talents.`);
      loadSubmissions();
    } catch (e) {
      console.error("Unpublish error:", e);
      alert("❌ Unpublish failed. Check console.");
    }
  };

  // ✅ Delete EVERYTHING: submission + published talent + storage file
  const deleteForever = async (sub) => {
    const ok = confirm(
      "Delete forever?\nThis will remove:\n- the submission\n- the published talent (if any)\n- the uploaded file in Storage (if available)\n\nThis cannot be undone."
    );
    if (!ok) return;

    try {
      // 1) delete published talents made from this submission
      await deleteTalentBySubmissionId(sub.id);

      // 2) delete storage file if we know the path
      if (sub.storagePath) {
        try {
          await deleteObject(storageRef(storage, sub.storagePath));
        } catch (err) {
          console.warn("Storage delete failed (maybe already deleted):", err);
        }
      }

      // 3) delete the submission document
      await deleteDoc(doc(db, "submissions", sub.id));

      alert("✅ Deleted forever.");
      loadSubmissions();
    } catch (e) {
      console.error("Delete forever error:", e);
      alert("❌ Delete forever failed. Check console.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Admin Review</h1>
      <p style={{ color: "#666" }}>
        Review uploads in <b>submissions</b>. Approving publishes to <b>talents</b>.
      </p>

      {loading && <p>Loading submissions...</p>}
      {!loading && subs.length === 0 && <p>No submissions yet.</p>}

      <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
        {subs.map((s) => (
          <div
            key={s.id}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 12,
              padding: 16,
              background: "#fff",
            }}
          >
            <h3 style={{ margin: 0 }}>{s.title || "Untitled"}</h3>

            <p style={{ margin: "6px 0", color: "#555" }}>
              Child: <b>{s.childName || "Anonymous"}</b>{" "}
              {s.childAge ? `(Age ${s.childAge})` : ""}
            </p>

            <p style={{ margin: "6px 0", color: "#777" }}>
              Status: <b>{s.status || "submitted"}</b> | Approved:{" "}
              <b>{String(!!s.approved)}</b>
            </p>

            {s.fileType?.startsWith("video/") && (
              <video
                controls
                src={s.fileURL}
                style={{ width: "100%", borderRadius: 8, marginTop: 10 }}
              />
            )}

            {s.fileType?.startsWith("audio/") && (
              <audio controls src={s.fileURL} style={{ width: "100%", marginTop: 10 }} />
            )}

            {s.fileType?.startsWith("image/") && (
              <img
                src={s.fileURL}
                alt={s.title || "uploaded"}
                style={{ width: "100%", borderRadius: 8, marginTop: 10 }}
              />
            )}

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
              <button onClick={() => approveSubmission(s)}>✅ Approve & Publish</button>
              <button onClick={() => rejectSubmission(s)}>❌ Reject (submission)</button>

              <button onClick={() => unpublish(s)}>🗑️ Unpublish (remove from gallery)</button>

              <button
                onClick={() => deleteForever(s)}
                style={{ background: "#fee2e2", border: "1px solid #ef4444" }}
              >
                ⚠️ Delete Forever (incl. file)
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
