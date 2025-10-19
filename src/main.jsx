// Ponto de entrada da aplicação — monta React e provê BrowserRouter.
// Observação: usamos alias @/ para facilitar imports (configurado no Vite).
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "@/App"
import "@/index.css" // estilos globais (Tailwind)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
