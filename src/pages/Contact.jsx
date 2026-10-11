import { ui, CONTACT_EMAIL } from "../ui";
import { useLanguage } from "../i18n/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <div style={ui.page}>
      <div style={ui.narrow}>
        <div style={ui.eyebrow}>{t("contact.eyebrow")}</div>
        <h1 style={ui.h1}>{t("contact.title")}</h1>
        <p style={ui.lead}>{t("contact.lead")}</p>
        <div style={ui.card}>
          <h3 style={ui.h3}>{t("contact.founder")}</h3>
          <p style={ui.text}>
            {t("contact.email")} <a href={`mailto:${CONTACT_EMAIL}`} style={ui.cardLink}>{CONTACT_EMAIL}</a>
          </p>
          <p style={{ ...ui.text, marginTop: 8 }}>{t("contact.city")}</p>
        </div>
      </div>
    </div>
  );
}
