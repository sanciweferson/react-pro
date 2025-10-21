// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/layout/Header"
import Home from "./pages/Home"

import Contact from "./pages/Contact"
import Footer from "./components/layout/Footer"
import Features from "./pages/Features"
import About from "./pages/About"
import Details from "./pages/Details"
import Download from "./pages/Download"

export default function App() {
  return (
<>
      <Header />
      <main className="mt-22 px-4 max-w-[1200px] m-auto min-h-screen  text-[var(--text)] md:mt-30 transition-colors
       duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
           <Route path="/about" element={<About />} />
           <Route path="/details" element={<Details />} />
           <Route path="/download" element={<Download />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
   </>)
}
