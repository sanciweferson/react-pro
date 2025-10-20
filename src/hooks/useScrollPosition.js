import { useEffect, useState } from "react"

export default function useScrollPosition(threshold = 50) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > threshold
      setScrolled(prev => (prev !== isScrolled ? isScrolled : prev))
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll() // verifica na montagem
    return () => window.removeEventListener("scroll", onScroll)
  }, [threshold])

  return scrolled
}
