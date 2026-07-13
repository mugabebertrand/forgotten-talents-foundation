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

import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { db, auth, storage } from "../Firebase";

import {
  ref as storageRef,
  deleteObject,
} from "firebase/storage";

export default function Admin() {
  const [subs, setSubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(true);

  const [user, setUser] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

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
      setLoginMessage(
        "Signed in, but submissions could not be loaded. Check your Firestore rules and admin UID."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);

      if (currentUser) {
        await loadSubmissions();
      } else {
        setSubs([]);
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoginMessage("");

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      setPassword("");
    } catch (error) {
      console.error("Login error:", error);

      if (
        error.code === "auth/invalid-credential" ||
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        setLoginMessage("Incorrect email or password.");
      } else {
        setLoginMessage("Login failed. Please try again.");
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

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

      alert("Approved and published to Talents.");
      await loadSubmissions();
    } catch (error) {
      console.error("Approve error:", error);
      alert("Approval failed. Check the console.");
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

      alert("Submission rejected.");
      await loadSubmissions();
    } catch (error) {
      console.error("Reject error:", error);
      alert("Rejection failed. Check the console.");
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
        `Unpublished. Removed ${deletedCount} item(s) from the Talents page.`
      );

      await loadSubmissions();
    } catch (error) {
      console.error("Unpublish error:", error);
      alert("Unpublish failed. Check the console.");
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

      alert("Deleted forever.");
      await loadSubmissions();
    } catch (error) {
      console.error("Delete forever error:", error);
      alert("Delete forever failed. Check the console.");
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

  if (authLoading) {
    return (
      <div style={{ padding: "2rem", maxWidth: 700, margin: "0 auto" }}>
        <p>Checking admin access...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div
        style={{
          padding: "2rem",
          maxWidth: 520,
          margin: "0 auto",
        }}
      >
        <h1>Admin Login</h1>

        <p style={{ color: "#666", lineHeight: 1.6 }}>
          Sign in with the Firebase administrator account you created.
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Admin email"
            required
            style={{
              width: "100%",
              padding: 12,
              marginBottom: 12,
              boxSizing: "border-box",
            }}
          />

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            required
            style={{
              width: "100%",
              padding: 12,
              marginBottom: 12,
              boxSizing: "border-box",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "10px 16px",
              border: "none",
              borderRadius: 8,
              background: "#111827",
              color: "#ffffff",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Sign In
          </button>
        </form>

        {loginMessage && (
          <p
            style={{
              marginTop: 14,
              color: "#b91c1c",
              lineHeight: 1.5,
            }}
          >
            {loginMessage}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "clamp(1rem, 4vw, 2rem)",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1>Admin Review</h1>

          <p style={{ color: "#666" }}>
            Review uploads in <strong>submissions</strong>. Approving publishes
            to <strong>talents</strong>.
          </p>
        </div>

        <button
          onClick={handleLogout}
          style={{
            padding: "10px 16px",
            border: "1px solid #d1d5db",
            borderRadius: 8,
            background: "#ffffff",
            color: "#111827",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Sign Out
        </button>
      </div>

      {loginMessage && (
        <p style={{ color: "#b91c1c" }}>{loginMessage}</p>
      )}

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

            <p style={{ margin: "6px 0", color: "#555" }}>
              Child:{" "}
              <strong>{submission.childName || "Anonymous"}</strong>{" "}
              {submission.childAge
                ? `(Age ${submission.childAge})`
                : ""}
            </p>

            <p style={{ margin: "6px 0", color: "#777" }}>
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
                Approve & Publish
              </button>

              <button
                onClick={() => rejectSubmission(submission)}
                style={{
                  ...buttonBaseStyle,
                  background: "#6b7280",
                  color: "#ffffff",
                }}
              >
                Reject
              </button>

              <button
                onClick={() => unpublishSubmission(submission)}
                style={{
                  ...buttonBaseStyle,
                  background: "#f59e0b",
                  color: "#111827",
                }}
              >
                Unpublish
              </button>

              <button
                onClick={() => deleteForever(submission)}
                style={{
                  ...buttonBaseStyle,
                  background: "#dc2626",
                  color: "#ffffff",
                }}
              >
                Delete Forever
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}