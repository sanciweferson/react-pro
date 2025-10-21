// Página Features — versão final animada
import React from "react"
import { Loader2, Hammer, Settings, Home } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Download() {
  const navigate = useNavigate()

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white overflow-hidden">
      
      {/* Partículas animadas */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            className={`absolute bg-yellow-400 rounded-full w-2 h-2 animate-[float_6s_linear_infinite]`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Ícones principais animados */}
      <div className="flex items-center gap-8 mb-8 animate-bounce">
        <Hammer className="text-yellow-400 w-16 h-16 md:w-24 md:h-24" />
        <Loader2 className="text-blue-500 w-16 h-16 md:w-24 md:h-24 animate-spin" />
        <Settings className="text-purple-400 w-16 h-16 md:w-24 md:h-24 animate-spin-slow" />
      </div>

      {/* Título com gradiente */}
      <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
        Página em construção!
      </h1>

      {/* Mensagem explicativa */}
      <p className="text-lg md:text-2xl text-gray-300 max-w-xl mb-6">
        Estamos trabalhando para trazer novidades incríveis. Volte logo para conferir o que vem por aí!
      </p>

      {/* Badge piscante */}
      <span className="inline-block px-6 py-3 bg-blue-500 text-white rounded-full animate-pulse shadow-lg cursor-not-allowed mb-6">
        Conteúdo em breve
      </span>

      {/* Botão para voltar à Home */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-colors text-white"
      >
        <Home size={20} /> Voltar para Home
      </button>

      {/* Keyframes custom para partículas e engrenagem */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); opacity: 1; }
            50% { transform: translateY(-20px); opacity: 0.6; }
            100% { transform: translateY(0px); opacity: 1; }
          }
          .animate-spin-slow { animation: spin 6s linear infinite; }
        `}
      </style>
    </section>
  )
}
