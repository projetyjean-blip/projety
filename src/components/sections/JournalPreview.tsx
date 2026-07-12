"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
} from "lucide-react";

const articles = [
  {
    date: "12 juillet 2026",
    title: "Le début d'une aventure",
    description:
      "Aujourd'hui, nous ouvrons officiellement ce journal. Il retracera les grandes étapes du Projet Y, les défis rencontrés, les progrès réalisés et les moments importants qui marqueront sa construction.",
  },
  {
    date: "Prototype",
    title: "Le développement continue",
    description:
      "Le prototype poursuit son développement. Chaque semaine apporte son lot d'améliorations, de tests et de décisions qui nous rapprochent progressivement de la première présentation officielle.",
  },
  {
    date: "À venir",
    title: "Les prochaines étapes",
    description:
      "Les prochains mois seront consacrés aux derniers ajustements, aux expérimentations et aux premiers retours de la communauté avant la présentation du Projet Y.",
  },
];

export default function JournalPreview() {
  return (
    <section className="border-t border-white/10 bg-[#09090B] py-24">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}

        <motion.div
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >

          <div className="max-w-3xl">

            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
              Journal de bord
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">

              Parce qu'une aventure mérite d'être racontée.

            </h2>

            <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">

              Nous souhaitons partager cette aventure avec transparence.

              Ce journal vous permettra de suivre les avancées du Projet Y,
              de découvrir les grandes étapes de son développement et de voir,
              au fil du temps, comment une simple idée devient progressivement
              une réalité.

            </p>

          </div>

          <Link
            href="/journal"
            className="group inline-flex items-center gap-3 text-white transition hover:text-[#FF9E01]"
          >

            Découvrir le journal

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />

          </Link>

        </motion.div>

        {/* Articles */}

        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {articles.map((article, index) => (

            <motion.article
              key={article.title}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-[#FF9E01]/30"
            >

              <div className="mb-6 flex items-center gap-3 text-sm text-[#A1A1AA]">

                <CalendarDays size={16} />

                {article.date}

              </div>

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF9E01]/10 text-[#FF9E01]">

                <BookOpen size={24} />

              </div>

              <h3 className="text-xl font-semibold text-white">

                {article.title}

              </h3>

              <p className="mt-4 leading-7 text-[#A1A1AA]">

                {article.description}

              </p>

            </motion.article>

          ))}

        </div>

        {/* Bloc de conclusion */}

        <motion.div
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
          }}
          className="mx-auto mt-16 max-w-4xl rounded-3xl border border-[#FF9E01]/20 bg-[#FF9E01]/5 p-10 text-center"
        >

          <p className="text-2xl font-semibold text-white">

            Nous ne voulons pas seulement vous montrer le résultat.

          </p>

          <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">

            Nous voulons aussi vous faire découvrir le chemin qui y mène.

            Chaque nouvelle étape sera partagée avec les personnes qui
            auront choisi de suivre cette aventure dès aujourd'hui.

          </p>

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
//   BookOpen,
//   CalendarDays,
// } from "lucide-react";


// const articles = [
//   {
//     date: "Première étape",
//     title: "La naissance d'une vision",
//     description:
//       "Retour sur les premières réflexions qui ont donné naissance à cette aventure.",
//   },
//   {
//     date: "Nouvelle avancée",
//     title: "Construire avec patience",
//     description:
//       "Quelques mots sur les étapes franchies et le chemin parcouru.",
//   },
//   {
//     date: "En développement",
//     title: "Une aventure qui continue",
//     description:
//       "Partager l'évolution du projet et les prochaines étapes importantes.",
//   },
// ];


// export default function JournalPreview() {
//   return (
//     <section className="border-t border-white/10 bg-[#09090B] py-24">

//       <div className="mx-auto max-w-7xl px-6 lg:px-8">


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
//           className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
//         >

//           <div className="max-w-3xl">

//             <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
//               Journal
//             </p>


//             <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">

//               Suivre l'évolution de l'aventure.

//             </h2>


//             <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">

//               Nous partagerons régulièrement les moments importants,
//               les avancées et les réflexions qui accompagnent cette
//               construction.

//             </p>

//           </div>



//           <Link
//             href="/journal"
//             className="group inline-flex items-center gap-3 text-white transition hover:text-[#FF9E01]"
//           >

//             Voir le journal

//             <ArrowRight
//               size={18}
//               className="transition-transform group-hover:translate-x-1"
//             />

//           </Link>


//         </motion.div>




//         {/* Articles */}

//         <div className="mt-14 grid gap-6 md:grid-cols-3">


//           {articles.map((article, index) => (

//             <motion.article
//               key={article.title}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 0.5,
//                 delay: index * 0.1,
//                 ease: "easeOut",
//               }}
//               className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20"
//             >


//               <div className="mb-6 flex items-center gap-3 text-sm text-[#A1A1AA]">

//                 <CalendarDays size={16} />

//                 {article.date}

//               </div>



//               <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF9E01]/10 text-[#FF9E01]">

//                 <BookOpen size={24} />

//               </div>



//               <h3 className="text-xl font-semibold text-white">

//                 {article.title}

//               </h3>



//               <p className="mt-4 leading-7 text-[#A1A1AA]">

//                 {article.description}

//               </p>


//             </motion.article>

//           ))}


//         </div>


//       </div>


//     </section>
//   );
// }


// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   BookOpen,
//   CalendarDays,
// } from "lucide-react";


// const articles = [
//   {
//     date: "Première étape",
//     title: "La naissance d'une vision",
//     description:
//       "Retour sur les premières réflexions qui ont donné naissance à cette aventure.",
//   },
//   {
//     date: "Nouvelle avancée",
//     title: "Construire avec patience",
//     description:
//       "Quelques mots sur les étapes franchies et le chemin parcouru.",
//   },
//   {
//     date: "En développement",
//     title: "Une aventure qui continue",
//     description:
//       "Partager l'évolution du projet et les prochaines étapes importantes.",
//   },
// ];


// export default function JournalPreview() {
//   return (
//     <section className="border-t border-white/10 bg-[#09090B] py-24">

//       <div className="mx-auto max-w-7xl px-6 lg:px-8">


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
//           className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
//         >

//           <div className="max-w-3xl">

//             <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
//               Journal
//             </p>


//             <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">

//               Suivre l'évolution de l'aventure.

//             </h2>


//             <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">

//               Nous partagerons régulièrement les moments importants,
//               les avancées et les réflexions qui accompagnent cette
//               construction.

//             </p>

//           </div>


//           <Link
//             href="/journal"
//             className="group inline-flex items-center gap-3 text-white transition hover:text-[#FF9E01]"
//           >

//             Voir le journal

//             <ArrowRight
//               size={18}
//               className="transition-transform group-hover:translate-x-1"
//             />

//           </Link>


//         </motion.div>



//         {/* Articles */}

//         <div className="mt-14 grid gap-6 md:grid-cols-3">

//           {articles.map((article, index) => (

//             <motion.article
//               key={article.title}
//               initial={{
//                 opacity: 0,
//                 y: 30,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//               }}
//               transition={{
//                 duration: 0.5,
//                 delay: index * 0.1,
//               }}
//               className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20"
//             >

//               <div className="mb-6 flex items-center gap-3 text-sm text-[#A1A1AA]">

//                 <CalendarDays size={16} />

//                 {article.date}

//               </div>


//               <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF9E01]/10 text-[#FF9E01]">

//                 <BookOpen size={24} />

//               </div>


//               <h3 className="text-xl font-semibold text-white">

//                 {article.title}

//               </h3>


//               <p className="mt-4 leading-7 text-[#A1A1AA]">

//                 {article.description}

//               </p>


//             </motion.article>

//           ))}

//         </div>


//       </div>


//     </section>
//   );
// }