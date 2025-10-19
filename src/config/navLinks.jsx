import { NavLink } from "react-router-dom"

export default function NavLinkItem({ link, index, onClick }) {
  return (
    <NavLink
      to={link.path}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-2 text-[var(--text)] font-medium py-2 transition-all duration-300
         hover:text-[var(--hover)] hover:-translate-y-[2px]
         ${isActive ? "text-[var(--active)] border-b-2 border-[var(--active)]" : ""}
         animate-fadeIn`
      }
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Ícone só visível no mobile */}
      <span className="md:hidden">{link.icon}</span>
      {link.name}
    </NavLink>
  )
}
