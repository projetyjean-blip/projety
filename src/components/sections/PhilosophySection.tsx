"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  ShieldCheck,
  HandCoins,
  Users,
} from "lucide-react";

const commitments = [
  {
    icon: HandCoins,
    title: "Chaque contribution a une utilité",
    description:
      "Chaque soutien reçu participe directement à faire avancer le développement du premier prototype. Derrière chaque contribution, il y a une personne qui choisit de croire en cette aventure, et cette confiance mérite d'être respectée.",
  },
  {
    icon: ShieldCheck,
    title: "Protéger aujourd'hui pour mieux révéler demain",
    description:
      "Certaines parties du Projet Y restent volontairement confidentielles. Ce choix ne vise pas à cacher le projet, mais à protéger plusieurs mois de recherche et de développement jusqu'à la présentation officielle.",
  },
  {
    icon: Users,
    title: "Construire avec une communauté",
    description:
      "Nous ne recherchons pas uniquement des contributions financières. Nous souhaitons aussi rassembler les premières personnes qui auront envie de suivre cette aventure, de donner leur avis et de grandir avec le Projet Y.",
  },
  {
    icon: HeartHandshake,
    title: "Une relation basée sur la confiance",
    description:
      "Nous nous engageons à communiquer régulièrement sur l'évolution du projet et à avancer avec sérieux, transparence et responsabilité envers toutes les personnes qui nous accordent leur confiance.",
  },
];

export default function PhilosophySection() {
  return (
    <section className="border-t border-white/10 bg-[#09090B] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
            Notre engagement
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Avant de vous demander votre soutien,
            nous voulons vous dire ce que nous vous devons.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#A1A1AA]">
            Derrière ce projet, il y a des mois de travail, beaucoup de
            persévérance et une conviction profonde.
            Si vous choisissez de nous accompagner,
            nous voulons que vous sachiez sur quelles bases nous avançons.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">

          {commitments.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              >

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF9E01]/10 text-[#FF9E01]">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-[#A1A1AA]">
                  {item.description}
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
//   HeartHandshake,
//   Lightbulb,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";


// const values = [
//   {
//     icon: Lightbulb,
//     title: "Une technologie utile",
//     description:
//       "Nous croyons que la technologie doit répondre à de vrais besoins et apporter une valeur positive aux personnes.",
//   },
//   {
//     icon: HeartHandshake,
//     title: "Rapprocher les personnes",
//     description:
//       "Les innovations les plus importantes sont celles qui créent des liens et renforcent les relations humaines.",
//   },
//   {
//     icon: Sparkles,
//     title: "Créer une valeur durable",
//     description:
//       "Chaque grande construction demande du temps, de la patience et une vision pensée sur le long terme.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Construire avec responsabilité",
//     description:
//       "Nous avançons avec exigence, transparence et respect envers toutes les personnes qui suivent cette aventure.",
//   },
// ];


// export default function PhilosophySection() {
//   return (
//     <section className="border-t border-white/10 bg-[#09090B] py-24">

//       <div className="mx-auto max-w-7xl px-6 lg:px-8">


//         {/* Introduction */}

//         <motion.div
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.6,
//             ease: "easeOut",
//           }}
//           className="max-w-3xl"
//         >

//           <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
//             Notre philosophie
//           </p>


//           <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">

//             Construire avec une vision humaine.

//           </h2>


//           <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">

//             Derrière chaque décision se trouvent des valeurs simples :
//             créer avec intention, avancer avec responsabilité et
//             toujours garder l'humain au centre.

//           </p>


//         </motion.div>




//         {/* Values */}

//         <div className="mt-16 grid gap-6 sm:grid-cols-2">

//           {values.map((value, index) => {

//             const Icon = value.icon;

//             return (
//               <motion.div
//                 key={value.title}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.1,
//                   ease: "easeOut",
//                 }}
//                 className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20"
//               >

//                 <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF9E01]/10 text-[#FF9E01]">

//                   <Icon size={24} />

//                 </div>


//                 <h3 className="text-xl font-semibold text-white">

//                   {value.title}

//                 </h3>


//                 <p className="mt-4 leading-7 text-[#A1A1AA]">

//                   {value.description}

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
//   HeartHandshake,
//   Lightbulb,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";


// const values = [
//   {
//     icon: Lightbulb,
//     title: "Une technologie utile",
//     description:
//       "Nous croyons que la technologie doit répondre à de vrais besoins et apporter une valeur positive aux personnes.",
//   },
//   {
//     icon: HeartHandshake,
//     title: "Rapprocher les personnes",
//     description:
//       "Les innovations les plus importantes sont celles qui créent des liens et renforcent les relations humaines.",
//   },
//   {
//     icon: Sparkles,
//     title: "Créer une valeur durable",
//     description:
//       "Chaque grande construction demande du temps, de la patience et une vision pensée sur le long terme.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Construire avec responsabilité",
//     description:
//       "Nous avançons avec exigence, transparence et respect envers toutes les personnes qui suivent cette aventure.",
//   },
// ];


// export default function PhilosophySection() {
//   return (
//     <section className="border-t border-white/10 bg-[#09090B] py-24">

//       <div className="mx-auto max-w-7xl px-6 lg:px-8">


//         {/* Introduction */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 20,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 0.6,
//           }}
//           className="max-w-3xl"
//         >

//           <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
//             Notre philosophie
//           </p>


//           <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">

//             Construire avec une vision humaine.

//           </h2>


//           <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">

//             Derrière chaque décision se trouvent des valeurs simples :
//             créer avec intention, avancer avec responsabilité et
//             toujours garder l'humain au centre.

//           </p>


//         </motion.div>



//         {/* Values */}

//         <div className="mt-16 grid gap-6 sm:grid-cols-2">

//           {values.map((value, index) => {

//             const Icon = value.icon;

//             return (
//               <motion.div
//                 key={value.title}
//                 initial={{
//                   opacity: 0,
//                   y: 30,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.1,
//                 }}
//                 className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20"
//               >

//                 <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF9E01]/10 text-[#FF9E01]">

//                   <Icon size={24} />

//                 </div>


//                 <h3 className="text-xl font-semibold text-white">

//                   {value.title}

//                 </h3>


//                 <p className="mt-4 leading-7 text-[#A1A1AA]">

//                   {value.description}

//                 </p>


//               </motion.div>
//             );

//           })}

//         </div>


//       </div>

//     </section>
//   );
// }