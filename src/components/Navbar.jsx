import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <div className="nav__brand">Forgotten Talents Foundation</div>

        <button
          type="button"
          className="nav__toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
        </button>

        <nav className={`nav__links ${isOpen ? "is-open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/programs" onClick={closeMenu}>Programs</NavLink>
          <NavLink to="/donate" onClick={closeMenu}>Donate</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <NavLink to="/upload" onClick={closeMenu}>Upload</NavLink>
          <NavLink to="/talents" onClick={closeMenu}>Talents</NavLink>
          <NavLink to="/admin" onClick={closeMenu}>Admin</NavLink>
        </nav>
      </div>
    </header>
  );
}