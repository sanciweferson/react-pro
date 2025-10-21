// NavLinkItem.js
import { NavLink, useLocation } from "react-router-dom"
import useScrollPosition from "../hooks/useScrollPosition"

export default function NavLinkItem({ link, index, onClick }) {
  const scrolled = useScrollPosition(50)
  const location = useLocation()
  const isActive = location.pathname === link.path

  // cores base e hover
  const baseColor = scrolled ? "text-[var(--chart-2)]" : "text-[var(--foreground)]"
  const hoverColor = scrolled ? "hover:text-[var(--chart-1)]" : "hover:text-[var(--muted-foreground)]"

  // estilo ativo
  const activeStyle = isActive
    ? "border-[var(--chart-1)] bg-[var(--background)] text-[var(--chart-1)] font-semibold shadow-sm"
    : "border-[var(--border)]"

  return (
    <NavLink
      to={link.path}
      onClick={onClick}
      end
      className={`
        ${baseColor} ${hoverColor} ${activeStyle}
        flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300 ease-in-out
        hover:-translate-y-[2px] hover:shadow-md
        w-full md:w-0  animate-fadeIn
        md:border-none md:bg-transparent md:shadow-none md:hover:shadow-none md:hover:translate-y-0
      `}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <span className="text-lg md:hidden">{link.icon}</span>
      <span className="text-base">{link.name}</span>
    </NavLink>
  )
}
