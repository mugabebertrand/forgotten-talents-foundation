import { Link } from "react-router-dom";
import { ui } from "../ui";
import { useLanguage } from "../i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <div style={ui.page}>
      <div style={ui.wrap}>
        <div style={ui.eyebrow}>{t("how.eyebrow")}</div>
        <h1 style={ui.h1}>{t("how.title")}</h1>
        <p style={ui.lead}>{t("how.lead")}</p>

        <div style={{ ...ui.grid, gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))" }}>
          {t("how.steps").map(([title, text], index) => (
            <div key={title} style={ui.card}>
              <div style={{ ...ui.tag, marginBottom: 8 }}>{t("how.step", { n: index + 1 })}</div>
              <h3 style={ui.h3}>{title}</h3>
              <p style={ui.text}>{text}</p>
            </div>
          ))}
        </div>

        <div style={ui.section}>
          <h2 style={ui.h2}>{t("how.valueTitle")}</h2>
          <div style={ui.grid}>
            {t("how.values").map(([title, text]) => (
              <div key={title} style={ui.card}>
                <h3 style={ui.h3}>{title}</h3>
                <p style={ui.text}>{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={ui.section}>
          <div style={ui.card}>
            <h2 style={ui.h2}>{t("how.founderTitle")}</h2>
            <p style={{ ...ui.text, maxWidth: 820 }}>{t("how.founderText")}</p>
          </div>
        </div>

        <div style={ui.section}>
          <div style={ui.card}>
            <h2 style={ui.h2}>{t("how.statusTitle")}</h2>
            <p style={ui.text}>{t("how.statusText")}</p>
          </div>
        </div>

        <div style={{ ...ui.section, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link to="/challenges" style={ui.primaryBtn}>{t("common.seeCategories")}</Link>
          <Link to="/businesses" style={ui.lightBtn}>{t("common.bookSponsor")}</Link>
        </div>
      </div>
    </div>
  );
}
