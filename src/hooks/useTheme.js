import { useState, useEffect } from "react"

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Tenta carregar o tema salvo manualmente
    const stored = localStorage.getItem("theme")
    if (stored) return stored

    // Se não tiver salvo, segue a preferência do sistema
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  })

  const [manualTheme, setManualTheme] = useState(
    () => !!localStorage.getItem("theme")
  )

  // Aplica a classe 'dark' no <html> e salva se for manual
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    if (manualTheme) {
      localStorage.setItem("theme", theme)
    }
  }, [theme, manualTheme])

  // Atualiza automaticamente se o sistema mudar o tema
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = (e) => {
      if (!manualTheme) setTheme(e.matches ? "dark" : "light")
    }
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [manualTheme])

  // Alterna entre claro/escuro manualmente
  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark"
      localStorage.setItem("theme", next)
      setManualTheme(true)
      return next
    })
  }

  return { theme, toggleTheme }
}
