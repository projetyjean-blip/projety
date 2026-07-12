"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Users,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">

      <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">

        <motion.div
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="max-w-4xl"
        >

          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#A1A1AA]">

            <span className="h-2 w-2 rounded-full bg-[#FF9E01]" />

            Prototype en cours de finalisation

          </div>


          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">

            Chaque grande aventure commence par une personne qui ose y croire...

            <span className="mt-4 block text-[#FF9E01]">

              puis par une communauté qui décide de marcher à ses côtés.

            </span>

          </h1>


          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#A1A1AA]">

            Depuis plusieurs mois, nous construisons discrètement le <strong className="text-white">Projet Y</strong>.

            Aujourd'hui, le premier prototype est presque terminé.

            Nous avons simplement besoin d'un dernier élan pour franchir cette étape.

            Que vous décidiez de contribuer à partir de <strong className="text-white">1&nbsp;000&nbsp;FCFA</strong>, de rejoindre notre communauté ou simplement de suivre cette aventure, votre présence compte déjà.

          </p>



          <div className="mt-10 flex flex-col gap-4 sm:flex-row">


            <Link
              href="/support"
              className="group flex items-center justify-center gap-3 rounded-full bg-[#FF9E01] px-8 py-4 font-semibold text-black transition hover:opacity-90"
            >

              <Heart size={20} />

              Contribuer dès 1 000 FCFA


              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </Link>



            <Link
              href="/community"
              className="flex items-center justify-center gap-3 rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition hover:bg-white/5"
            >

              <Users size={20} />

              Découvrir la communauté

            </Link>


          </div>

          <div className="mt-10 flex flex-wrap gap-8 text-sm text-[#A1A1AA]">

            <div>
              ✓ Prototype presque terminé
            </div>

            <div>
              ✓ Soutien à partir de 1 000 FCFA
            </div>

            <div>
              ✓ Communauté ouverte à tous
            </div>

          </div>

        </motion.div>



        <motion.div
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 1,
            ease: "easeOut",
          }}
          className="pointer-events-none absolute right-[-250px] top-1/2 hidden h-[550px] w-[550px] -translate-y-1/2 rounded-full bg-[#FF9E01]/10 blur-3xl lg:block"
        />

      </div>

    </section>
  );
}



// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Heart,
//   Users,
// } from "lucide-react";


// export default function Hero() {
//   return (
//     <section className="relative flex min-h-[90vh] items-center overflow-hidden">

//       <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">

//         <motion.div
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.8,
//             ease: "easeOut",
//           }}
//           className="max-w-3xl"
//         >

//           <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#A1A1AA]">

//             <span className="h-2 w-2 rounded-full bg-[#FF9E01]" />

//             Une vision en construction

//           </div>


//           <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">

//             Construisons ensemble
//             une technologie qui rapproche
//             les êtres humains.

//           </h1>


//           <p className="mt-8 max-w-2xl text-lg leading-8 text-[#A1A1AA]">

//             Derrière chaque innovation se cache une histoire faite
//             de réflexion, de travail et de persévérance.

//             Aujourd'hui, nous partageons cette aventure et invitons
//             toutes les personnes qui souhaitent accompagner cette
//             naissance à rejoindre la communauté.

//           </p>



//           <div className="mt-10 flex flex-col gap-4 sm:flex-row">


//             <Link
//               href="/support"
//               className="group flex items-center justify-center gap-3 rounded-full bg-[#FF9E01] px-7 py-4 font-semibold text-black transition hover:opacity-90"
//             >

//               <Heart size={20} />

//               Soutenir cette aventure


//               <ArrowRight
//                 size={18}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />

//             </Link>



//             <Link
//               href="/community"
//               className="flex items-center justify-center gap-3 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white/5"
//             >

//               <Users size={20} />

//               Rejoindre la communauté

//             </Link>


//           </div>


//         </motion.div>



//         <motion.div
//           animate={{
//             opacity: 1,
//           }}
//           transition={{
//             delay: 0.5,
//             duration: 1,
//             ease: "easeOut",
//           }}
//           className="pointer-events-none absolute right-[-250px] top-1/2 hidden h-[550px] w-[550px] -translate-y-1/2 rounded-full bg-[#FF9E01]/10 blur-3xl lg:block"
//         />


//       </div>

//     </section>
//   );
// }

// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Heart,
//   Users,
// } from "lucide-react";


// export default function Hero() {
//   return (
//     <section className="relative flex min-h-[90vh] items-center overflow-hidden">

//       <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 30,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.8,
//           }}
//           className="max-w-3xl"
//         >

//           {/* Badge */}

//           <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#A1A1AA]">

//             <span className="h-2 w-2 rounded-full bg-[#FF9E01]" />

//             Une vision en construction

//           </div>


//           {/* Title */}

//           <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">

//             Construisons ensemble
//             une technologie qui rapproche
//             les êtres humains.

//           </h1>


//           {/* Description */}

//           <p className="mt-8 max-w-2xl text-lg leading-8 text-[#A1A1AA]">

//             Derrière chaque innovation se cache une histoire faite
//             de réflexion, de travail et de persévérance.

//             Aujourd'hui, nous partageons cette aventure et invitons
//             toutes les personnes qui souhaitent accompagner cette
//             naissance à rejoindre la communauté.

//           </p>


//           {/* Actions */}

//           <div className="mt-10 flex flex-col gap-4 sm:flex-row">


//             <Link
//               href="/support"
//               className="group flex items-center justify-center gap-3 rounded-full bg-[#FF9E01] px-7 py-4 font-semibold text-black transition hover:opacity-90"
//             >

//               <Heart size={20} />

//               Soutenir cette aventure


//               <ArrowRight
//                 size={18}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />

//             </Link>



//             <Link
//               href="/community"
//               className="flex items-center justify-center gap-3 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white/5"
//             >

//               <Users size={20} />

//               Rejoindre la communauté

//             </Link>


//           </div>


//         </motion.div>



//         {/* Décoration visuelle */}

//         <motion.div
//           initial={{
//             opacity: 0,
//           }}
//           animate={{
//             opacity: 1,
//           }}
//           transition={{
//             delay: 0.5,
//             duration: 1,
//           }}
//           className="pointer-events-none absolute right-[-250px] top-1/2 hidden h-[550px] w-[550px] -translate-y-1/2 rounded-full bg-[#FF9E01]/10 blur-3xl lg:block"
//         />


//       </div>

//     </section>
//   );
// }