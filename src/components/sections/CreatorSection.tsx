"use client";

import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
import Image from "next/image";

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
            {/* <div className="flex h-56 w-56 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    
              <UserRound
                size={90}
                className="text-[#FF9E01]"
              />
            </div> */}
            <div className="mx-auto h-56 w-56 overflow-hidden rounded-full ring-4 ring-[#FF9E01]/10">

            <Image
                src="/images/jean_martin_sessinou.jpg"
                alt="Chivanos Sessinou"
                width={500}
                height={500}
                priority
                className="h-full w-full object-cover"
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
                Je suis <span className="font-medium text-white">Jean Martin Sessinou</span>,
                fondateur du Projet Y.
            </p>

            <p>
                Comme beaucoup de personnes passionnées par la technologie, j'ai toujours
                aimé imaginer des solutions capables d'avoir un impact positif sur le
                quotidien des autres. C'est cette envie qui m'a conduit à lancer cette
                aventure.
            </p>

            <p>
                Depuis plusieurs mois, je travaille presque chaque jour sur ce projet.
                J'apprends constamment, je teste de nouvelles idées, je corrige mes
                erreurs et je continue d'avancer avec une conviction : construire quelque
                chose de réellement utile demande du temps et de la persévérance.
            </p>

            <p>
                Aujourd'hui, le prototype est en cours de finalisation. Ce site est une
                façon de partager cette aventure dès ses premiers pas avec toutes les
                personnes qui souhaitent la suivre, l'encourager ou simplement découvrir
                son évolution.
            </p>
            </div>

            <div className="mt-10 rounded-2xl border border-[#FF9E01]/20 bg-[#FF9E01]/5 p-6">
              <p className="text-xl italic leading-8 text-white">
                « Je ne cherche pas simplement à créer une technologie.
                Je veux construire quelque chose qui puisse être utile,
                durable et laisser une empreinte positive. »
              </p>

              <p className="mt-5 font-medium text-[#FF9E01]">
                — Jean Martin Sessinou
              </p>
            </div>

             <div className="mt-8 grid gap-4 sm:grid-cols-2">

    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
      <span className="text-2xl">💻</span>
      <span className="text-white">
        Passionné de technologie
      </span>
    </div>

    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
      <span className="text-2xl">🚀</span>
      <span className="text-white">
        Entrepreneur
      </span>
    </div>

    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
      <span className="text-2xl">🌍</span>
      <span className="text-white">
        Basé en Afrique
      </span>
    </div>

    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
      <span className="text-2xl">❤️</span>
      <span className="text-white">
        Construire des solutions utiles
      </span>
    </div>

    
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
    <span className="text-2xl">🌐</span>
    <span className="text-white">
      Développeur Web Certifié
    </span>
  </div>

  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
    <span className="text-2xl">📱</span>
    <span className="text-white">
      Autodidacte en développement mobile
    </span>
  </div>

  </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}