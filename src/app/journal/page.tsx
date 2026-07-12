"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  CalendarDays,
} from "lucide-react";


const articles = [
  {
    date: "12 juillet 2026",
    category: "Ouverture du journal",
    title: "Bienvenue dans les coulisses du Projet Y",
    content:
      "Aujourd'hui marque une étape importante. Ce journal devient le lieu où nous partagerons, avec transparence, les grandes étapes de cette aventure. Vous y découvrirez les avancées, les défis rencontrés et les décisions importantes qui accompagneront la construction du Projet Y.",
  },
  {
    date: "En cours",
    category: "Prototype",
    title: "Le développement continue",
    content:
      "Le premier prototype poursuit son développement. Chaque amélioration, chaque fonctionnalité finalisée et chaque problème résolu nous rapprochent un peu plus de la première présentation officielle. Même si nous ne pouvons pas encore tout dévoiler, nous souhaitons partager régulièrement notre progression.",
  },
  {
    date: "Prochaine étape",
    category: "Communauté",
    title: "Construire avec les premiers bâtisseurs",
    content:
      "Les prochaines étapes seront vécues avec notre communauté. Les personnes qui rejoignent aujourd'hui le Projet Y découvriront progressivement les coulisses du développement, les premières démonstrations et les grandes annonces avant le lancement officiel.",
  },
];


export default function JournalPage() {
  return (
    <main className="bg-[#09090B]">


      {/* Hero */}

      <section className="border-b border-white/10 py-32">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">


          <motion.div
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >

            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#FF9E01]/10 text-[#FF9E01]">

              <BookOpen size={32} />

            </div>


            <p className="mb-5 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
              Le journal de bord du Projet Y.
            </p>


            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">

              Suivez chaque étape du Projet Y.

            </h1>


            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#A1A1AA]">

              Les grandes aventures ne se résument pas à leur destination.

              Elles se racontent aussi à travers les étapes qui les construisent.

              Ce journal est notre manière de partager, avec transparence, les réflexions, les avancées et les moments importants qui façonnent progressivement le Projet Y.

            </p>


          </motion.div>


        </div>

      </section>


      <section className="py-16">

<div className="mx-auto max-w-4xl px-6">

<div className="rounded-3xl border border-[#FF9E01]/20 bg-[#FF9E01]/5 p-10">

<p className="text-2xl font-semibold text-white">

Pourquoi tenir un journal ?

</p>

<p className="mt-6 text-lg leading-8 text-[#A1A1AA]">

Nous pensons qu'il est important de montrer qu'un projet ne naît pas du jour au lendemain.

Derrière chaque étape se cachent des heures de réflexion, de développement, d'apprentissage et parfois de remise en question.

Ce journal est une invitation à découvrir cette réalité, sans artifices.

</p>

</div>

</div>

</section>





      {/* Articles */}

      <section className="py-24">

        <div className="mx-auto max-w-5xl px-6 lg:px-8">


          <div className="space-y-8">


            {articles.map((article, index) => (

              <motion.article
                key={article.title}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
              >

                <div className="flex flex-wrap items-center gap-4 text-sm text-[#A1A1AA]">


                  <span className="rounded-full border border-white/10 px-4 py-1">

                    {article.category}

                  </span>


                  <span className="flex items-center gap-2">

                    <CalendarDays size={16} />

                    {article.date}

                  </span>


                </div>



                <h2 className="mt-6 text-3xl font-semibold text-white">

                  {article.title}

                </h2>



                <p className="mt-5 text-lg leading-8 text-[#A1A1AA]">

                  {article.content}

                </p>


              </motion.article>

            ))}


          </div>


        </div>

      </section>





      {/* Footer message */}

      <section className="border-t border-white/10 py-24">

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">


          <p className="text-3xl leading-relaxed text-white">

Merci de prendre le temps de suivre cette aventure.

Chaque personne qui lit ces lignes, rejoint notre communauté ou décide de soutenir le Projet Y contribue, à sa manière, à écrire les premières pages de son histoire.

</p>

<p className="mt-8 text-lg leading-8 text-[#A1A1AA]">

Nous continuerons à publier ici les moments importants afin que chacun puisse suivre cette évolution, étape après étape.

</p>


        </div>


      </section>


    </main>
  );
}




// "use client";

// import { motion } from "framer-motion";
// import {
//   BookOpen,
//   CalendarDays,
// } from "lucide-react";


// const articles = [
//   {
//     date: "12 Juillet 2026",
//     category: "Début d'aventure",
//     title: "La naissance d'une vision",
//     content:
//       "Chaque grande construction commence par une idée, une réflexion et la volonté de créer quelque chose qui a du sens.",
//   },
//   {
//     date: "À venir",
//     category: "Évolution",
//     title: "Les prochaines étapes",
//     content:
//       "Nous partagerons progressivement les moments importants qui accompagnent l'évolution de cette aventure.",
//   },
//   {
//     date: "À venir",
//     category: "Développement",
//     title: "Construire avec patience",
//     content:
//       "Le développement d'une vision demande du temps, de la rigueur et une attention particulière à chaque étape.",
//   },
// ];


// export default function JournalPage() {
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
//               ease: "easeOut",
//             }}
//           >

//             <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#FF9E01]/10 text-[#FF9E01]">

//               <BookOpen size={32} />

//             </div>


//             <p className="mb-5 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
//               Journal
//             </p>


//             <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">

//               Suivre le chemin parcouru.

//             </h1>


//             <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#A1A1AA]">

//               À travers ce journal, nous partageons les grandes étapes,
//               les réflexions et les moments importants de cette aventure.

//             </p>


//           </motion.div>


//         </div>

//       </section>





//       {/* Articles */}

//       <section className="py-24">

//         <div className="mx-auto max-w-5xl px-6 lg:px-8">


//           <div className="space-y-8">


//             {articles.map((article, index) => (

//               <motion.article
//                 key={article.title}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.1,
//                   ease: "easeOut",
//                 }}
//                 className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
//               >

//                 <div className="flex flex-wrap items-center gap-4 text-sm text-[#A1A1AA]">


//                   <span className="rounded-full border border-white/10 px-4 py-1">

//                     {article.category}

//                   </span>


//                   <span className="flex items-center gap-2">

//                     <CalendarDays size={16} />

//                     {article.date}

//                   </span>


//                 </div>



//                 <h2 className="mt-6 text-3xl font-semibold text-white">

//                   {article.title}

//                 </h2>



//                 <p className="mt-5 text-lg leading-8 text-[#A1A1AA]">

//                   {article.content}

//                 </p>


//               </motion.article>

//             ))}


//           </div>


//         </div>

//       </section>





//       {/* Footer message */}

//       <section className="border-t border-white/10 py-24">

//         <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">


//           <p className="text-2xl leading-relaxed text-white sm:text-3xl">

//             Chaque étape compte.

//             Merci de suivre cette aventure et de découvrir son évolution.

//           </p>


//         </div>


//       </section>


//     </main>
//   );
// }




// "use client";

// import { motion } from "framer-motion";
// import {
//   BookOpen,
//   CalendarDays,
// } from "lucide-react";


// const articles = [
//   {
//     date: "12 Juillet 2026",
//     category: "Début d'aventure",
//     title: "La naissance d'une vision",
//     content:
//       "Chaque grande construction commence par une idée, une réflexion et la volonté de créer quelque chose qui a du sens.",
//   },
//   {
//     date: "À venir",
//     category: "Évolution",
//     title: "Les prochaines étapes",
//     content:
//       "Nous partagerons progressivement les moments importants qui accompagnent l'évolution de cette aventure.",
//   },
//   {
//     date: "À venir",
//     category: "Développement",
//     title: "Construire avec patience",
//     content:
//       "Le développement d'une vision demande du temps, de la rigueur et une attention particulière à chaque étape.",
//   },
// ];

// export default function JournalPage() {
//   return (
//     <main className="bg-[#09090B]">


//       {/* Hero */}

//       <section className="border-b border-white/10 py-32">

//         <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">


//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 20,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.7,
//             }}
//           >

//             <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#FF9E01]/10 text-[#FF9E01]">

//               <BookOpen size={32} />

//             </div>


//             <p className="mb-5 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
//               Journal
//             </p>


//             <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">

//               Suivre le chemin parcouru.

//             </h1>


//             <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#A1A1AA]">

//               À travers ce journal, nous partageons les grandes étapes,
//               les réflexions et les moments importants de cette aventure.

//             </p>


//           </motion.div>


//         </div>

//       </section>




//       {/* Articles */}

//       <section className="py-24">

//         <div className="mx-auto max-w-5xl px-6 lg:px-8">


//           <div className="space-y-8">


//             {articles.map((article, index) => (

//               <motion.article
//                 key={article.title}
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
//                 className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
//               >

//                 <div className="flex flex-wrap items-center gap-4 text-sm text-[#A1A1AA]">


//                   <span className="rounded-full border border-white/10 px-4 py-1">

//                     {article.category}

//                   </span>


//                   <span className="flex items-center gap-2">

//                     <CalendarDays size={16} />

//                     {article.date}

//                   </span>


//                 </div>



//                 <h2 className="mt-6 text-3xl font-semibold text-white">

//                   {article.title}

//                 </h2>



//                 <p className="mt-5 text-lg leading-8 text-[#A1A1AA]">

//                   {article.content}

//                 </p>


//               </motion.article>

//             ))}


//           </div>


//         </div>

//       </section>




//       {/* Footer message */}

//       <section className="border-t border-white/10 py-24">

//         <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">


//           <p className="text-2xl leading-relaxed text-white sm:text-3xl">

//             Chaque étape compte.

//             Merci de suivre cette aventure et de découvrir son évolution.

//           </p>


//         </div>


//       </section>


//     </main>
//   );
// }