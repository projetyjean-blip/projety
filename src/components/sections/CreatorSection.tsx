"use client";

import { motion } from "framer-motion";
import { UserRound } from "lucide-react";

export default function CreatorSection() {
  return (
    <section className="border-t border-white/10 bg-[#09090B] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[280px_1fr]">
          {/* Portrait */}

          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto"
          >
            <div className="flex h-56 w-56 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
              <UserRound
                size={90}
                className="text-[#FF9E01]"
              />
            </div>
          </motion.div>

          {/* Texte */}

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
              Le créateur
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Derrière chaque vision, il y a une personne qui choisit de la construire.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-[#A1A1AA]">
              <p>
                Je suis <span className="font-medium text-white">Chivanos Sessinou</span>,
                fondateur du Projet Y.
              </p>

              <p>
                Passionné par la technologie, l'innovation et la création de
                solutions utiles, je consacre aujourd'hui une grande partie de
                mon temps à transformer cette vision en une réalité concrète.
              </p>

              <p>
                Au-delà de la technologie, je crois que les projets qui
                traversent le temps sont ceux qui sont construits avec
                patience, exigence et une volonté constante d'apprendre et
                de progresser.
              </p>

              <p>
                À travers ce site, je souhaite partager cette aventure en toute
                transparence, étape après étape, avec toutes les personnes qui
                souhaitent découvrir son évolution depuis ses débuts.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-[#FF9E01]/20 bg-[#FF9E01]/5 p-6">
              <p className="text-xl italic leading-8 text-white">
                « Les plus grandes aventures commencent souvent dans le silence,
                bien avant d'être découvertes par le monde. »
              </p>

              <p className="mt-5 font-medium text-[#FF9E01]">
                — Chivanos Sessinou
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}