"use client";

import { motion } from "framer-motion";
import {
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

export default function ConfidentialitySection() {
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
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12"
        >
          <div className="flex flex-col gap-10 md:flex-row md:items-start">

            {/* Icon */}

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#FF9E01]/10 text-[#FF9E01]">

              <LockKeyhole size={32} />

            </div>

            {/* Content */}

            <div className="max-w-3xl">

              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
                Transparence & confidentialité
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Pourquoi ne présentons-nous pas encore tous les détails du Projet Y ?
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">
                C'est une question que beaucoup de personnes nous posent, et elle est
                tout à fait légitime.
              </p>

              <p className="mt-5 text-lg leading-8 text-[#A1A1AA]">
                Le Projet Y est encore en cours de développement. Certaines idées,
                fonctionnalités et choix techniques représentent plusieurs mois de
                recherche et de travail. Avant la présentation officielle du prototype,
                nous avons choisi de protéger ces éléments afin de préserver le fruit de
                ce travail.
              </p>

              <p className="mt-5 text-lg leading-8 text-[#A1A1AA]">
                En revanche, nous souhaitons être transparents sur notre démarche.
                C'est pourquoi nous partageons régulièrement l'avancement du projet,
                les grandes étapes franchies et les prochaines phases de développement
                avec notre communauté.
              </p>

              <div className="mt-8 rounded-2xl border border-[#FF9E01]/20 bg-[#FF9E01]/5 p-5">

                <div className="flex items-start gap-3">

                  <ShieldCheck
                    size={22}
                    className="mt-1 shrink-0 text-[#FF9E01]"
                  />

                  <p className="leading-7 text-white">
                    Notre objectif n'est pas de cacher le Projet Y, mais de le protéger
                    le temps de finaliser son premier prototype. Nous préférons vous
                    présenter un projet abouti plutôt qu'une idée inachevée.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}






// "use client";

// import { motion } from "framer-motion";
// import { LockKeyhole, ShieldCheck } from "lucide-react";


// export default function ConfidentialitySection() {
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
//           className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12"
//         >

//           <div className="flex flex-col gap-10 md:flex-row md:items-center">


//             {/* Icon */}

//             <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#FF9E01]/10 text-[#FF9E01]">

//               <LockKeyhole size={32} />

//             </div>



//             {/* Content */}

//             <div className="max-w-3xl">

//               <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
//                 Confidentialité
//               </p>


//               <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">

//                 Pourquoi certaines informations restent confidentielles ?

//               </h2>


//               <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">

//                 Le Projet Y est actuellement en phase de développement.

//                 Afin de protéger le travail de recherche, de conception
//                 et les innovations développées, certaines informations
//                 restent volontairement réservées jusqu'à leur présentation
//                 officielle.

//               </p>


//               <p className="mt-5 text-lg leading-8 text-[#A1A1AA]">

//                 Cette démarche nous permet d'avancer dans les meilleures
//                 conditions tout en partageant avec vous l'évolution de
//                 cette aventure.

//               </p>



//               <div className="mt-8 flex items-center gap-3 text-white">

//                 <ShieldCheck
//                   size={22}
//                   className="text-[#FF9E01]"
//                 />

//                 <span>
//                   Une construction réfléchie, étape après étape.
//                 </span>

//               </div>


//             </div>


//           </div>


//         </motion.div>


//       </div>


//     </section>
//   );
// }





// "use client";

// import { motion } from "framer-motion";
// import { LockKeyhole, ShieldCheck } from "lucide-react";


// export default function ConfidentialitySection() {
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
//           className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12"
//         >

//           <div className="flex flex-col gap-10 md:flex-row md:items-center">


//             {/* Icon */}

//             <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#FF9E01]/10 text-[#FF9E01]">

//               <LockKeyhole size={32} />

//             </div>



//             {/* Content */}

//             <div className="max-w-3xl">

//               <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
//                 Confidentialité
//               </p>


//               <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">

//                 Pourquoi certaines informations restent confidentielles ?

//               </h2>


//               <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">

//                 Le Projet Y est actuellement en phase de développement.

//                 Afin de protéger le travail de recherche, de conception
//                 et les innovations développées, certaines informations
//                 restent volontairement réservées jusqu'à leur présentation
//                 officielle.

//               </p>


//               <p className="mt-5 text-lg leading-8 text-[#A1A1AA]">

//                 Cette démarche nous permet d'avancer dans les meilleures
//                 conditions tout en partageant avec vous l'évolution de
//                 cette aventure.

//               </p>



//               <div className="mt-8 flex items-center gap-3 text-white">

//                 <ShieldCheck
//                   size={22}
//                   className="text-[#FF9E01]"
//                 />

//                 <span>
//                   Une construction réfléchie, étape après étape.
//                 </span>

//               </div>


//             </div>


//           </div>


//         </motion.div>


//       </div>


//     </section>
//   );
// }