import React, { useState } from "react";
import burgerMenu from "../images/burger-bar.png";
import closeButton from "../images/close.webp";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#about" },
    { name: "About", href: "#about-us" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Projects", href: "#projects" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav className="fixed top-0 z-50 hidden md:flex items-center justify-between w-full px-8 py-4 backdrop-blur-xl bg-slate-950/90 border-b border-white/10 text-white">
        {/* LOGO */}
        <div className="flex flex-col">
          <h1 className="text-2xl lg:text-3xl font-extrabold tracking-wide">
            <span className="text-yellow-400">DC Solar</span> & Lithium
          </h1>

          <span className="text-xs text-gray-400 tracking-widest uppercase">
            Solar • Battery • Backup Power
          </span>
        </div>

        {/* NAVIGATION */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-yellow-400 transition duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}

          {/* CTA BUTTON */}
          <a
            href="#contact"
            className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-6 py-3 rounded-xl font-bold transition duration-300 shadow-lg"
          >
            Free Quote
          </a>
        </div>
      </nav>

      {/* MOBILE NAVBAR */}
      <div className="fixed top-0 z-50 flex md:hidden items-center justify-between w-full px-4 py-4 backdrop-blur-xl bg-slate-950/95 border-b border-white/10 text-white">
        {/* LEFT */}
        <div className="flex items-center">
          <img
            src={burgerMenu}
            alt="menu"
            className="w-8 mr-4 cursor-pointer"
            onClick={() => setIsOpen(true)}
          />

          <div>
            <h2 className="font-bold text-lg">
              <span className="text-yellow-400">DC Solar</span> & Lithium
            </h2>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg text-sm font-bold"
        >
          Quote
        </a>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white p-6 transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-2xl font-bold">
              <span className="text-yellow-400">DC Solar</span> & Lithium
            </h2>

            <p className="text-gray-400 text-sm mt-1">
              Reliable Energy Solutions
            </p>
          </div>

          <img
            onClick={() => setIsOpen(false)}
            src={closeButton}
            alt="close"
            className="w-7 h-7 cursor-pointer"
          />
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg text-gray-300 hover:text-yellow-400 transition duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="mt-12 p-5 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-3">
            Ready To Go Solar?
          </h3>

          <p className="text-gray-300 text-sm mb-5">
            Get a free consultation and discover how much you can save with
            solar power and lithium battery storage.
          </p>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-yellow-400 hover:bg-yellow-500 text-slate-900 py-3 rounded-xl font-bold transition duration-300"
          >
            Request Free Quote
          </a>
        </div>
 
        {/* CONTACT INFO */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-gray-400 text-sm">Call Us</p>

          <a href="tel:+27718884499" className="text-white font-semibold">
            071 888 4499
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
