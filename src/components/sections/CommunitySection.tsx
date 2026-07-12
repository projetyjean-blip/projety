"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Users,
  Heart,
} from "lucide-react";

const actions = [
  {
    icon: Users,
    title: "Découvrir les coulisses",
    description:
      "Suivez les avancées du prototype, les réflexions, les défis rencontrés et les prochaines étapes du Projet Y.",
  },
  {
    icon: MessageCircle,
    title: "Échanger avec l'équipe",
    description:
      "Posez vos questions, partagez vos idées et participez aux échanges avec les premières personnes qui suivent cette aventure.",
  },
  {
    icon: Heart,
    title: "Faire partie des premiers bâtisseurs",
    description:
      "En rejoignant la communauté, vous accompagnez les premiers pas du Projet Y et vous participez à écrire les premières pages de son histoire.",
  },
];

export default function CommunitySection() {
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
            ease: "easeOut",
          }}
          className="mx-auto max-w-4xl text-center"
        >

          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
            Les 10 000 premiers bâtisseurs
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">

            Et si vous découvriez le Projet Y avant tout le monde ?

          </h2>

          <p className="mt-8 text-lg leading-8 text-[#A1A1AA]">

            Aujourd'hui, le Projet Y est encore en construction.

            Demain, il aura sa propre histoire.

            En rejoignant notre communauté WhatsApp, vous suivrez cette
            évolution depuis les premières étapes, aux côtés des personnes
            qui auront choisi d'être présentes dès le début.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {actions.map((action, index) => {

            const Icon = action.icon;

            return (

              <motion.div
                key={action.title}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
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

                  {action.title}

                </h3>

                <p className="mt-4 leading-7 text-[#A1A1AA]">

                  {action.description}

                </p>

              </motion.div>

            );

          })}

        </div>

        {/* Bloc émotionnel */}

        <motion.div
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          className="mx-auto mt-16 max-w-4xl rounded-3xl border border-[#FF9E01]/20 bg-[#FF9E01]/5 p-10 text-center"
        >

          <p className="text-2xl font-semibold leading-relaxed text-white">

            Peut-être que dans quelques années,
            des milliers de personnes utiliseront le Projet Y.

          </p>

          <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">

            Aujourd'hui, vous avez simplement l'occasion de dire :

            <span className="mt-4 block text-xl font-medium text-white">

              « J'étais là lorsque tout a commencé. »

            </span>

          </p>

        </motion.div>

        {/* CTA */}

        <motion.div
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          className="mt-12 flex justify-center"
        >

          <Link
            href="/community"
            className="group inline-flex items-center gap-3 rounded-full bg-[#FF9E01] px-8 py-4 font-semibold text-black transition hover:opacity-90"
          >

            <MessageCircle size={20} />

            Rejoindre les premiers bâtisseurs

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />

          </Link>

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
//   MessageCircle,
//   Users,
//   Share2,
//   Heart,
// } from "lucide-react";


// const actions = [
//   {
//     icon: Users,
//     title: "Rejoindre la communauté",
//     description:
//       "Suivez l'évolution de cette aventure et découvrez les prochaines étapes.",
//   },
//   {
//     icon: Share2,
//     title: "Partager l'histoire",
//     description:
//       "Aidez d'autres personnes à découvrir cette vision en construction.",
//   },
//   {
//     icon: Heart,
//     title: "Encourager le projet",
//     description:
//       "Chaque message et chaque soutien contribuent à donner de l'énergie à cette aventure.",
//   },
// ];


// export default function CommunitySection() {
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
//           className="mx-auto max-w-3xl text-center"
//         >

//           <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
//             Communauté
//           </p>


//           <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">

//             Les grandes innovations ne naissent jamais seules.

//           </h2>


//           <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">

//             Aujourd'hui, nous recherchons les premières personnes
//             qui souhaitent suivre cette aventure et écrire avec nous
//             les premières pages de son histoire.

//           </p>


//         </motion.div>



//         {/* Cards */}

//         <div className="mt-16 grid gap-6 md:grid-cols-3">

//           {actions.map((action, index) => {

//             const Icon = action.icon;

//             return (
//               <motion.div
//                 key={action.title}
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

//                   {action.title}

//                 </h3>


//                 <p className="mt-4 leading-7 text-[#A1A1AA]">

//                   {action.description}

//                 </p>


//               </motion.div>
//             );

//           })}

//         </div>




//         {/* CTA */}

//         <motion.div
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.5,
//             delay: 0.2,
//             ease: "easeOut",
//           }}
//           className="mt-12 flex justify-center"
//         >

//           <Link
//             href="/community"
//             className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white/5"
//           >

//             <MessageCircle size={20} />

//             Rejoindre la communauté


//             <ArrowRight
//               size={18}
//               className="transition-transform group-hover:translate-x-1"
//             />

//           </Link>


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
//   MessageCircle,
//   Users,
//   Share2,
//   Heart,
// } from "lucide-react";


// const actions = [
//   {
//     icon: Users,
//     title: "Rejoindre la communauté",
//     description:
//       "Suivez l'évolution de cette aventure et découvrez les prochaines étapes.",
//   },
//   {
//     icon: Share2,
//     title: "Partager l'histoire",
//     description:
//       "Aidez d'autres personnes à découvrir cette vision en construction.",
//   },
//   {
//     icon: Heart,
//     title: "Encourager le projet",
//     description:
//       "Chaque message et chaque soutien contribuent à donner de l'énergie à cette aventure.",
//   },
// ];


// export default function CommunitySection() {
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
//           className="mx-auto max-w-3xl text-center"
//         >

//           <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
//             Communauté
//           </p>


//           <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">

//             Les grandes innovations ne naissent jamais seules.

//           </h2>


//           <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">

//             Aujourd'hui, nous recherchons les premières personnes
//             qui souhaitent suivre cette aventure et écrire avec nous
//             les premières pages de son histoire.

//           </p>


//         </motion.div>



//         {/* Cards */}

//         <div className="mt-16 grid gap-6 md:grid-cols-3">

//           {actions.map((action, index) => {

//             const Icon = action.icon;

//             return (
//               <motion.div
//                 key={action.title}
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

//                   {action.title}

//                 </h3>


//                 <p className="mt-4 leading-7 text-[#A1A1AA]">

//                   {action.description}

//                 </p>


//               </motion.div>
//             );

//           })}

//         </div>



//         {/* CTA */}

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
//             duration: 0.5,
//             delay: 0.2,
//           }}
//           className="mt-12 flex justify-center"
//         >

//           <Link
//             href="/community"
//             className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white/5"
//           >

//             <MessageCircle size={20} />

//             Rejoindre la communauté


//             <ArrowRight
//               size={18}
//               className="transition-transform group-hover:translate-x-1"
//             />

//           </Link>


//         </motion.div>


//       </div>

//     </section>
//   );
// }