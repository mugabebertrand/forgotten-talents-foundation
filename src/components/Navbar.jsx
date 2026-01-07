import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <div className="nav__brand">Forgotten Talented Ones Foundation</div>

        <nav className="nav__links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/programs">Programs</NavLink>
          <NavLink to="/donate">Donate</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/upload">Upload</NavLink>
          <NavLink to="/talents">Talents</NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </nav>
      </div>
    </header>
  );
}
