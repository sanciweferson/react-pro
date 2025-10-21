import { useState, useEffect } from "react"
import {
  Sun,
  Moon,
  Home,
  Star,
  Image,
  Info,
  Download,
  Mail,
  Facebook,
  Instagram,
  Menu,
  X,
} from "lucide-react"
import useTheme from "../hooks/useTheme"
import useMenu from "../hooks/useMenu"
import useScrollPosition from "../hooks/useScrollPosition" // 👈 novo hook
import NavLinkItem from "../config/navLinks"


export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { open, setOpen, navRef } = useMenu()
  const [animateOnLoad, setAnimateOnLoad] = useState(false)
  const scrolled = useScrollPosition(50) // 👈 usando o hook

  const links = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "Features", path: "/features", icon: <Star size={20} /> },
    { name: "Preview", path: "/preview", icon: <Image size={20} /> },
    { name: "Details", path: "/details", icon: <Info size={20} /> },
    { name: "Download", path: "/download", icon: <Download size={20} /> },
    { name: "Contato", path: "/contato", icon: <Mail size={20} /> },
    { 
    name: "Facebook", 
    path: "https://www.facebook.com/seu-perfil", // link real do Facebook
    icon: <Facebook size={20} />, 
    external: true // flag pra identificar que é externo
  },
  { 
    name: "Instagram", 
    path: "https://www.instagram.com/sanciweferson?igsh=cHFyeHlmazVmdDFv", // link real do Instagram
    icon: <Instagram size={20} />, 
    external: true 
  },
  
  ]


  // Animação rápida ao atualizar com menu aberto
  useEffect(() => {
    if (open) {
      setAnimateOnLoad(true)
      const timer = setTimeout(() => {
        setAnimateOnLoad(false)
        setOpen(false)
        setTimeout(() => setOpen(true), 150)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [])

  // Cores do navbar
  const textColor = scrolled ? "text-blue-500" : "text-[var(--text)]"
  const hoverColor = scrolled ? "hover:text-gray-300" : "hover:text-[var(--hover)]"
  const themeButtonHover = scrolled
    ? "bg-gray-700 hover:bg-gray-600"
    : "hover:bg-[var(--muted)]"
  return (
    <div>
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[150] bg-[var(--backdrop)] transition-opacity duration-300 ${
          open ? "block" : "hidden"
        }`}
      />

      <nav scrollbar-thin
        ref={navRef}
        className={` py-6 fixed   top-0 left-0 right-0 z-[200] flex items-center justify-between py-3 px-4 transition-all duration-500 backdrop-blur-md ${
          scrolled
            ? "bg-[rgba(0,31,63,0.85)] w-full shadow-lg"
            : "bg-transparent max-w-[1200px] mx-auto "
        }`}
      >
        {/* Logo */}
        <div className={`flex items-center gap-2 text-xl font-bold cursor-pointer select-none ${textColor}`}>
          🌐 Leno
        </div>

        {/* Botão mobile */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className={`md:hidden ${textColor} ${hoverColor} transition-colors duration-300`}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu */}
   <div
  className={` 
    border-r-[4px] border-[var(--border)]
    bg-[var(--sidebar-primary)]
    md:border-transparent
    flex flex-col md:flex-row items-start md:items-center gap-6
    fixed md:static top-0 left-0
    w-[80%] md:w-auto h-screen md:h-auto md:bg-transparent p-8 md:p-0
    rounded-r-xl md:rounded-none shadow-lg md:shadow-none
    transition-transform duration-400 ease-out z-[200]
    ${open || animateOnLoad ? "translate-x-0" : "-translate-x-[120%] md:translate-x-0"}
    md:flex-1 md:justify-end

overflow-y-auto [&::-webkit-scrollbar]:hidden
  `}
>


   <div className="flex flex-col mt-6 gap-3 w-full md:flex-row md:mt-0 md:gap-14 md:flex-1 md:justify-center">
            {links.map((link, i) => (
              <NavLinkItem key={`${link.name}-${i}`} link={link} index={i} onClick={() => setOpen(false)} />
            ))}
          </div>



  {/* Botão de tema */}
  <button
    onClick={toggleTheme}
    className={`  flex items-center justify-center
      w-10 h-10 rounded-full border border-[var(--border)]
      bg-[var(--background)] hover:bg-[var(--muted)]
       absolute md:static top-2 right-2 md:top-0 md:right-0   ${themeButtonHover} transition-colors duration-300`}
  >
    {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
  </button>
</div>

     
      </nav>
    </div>
  )
}