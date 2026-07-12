"use client";

import { motion } from "framer-motion";
import { Lightbulb, Search, Rocket } from "lucide-react";


const steps = [
  {
    icon: Lightbulb,
    title: "Une réflexion",
    description:
      "Tout a commencé par une question, une réflexion profonde sur les possibilités que la technologie peut offrir lorsqu'elle est guidée par une vision humaine.",
  },
  {
    icon: Search,
    title: "Des mois de recherche",
    description:
      "Cette réflexion a progressivement donné naissance à un long travail d'analyse, de documentation et d'exploration.",
  },
  {
    icon: Rocket,
    title: "Une vision en construction",
    description:
      "Aujourd'hui, cette aventure avance étape après étape avec une ambition claire : construire quelque chose de durable et utile.",
  },
];


export default function StorySection() {
  return (
    <section className="relative border-t border-white/10 bg-[#09090B] py-24">

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
          className="max-w-3xl"
        >

          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
            Notre histoire
          </p>


          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">

            Tout a commencé par une simple réflexion.

          </h2>


          <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">

            Un jour, une idée est née.

            Cette idée a progressivement laissé place à des mois
            de réflexion, de recherche, de documentation et de
            développement.

            Aujourd'hui, une vision prend forme et continue
            d'évoluer avec patience.

          </p>


        </motion.div>




        {/* Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20"
              >

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF9E01]/10 text-[#FF9E01]">

                  <Icon size={24} />

                </div>


                <h3 className="text-xl font-semibold text-white">

                  {step.title}

                </h3>


                <p className="mt-4 leading-7 text-[#A1A1AA]">

                  {step.description}

                </p>


              </motion.div>
            );

          })}

        </div>




        {/* Conclusion */}

        <motion.div
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center"
        >

          <p className="mx-auto max-w-3xl text-lg leading-8 text-[#A1A1AA]">

            Ce site ne présente pas encore la destination finale.
            Il raconte simplement le chemin parcouru pour lui donner vie.

          </p>


        </motion.div>


      </div>

    </section>
  );
}






// "use client";

// import { motion } from "framer-motion";
// import { Lightbulb, Search, Rocket } from "lucide-react";


// const steps = [
//   {
//     icon: Lightbulb,
//     title: "Une réflexion",
//     description:
//       "Tout a commencé par une question, une réflexion profonde sur les possibilités que la technologie peut offrir lorsqu'elle est guidée par une vision humaine.",
//   },
//   {
//     icon: Search,
//     title: "Des mois de recherche",
//     description:
//       "Cette réflexion a progressivement donné naissance à un long travail d'analyse, de documentation et d'exploration.",
//   },
//   {
//     icon: Rocket,
//     title: "Une vision en construction",
//     description:
//       "Aujourd'hui, cette aventure avance étape après étape avec une ambition claire : construire quelque chose de durable et utile.",
//   },
// ];


// export default function StorySection() {
//   return (
//     <section className="relative border-t border-white/10 bg-[#09090B] py-24">

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
//           className="max-w-3xl"
//         >

//           <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
//             Notre histoire
//           </p>


//           <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">

//             Tout a commencé par une simple réflexion.

//           </h2>


//           <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">

//             Un jour, une idée est née.

//             Cette idée a progressivement laissé place à des mois
//             de réflexion, de recherche, de documentation et de
//             développement.

//             Aujourd'hui, une vision prend forme et continue
//             d'évoluer avec patience.

//           </p>


//         </motion.div>



//         {/* Cards */}

//         <div className="mt-16 grid gap-6 md:grid-cols-3">

//           {steps.map((step, index) => {

//             const Icon = step.icon;

//             return (
//               <motion.div
//                 key={step.title}
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
//                   delay: index * 0.15,
//                 }}
//                 className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20"
//               >

//                 <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF9E01]/10 text-[#FF9E01]">

//                   <Icon size={24} />

//                 </div>


//                 <h3 className="text-xl font-semibold text-white">

//                   {step.title}

//                 </h3>


//                 <p className="mt-4 leading-7 text-[#A1A1AA]">

//                   {step.description}

//                 </p>


//               </motion.div>
//             );

//           })}

//         </div>


//         {/* Conclusion */}

//         <motion.div
//           initial={{
//             opacity: 0,
//           }}
//           whileInView={{
//             opacity: 1,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 0.6,
//             delay: 0.3,
//           }}
//           className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center"
//         >

//           <p className="mx-auto max-w-3xl text-lg leading-8 text-[#A1A1AA]">

//             Ce site ne présente pas encore la destination finale.
//             Il raconte simplement le chemin parcouru pour lui donner vie.

//           </p>


//         </motion.div>


//       </div>

//     </section>
//   );
// }