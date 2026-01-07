// Donate.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Donate() {
  return (
    <div style={{ background: "#f7f8fb", minHeight: "100vh", padding: "28px 16px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        {/* Header */}
        <h1 style={{ margin: "0 0 8px", fontSize: 36, color: "#111827" }}>Support (Coming Soon)</h1>

        <p style={{ margin: "0 0 14px", color: "#4b5563", lineHeight: 1.7, maxWidth: 820 }}>
          Thank you for supporting the mission. This website is currently a <b>portfolio MVP demo</b>.
          Donation processing will be enabled after nonprofit registration and payment verification.
        </p>

        {/* Notice box */}
        <div style={styles.noticeBox}>
          <div style={{ fontWeight: 800, color: "#111827", marginBottom: 6 }}>What you can do today</div>
          <ul style={{ margin: 0, paddingLeft: 18, color: "#374151", lineHeight: 1.7 }}>
            <li>Partner or volunteer to help the program grow</li>
            <li>Submit a talent entry (demo workflow: submit → admin review → publish)</li>
            <li>Share feedback to improve the platform</li>
          </ul>
        </div>

        {/* Impact / transparency */}
        <div style={styles.sectionBox}>
          <h2 style={styles.h2}>How support will be used (planned)</h2>
          <ul style={{ margin: 0, paddingLeft: 18, color: "#374151", lineHeight: 1.7 }}>
            <li>Learning materials and resources for children and families</li>
            <li>Inclusive events and talent opportunities (music/arts)</li>
            <li>Platform maintenance (hosting, storage, security)</li>
            <li>Communication, outreach, and community coordination</li>
          </ul>
        </div>

        {/* CTA row */}
        <div style={styles.ctaRow}>
          <div>
            <h3 style={{ margin: 0, fontSize: 18, color: "#111827" }}>Want to help in other ways?</h3>
            <p style={{ margin: "6px 0 0", color: "#4b5563" }}>
              Partnerships, mentorship, and volunteering are welcome.
            </p>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link to="/contact" style={styles.primaryBtn}>
              Partner / Volunteer
            </Link>
            <Link to="/upload" style={styles.secondaryBtn}>
              Submit Talent
            </Link>
          </div>
        </div>

        {/* Small disclaimer */}
        <p style={{ marginTop: 14, fontSize: 12, color: "#6b7280" }}>
          Note: Donation links are intentionally disabled during the MVP phase to prevent confusion.
          When the foundation is registered and payment platforms are verified, we will enable official donation options.
        </p>
      </div>
    </div>
  );
}

const styles = {
  noticeBox: {
    marginTop: 16,
    background: "white",
    borderRadius: 16,
    padding: 16,
    border: "1px solid #e7eaf0",
    boxShadow: "0 10px 22px rgba(16,24,40,0.05)",
  },
  sectionBox: {
    marginTop: 18,
    background: "white",
    borderRadius: 16,
    padding: 16,
    border: "1px solid #e7eaf0",
    boxShadow: "0 10px 22px rgba(16,24,40,0.05)",
  },
  h2: { margin: "0 0 10px", fontSize: 20, color: "#111827" },
  ctaRow: {
    marginTop: 18,
    background: "white",
    borderRadius: 16,
    padding: 16,
    border: "1px solid #e7eaf0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
    boxShadow: "0 10px 22px rgba(16,24,40,0.05)",
  },
  primaryBtn: {
    background: "#2563eb",
    color: "white",
    padding: "10px 14px",
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 700,
    display: "inline-block",
  },
  secondaryBtn: {
    background: "white",
    color: "#111827",
    padding: "10px 14px",
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 700,
    border: "1px solid #e5e7eb",
    display: "inline-block",
  },
};
