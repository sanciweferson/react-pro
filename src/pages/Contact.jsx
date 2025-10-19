// Página Contact — exemplo com informações básicas
import React from "react"

export default function Contact() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Contato</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">Entre em contato conosco usando as informações abaixo.</p>

      <div className="mt-6 space-y-3">
        <div className="text-gray-700 dark:text-gray-200">
          <strong>Email:</strong> contato@meusite.com
        </div>
        <div className="text-gray-700 dark:text-gray-200">
          <strong>Telefone:</strong> +55 (11) 99999-9999
        </div>
      </div>
    </section>
  )
}
