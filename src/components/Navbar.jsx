import { NavLink } from "react-router-dom";
 
export default function Navbar() {
  return (
    <nav className="bg-black border-b border-white/10 px-8 md:px-16 flex items-center justify-between h-14">
      {/* Brand */}
      <NavLink
        to="/"
        className="text-white text-xl italic shrink-0"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        home
      </NavLink>
 
      {/* Right side */}
      <div className="flex items-center gap-6">
        <NavLink
          to="/about"
          className="text-white/50 hover:text-white text-sm transition-colors"
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}