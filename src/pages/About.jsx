// Página About — conteúdo de exemplo
import React from "react"

export default function About() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Sobre</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Este é um projeto de exemplo demonstrando boas práticas: ThemeContext, Navbar responsivo, Footer e estruturas modulares.
      </p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Missão</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Construir soluções robustas e escaláveis.</p>
      </div>
    </section>
  )
}
