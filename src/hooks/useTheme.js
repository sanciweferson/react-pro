import { useState, useEffect } from "react"

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme")
    if (stored) return stored
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  })

  const [manualTheme, setManualTheme] = useState(
    () => !!localStorage.getItem("theme")
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    if (manualTheme) localStorage.setItem("theme", theme)
  }, [theme, manualTheme])

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = (e) => {
      if (!manualTheme) setTheme(e.matches ? "dark" : "light")
    }
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [manualTheme])

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