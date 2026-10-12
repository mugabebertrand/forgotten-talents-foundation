import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLanguage } from "./i18n/LanguageContext";

import Home from "./pages/Home";
import About from "./pages/About";
import Challenges from "./pages/Challenges";
import Businesses from "./pages/Businesses";
import Contact from "./pages/Contact";
import Upload from "./pages/Upload";
import Talents from "./pages/Talents";
import Admin from "./pages/Admin";
import Rules from "./pages/Rules";

export default function App() {
  const { t } = useLanguage();
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "calc(100vh - 220px)" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<About />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/businesses" element={<Businesses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/talents" element={<Talents />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/rules" element={<Rules />} />

        {/* Old links keep working */}
        <Route path="/about" element={<Navigate to="/how-it-works" replace />} />
        <Route path="/programs" element={<Navigate to="/challenges" replace />} />
        <Route path="/donate" element={<Navigate to="/businesses" replace />} />

        <Route path="*" element={<div className="section"><div className="container"><h1>{t("notFound")}</h1></div></div>} />
      </Routes>
      </main>
      <Footer />
    </>
  );
}
