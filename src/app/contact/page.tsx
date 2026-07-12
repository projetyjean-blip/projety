"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  BriefcaseBusiness,
  Contact,
} from "lucide-react";

import {
  FaLinkedin,
} from "react-icons/fa";


const contacts = [
  {
    name: "Email",
    description:
      "Une question, une idée ou une demande particulière ? Vous pouvez nous écrire directement.",
    icon: Mail,
    link: "mailto:mancreator06@gmail.com",
  },
  {
  name: "Communauté WhatsApp",
  description:
    "Rejoignez notre communauté pour suivre l'évolution du Projet Y, échanger et recevoir les prochaines actualités.",
  icon: MessageCircle,
    link: "https://chat.whatsapp.com/BHDVlJdAG2y31XztXiJWtm?s=cl&p=a&ilr=4",
},
//   {
//     name: "Professionnels et partenaires",
//     description:
//       "Vous représentez une entreprise, une organisation ou vous souhaitez collaborer avec nous ? Contactez-nous.",
//     icon: BriefcaseBusiness,
//     link: "#",
//   },
//   {
//     name: "LinkedIn",
//     description:
//       "Suivez les informations professionnelles et les grandes étapes du développement.",
//     icon: FaLinkedin,
//     link: "#",
//   },
];


export default function ContactPage() {
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

              <Contact size={32} />

            </div>


            <p className="mb-5 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
              Contact
            </p>


            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">

              Parlons ensemble du Projet Y.

            </h1>


            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#A1A1AA]">

              Que vous souhaitiez simplement découvrir le projet,
              rejoindre la communauté ou envisager une collaboration,
              nous serons heureux d'échanger avec vous.

            </p>


          </motion.div>


        </div>

      </section>





      {/* Contacts */}

      <section className="py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">


          <div className="grid gap-6 md:grid-cols-2">


            {contacts.map((contact, index) => {

              const Icon = contact.icon;


              return (

                <motion.a
                  key={contact.name}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20"
                >

                  <div className="flex gap-5">


                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FF9E01]/10 text-[#FF9E01]">

                      <Icon size={24} />

                    </div>



                    <div>

                      <h2 className="text-xl font-semibold text-white">

                        {contact.name}

                      </h2>


                      <p className="mt-3 leading-7 text-[#A1A1AA]">

                        {contact.description}

                      </p>


                    </div>


                  </div>


                </motion.a>

              );

            })}


          </div>


        </div>

      </section>





      {/* Message final */}

      <section className="border-t border-white/10 py-24">


        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">


          <p className="text-2xl leading-relaxed text-white sm:text-3xl">

            Derrière chaque grand projet,
            il y a d'abord des personnes qui prennent le temps d'écouter,
            d'échanger et de croire en une vision.

          </p>


        </div>


      </section>


    </main>
  );
}




// "use client";

// import { motion } from "framer-motion";
// import {
//   Mail,
//   MessageCircle,
//   Send,
//   Contact,
// } from "lucide-react";

// import {
//   FaLinkedin,
// } from "react-icons/fa";


// const contacts = [
//   {
//     name: "Email",
//     description:
//       "Pour toute question, proposition ou prise de contact professionnelle.",
//     icon: Mail,
//     link: "mailto:contact@projet-y.com",
//   },
//   {
//     name: "WhatsApp",
//     description:
//       "Échangez directement avec nous concernant l'aventure.",
//     icon: MessageCircle,
//     link: "#",
//   },
//   {
//     name: "LinkedIn",
//     description:
//       "Suivez les actualités professionnelles et les avancées importantes.",
//     icon: FaLinkedin,
//     link: "#",
//   },
//   {
//     name: "X",
//     description:
//       "Suivez les publications et les annonces.",
//     icon: Send,
//     link: "#",
//   },
// ];


// export default function ContactPage() {
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

//               <Contact size={32} />

//             </div>


//             <p className="mb-5 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
//               Contact
//             </p>


//             <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">

//               Échangeons autour de cette aventure.

//             </h1>


//             <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#A1A1AA]">

//               Une question, une suggestion ou une volonté
//               de suivre cette évolution ?

//               Nous sommes disponibles pour échanger.

//             </p>


//           </motion.div>


//         </div>

//       </section>





//       {/* Contacts */}

//       <section className="py-24">

//         <div className="mx-auto max-w-6xl px-6 lg:px-8">


//           <div className="grid gap-6 md:grid-cols-2">


//             {contacts.map((contact, index) => {

//               const Icon = contact.icon;


//               return (

//                 <motion.a
//                   key={contact.name}
//                   href={contact.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   transition={{
//                     duration: 0.5,
//                     delay: index * 0.1,
//                     ease: "easeOut",
//                   }}
//                   className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20"
//                 >

//                   <div className="flex gap-5">


//                     <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FF9E01]/10 text-[#FF9E01]">

//                       <Icon size={24} />

//                     </div>



//                     <div>

//                       <h2 className="text-xl font-semibold text-white">

//                         {contact.name}

//                       </h2>


//                       <p className="mt-3 leading-7 text-[#A1A1AA]">

//                         {contact.description}

//                       </p>


//                     </div>


//                   </div>


//                 </motion.a>

//               );

//             })}


//           </div>


//         </div>

//       </section>





//       {/* Message final */}

//       <section className="border-t border-white/10 py-24">


//         <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">


//           <p className="text-2xl leading-relaxed text-white sm:text-3xl">

//             Chaque grande aventure commence par une rencontre.

//             Nous serons heureux d'échanger avec les personnes
//             qui souhaitent suivre ce chemin.

//           </p>


//         </div>


//       </section>


//     </main>
//   );
// }







// "use client";

// import { motion } from "framer-motion";
// import {
//   Mail,
//   MessageCircle,
//   Send,
//   Contact,
// } from "lucide-react";

// import {
//   FaLinkedin,
// } from "react-icons/fa";


// const contacts = [
//   {
//     name: "Email",
//     description:
//       "Pour toute question, proposition ou prise de contact professionnelle.",
//     icon: Mail,
//     link: "mailto:contact@projet-y.com",
//   },
//   {
//     name: "WhatsApp",
//     description:
//       "Échangez directement avec nous concernant l'aventure.",
//     icon: MessageCircle,
//     link: "#",
//   },
//   {
//     name: "LinkedIn",
//     description:
//       "Suivez les actualités professionnelles et les avancées importantes.",
//     icon: FaLinkedin,
//     link: "#",
//   },
//   {
//     name: "X",
//     description:
//       "Suivez les publications et les annonces.",
//     icon: Send,
//     link: "#",
//   },
// ];


// export default function ContactPage() {
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

//               <Contact size={32} />

//             </div>


//             <p className="mb-5 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
//               Contact
//             </p>


//             <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">

//               Échangeons autour de cette aventure.

//             </h1>


//             <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#A1A1AA]">

//               Une question, une suggestion ou une volonté
//               de suivre cette évolution ?

//               Nous sommes disponibles pour échanger.

//             </p>


//           </motion.div>


//         </div>

//       </section>




//       {/* Contacts */}

//       <section className="py-24">

//         <div className="mx-auto max-w-6xl px-6 lg:px-8">


//           <div className="grid gap-6 md:grid-cols-2">


//             {contacts.map((contact, index) => {

//               const Icon = contact.icon;


//               return (

//                 <motion.a
//                   key={contact.name}
//                   href={contact.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   initial={{
//                     opacity: 0,
//                     y: 30,
//                   }}
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
//                   className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20"
//                 >

//                   <div className="flex gap-5">


//                     <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FF9E01]/10 text-[#FF9E01]">

//                       <Icon size={24} />

//                     </div>



//                     <div>

//                       <h2 className="text-xl font-semibold text-white">

//                         {contact.name}

//                       </h2>


//                       <p className="mt-3 leading-7 text-[#A1A1AA]">

//                         {contact.description}

//                       </p>


//                     </div>


//                   </div>


//                 </motion.a>

//               );

//             })}


//           </div>


//         </div>

//       </section>




//       {/* Message final */}

//       <section className="border-t border-white/10 py-24">


//         <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">


//           <p className="text-2xl leading-relaxed text-white sm:text-3xl">

//             Chaque grande aventure commence par une rencontre.

//             Nous serons heureux d'échanger avec les personnes
//             qui souhaitent suivre ce chemin.

//           </p>


//         </div>


//       </section>


//     </main>
//   );
// }