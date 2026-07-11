import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../Firebase";

export default function Talents() {
  const [talents, setTalents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTalents = async () => {
      try {
        const talentsQuery = query(
          collection(db, "talents"),
          where("approved", "in", [true, "true"])
        );

        const snapshot = await getDocs(talentsQuery);

        const publishedTalents = snapshot.docs
          .map((talentDocument) => ({
            id: talentDocument.id,
            ...talentDocument.data(),
          }))
          .filter(
            (talent) =>
              talent.name?.toLowerCase() !== "test child" &&
              talent.title?.toLowerCase() !== "singing talent"
          );

        setTalents(publishedTalents);
      } catch (error) {
        console.error("Error fetching talents:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTalents();
  }, []);

  if (loading) {
    return (
      <p
        style={{
          padding: "2rem",
        }}
      >
        Loading talents...
      </p>
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
      <h1>Talents Gallery</h1>

      <p>Celebrating the talents of extraordinary children.</p>

      {talents.length === 0 && (
        <p>No talents published yet. Please check back soon.</p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "1.5rem",
          marginTop: "2rem",
          alignItems: "start",
        }}
      >
        {talents.map((talent) => (
          <div
            key={talent.id}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 12,
              padding: "1rem",
              background: "#ffffff",
              overflow: "hidden",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                marginBottom: "1rem",
              }}
            >
              {talent.name || "Anonymous Child"}
            </h3>

            <p
              style={{
                color: "#555",
                marginBottom: "1rem",
              }}
            >
              <strong>{talent.title || "Untitled Talent"}</strong>
            </p>

            {talent.description && (
              <p
                style={{
                  fontSize: "0.9rem",
                  marginTop: "0.25rem",
                  marginBottom: "1rem",
                  lineHeight: 1.5,
                }}
              >
                {talent.description}
              </p>
            )}

            {/* IMAGE */}
            {talent.mediaType === "image" && (
              <img
                src={talent.mediaUrl}
                alt={talent.title || "Published talent"}
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: 400,
                  objectFit: "contain",
                  borderRadius: 8,
                  margin: "0.75rem 0 0",
                  display: "block",
                }}
              />
            )}

            {/* VIDEO */}
            {talent.mediaType === "video" && (
              <video
                controls
                preload="metadata"
                src={talent.mediaUrl}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: 250,
                  borderRadius: 8,
                  marginTop: "0.75rem",
                  display: "block",
                  background: "#000",
                }}
              />
            )}

            {/* AUDIO */}
            {talent.mediaType === "audio" && (
              <audio
                controls
                src={talent.mediaUrl}
                style={{
                  width: "100%",
                  marginTop: "0.75rem",
                }}
              />
            )}

            <p
              style={{
                fontSize: "0.8rem",
                marginTop: "0.75rem",
                marginBottom: 0,
                color: "#777",
              }}
            >
              Shared with permission. Personal details are protected.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}