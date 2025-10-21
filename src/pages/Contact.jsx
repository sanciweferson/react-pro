// Contact.jsx
import React, { useState } from "react"
import { Mail, User, MessageSquare, Send, Home } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-lg bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-xl p-8 backdrop-blur-md"
      >
        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[var(--foreground)]">
          Fale Conosco
        </h1>

        <p className="text-[var(--muted-foreground)] mb-8 leading-relaxed">
          Gostou do projeto, quer sugerir algo ou só trocar uma ideia sobre
          programação? Envie sua mensagem abaixo 👇
        </p>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="text-sm font-medium flex items-center gap-2 mb-1 text-[var(--foreground)]">
              <User size={18} /> Nome
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Seu nome"
              className="w-full p-3 rounded-xl border border-[var(--border)] bg-[var(--input)] text-[var(--foreground)] outline-none focus:ring-2 focus:ring-[var(--chart-1)] transition-all duration-300"
            />
          </div>

          <div>
            <label className="text-sm font-medium flex items-center gap-2 mb-1 text-[var(--foreground)]">
              <Mail size={18} /> Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="seuemail@email.com"
              className="w-full p-3 rounded-xl border border-[var(--border)] bg-[var(--input)] text-[var(--foreground)] outline-none focus:ring-2 focus:ring-[var(--chart-1)] transition-all duration-300"
            />
          </div>

          <div>
            <label className="text-sm font-medium flex items-center gap-2 mb-1 text-[var(--foreground)]">
              <MessageSquare size={18} /> Mensagem
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Digite sua mensagem..."
              className="w-full p-3 rounded-xl border border-[var(--border)] bg-[var(--input)] text-[var(--foreground)] outline-none resize-none focus:ring-2 focus:ring-[var(--chart-1)] transition-all duration-300"
            />
          </div>

          {/* Botão enviar */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="flex items-center justify-center gap-2 bg-[var(--chart-1)] hover:bg-[var(--chart-2)] text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-all duration-300"
          >
            <Send size={18} /> Enviar Mensagem
          </motion.button>

          {sent && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[var(--chart-1)] text-center mt-3"
            >
              ✅ Mensagem enviada com sucesso! (simulação)
            </motion.p>
          )}
        </form>

        {/* Botão voltar */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="mt-8 flex items-center justify-center gap-2 text-[var(--foreground)] font-medium border border-[var(--border)] py-2 px-4 rounded-xl hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-all duration-300"
        >
          <Home size={18} /> Voltar pra Home
        </motion.button>
      </motion.div>
    </section>
  )
}
