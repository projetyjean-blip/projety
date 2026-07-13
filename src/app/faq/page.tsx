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
      "Le Projet Y est une application mobile actuellement en cours de développement. Son objectif est de proposer une nouvelle approche pour répondre à un besoin réel du quotidien grâce aux possibilités offertes par les technologies actuelles.",
  },
  {
    question: "Pourquoi avoir créé le Projet Y ?",
    answer:
      "Le projet est né de l'observation d'un besoin concret qui, selon nous, mérite une approche différente. Nous avons choisi de créer une solution capable d'y répondre de manière innovante tout en construisant des bases solides dès le départ.",
  },
  {
    question: "Sur quoi avez-vous travaillé pendant tous ces mois ?",
    answer:
      "Le développement du Projet Y ne s'est pas limité à écrire du code. Il a également consisté à comprendre le besoin identifié, explorer différentes approches, concevoir l'architecture de l'application, définir une expérience cohérente et construire progressivement un prototype solide.",
  },
  {
    question: "Où en est le développement aujourd'hui ?",
    answer:
      "Après plusieurs mois de travail, le premier prototype est en cours de finalisation. Cette étape permettra de préparer les premiers tests avant la présentation officielle de l'application.",
  },
  {
    question: "Pourquoi demandez-vous un soutien aujourd'hui ?",
    answer:
      "Le développement d'une application demande du temps mais aussi des ressources. Les contributions permettront de finaliser le prototype, poursuivre les développements techniques, réaliser les premiers tests et préparer le lancement dans de bonnes conditions.",
  },
  {
    question: "À quoi serviront les contributions ?",
    answer:
      "Les contributions serviront à financer les prochaines étapes du projet : finalisation du prototype, infrastructure technique, hébergement, tests, améliorations et préparation du lancement. Chaque contribution participe directement à faire avancer le Projet Y.",
  },
  {
    question: "Pourquoi ne dévoilez-vous pas encore le fonctionnement de l'application ?",
    answer:
      "Nous souhaitons présenter le Projet Y au moment où il sera suffisamment abouti. En attendant, certains éléments restent volontairement confidentiels afin de protéger le travail d'innovation réalisé depuis plusieurs mois.",
  },
  {
    question: "Comment puis-je soutenir le Projet Y ?",
    answer:
      "Vous pouvez contribuer à partir de 100 FCFA (ou l'équivalent dans votre monnaie), ou du montant de votre choix. Vous pouvez également partager le projet, rejoindre notre communauté, donner votre avis ou simplement suivre son évolution.",
  },
  {
    question: "Je ne peux pas contribuer financièrement. Puis-je quand même aider ?",
    answer:
      "Oui, bien sûr. Parler du projet autour de vous, le partager, rejoindre la communauté ou simplement suivre son évolution représente déjà un soutien précieux. Les plus grandes aventures grandissent aussi grâce à leur communauté.",
  },
  {
    question: "Quand le Projet Y sera-t-il présenté officiellement ?",
    answer:
      "La présentation officielle aura lieu lorsque le prototype sera suffisamment mature. Notre priorité est de proposer une première version solide avant de dévoiler l'ensemble du projet.",
  },
];

// const questions = [
//   {
//     question: "Qu'est-ce que le Projet Y ?",
//     answer:
//       "Le Projet Y est une application mobile actuellement en cours de développement. Elle est née de plusieurs mois de réflexion, de recherche et de conception autour d'un besoin réel du quotidien que nous souhaitons adresser grâce aux possibilités offertes par les technologies actuelles.",
//   },
//   {
//     question: "Pourquoi avoir créé le Projet Y ?",
//     answer:
//       "Le projet est né d'un constat simple : certains besoins du quotidien restent encore insuffisamment adressés. Nous avons donc choisi de consacrer plusieurs mois à imaginer, concevoir et développer une nouvelle approche capable d'y répondre de manière innovante.",
//   },
//   {
//     question: "Où en est le développement aujourd'hui ?",
//     answer:
//       "Après plusieurs mois de travail, le premier prototype est en cours de finalisation. Cette étape nous permettra de préparer les premiers tests avant la présentation officielle de l'application.",
//   },
//   {
//     question: "Pourquoi demandez-vous un soutien aujourd'hui ?",
//     answer:
//       "La phase de conception représente une grande partie du travail, mais finaliser un prototype demande également des ressources techniques. Le soutien de notre communauté nous aide à franchir cette dernière étape dans de meilleures conditions et à accélérer la suite du développement.",
//   },
//   {
//     question: "À quoi serviront les contributions ?",
//     answer:
//       "Les contributions serviront principalement à financer les prochaines étapes du projet : finalisation du prototype, infrastructure technique, tests, améliorations et préparation du lancement. Chaque contribution participe directement à l'avancement du Projet Y.",
//   },
//   {
//     question: "Pourquoi ne dévoilez-vous pas encore tous les détails de l'application ?",
//     answer:
//       "Nous souhaitons être transparents sur notre démarche tout en protégeant le travail d'innovation réalisé depuis plusieurs mois. Les fonctionnalités, le fonctionnement détaillé et les choix de conception seront dévoilés lors du lancement officiel.",
//   },
//   {
//     question: "Comment puis-je soutenir le Projet Y ?",
//     answer:
//       "Vous pouvez contribuer financièrement à partir de 100 FCFA (ou l'équivalent dans votre monnaie), ou du montant de votre choix. Vous pouvez également partager le projet, rejoindre notre communauté, donner votre avis ou simplement suivre son évolution. Toutes les formes de soutien sont précieuses.",
//   },
//   {
//     question: "Je ne peux pas contribuer financièrement. Puis-je quand même participer ?",
//     answer:
//       "Oui. Une aventure se construit aussi grâce aux personnes qui en parlent autour d'elles, la recommandent, donnent des conseils ou suivent son évolution. Votre soutien ne se limite pas à une contribution financière.",
//   },
//   {
//     question: "Comment suivre l'évolution du Projet Y ?",
//     answer:
//       "Vous pouvez suivre les différentes étapes à travers notre journal de construction, rejoindre notre communauté et consulter régulièrement ce site, où nous partageons les principales avancées du projet.",
//   },
//   {
//     question: "Quand le Projet Y sera-t-il présenté officiellement ?",
//     answer:
//       "La présentation officielle aura lieu lorsque le prototype sera suffisamment abouti pour être présenté dans les meilleures conditions. Notre priorité est de proposer une première version solide avant de dévoiler l'ensemble du projet.",
//   },
// ];

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