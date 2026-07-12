"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Lightbulb,
  Lock,
  Smartphone,
} from "lucide-react";

const points = [
  {
    icon: Smartphone,
    title: "Une application mobile en développement",
    description:
      "Le Projet Y est une application mobile actuellement en cours de développement. Cette première version constitue une étape importante avant son lancement officiel.",
  },
  {
    icon: Lightbulb,
    title: "Pourquoi avons-nous créé le Projet Y ?",
    description:
      "Le projet est né de l'observation d'un besoin réel du quotidien qui, selon nous, mérite une approche différente grâce aux possibilités offertes par les technologies actuelles.",
  },
  {
    icon: Globe,
    title: "Que faisons-nous aujourd'hui ?",
    description:
      "Depuis plusieurs mois, nous recherchons, concevons et développons une solution innovante pour répondre à ce besoin. Aujourd'hui, le premier prototype est en cours de finalisation.",
  },
  {
    icon: Lock,
    title: "Pourquoi ne pas en dire davantage ?",
    description:
      "Afin de protéger le travail d'innovation, les détails de l'application seront présentés lors de son lancement officiel. Nous préférons construire des bases solides avant de dévoiler son fonctionnement.",
  },
];

export default function ProjectOverview() {
  return (
    <section className="border-t border-white/10 bg-[#09090B] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
            À propos du Projet Y
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Comprendre le Projet Y en quelques minutes.
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#A1A1AA]">
            <span className="font-medium text-white">
              Le Projet Y est une application mobile actuellement en cours de développement.
            </span>
          </p>

          <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">
            Le projet est né de l'observation d'un besoin réel du quotidien
            qui, selon nous, mérite une approche différente grâce aux
            possibilités offertes par les technologies actuelles.
          </p>

          <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">
            Depuis plusieurs mois, nous recherchons, concevons et développons
            une solution innovante pour répondre à ce besoin. Aujourd'hui,
            le premier prototype est en cours de finalisation.
          </p>

          <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">
            Afin de protéger le travail d'innovation, les détails de cette
            solution seront présentés lors de son lancement officiel.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {points.map((point, index) => {
            const Icon = point.icon;

            return (
              <motion.div
                key={point.title}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-[#FF9E01]/30"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF9E01]/10 text-[#FF9E01]">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {point.title}
                </h3>

                <p className="mt-4 leading-7 text-[#A1A1AA]">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}



// "use client";

// import { motion } from "framer-motion";
// import {
//   Globe,
//   Lightbulb,
//   Lock,
//   Smartphone,
// } from "lucide-react";

// const points = [
//   {
//     icon: Lightbulb,
//     title: "Une idée devenue un projet",
//     description:
//       "Le Projet Y est né d'un constat simple : malgré les progrès de la technologie, certains besoins du quotidien restent encore insuffisamment adressés. Nous avons choisi d'explorer une nouvelle approche pour y répondre.",
//   },
//   {
//     icon: Smartphone,
//     title: "Des mois de recherche et de développement",
//     description:
//       "Depuis plusieurs mois, nous consacrons notre temps à rechercher, apprendre, concevoir et développer une solution numérique capable de répondre durablement à ce besoin. Aujourd'hui, le premier prototype est en cours de finalisation.",
//   },
//   {
//     icon: Globe,
//     title: "Une vision construite sur le long terme",
//     description:
//       "Notre ambition ne se limite pas à développer un prototype. Nous souhaitons construire une solution solide, évolutive et pensée pour grandir progressivement au fil du temps.",
//   },
//   {
//     icon: Lock,
//     title: "Une confidentialité assumée",
//     description:
//       "Certaines informations restent volontairement confidentielles afin de protéger le travail de recherche, de conception et d'innovation jusqu'à la présentation officielle du projet.",
//   },
// ];

// export default function ProjectOverview() {
//   return (
//     <section className="border-t border-white/10 bg-[#09090B] py-24">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">

//         {/* Header */}

//         <motion.div
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mx-auto max-w-4xl text-center"
//         >
//           <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
//             À propos du Projet Y
//           </p>

//           <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
//             Pourquoi avons-nous créé le Projet Y ?
//           </h2>

//           <p className="mt-8 text-lg leading-8 text-[#A1A1AA]">
//             Le Projet Y est un projet technologique actuellement en cours de
//             développement. Il est né d'un besoin concret identifié après de
//             nombreuses observations, réflexions et recherches.
//           </p>

//           <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">
//             Depuis plusieurs mois, nous travaillons à imaginer, concevoir et
//             développer une nouvelle solution numérique capable d'apporter une
//             réponse innovante à ce besoin. Les détails de son fonctionnement
//             seront dévoilés lors de sa présentation officielle.
//           </p>

//           <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">
//             En attendant, nous avons souhaité ouvrir cette aventure au public,
//             partager notre progression et permettre à celles et ceux qui le
//             souhaitent d'accompagner cette phase de construction.
//           </p>
//         </motion.div>

//         {/* Cards */}

//         <div className="mt-16 grid gap-6 md:grid-cols-2">
//           {points.map((point, index) => {
//             const Icon = point.icon;

//             return (
//               <motion.div
//                 key={point.title}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.1,
//                 }}
//                 className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-[#FF9E01]/30"
//               >
//                 <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF9E01]/10 text-[#FF9E01]">
//                   <Icon size={24} />
//                 </div>

//                 <h3 className="text-xl font-semibold text-white">
//                   {point.title}
//                 </h3>

//                 <p className="mt-4 leading-7 text-[#A1A1AA]">
//                   {point.description}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import {
//   Lightbulb,
//   Globe,
//   Smartphone,
//   Lock,
// } from "lucide-react";

// const points = [
//   {
//     icon: Smartphone,
//     title: "Une plateforme technologique",
//     description:
//       "Le Projet Y est une plateforme numérique actuellement en cours de développement. Notre objectif est de créer une solution moderne, accessible et pensée pour répondre à des besoins concrets.",
//   },
//   {
//     icon: Lightbulb,
//     title: "Une vision avant un produit",
//     description:
//       "Avant d'être une application, le Projet Y est avant tout une vision. Nous voulons construire une technologie qui apporte une véritable valeur aux personnes et qui puisse avoir un impact durable.",
//   },
//   {
//     icon: Globe,
//     title: "Une ambition internationale",
//     description:
//       "Dès sa conception, le projet est pensé pour évoluer au-delà des frontières. Notre ambition est de développer une solution capable d'être utilisée dans plusieurs pays et de toucher un large public.",
//   },
//   {
//     icon: Lock,
//     title: "Une confidentialité assumée",
//     description:
//       "Certaines fonctionnalités et certains choix de conception restent volontairement confidentiels afin de protéger le travail de recherche, de développement et d'innovation jusqu'à leur présentation officielle.",
//   },
// ];

// export default function ProjectOverview() {
//   return (
//     <section className="border-t border-white/10 bg-[#09090B] py-24">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         {/* Header */}

//         <motion.div
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mx-auto max-w-3xl text-center"
//         >
//           <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
//             Le Projet Y
//           </p>

//           <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
//             Une technologie en construction, pensée pour être utile.
//           </h2>

//           <p className="mt-8 text-lg leading-8 text-[#A1A1AA]">
//             Le Projet Y est un projet technologique actuellement en cours de
//             développement. Nous construisons une plateforme numérique avec une
//             ambition simple : mettre la technologie au service des personnes en
//             proposant une approche innovante autour des interactions humaines.
//           </p>

//           <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">
//             Aujourd'hui, le premier prototype est en cours de finalisation.
//             Certaines informations restent volontairement confidentielles afin
//             de protéger le travail réalisé, mais nous souhaitons déjà partager
//             la vision qui guide cette aventure.
//           </p>
//         </motion.div>

//         {/* Cards */}

//         <div className="mt-16 grid gap-6 md:grid-cols-2">
//           {points.map((point, index) => {
//             const Icon = point.icon;

//             return (
//               <motion.div
//                 key={point.title}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.1,
//                 }}
//                 className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
//               >
//                 <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF9E01]/10 text-[#FF9E01]">
//                   <Icon size={24} />
//                 </div>

//                 <h3 className="text-xl font-semibold text-white">
//                   {point.title}
//                 </h3>

//                 <p className="mt-4 leading-7 text-[#A1A1AA]">
//                   {point.description}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }