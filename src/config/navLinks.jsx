import { NavLink } from "react-router-dom"

export default function NavLinkItem({
  link,
  index,
  onClick,
  textColor = "text-[var(--text)]",
  hoverColor = "hover:text-[var(--hover)]",
}) {
  return (
    <NavLink
      to={link.path}
      onClick={onClick}
      end
      className={({ isActive }) =>
        `
          relative flex items-center gap-2 font-medium py-2 transition-all duration-300 
          ${textColor} ${hoverColor} hover:-translate-y-[2px] animate-fadeIn
          ${isActive ? "after:scale-x-100 after:opacity-100" : "after:scale-x-0 after:opacity-0"}
          after:content-[''] after:absolute after:left-0 after:-bottom-[2px]
          after:w-full after:h-[2px] after:rounded-full after:bg-current
          after:transition-all after:duration-300 after:origin-left hover:after:scale-x-100
        `
      }
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Ícone visível apenas no mobile */}
      <span className="md:hidden">{link.icon}</span>
      {link.name}
    </NavLink>
  )
}
