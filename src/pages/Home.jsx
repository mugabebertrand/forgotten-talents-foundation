// Home.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ background: "#f7f8fb" }}>
      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(135deg, rgba(10,15,25,1) 0%, rgba(20,32,55,1) 50%, rgba(10,15,25,1) 100%)",
          color: "white",
          padding: "60px 16px",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: 24,
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 14, opacity: 0.85, marginBottom: 10 }}>
              Forgotten Talented Ones Foundation
            </div>

            <h1 style={{ fontSize: 48, lineHeight: 1.05, margin: "0 0 14px" }}>
              Recognize talent. Protect privacy. Build opportunity.
            </h1>

            <p style={{ fontSize: 18, opacity: 0.9, margin: "0 0 18px", lineHeight: 1.6 }}>
              A moderated platform where families can submit children’s music, arts, and skills.
              Submissions are reviewed before publishing.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link to="/upload" style={styles.primaryBtn}>
                Submit Talent
              </Link>

              <Link to="/talents" style={styles.secondaryBtn}>
                View Gallery
              </Link>

              <Link to="/programs" style={styles.ghostBtn}>
                Programs
              </Link>
            </div>

            <p style={{ fontSize: 13, opacity: 0.75, marginTop: 14 }}>
              Please avoid sharing school names, home addresses, or schedules in uploads.
            </p>
          </div>

          {/* HERO CARD */}
          <div style={styles.heroCard}>
            <div style={styles.heroCardInner}>
              <div style={{ fontSize: 14, opacity: 0.9, marginBottom: 10, fontWeight: 700 }}>
                How it works
              </div>

              <ol style={{ margin: 0, paddingLeft: 18, opacity: 0.95, lineHeight: 1.6 }}>
                <li style={{ marginBottom: 8 }}>Submit media using an invitation code</li>
                <li style={{ marginBottom: 8 }}>Admin reviews submission for safety + quality</li>
                <li style={{ marginBottom: 8 }}>Approved entries appear in the Talent Gallery</li>
              </ol>

              <div style={{ marginTop: 12, fontSize: 12, opacity: 0.75 }}>
                MVP demo: donation processing will be enabled after registration and verification.
              </div>

              <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <Link to="/admin" style={styles.smallDarkBtn}>
                  Admin Review
                </Link>
                <Link to="/contact" style={styles.smallLightBtn}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section style={{ padding: "34px 16px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ margin: "0 0 10px", fontSize: 28 }}>Our mission</h2>
          <p style={{ margin: 0, color: "#384152", maxWidth: 820, lineHeight: 1.7 }}>
            We support families and children facing disability, poverty, or limited access — by providing resources,
            learning support, and inclusive opportunities where talent can grow.
          </p>
        </div>
      </section>

      {/* PROGRAM CARDS */}
      <section style={{ padding: "0 16px 50px" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
        >
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Family support</h3>
            <p style={styles.cardText}>
              Guidance for parents and caregivers, referrals to services, and practical support resources.
            </p>
            <Link to="/programs#family" style={styles.cardLink}>
              Explore family support →
            </Link>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Education & life skills</h3>
            <p style={styles.cardText}>
              Learning routines, communication, confidence building, and skill development opportunities.
            </p>
            <Link to="/programs#education" style={styles.cardLink}>
              Explore education & life skills →
            </Link>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Inclusion & talent</h3>
            <p style={styles.cardText}>
              A privacy-first talent submission and moderation process to celebrate safe, positive content.
            </p>
            <Link to="/programs#talent" style={styles.cardLink}>
              Explore inclusion & talent →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 16px 70px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={styles.ctaBox}>
            <div>
              <h3 style={{ margin: 0, fontSize: 22 }}>Get involved</h3>
              <p style={{ margin: "8px 0 0", color: "#384152", lineHeight: 1.6 }}>
                Partner with us, volunteer, or submit a talent entry for review.
              </p>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link to="/donate" style={styles.primaryBtn}>
                Support (Coming Soon)
              </Link>
              <Link to="/contact" style={styles.secondaryBtnDarkBorder}>
                Partner / Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  primaryBtn: {
    background: "#2563eb",
    color: "white",
    padding: "10px 16px",
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 700,
    display: "inline-block",
  },
  secondaryBtn: {
    background: "white",
    color: "#111827",
    padding: "10px 16px",
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 700,
    display: "inline-block",
    border: "1px solid rgba(255,255,255,0.25)",
  },
  secondaryBtnDarkBorder: {
    background: "white",
    color: "#111827",
    padding: "10px 16px",
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 700,
    display: "inline-block",
    border: "1px solid #e5e7eb",
  },
  ghostBtn: {
    background: "transparent",
    color: "white",
    padding: "10px 16px",
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 700,
    display: "inline-block",
    border: "1px solid rgba(255,255,255,0.35)",
  },
  heroCard: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: 18,
    padding: 16,
    minHeight: 240,
    boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
  },
  heroCardInner: {
    background: "rgba(0,0,0,0.18)",
    borderRadius: 14,
    padding: 16,
  },
  smallDarkBtn: {
    background: "#111827",
    color: "white",
    padding: "9px 12px",
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 700,
    display: "inline-block",
  },
  smallLightBtn: {
    background: "rgba(255,255,255,0.95)",
    color: "#111827",
    padding: "9px 12px",
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 700,
    display: "inline-block",
  },
  card: {
    background: "white",
    borderRadius: 16,
    padding: 18,
    border: "1px solid #e7eaf0",
    boxShadow: "0 10px 22px rgba(16,24,40,0.05)",
  },
  cardTitle: {
    margin: "0 0 8px",
    fontSize: 18,
    color: "#111827",
  },
  cardText: {
    margin: "0 0 12px",
    color: "#4b5563",
    lineHeight: 1.6,
  },
  cardLink: {
    textDecoration: "none",
    color: "#2563eb",
    fontWeight: 800,
  },
  ctaBox: {
    background: "white",
    borderRadius: 18,
    padding: 18,
    border: "1px solid #e7eaf0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
    flexWrap: "wrap",
    boxShadow: "0 10px 22px rgba(16,24,40,0.05)",
  },
};
