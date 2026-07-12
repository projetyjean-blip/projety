"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    name: "Accueil",
    href: "/",
  },
  {
    name: "Notre histoire",
    href: "/about",
  },
  {
    name: "Communauté",
    href: "/community",
  },
  {
    name: "Journal",
    href: "/journal",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#09090B]/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF9E01] font-bold text-black transition-transform duration-300 group-hover:scale-105">
            Y
          </div>

          <span className="text-xl font-semibold tracking-tight text-white">
            Projet Y
          </span>
        </Link>


        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#A1A1AA] transition-colors hover:text-white"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/support"
            className="rounded-full bg-[#FF9E01] px-5 py-2.5 text-sm font-semibold text-black transition-all hover:opacity-90"
          >
            Soutenir
          </Link>
        </div>


        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-white md:hidden"
          aria-label="Menu"
        >
          {open ? (
            <X size={26} />
          ) : (
            <Menu size={26} />
          )}
        </button>

      </nav>


      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="border-t border-white/10 bg-[#09090B] md:hidden"
          >

            <div className="flex flex-col gap-5 px-6 py-6">

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-[#A1A1AA] transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              ))}


              <Link
                href="/support"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-[#FF9E01] px-5 py-3 text-center font-semibold text-black"
              >
                Soutenir l'aventure
              </Link>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
// Créer un logo minimaliste sur fond transparent, au format 1024 × 512 px (PNG). Le logo est composé d'un cercle parfaitement rond de couleur #FF9E01 placé au centre. À l'intérieur du cercle, une lettre majuscule "Y" en noir, gras, avec une police moderne sans empattement (style Inter, Poppins ou SF Pro Display). Le design est flat, sans ombre, sans dégradé, sans contour ni effet 3D. Les bords sont nets, la lettre est parfaitement centrée et proportionnée. Le rendu est épuré, professionnel et adapté à un logo d'application, un favicon ou une identité visuelle. Aucun autre élément graphique ni texte. Fond transparent.