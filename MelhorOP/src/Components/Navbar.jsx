import React, { useState } from "react";
import logo from "../Assets/logo.png"; // ajuste o caminho se necessário

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg w-full sticky top-0 z-50 font-[Poppins] font-medium">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between" id="home">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="w-32" />
        </div>
        <nav className="hidden md:flex items-center gap-8 text-base">
          <NavLink href="#home">Início</NavLink>
          <NavLink href="#sobre">Produtos</NavLink>
          <NavLink href="#produtos">Sobre nós</NavLink>
          <NavLink href="#formulario">Contato</NavLink>
        </nav>
        <div className="hidden md:flex gap-4 text-xl">
          <SocialLink href="#" icon="fa-instagram" label="Instagram" />
          <SocialLink href="#" icon="fa-facebook" label="Facebook" />
          <SocialLink href="https://wa.me/558189467661" icon="fa-whatsapp" label="WhatsApp" />
        </div>
        <button
          className="md:hidden text-2xl text-yellow-600 focus:outline-none"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Abrir menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <div
        className={`md:hidden bg-white shadow-lg absolute w-full left-0 top-full transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-4 p-6 text-base font-medium">
          <NavLink href="#home">Início</NavLink>
          <NavLink href="#sobre">Produtos</NavLink>
          <NavLink href="#produtos">Sobre nós</NavLink>
          <NavLink href="#formulario">Contato</NavLink>
          <div className="flex gap-4 text-xl mt-2">
            <SocialLink href="#" icon="fa-instagram" label="Instagram" />
            <SocialLink href="#" icon="fa-facebook" label="Facebook" />
            <SocialLink href="https://wa.me/558189467661" icon="fa-whatsapp" label="WhatsApp" />
          </div>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="relative text-[#222] transition-colors duration-200 hover:text-yellow-600 active:text-yellow-600
        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-yellow-600 after:rounded after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
    >
      {children}
    </a>
  );
}

function SocialLink({ href, icon, label }) {
  // WhatsApp sempre abre conversa com o número especificado
  const link = label === "WhatsApp" ? "https://wa.me/558189467661" : href;
  return (
    <a
      href={link}
      className="hover:text-yellow-600 transition-colors"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={`fa-brands ${icon}`}></i>
    </a>
  );
}