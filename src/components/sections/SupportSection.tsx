"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
} from "lucide-react";

const supportPoints = [
  "Finaliser le développement du premier prototype.",
  "Réaliser les derniers tests avant sa présentation.",
  "Préparer les prochaines étapes du projet.",
  "Faire grandir une communauté qui accompagne cette aventure depuis ses débuts.",
];

export default function SupportSection() {
  return (
    <section className="border-t border-white/10 bg-[#09090B] py-24">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12"
        >

          {/* Background */}

          <div className="pointer-events-none absolute right-[-150px] top-[-150px] h-[350px] w-[350px] rounded-full bg-[#FF9E01]/10 blur-3xl" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Texte */}

            <div>

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF9E01]/10 text-[#FF9E01]">

                <Heart size={28} />

              </div>

              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
                Campagne de soutien
              </p>

              <h2 className="text-4xl font-semibold tracking-tight text-white">
                Aujourd'hui, nous avons besoin d'un dernier coup de pouce.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">
                Depuis plusieurs mois, nous travaillons avec passion sur le
                Projet Y. Grâce à ce travail, le premier prototype est
                aujourd'hui presque terminé.
              </p>

              <p className="mt-5 text-lg leading-8 text-[#A1A1AA]">
                Pour franchir cette dernière étape, nous lançons une campagne
                de soutien ouverte à toutes les personnes qui souhaitent
                accompagner cette aventure.
              </p>

              <p className="mt-5 text-lg leading-8 text-white">
                Une contribution de <span className="font-semibold text-[#FF9E01]">1 000 FCFA</span>,
                ou du montant de votre choix, peut réellement faire la différence
                lorsque des centaines de personnes décident d'avancer ensemble.
              </p>

              <Link
                href="/support"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#FF9E01] px-7 py-4 font-semibold text-black transition hover:opacity-90"
              >
                Je souhaite soutenir le Projet Y

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />

              </Link>

            </div>

            {/* Carte */}

            <div className="rounded-3xl border border-white/10 bg-black/20 p-8">

              <h3 className="text-2xl font-semibold text-white">
                Votre contribution permettra notamment de :
              </h3>

              <ul className="mt-8 space-y-5">

                {supportPoints.map((point) => (

                  <li
                    key={point}
                    className="flex items-start gap-3 text-[#A1A1AA]"
                  >

                    <CheckCircle2
                      size={22}
                      className="mt-0.5 shrink-0 text-[#FF9E01]"
                    />

                    <span>{point}</span>

                  </li>

                ))}

              </ul>

              <div className="mt-8 rounded-2xl border border-[#FF9E01]/20 bg-[#FF9E01]/5 p-5">

                <p className="leading-7 text-white">
                  Si vous ne pouvez pas contribuer financièrement aujourd'hui,
                  vous pouvez tout de même nous aider en rejoignant notre
                  communauté WhatsApp, en partageant le projet ou simplement en
                  parlant du Projet Y autour de vous.
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}



// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   CheckCircle2,
//   Heart,
// } from "lucide-react";


// const supportPoints = [
//   "Poursuivre le développement",
//   "Finaliser les prochaines étapes du prototype",
//   "Préparer les premières expérimentations",
//   "Construire une communauté engagée",
// ];


// export default function SupportSection() {
//   return (
//     <section className="border-t border-white/10 bg-[#09090B] py-24">

//       <div className="mx-auto max-w-7xl px-6 lg:px-8">


//         <motion.div
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.6,
//             ease: "easeOut",
//           }}
//           className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12"
//         >


//           {/* Background decoration */}

//           <div className="pointer-events-none absolute right-[-150px] top-[-150px] h-[350px] w-[350px] rounded-full bg-[#FF9E01]/10 blur-3xl" />



//           <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">


//             {/* Text */}

//             <div>


//               <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF9E01]/10 text-[#FF9E01]">

//                 <Heart size={28} />

//               </div>



//               <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
//                 Soutenir l'aventure
//               </p>


//               <h2 className="text-4xl font-semibold tracking-tight text-white">

//                 Chaque grande vision commence avec des personnes qui y croient.

//               </h2>


//               <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">

//                 Votre soutien nous accompagne dans les prochaines étapes
//                 de cette aventure et nous aide à continuer le travail
//                 engagé avec ambition et responsabilité.

//               </p>


//               <Link
//                 href="/support"
//                 className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#FF9E01] px-7 py-4 font-semibold text-black transition hover:opacity-90"
//               >

//                 Soutenir cette aventure


//                 <ArrowRight
//                   size={18}
//                   className="transition-transform group-hover:translate-x-1"
//                 />

//               </Link>


//             </div>



//             {/* Points */}

//             <div className="rounded-3xl border border-white/10 bg-black/20 p-8">

//               <h3 className="text-xl font-semibold text-white">
//                 Votre soutien contribue à :
//               </h3>


//               <ul className="mt-6 space-y-5">

//                 {supportPoints.map((point) => (

//                   <li
//                     key={point}
//                     className="flex items-start gap-3 text-[#A1A1AA]"
//                   >

//                     <CheckCircle2
//                       size={22}
//                       className="mt-0.5 shrink-0 text-[#FF9E01]"
//                     />

//                     <span>
//                       {point}
//                     </span>

//                   </li>

//                 ))}

//               </ul>


//             </div>


//           </div>


//         </motion.div>


//       </div>


//     </section>
//   );
// }





// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   CheckCircle2,
//   Heart,
// } from "lucide-react";


// const supportPoints = [
//   "Poursuivre le développement",
//   "Finaliser les prochaines étapes du prototype",
//   "Préparer les premières expérimentations",
//   "Construire une communauté engagée",
// ];


// export default function SupportSection() {
//   return (
//     <section className="border-t border-white/10 bg-[#09090B] py-24">

//       <div className="mx-auto max-w-7xl px-6 lg:px-8">


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
//           className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12"
//         >


//           {/* Background decoration */}

//           <div className="pointer-events-none absolute right-[-150px] top-[-150px] h-[350px] w-[350px] rounded-full bg-[#FF9E01]/10 blur-3xl" />



//           <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">


//             {/* Text */}

//             <div>


//               <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF9E01]/10 text-[#FF9E01]">

//                 <Heart size={28} />

//               </div>



//               <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
//                 Soutenir l'aventure
//               </p>


//               <h2 className="text-4xl font-semibold tracking-tight text-white">

//                 Chaque grande vision commence avec des personnes qui y croient.

//               </h2>


//               <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">

//                 Votre soutien nous accompagne dans les prochaines étapes
//                 de cette aventure et nous aide à continuer le travail
//                 engagé avec ambition et responsabilité.

//               </p>


//               <Link
//                 href="/support"
//                 className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#FF9E01] px-7 py-4 font-semibold text-black transition hover:opacity-90"
//               >

//                 Soutenir cette aventure


//                 <ArrowRight
//                   size={18}
//                   className="transition-transform group-hover:translate-x-1"
//                 />

//               </Link>


//             </div>



//             {/* Points */}

//             <div className="rounded-3xl border border-white/10 bg-black/20 p-8">

//               <h3 className="text-xl font-semibold text-white">
//                 Votre soutien contribue à :
//               </h3>


//               <ul className="mt-6 space-y-5">

//                 {supportPoints.map((point) => (

//                   <li
//                     key={point}
//                     className="flex items-start gap-3 text-[#A1A1AA]"
//                   >

//                     <CheckCircle2
//                       size={22}
//                       className="mt-0.5 shrink-0 text-[#FF9E01]"
//                     />

//                     <span>
//                       {point}
//                     </span>

//                   </li>

//                 ))}

//               </ul>


//             </div>


//           </div>


//         </motion.div>


//       </div>


//     </section>
//   );
// }