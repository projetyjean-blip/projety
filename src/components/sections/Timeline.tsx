"use client";

import { motion } from "framer-motion";
import {
  Check,
  Circle,
} from "lucide-react";

const timeline = [
  {
    title: "Une idée est née",
    description:
      "Tout a commencé par une simple réflexion : imaginer une solution capable d'apporter une véritable valeur aux personnes.",
    completed: true,
  },
  {
    title: "Des mois de recherche",
    description:
      "Cette idée a ensuite laissé place à de nombreuses recherches, des réflexions, de la documentation et un long travail d'apprentissage.",
    completed: true,
  },
  {
    title: "Une vision s'est construite",
    description:
      "Petit à petit, le Projet Y a pris forme grâce à une vision plus claire, construite avec patience et méthode.",
    completed: true,
  },
  {
    title: "Conception du prototype",
    description:
      "Les premières maquettes, les choix techniques et les fondations du projet ont progressivement été mis en place.",
    completed: true,
  },
  {
    title: "Le prototype est presque terminé",
    description:
      "Aujourd'hui, le premier prototype est dans sa dernière phase de développement. Il ne reste plus que quelques étapes pour le finaliser.",
    completed: false,
    current: true,
  },
  {
    title: "Aujourd'hui, nous avons besoin de vous",
    description:
      "Votre soutien nous aidera à franchir cette dernière étape, à finaliser le prototype et à préparer sa présentation officielle. Chaque contribution, même à partir de 100 FCFA (ou l'équivalent dans votre monnaie), peut faire la différence.",
    completed: false,
  },
  {
    title: "Premiers tests et présentation",
    description:
      "Une fois le prototype finalisé, nous pourrons commencer les premiers tests, partager davantage de contenus et préparer la présentation officielle du Projet Y.",
    completed: false,
  },
];

export default function Timeline() {
  return (
    <section className="border-t border-white/10 bg-[#09090B] py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        {/* Header */}

        <motion.div
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
            Le chemin parcouru
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Une aventure qui avance grâce à chaque étape... et bientôt grâce à vous.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">
            Derrière le Projet Y se cachent des mois de travail, de réflexion et de
            développement. Aujourd'hui, nous arrivons à une étape décisive où votre
            soutien peut réellement accélérer la naissance du premier prototype.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-16">

          {/* Ligne verticale */}

          <div className="absolute left-6 top-0 h-full w-px bg-white/10" />

          <div className="space-y-10">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="relative flex gap-8"
              >
                {/* Icon */}

                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#09090B]">
                  {item.completed ? (
                    <Check
                      size={20}
                      className="text-[#FF9E01]"
                    />
                  ) : (
                    <Circle
                      size={18}
                      className={
                        item.current
                          ? "text-[#FF9E01]"
                          : "text-[#A1A1AA]"
                      }
                    />
                  )}
                </div>

                {/* Content */}

                <div
                  className={`rounded-3xl border p-6 transition ${
                    item.title === "Aujourd'hui, nous avons besoin de vous"
                      ? "border-[#FF9E01]/40 bg-[#FF9E01]/5"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#A1A1AA]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}








// "use client";

// import { motion } from "framer-motion";
// import {
//   Check,
//   Circle,
// } from "lucide-react";


// const timeline = [
//   {
//     title: "Réflexion initiale",
//     description:
//       "Une première réflexion a donné naissance aux fondations de cette aventure.",
//     completed: true,
//   },
//   {
//     title: "Recherche et exploration",
//     description:
//       "Une période consacrée à l'analyse, à la documentation et à la compréhension des enjeux.",
//     completed: true,
//   },
//   {
//     title: "Construction de la vision",
//     description:
//       "Une vision plus claire s'est progressivement construite à travers plusieurs mois de travail.",
//     completed: true,
//   },
//   {
//     title: "Préparation et conception",
//     description:
//       "Les différentes orientations du projet ont été étudiées et préparées avec attention.",
//     completed: true,
//   },
//   {
//     title: "Développement du prototype",
//     description:
//       "Une première version expérimentale est actuellement en cours de finalisation.",
//     completed: false,
//     current: true,
//   },
//   {
//     title: "Premières expérimentations",
//     description:
//       "Les prochaines étapes permettront de poursuivre les apprentissages et les améliorations.",
//     completed: false,
//   },
//   {
//     title: "Présentation officielle",
//     description:
//       "Une présentation complète sera réalisée lorsque le moment sera approprié.",
//     completed: false,
//   },
// ];


// export default function Timeline() {
//   return (
//     <section className="border-t border-white/10 bg-[#09090B] py-24">

//       <div className="mx-auto max-w-5xl px-6 lg:px-8">


//         {/* Header */}

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
//             Évolution
//           </p>


//           <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">

//             Une aventure construite étape après étape.

//           </h2>


//           <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">

//             Chaque grande réalisation commence par une succession
//             d'étapes. Nous partageons ici l'évolution générale de
//             notre parcours.

//           </p>

//         </motion.div>




//         {/* Timeline */}

//         <div className="relative mt-16">


//           {/* Ligne verticale */}

//           <div className="absolute left-6 top-0 h-full w-px bg-white/10" />



//           <div className="space-y-10">

//             {timeline.map((item, index) => (

//               <motion.div
//                 key={item.title}
//                 animate={{
//                   opacity: 1,
//                   x: 0,
//                 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.08,
//                   ease: "easeOut",
//                 }}
//                 className="relative flex gap-8"
//               >


//                 {/* Icon */}

//                 <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#09090B]">

//                   {item.completed ? (

//                     <Check
//                       size={20}
//                       className="text-[#FF9E01]"
//                     />

//                   ) : (

//                     <Circle
//                       size={18}
//                       className={
//                         item.current
//                           ? "text-[#FF9E01]"
//                           : "text-[#A1A1AA]"
//                       }
//                     />

//                   )}

//                 </div>




//                 {/* Content */}

//                 <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

//                   <h3 className="text-xl font-semibold text-white">

//                     {item.title}

//                   </h3>


//                   <p className="mt-3 leading-7 text-[#A1A1AA]">

//                     {item.description}

//                   </p>


//                 </div>


//               </motion.div>

//             ))}

//           </div>


//         </div>


//       </div>


//     </section>
//   );
// }








// "use client";

// import { motion } from "framer-motion";
// import {
//   Check,
//   Circle,
// } from "lucide-react";


// const timeline = [
//   {
//     title: "Réflexion initiale",
//     description:
//       "Une première réflexion a donné naissance aux fondations de cette aventure.",
//     completed: true,
//   },
//   {
//     title: "Recherche et exploration",
//     description:
//       "Une période consacrée à l'analyse, à la documentation et à la compréhension des enjeux.",
//     completed: true,
//   },
//   {
//     title: "Construction de la vision",
//     description:
//       "Une vision plus claire s'est progressivement construite à travers plusieurs mois de travail.",
//     completed: true,
//   },
//   {
//     title: "Préparation et conception",
//     description:
//       "Les différentes orientations du projet ont été étudiées et préparées avec attention.",
//     completed: true,
//   },
//   {
//     title: "Développement du prototype",
//     description:
//       "Une première version expérimentale est actuellement en cours de finalisation.",
//     completed: false,
//     current: true,
//   },
//   {
//     title: "Premières expérimentations",
//     description:
//       "Les prochaines étapes permettront de poursuivre les apprentissages et les améliorations.",
//     completed: false,
//   },
//   {
//     title: "Présentation officielle",
//     description:
//       "Une présentation complète sera réalisée lorsque le moment sera approprié.",
//     completed: false,
//   },
// ];


// export default function Timeline() {
//   return (
//     <section className="border-t border-white/10 bg-[#09090B] py-24">

//       <div className="mx-auto max-w-5xl px-6 lg:px-8">


//         {/* Header */}

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
//             Évolution
//           </p>


//           <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">

//             Une aventure construite étape après étape.

//           </h2>


//           <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">

//             Chaque grande réalisation commence par une succession
//             d'étapes. Nous partageons ici l'évolution générale de
//             notre parcours.

//           </p>

//         </motion.div>



//         {/* Timeline */}

//         <div className="relative mt-16">


//           {/* Ligne verticale */}

//           <div className="absolute left-6 top-0 h-full w-px bg-white/10" />



//           <div className="space-y-10">

//             {timeline.map((item, index) => (

//               <motion.div
//                 key={item.title}
//                 initial={{
//                   opacity: 0,
//                   x: -20,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   x: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.08,
//                 }}
//                 className="relative flex gap-8"
//               >


//                 {/* Icon */}

//                 <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#09090B]">

//                   {item.completed ? (

//                     <Check
//                       size={20}
//                       className="text-[#FF9E01]"
//                     />

//                   ) : (

//                     <Circle
//                       size={18}
//                       className={
//                         item.current
//                           ? "text-[#FF9E01]"
//                           : "text-[#A1A1AA]"
//                       }
//                     />

//                   )}

//                 </div>



//                 {/* Content */}

//                 <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

//                   <h3 className="text-xl font-semibold text-white">

//                     {item.title}

//                   </h3>


//                   <p className="mt-3 leading-7 text-[#A1A1AA]">

//                     {item.description}

//                   </p>


//                 </div>


//               </motion.div>

//             ))}

//           </div>


//         </div>


//       </div>


//     </section>
//   );
// }