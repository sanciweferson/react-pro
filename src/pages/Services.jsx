// Página Services — exemplo com lista de serviços
import React from "react"

export default function Services() {
  const services = [
    { id: 1, title: "Desenvolvimento Frontend", desc: "React, Tailwind, Vite" },
    { id: 2, title: "Componentização", desc: "Bit, Design System" },
    { id: 3, title: "Consultoria", desc: "Arquitetura e performance" },
  ]

  return (
    <section>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Serviços</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-300">Veja alguns serviços que oferecemos.</p>

      <ul className="mt-6 grid gap-4 md:grid-cols-3">
        {services.map((s) => (
          <li key={s.id} className="p-4 border rounded-lg bg-white dark:bg-slate-900 dark:border-slate-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{s.title}</h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">{s.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
