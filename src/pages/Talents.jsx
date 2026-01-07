import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Firebase";

export default function Talents() {
  const [talents, setTalents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTalents = async () => {
      try {
        // ✅ allow boolean true OR string "true" (common mistake)
        const q = query(
          collection(db, "talents"),
          where("approved", "in", [true, "true"])
        );

        const snapshot = await getDocs(q);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("Talents fetched:", data);
        setTalents(data);
      } catch (error) {
        console.error("Error fetching talents:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTalents();
  }, []);

  if (loading) return <p style={{ padding: "2rem" }}>Loading talents...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Talents Gallery</h1>
      <p>Celebrating the talents of extraordinary children.</p>

      {talents.length === 0 && (
        <p>No talents published yet. Please check back soon.</p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        {talents.map((t) => (
          <div
            key={t.id}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "1rem",
              background: "#fff",
            }}
          >
            <h3>{t.name || "Anonymous Child"}</h3>
            <p style={{ color: "#555" }}>
              <strong>{t.title || "Untitled Talent"}</strong>
            </p>

            {t.description && (
              <p style={{ fontSize: "0.9rem", marginTop: "0.25rem" }}>
                {t.description}
              </p>
            )}

            {t.mediaType === "video" && (
              <video
                controls
                src={t.mediaUrl}
                style={{ width: "100%", borderRadius: "8px", marginTop: "0.75rem" }}
              />
            )}

            {t.mediaType === "audio" && (
              <audio
                controls
                src={t.mediaUrl}
                style={{ width: "100%", marginTop: "0.75rem" }}
              />
            )}

            {t.mediaType === "image" && (
              <img
                src={t.mediaUrl}
                alt={t.title}
                style={{ width: "100%", borderRadius: "8px", marginTop: "0.75rem" }}
              />
            )}

            <p style={{ fontSize: "0.8rem", marginTop: "0.75rem", color: "#777" }}>
              Shared with permission. Personal details are protected.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
