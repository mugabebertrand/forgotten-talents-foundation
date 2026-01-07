import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Upload from "./pages/Upload";
import Talents from "./pages/Talents";
import Admin from "./pages/Admin";




export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/talents" element={<Talents />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<div className="section"><div className="container"><h1>Page not found</h1></div></div>} />
      </Routes>
    </>
  );
}
