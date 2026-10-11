import { ui, CONTACT_EMAIL } from "../ui";
import { useLanguage } from "../i18n/LanguageContext";

const mail = (subject, body) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export default function Businesses() {
  const { t } = useLanguage();
  const ways = t("businesses.ways");
  const info = t("businesses.info");

  return (
    <div style={ui.page}>
      <div style={ui.wrap}>
        <div style={ui.eyebrow}>{t("businesses.eyebrow")}</div>
        <h1 style={ui.h1}>{t("businesses.title")}</h1>
        <p style={ui.lead}>{t("businesses.lead")}</p>

        <div style={ui.grid}>
          {ways.map((way) => (
            <div key={way.title} style={{ ...ui.card, display: "flex", flexDirection: "column", gap: 12 }}>
              <h2 style={{ ...ui.h2, marginBottom: 0 }}>{way.title}</h2>
              <p style={{ ...ui.text, flex: 1 }}>{way.text}</p>
              <a href={mail(way.subject, way.body)} style={{ ...ui.primaryBtn, alignSelf: "flex-start" }}>{way.button}</a>
            </div>
          ))}
        </div>

        <div style={ui.section}>
          <div style={ui.grid}>
            {info.map(([title, text], index) => (
              <div key={title} style={ui.card}>
                {index === 0 && <div style={ui.tag}>{t("businesses.pilotTag")}</div>}
                <h3 style={ui.h3}>{title}</h3>
                <p style={ui.text}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
