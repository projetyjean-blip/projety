"use client";

import { motion } from "framer-motion";
import {
  HelpCircle,
  BookOpen,
  Rocket,
} from "lucide-react";


const chapters = [
  {
    icon: HelpCircle,
    title: "Une question qui a tout déclenché",
    description:
      "Le Projet Y est né d'une réflexion simple : comment utiliser la technologie pour créer quelque chose d'utile et apporter une nouvelle manière de rapprocher les personnes ?",
  },
  {
    icon: BookOpen,
    title: "Des mois à chercher et construire",
    description:
      "Cette idée a demandé du temps, beaucoup de recherches, de documentation et d'apprentissage. Chaque étape a permis de transformer une vision en un projet concret.",
  },
  {
    icon: Rocket,
    title: "Une vision qui prend forme",
    description:
      "Aujourd'hui, Le Projet Y avance étape après étape. Le premier prototype approche d'une nouvelle phase et nous préparons la suite avec patience et détermination.",
  },
];


export default function AboutPage() {
  return (
    <main className="bg-[#09090B]">


      <section className="border-b border-white/10 py-32">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <motion.div
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <p className="mb-5 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
              Notre histoire
            </p>


            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">

              Tout a commencé par
              une question.

            </h1>


            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#A1A1AA]">

              Avant d'être un projet technologique, Le Projet Y est d'abord
              une réflexion humaine.

              Pendant plusieurs mois, nous avons travaillé à transformer
              cette vision en une première réalité.

              Aujourd'hui, nous partageons ce chemin avec les premières
              personnes qui souhaitent accompagner cette aventure.

            </p>


          </motion.div>

        </div>

      </section>



      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-6 md:grid-cols-3">

            {chapters.map((chapter,index)=>{

              const Icon = chapter.icon;

              return (

                <motion.div
                  key={chapter.title}
                  whileInView={{
                    opacity:1,
                    y:0,
                  }}
                  viewport={{
                    once:true,
                  }}
                  transition={{
                    duration:0.5,
                    delay:index*0.1,
                  }}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
                >

                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF9E01]/10 text-[#FF9E01]">

                    <Icon size={24}/>

                  </div>


                  <h2 className="text-xl font-semibold text-white">

                    {chapter.title}

                  </h2>


                  <p className="mt-4 leading-7 text-[#A1A1AA]">

                    {chapter.description}

                  </p>


                </motion.div>

              );

            })}

          </div>

        </div>

      </section>



      <section className="border-t border-white/10 py-24">

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <motion.p
            whileInView={{
              opacity:1,
            }}
            viewport={{
              once:true,
            }}
            transition={{
              duration:0.6,
            }}
            className="text-2xl leading-relaxed text-white sm:text-3xl"
          >

            Le Projet Y est encore au début de son histoire.

            Aujourd'hui, nous ouvrons cette aventure aux premières
            personnes qui souhaitent découvrir son évolution,
            la soutenir et participer à sa construction.

          </motion.p>

        </div>

      </section>


    </main>
  );
}


// "use client";

// import { motion } from "framer-motion";
// import {
//   BookOpen,
//   Compass,
//   Target,
// } from "lucide-react";


// const chapters = [
//   {
//     icon: Compass,
//     title: "Une idée qui prend naissance",
//     description:
//       "Comme beaucoup de grandes aventures, celle-ci a commencé par une simple réflexion et une volonté de comprendre comment créer quelque chose d'utile.",
//   },
//   {
//     icon: BookOpen,
//     title: "Un long chemin d'apprentissage",
//     description:
//       "Cette vision a demandé du temps, de nombreuses recherches, de la documentation et une volonté constante d'apprendre.",
//   },
//   {
//     icon: Target,
//     title: "Une direction claire",
//     description:
//       "Aujourd'hui, chaque étape est réalisée avec patience afin de construire des bases solides pour l'avenir.",
//   },
// ];


// export default function AboutPage() {
//   return (
//     <main className="bg-[#09090B]">

//       {/* Hero */}

//       <section className="border-b border-white/10 py-32">

//         <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

//           <motion.div
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.7,
//             }}
//           >

//             <p className="mb-5 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
//               Notre histoire
//             </p>


//             <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">

//               Tout a commencé par
//               une simple réflexion.

//             </h1>


//             <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#A1A1AA]">

//               Derrière chaque construction importante existe un
//               parcours fait de recherches, de doutes, d'apprentissages
//               et de décisions.

//               Cette page raconte simplement le chemin parcouru
//               pour donner vie à une vision.

//             </p>


//           </motion.div>

//         </div>

//       </section>



//       {/* Story */}

//       <section className="py-24">

//         <div className="mx-auto max-w-7xl px-6 lg:px-8">


//           <div className="grid gap-6 md:grid-cols-3">

//             {chapters.map((chapter, index) => {

//               const Icon = chapter.icon;

//               return (
//                 <motion.div
//                   key={chapter.title}
//                   whileInView={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   viewport={{
//                     once: true,
//                   }}
//                   transition={{
//                     duration: 0.5,
//                     delay: index * 0.1,
//                   }}
//                   className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
//                 >

//                   <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF9E01]/10 text-[#FF9E01]">

//                     <Icon size={24} />

//                   </div>


//                   <h2 className="text-xl font-semibold text-white">

//                     {chapter.title}

//                   </h2>


//                   <p className="mt-4 leading-7 text-[#A1A1AA]">

//                     {chapter.description}

//                   </p>


//                 </motion.div>
//               );

//             })}

//           </div>


//         </div>

//       </section>



//       {/* Closing */}

//       <section className="border-t border-white/10 py-24">

//         <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

//           <motion.p
//             whileInView={{
//               opacity: 1,
//             }}
//             viewport={{
//               once: true,
//             }}
//             transition={{
//               duration: 0.6,
//             }}
//             className="text-2xl leading-relaxed text-white sm:text-3xl"
//           >

//             Ce site ne présente pas encore la destination finale.

//             Il raconte simplement le chemin parcouru
//             pour lui donner vie.

//           </motion.p>

//         </div>

//       </section>


//     </main>
//   );
// }