// Página About — conteúdo de exemplo
import React from "react"

export default function Features() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Sobre</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Este é um projeto de exemplo demonstrando boas práticas: ThemeContext, Navbar responsivo, Footer e estruturas modulares.
      </p>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="p-6 rounded-lg border dark:border-slate-800 bg-white dark:bg-slate-900">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Rápido</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Feito com Vite e Tailwind, pronto pra produção.</p>
        </article>

        <article className="p-6 rounded-lg border dark:border-slate-800 bg-white dark:bg-slate-900">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Modular</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Componentes organizados por responsabilidade.</p>
        </article>

        <article className="p-6 rounded-lg border dark:border-slate-800 bg-white dark:bg-slate-900">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Acessível</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Estrutura pensada para acessibilidade e boas práticas.</p>
        </article>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="p-6 rounded-lg border dark:border-slate-800 bg-white dark:bg-slate-900">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Rápido</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Feito com Vite e Tailwind, pronto pra produção.</p>
        </article>

     

      
      </div>
   
    </section>
  )
}
