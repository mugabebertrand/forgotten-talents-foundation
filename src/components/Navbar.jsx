import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, lang, setLang, languages } = useLanguage();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <NavLink to="/" className="nav__brand" onClick={closeMenu} style={{ color: "inherit", textDecoration: "none" }}>
          Forgotten Talent
        </NavLink>

        <div className="nav__lang" role="group" aria-label={t("nav.language")}>
          {languages.map((l) => (
            <button
              key={l.code}
              type="button"
              title={l.name}
              aria-label={l.name}
              aria-pressed={lang === l.code}
              className={lang === l.code ? "is-active" : ""}
              onClick={() => setLang(l.code)}
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="nav__toggle"
          aria-label={t("nav.menu")}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
        </button>

        {/* The admin page stays available at /admin but is not linked publicly. */}
        <nav className={`nav__links ${isOpen ? "is-open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>{t("nav.home")}</NavLink>
          <NavLink to="/how-it-works" onClick={closeMenu}>{t("nav.how")}</NavLink>
          <NavLink to="/challenges" onClick={closeMenu}>{t("nav.challenges")}</NavLink>
          <NavLink to="/businesses" onClick={closeMenu}>{t("nav.businesses")}</NavLink>
          <NavLink to="/talents" onClick={closeMenu}>{t("nav.gallery")}</NavLink>
          <NavLink to="/upload" onClick={closeMenu}>{t("nav.upload")}</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>{t("nav.contact")}</NavLink>
        </nav>
      </div>
    </header>
  );
}
