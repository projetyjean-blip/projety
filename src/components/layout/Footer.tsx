"use client";

import Link from "next/link";
import {
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import {
  Mail,
  MessageCircle,
} from "lucide-react";

const footerLinks = [
  {
    title: "Explorer",
    links: [
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
    ],
  },
  {
    title: "Informations",
    links: [
      {
        name: "FAQ",
        href: "/faq",
      },
      {
        name: "Contact",
        href: "/contact",
      },
      {
        name: "Confidentialité",
        href: "#",
      },
      {
        name: "Conditions",
        href: "#",
      },
    ],
  },
];


export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#09090B]">

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-4">


          {/* Brand */}
          <div className="md:col-span-2">

            <div className="mb-5 flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF9E01] font-bold text-black">
                Y
              </div>

              <span className="text-xl font-semibold text-white">
                Projet Y
              </span>

            </div>


            <p className="max-w-md text-sm leading-7 text-[#A1A1AA]">
              Une vision en construction, une aventure entrepreneuriale
              qui avance étape après étape avec patience, ambition et
              responsabilité.
            </p>


            {/* Social links */}
            <div className="mt-6 flex gap-4">

              <a
                href="mailto:mancreator06@gmail.com"
                className="text-[#A1A1AA] transition-colors hover:text-white"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>


              <a
                href="https://wa.me/2290142094147"
                className="text-[#A1A1AA] transition-colors hover:text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>

 
              <a
                href="https://www.linkedin.com/in/jean-martin-sessinou-bb1a18242"
                className="text-[#A1A1AA] transition-colors hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>


              <a
                href="#"
                className="text-[#A1A1AA] transition-colors hover:text-white"
                aria-label="X"
              >
                <FaTwitter size={20} />
              </a> 

            </div>

          </div>



          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>

              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                {section.title}
              </h3>


              <ul className="space-y-3">

                {section.links.map((link) => (
                  <li key={link.href}>

                    <Link
                      href={link.href}
                      className="text-sm text-[#A1A1AA] transition-colors hover:text-white"
                    >
                      {link.name}
                    </Link>

                  </li>
                ))}

              </ul>

            </div>
          ))}


        </div>


        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-[#A1A1AA] md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Projet Y. Tous droits réservés.
          </p>


          <p>
            Construire avec vision, avancer avec responsabilité.
          </p>

        </div>


      </div>

    </footer>
  );
}