import { useState, useEffect } from "react";
import Navbar from "../Navbar";

export default function Header() {


  return (
   <header

>
  <div className="h-full flex justify-center items-center">
    <Navbar />
  </div>
</header>


  );
}
