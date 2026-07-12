"use client";

import { motion } from "framer-motion";
import {
  HelpCircle,
  ChevronDown,
} from "lucide-react";


const questions = [
  {
    question: "Qu'est-ce que le Projet Y ?",
    answer:
      "Le Projet Y est un projet technologique que nous construisons progressivement depuis plusieurs mois. Notre objectif est de créer une solution utile et durable, mais nous avançons étape par étape afin de construire des bases solides avant sa présentation officielle.",
  },
  {
    question: "Pourquoi demandez-vous un soutien aujourd'hui ?",
    answer:
      "Après plusieurs mois de recherche, de conception et de développement, nous sommes arrivés à une étape importante : finaliser le premier prototype. Le soutien de notre communauté nous permettra d'accélérer cette dernière phase et de continuer cette construction dans de meilleures conditions.",
  },
  {
    question: "À quoi serviront les contributions ?",
    answer:
      "Les contributions serviront principalement à accompagner les prochaines étapes du développement : finalisation technique, infrastructure, tests et préparation de la suite du projet. Chaque soutien nous aide à avancer concrètement.",
  },
  {
    question: "Pourquoi certaines informations ne sont-elles pas encore publiques ?",
    answer:
      "Nous croyons à la transparence, mais certaines parties du projet restent volontairement protégées afin de préserver le travail de recherche, les idées développées et les éléments importants avant leur présentation officielle.",
  },
  {
    question: "Comment puis-je soutenir le Projet Y ?",
    answer:
      "Vous pouvez nous soutenir de plusieurs façons : en participant financièrement à partir de 1 000 FCFA, en partageant le projet, en donnant votre avis, ou simplement en rejoignant notre communauté pour suivre son évolution.",
  },
  {
    question: "Je ne peux pas contribuer financièrement, puis-je quand même participer ?",
    answer:
      "Oui, absolument. Une aventure ne se construit pas uniquement avec de l'argent. Un partage, un encouragement, une idée ou simplement le fait de faire connaître le projet peut également avoir une grande valeur.",
  },
  {
    question: "Comment suivre l'évolution du Projet Y ?",
    answer:
      "Vous pouvez suivre les différentes étapes à travers notre journal de bord et rejoindre notre communauté afin de recevoir les prochaines actualités, les avancées importantes et les annonces du projet.",
  },
  {
    question: "Quand le Projet Y sera-t-il présenté officiellement ?",
    answer:
      "La présentation complète aura lieu lorsque les conditions seront réunies et que nous pourrons partager le projet dans les meilleures conditions, avec une base suffisamment solide.",
  },
];


export default function FAQPage() {
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

              <HelpCircle size={32} />

            </div>


            <p className="mb-5 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
              Questions fréquentes
            </p>


            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">

              Tout comprendre avant de nous accompagner.

            </h1>


            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#A1A1AA]">

              Nous savons que soutenir un projet demande de comprendre
              son histoire, sa vision et la manière dont chaque aide peut
              contribuer à son évolution.

            </p>


          </motion.div>


        </div>

      </section>





      {/* Questions */}

      <section className="py-24">

        <div className="mx-auto max-w-4xl px-6 lg:px-8">


          <div className="space-y-5">


            {questions.map((item, index) => (

              <motion.div
                key={item.question}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              >

                <div className="flex items-start justify-between gap-5">

                  <h2 className="text-xl font-semibold text-white">

                    {item.question}

                  </h2>


                  <ChevronDown
                    size={22}
                    className="shrink-0 text-[#FF9E01]"
                  />

                </div>


                <p className="mt-5 leading-7 text-[#A1A1AA]">

                  {item.answer}

                </p>


              </motion.div>

            ))}


          </div>


        </div>

      </section>



    </main>
  );
}





// "use client";

// import { motion } from "framer-motion";
// import {
//   HelpCircle,
//   ChevronDown,
// } from "lucide-react";


// const questions = [
//   {
//     question: "Qu'est-ce que le Projet Y ?",
//     answer:
//       "Le Projet Y est une aventure technologique actuellement en phase de construction. Sa présentation complète interviendra lorsque les premières étapes de développement seront finalisées.",
//   },
//   {
//     question: "Pourquoi certaines informations restent confidentielles ?",
//     answer:
//       "Certaines informations sont volontairement protégées afin de préserver le travail de recherche, de conception et les innovations développées avant leur présentation officielle.",
//   },
//   {
//     question: "Comment suivre l'évolution du projet ?",
//     answer:
//       "Vous pouvez suivre l'avancement à travers notre journal, nos réseaux communautaires et les différentes communications publiées au fil du temps.",
//   },
//   {
//     question: "Comment puis-je soutenir cette aventure ?",
//     answer:
//       "Vous pouvez soutenir le projet en partageant cette vision, en rejoignant la communauté ou en apportant une contribution lorsque vous le souhaitez.",
//   },
//   {
//     question: "Est-il possible de rejoindre la communauté ?",
//     answer:
//       "Oui. La communauté est ouverte à toutes les personnes qui souhaitent suivre l'évolution de cette aventure et participer à son histoire.",
//   },
//   {
//     question: "Quand le projet sera-t-il présenté officiellement ?",
//     answer:
//       "La présentation complète aura lieu lorsque les conditions nécessaires seront réunies et que le travail réalisé pourra être présenté dans les meilleures conditions.",
//   },
// ];


// export default function FAQPage() {
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

//               <HelpCircle size={32} />

//             </div>


//             <p className="mb-5 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
//               FAQ
//             </p>


//             <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">

//               Questions fréquentes.

//             </h1>


//             <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#A1A1AA]">

//               Quelques réponses aux questions que nous recevons
//               concernant cette aventure en construction.

//             </p>


//           </motion.div>


//         </div>

//       </section>





//       {/* Questions */}

//       <section className="py-24">

//         <div className="mx-auto max-w-4xl px-6 lg:px-8">


//           <div className="space-y-5">


//             {questions.map((item, index) => (

//               <motion.div
//                 key={item.question}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   duration: 0.4,
//                   delay: index * 0.05,
//                   ease: "easeOut",
//                 }}
//                 className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
//               >

//                 <div className="flex items-start justify-between gap-5">

//                   <h2 className="text-xl font-semibold text-white">

//                     {item.question}

//                   </h2>


//                   <ChevronDown
//                     size={22}
//                     className="shrink-0 text-[#FF9E01]"
//                   />

//                 </div>


//                 <p className="mt-5 leading-7 text-[#A1A1AA]">

//                   {item.answer}

//                 </p>


//               </motion.div>

//             ))}


//           </div>


//         </div>

//       </section>



//     </main>
//   );
// }




// "use client";

// import { motion } from "framer-motion";
// import {
//   HelpCircle,
//   ChevronDown,
// } from "lucide-react";


// const questions = [
//   {
//     question: "Qu'est-ce que le Projet Y ?",
//     answer:
//       "Le Projet Y est une aventure technologique actuellement en phase de construction. Sa présentation complète interviendra lorsque les premières étapes de développement seront finalisées.",
//   },
//   {
//     question: "Pourquoi certaines informations restent confidentielles ?",
//     answer:
//       "Certaines informations sont volontairement protégées afin de préserver le travail de recherche, de conception et les innovations développées avant leur présentation officielle.",
//   },
//   {
//     question: "Comment suivre l'évolution du projet ?",
//     answer:
//       "Vous pouvez suivre l'avancement à travers notre journal, nos réseaux communautaires et les différentes communications publiées au fil du temps.",
//   },
//   {
//     question: "Comment puis-je soutenir cette aventure ?",
//     answer:
//       "Vous pouvez soutenir le projet en partageant cette vision, en rejoignant la communauté ou en apportant une contribution lorsque vous le souhaitez.",
//   },
//   {
//     question: "Est-il possible de rejoindre la communauté ?",
//     answer:
//       "Oui. La communauté est ouverte à toutes les personnes qui souhaitent suivre l'évolution de cette aventure et participer à son histoire.",
//   },
//   {
//     question: "Quand le projet sera-t-il présenté officiellement ?",
//     answer:
//       "La présentation complète aura lieu lorsque les conditions nécessaires seront réunies et que le travail réalisé pourra être présenté dans les meilleures conditions.",
//   },
// ];


// export default function FAQPage() {
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

//               <HelpCircle size={32} />

//             </div>


//             <p className="mb-5 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
//               FAQ
//             </p>


//             <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">

//               Questions fréquentes.

//             </h1>


//             <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#A1A1AA]">

//               Quelques réponses aux questions que nous recevons
//               concernant cette aventure en construction.

//             </p>


//           </motion.div>


//         </div>

//       </section>




//       {/* Questions */}

//       <section className="py-24">

//         <div className="mx-auto max-w-4xl px-6 lg:px-8">


//           <div className="space-y-5">


//             {questions.map((item, index) => (

//               <motion.div
//                 key={item.question}
//                 initial={{
//                   opacity: 0,
//                   y: 20,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 transition={{
//                   duration: 0.4,
//                   delay: index * 0.05,
//                 }}
//                 className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
//               >

//                 <div className="flex items-start justify-between gap-5">

//                   <h2 className="text-xl font-semibold text-white">

//                     {item.question}

//                   </h2>


//                   <ChevronDown
//                     size={22}
//                     className="shrink-0 text-[#FF9E01]"
//                   />

//                 </div>


//                 <p className="mt-5 leading-7 text-[#A1A1AA]">

//                   {item.answer}

//                 </p>


//               </motion.div>

//             ))}


//           </div>


//         </div>

//       </section>



//     </main>
//   );
// }