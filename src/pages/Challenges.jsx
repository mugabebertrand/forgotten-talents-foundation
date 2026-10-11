import { Link } from "react-router-dom";
import { ui } from "../ui";
import { TALENT_CATEGORIES } from "../talentCategories";
import { useLanguage } from "../i18n/LanguageContext";

export default function Challenges() {
  const { t } = useLanguage();

  return (
    <div style={ui.page}>
      <div style={ui.wrap}>
        <div style={ui.eyebrow}>{t("challenges.eyebrow")}</div>
        <h1 style={ui.h1}>{t("challenges.title")}</h1>
        <p style={ui.lead}>{t("challenges.lead")}</p>

        <div style={{ ...ui.card, borderLeft: "5px solid #2563eb" }}>
          <div style={ui.tag}>{t("challenges.comingSoon")}</div>
          <h2 style={ui.h2}>{t("challenges.openCallTitle")}</h2>
          <p style={ui.text}>{t("challenges.openCallText")}</p>
        </div>

        <div style={ui.section}>
          <h2 style={ui.h2}>{t("challenges.categoriesTitle")}</h2>
          <div style={ui.grid}>
            {TALENT_CATEGORIES.map((category) => (
              <div key={category.id} style={ui.card}>
                <h3 style={ui.h3}>{t(`categories.${category.id}.name`)}</h3>
                <p style={ui.text}>{t(`categories.${category.id}.examples`)}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={ui.section}>
          <h2 style={ui.h2}>{t("challenges.judgedTitle")}</h2>
          <div style={ui.grid}>
            {t("challenges.judged").map(([title, text]) => (
              <div key={title} style={ui.card}>
                <h3 style={ui.h3}>{title}</h3>
                <p style={ui.text}>{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={ui.section}>
          <div style={ui.card}>
            <h2 style={ui.h2}>{t("challenges.businessTitle")}</h2>
            <p style={ui.text}>{t("challenges.businessText")}</p>
          </div>
        </div>

        <div style={{ ...ui.section, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link to="/upload" style={ui.primaryBtn}>{t("common.submitWork")}</Link>
          <Link to="/businesses" style={ui.lightBtn}>{t("common.bookSponsor")}</Link>
        </div>
      </div>
    </div>
  );
}
