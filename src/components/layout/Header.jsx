import { useState, useEffect } from "react";
import Navbar from "../Navbar";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <header
  className={`fixed top-0 left-0 w-full h-[5rem] transition-colors duration-300 ${
    scrolled ? "bg-green-500" : "bg-transparent"
  }`}
>
  <div className="h-full flex justify-center items-center">
    <Navbar />
  </div>
</header>


  );
}
