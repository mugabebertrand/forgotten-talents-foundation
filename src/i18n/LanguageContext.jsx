import { createContext, useContext, useEffect, useState, Fragment } from "react";
import { translations, LANGUAGES } from "./translations";

const STORAGE_KEY = "ftf-language";
const LanguageContext = createContext(null);

// Saved choice first, then the visitor's browser language, then English.
function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) return saved;
  } catch {
    // localStorage can be blocked (private mode); fall through
  }
  const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
  return translations[browser] ? browser : "en";
}

// Looks up "home.title" style keys; falls back to English if a key is missing.
function lookup(lang, key) {
  const find = (obj) => key.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
  const value = find(translations[lang]);
  return value !== undefined ? value : find(translations.en) ?? key;
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (code) => {
    if (!translations[code]) return;
    setLangState(code);
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // ignore
    }
  };

  // t("upload.failed", { step: "...", error: "..." })
  const t = (key, vars) => {
    let value = lookup(lang, key);
    if (typeof value === "string" && vars) {
      Object.entries(vars).forEach(([name, v]) => {
        value = value.replaceAll(`{${name}}`, v);
      });
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}

// Turns "Some **bold** text" into React output with <b> tags.
export function Rich({ text }) {
  return String(text)
    .split("**")
    .map((part, i) => (i % 2 === 1 ? <b key={i}>{part}</b> : <Fragment key={i}>{part}</Fragment>));
}
