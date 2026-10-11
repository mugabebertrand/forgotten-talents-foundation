// Home.jsx
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  const cards = t("home.cards");
  return (
    <div style={{ background: "#f7f8fb", overflowX: "hidden" }}>
      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(135deg, rgba(10,15,25,1) 0%, rgba(20,32,55,1) 50%, rgba(10,15,25,1) 100%)",
          color: "white",
          padding: "clamp(32px, 6vw, 60px) 16px",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 14, opacity: 0.85, marginBottom: 10 }}>
              {t("home.eyebrow")}
            </div>

            <h1
              style={{
                fontSize: "clamp(28px, 6vw, 48px)",
                lineHeight: 1.15,
                margin: "0 0 14px",
              }}
            >
              {t("home.title")}
            </h1>

            <p
              style={{
                fontSize: "clamp(15px, 2.5vw, 18px)",
                opacity: 0.9,
                margin: "0 0 18px",
                lineHeight: 1.6,
              }}
            >
              {t("home.subtitle")}
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link to="/upload" style={styles.primaryBtn}>
                {t("home.submit")}
              </Link>

              <Link to="/talents" style={styles.secondaryBtn}>
                {t("home.gallery")}
              </Link>

              <Link to="/businesses" style={styles.ghostBtn}>
                {t("home.bookSponsor")}
              </Link>
            </div>

            <p style={{ fontSize: 13, opacity: 0.75, marginTop: 14 }}>
              {t("home.note")}
            </p>
          </div>

          {/* HERO CARD */}
          <div style={styles.heroCard}>
            <div style={styles.heroCardInner}>
              <div style={{ fontSize: 14, opacity: 0.9, marginBottom: 10, fontWeight: 700 }}>
                {t("home.howTitle")}
              </div>

              <ol style={{ margin: 0, paddingLeft: 18, opacity: 0.95, lineHeight: 1.6 }}>
                {t("home.how").map((step) => (
                  <li key={step} style={{ marginBottom: 8 }}>{step}</li>
                ))}
              </ol>

              <div style={{ marginTop: 12, fontSize: 12, opacity: 0.75 }}>
                {t("home.pilot")}
              </div>

              <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <Link to="/challenges" style={styles.smallDarkBtn}>
                  {t("common.seeCategories")}
                </Link>
                <Link to="/contact" style={styles.smallLightBtn}>
                  {t("common.contact")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section style={{ padding: "clamp(24px, 4vw, 34px) 16px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ margin: "0 0 10px", fontSize: "clamp(22px, 4vw, 28px)" }}>
            {t("home.missionTitle")}
          </h2>
          <p style={{ margin: 0, color: "#384152", maxWidth: 820, lineHeight: 1.7 }}>
            {t("home.missionText")}
          </p>
        </div>
      </section>

      {/* VALUE CARDS */}
      <section style={{ padding: "0 16px clamp(30px, 6vw, 50px)" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {cards.map((card, index) => (
            <div key={card.title} style={styles.card}>
              <h3 style={styles.cardTitle}>{card.title}</h3>
              <p style={styles.cardText}>{card.text}</p>
              <Link to={["/challenges", "/businesses", "/talents"][index]} style={styles.cardLink}>
                {card.link}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 16px clamp(40px, 6vw, 70px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={styles.ctaBox}>
            <div>
              <h3 style={{ margin: 0, fontSize: "clamp(19px, 3vw, 22px)" }}>{t("home.ctaTitle")}</h3>
              <p style={{ margin: "8px 0 0", color: "#384152", lineHeight: 1.6 }}>
                {t("home.ctaText")}
              </p>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link to="/upload" style={styles.primaryBtn}>
                {t("home.ctaButton")}
              </Link>
              <Link to="/businesses" style={styles.secondaryBtnDarkBorder}>
                {t("home.bookSponsor")}
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