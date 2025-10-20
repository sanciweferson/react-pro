import NavLinkItem from "../../config/navLinks"
import { Facebook, Instagram, Github, Mail } from "lucide-react"
import { NavLink } from "react-router-dom"
import ScrollToTopButton from "./ScrollToTopButton"

export default function Footer() {
  const socialLinks = [
    { icon: <Facebook size={18} />, url: "https://facebook.com" },
    { icon: <Instagram size={18} />, url: "https://instagram.com" },
    { icon: <Github size={18} />, url: "https://github.com/sanciweferson" },
    { icon: <Mail size={18} />, url: "mailto:sanciweferson@gmail.com" },
  ]

  return (
    <>
      <footer className="w-full bg-[var(--header-bg)] text-[var(--text)] border-t border-[var(--border)] mt-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-6 py-8 px-4">
          {/* Links principais */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <NavLink to="/" className="hover:text-[var(--hover)] transition-all duration-300">
              Home
            </NavLink>
            <NavLink to="/about" className="hover:text-[var(--hover)] transition-all duration-300">
              Sobre
            </NavLink>
            <NavLink to="/projects" className="hover:text-[var(--hover)] transition-all duration-300">
              Projetos
            </NavLink>
            <NavLink to="/contact" className="hover:text-[var(--hover)] transition-all duration-300">
              Contato
            </NavLink>
          </nav>

          {/* Ícones de redes sociais */}
          <div className="flex gap-4">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text)] hover:text-[var(--hover)] transition-transform duration-300 hover:-translate-y-[2px]"
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div className="w-3/4 h-px bg-[var(--border)] opacity-30"></div>

          <p className="text-sm text-[var(--muted)] text-center">
            © {new Date().getFullYear()} <span className="text-[var(--hover)] font-semibold">Sanciweferson</span>.  
            Feito com ❤️ e React.
          </p>
        </div>
      </footer>

      {/* Botão flutuante de voltar ao topo */}
      <ScrollToTopButton />
    </>
  )
}
