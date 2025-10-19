import { useState, useEffect, useRef } from "react"

export default function useMenu() {
  const navRef = useRef()

  const isMobile = () => window.innerWidth <= 768

  // Estado inicial do menu (só mobile)
  const [open, setOpen] = useState(() => {
    const saved = localStorage.getItem("menuOpen")
    return isMobile() && saved === "true"
  })

  // Salva no localStorage sempre que mudar (apenas mobile)
  useEffect(() => {
    if (isMobile()) {
      localStorage.setItem("menuOpen", open)
    } else {
      localStorage.removeItem("menuOpen")
    }
  }, [open])

  // Fecha menu ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (!isMobile()) setOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Fecha menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false)
    }
    if (open) document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [open])

  return { open, setOpen, navRef }
}