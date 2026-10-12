import { Link } from "react-router-dom";
import { ui, CONTACT_EMAIL } from "../ui";
import { useLanguage } from "../i18n/LanguageContext";

export default function Rules() {
  const { t } = useLanguage();

  return (
    <div style={ui.page}>
      <div style={ui.narrow}>
        <div style={ui.eyebrow}>{t("rules.eyebrow")}</div>
        <h1 style={ui.h1}>{t("rules.title")}</h1>
        <p style={ui.lead}>{t("rules.intro")}</p>

        <div style={{ display: "grid", gap: 14 }}>
          {t("rules.sections").map(([title, text], index) => (
            <div key={title} style={ui.card}>
              <h2 style={{ ...ui.h3, fontSize: 19 }}>
                {index + 1}. {title}
              </h2>
              <p style={ui.text}>{text.replace("{email}", CONTACT_EMAIL)}</p>
            </div>
          ))}
        </div>

        <p style={{ ...ui.text, fontSize: 13, marginTop: 16 }}>{t("rules.updated")}</p>

        <div style={{ ...ui.section, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link to="/upload" style={ui.primaryBtn}>{t("common.submitWork")}</Link>
          <Link to="/challenges" style={ui.lightBtn}>{t("common.seeCategories")}</Link>
        </div>
      </div>
    </div>
  );
}
