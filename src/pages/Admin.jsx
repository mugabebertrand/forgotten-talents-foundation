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
import {
  getStorage,
  ref as storageRef,
  deleteObject,
} from "firebase/storage";

export default function Admin() {
  const [subs, setSubs] = useState([]);
  const [loading, setLoading] = useState(true);

  const storage = getStorage();

  const loadSubmissions = async () => {
    setLoading(true);

    try {
      const submissionsQuery = query(
        collection(db, "submissions"),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(submissionsQuery);

      const submissions = snapshot.docs.map((submissionDocument) => ({
        id: submissionDocument.id,
        ...submissionDocument.data(),
      }));

      setSubs(submissions);
    } catch (error) {
      console.error("Load submissions error:", error);
      alert("Failed to load submissions. Check the console.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSubmissions();
  }, []);

  const deleteTalentBySubmissionId = async (submissionId) => {
    const talentsQuery = query(
      collection(db, "talents"),
      where("sourceSubmissionId", "==", submissionId)
    );

    const snapshot = await getDocs(talentsQuery);

    for (const talentDocument of snapshot.docs) {
      await deleteDoc(doc(db, "talents", talentDocument.id));
    }

    return snapshot.size;
  };

  const approveSubmission = async (submission) => {
    try {
      await deleteTalentBySubmissionId(submission.id);

      await addDoc(collection(db, "talents"), {
        name: submission.childName || "Anonymous Child",
        age: submission.childAge ?? null,
        title: submission.title || "Untitled Talent",
        description:
          submission.description ||
          "Shared with permission. Personal details are protected.",
        mediaUrl: submission.fileURL || "",
        mediaType: submission.fileType?.startsWith("audio/")
          ? "audio"
          : submission.fileType?.startsWith("video/")
          ? "video"
          : submission.fileType?.startsWith("image/")
          ? "image"
          : "unknown",
        approved: true,
        createdAt: serverTimestamp(),
        sourceSubmissionId: submission.id,
        sponsorCode: submission.sponsorCode || null,
        storagePath: submission.storagePath || null,
      });

      await updateDoc(doc(db, "submissions", submission.id), {
        approved: true,
        status: "approved",
        reviewedAt: serverTimestamp(),
      });

      alert("✅ Approved and published to Talents!");
      await loadSubmissions();
    } catch (error) {
      console.error("Approve error:", error);
      alert("❌ Approval failed. Check the console.");
    }
  };

  const rejectSubmission = async (submission) => {
    try {
      await deleteTalentBySubmissionId(submission.id);

      await updateDoc(doc(db, "submissions", submission.id), {
        approved: false,
        status: "rejected",
        reviewedAt: serverTimestamp(),
      });

      alert("✅ Submission rejected.");
      await loadSubmissions();
    } catch (error) {
      console.error("Reject error:", error);
      alert("❌ Rejection failed. Check the console.");
    }
  };

  const unpublishSubmission = async (submission) => {
    try {
      const deletedCount = await deleteTalentBySubmissionId(submission.id);

      await updateDoc(doc(db, "submissions", submission.id), {
        approved: false,
        status: "unpublished",
        reviewedAt: serverTimestamp(),
      });

      alert(
        `✅ Unpublished. Removed ${deletedCount} item(s) from the Talents page.`
      );

      await loadSubmissions();
    } catch (error) {
      console.error("Unpublish error:", error);
      alert("❌ Unpublish failed. Check the console.");
    }
  };

  const deleteForever = async (submission) => {
    const confirmed = window.confirm(
      "Delete forever?\n\n" +
        "This will remove:\n" +
        "- the submission\n" +
        "- the published talent\n" +
        "- the uploaded file\n\n" +
        "This action cannot be undone."
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteTalentBySubmissionId(submission.id);

      if (submission.storagePath) {
        try {
          const uploadedFileReference = storageRef(
            storage,
            submission.storagePath
          );

          await deleteObject(uploadedFileReference);
        } catch (storageError) {
          console.warn(
            "Storage deletion failed, or the file was already deleted:",
            storageError
          );
        }
      }

      await deleteDoc(doc(db, "submissions", submission.id));

      alert("✅ Deleted forever.");
      await loadSubmissions();
    } catch (error) {
      console.error("Delete forever error:", error);
      alert("❌ Delete forever failed. Check the console.");
    }
  };

  const buttonBaseStyle = {
    border: "none",
    borderRadius: 8,
    padding: "10px 14px",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: "0.95rem",
    minWidth: 170,
  };

  return (
    <div
      style={{
        padding: "clamp(1rem, 4vw, 2rem)",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <h1>Admin Review</h1>

      <p style={{ color: "#666" }}>
        Review uploads in <strong>submissions</strong>. Approving publishes to{" "}
        <strong>talents</strong>.
      </p>

      {loading && <p>Loading submissions...</p>}

      {!loading && subs.length === 0 && <p>No submissions yet.</p>}

      <div
        style={{
          display: "grid",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {subs.map((submission) => (
          <div
            key={submission.id}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 12,
              padding: 16,
              background: "#ffffff",
              width: "100%",
              boxSizing: "border-box",
              overflow: "hidden",
            }}
          >
            <h3 style={{ margin: 0 }}>
              {submission.title || "Untitled"}
            </h3>

            <p
              style={{
                margin: "6px 0",
                color: "#555",
              }}
            >
              Child:{" "}
              <strong>{submission.childName || "Anonymous"}</strong>{" "}
              {submission.childAge
                ? `(Age ${submission.childAge})`
                : ""}
            </p>

            <p
              style={{
                margin: "6px 0",
                color: "#777",
              }}
            >
              Status:{" "}
              <strong>{submission.status || "submitted"}</strong> | Approved:{" "}
              <strong>{String(Boolean(submission.approved))}</strong>
            </p>

            {submission.fileType?.startsWith("image/") && (
              <img
                src={submission.fileURL}
                alt={submission.title || "Uploaded talent"}
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: 420,
                  objectFit: "contain",
                  borderRadius: 8,
                  margin: "10px 0 0",
                  display: "block",
                }}
              />
            )}

            {submission.fileType?.startsWith("video/") && (
              <video
                controls
                src={submission.fileURL}
                style={{
                  width: "100%",
                  maxHeight: 400,
                  objectFit: "contain",
                  borderRadius: 8,
                  marginTop: 10,
                  display: "block",
                  background: "#111",
                }}
              />
            )}

            {submission.fileType?.startsWith("audio/") && (
              <audio
                controls
                src={submission.fileURL}
                style={{
                  width: "100%",
                  marginTop: 10,
                }}
              />
            )}

            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                marginTop: 16,
              }}
            >
              <button
                onClick={() => approveSubmission(submission)}
                style={{
                  ...buttonBaseStyle,
                  background: "#16a34a",
                  color: "#ffffff",
                }}
              >
                ✅ Approve & Publish
              </button>

              <button
                onClick={() => rejectSubmission(submission)}
                style={{
                  ...buttonBaseStyle,
                  background: "#6b7280",
                  color: "#ffffff",
                }}
              >
                ❌ Reject
              </button>

              <button
                onClick={() => unpublishSubmission(submission)}
                style={{
                  ...buttonBaseStyle,
                  background: "#f59e0b",
                  color: "#111827",
                }}
              >
                🗑️ Unpublish
              </button>

              <button
                onClick={() => deleteForever(submission)}
                style={{
                  ...buttonBaseStyle,
                  background: "#dc2626",
                  color: "#ffffff",
                }}
              >
                ⚠️ Delete Forever
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}