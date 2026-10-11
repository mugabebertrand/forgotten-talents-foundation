import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer style={{ background: "#0b111c", color: "rgba(255,255,255,0.8)", padding: "28px 16px", fontSize: 14 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "space-between" }}>
        <div style={{ maxWidth: 620 }}>
          <div style={{ fontWeight: 800, color: "white", marginBottom: 6 }}>Forgotten Talent</div>
          <div style={{ lineHeight: 1.6 }}>{t("footer.tagline")}</div>
          <div style={{ marginTop: 10, fontSize: 12, opacity: 0.75, lineHeight: 1.6 }}>{t("footer.disclaimer")}</div>
        </div>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "flex-start" }}>
          <Link to="/how-it-works" style={linkStyle}>{t("nav.how")}</Link>
          <Link to="/businesses" style={linkStyle}>{t("nav.businesses")}</Link>
          <Link to="/contact" style={linkStyle}>{t("nav.contact")}</Link>
        </div>
      </div>
    </footer>
  );
}

const linkStyle = { color: "white", textDecoration: "none", fontWeight: 600 };
