"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Users,
} from "lucide-react";


const community = {
  name: "WhatsApp",
  description:
    "Rejoignez les premières personnes qui suivent l'évolution du Projet Y, recevez les nouvelles importantes et découvrez les prochaines étapes de cette aventure.",
  icon: MessageCircle,
  link: "https://chat.whatsapp.com/BHDVlJdAG2y31XztXiJWtm?s=cl&p=a&ilr=4",
};


export default function CommunityPage() {
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
            }}
          >

            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#FF9E01]/10 text-[#FF9E01]">

              <Users size={32} />

            </div>

            <p className="mb-5 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
              Communauté
            </p>


            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">

              Suivez les premières étapes du Projet Y.

            </h1>


            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#A1A1AA]">

              Chaque grande aventure commence avec quelques personnes
              qui décident de croire en une vision avant qu'elle soit
              pleinement dévoilée.

              Rejoignez notre communauté pour suivre l'évolution du
              Projet Y, découvrir les avancées importantes et faire
              partie des premières personnes à suivre cette histoire.

            </p>


          </motion.div>


        </div>

      </section>




      {/* WhatsApp uniquement */}

      <section className="py-24">

        <div className="mx-auto max-w-3xl px-6 lg:px-8">


          <motion.a
            href={community.link}
            target="_blank"
            rel="noopener noreferrer"
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="block rounded-3xl border border-white/10 bg-white/[0.03] p-10 transition hover:border-white/20"
          >


            <div className="flex items-start gap-5">


              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FF9E01]/10 text-[#FF9E01]">

                <MessageCircle size={28} />

              </div>



              <div>

                <h2 className="text-2xl font-semibold text-white">

                  Rejoindre la communauté WhatsApp

                </h2>


                <p className="mt-4 leading-7 text-[#A1A1AA]">

                  {community.description}

                </p>


                <div className="mt-6 inline-flex rounded-full bg-[#FF9E01] px-6 py-3 font-semibold text-black">

                  Rejoindre maintenant

                </div>


              </div>


            </div>


          </motion.a>


        </div>

      </section>




      {/* Closing */}

      <section className="border-t border-white/10 py-24">


        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">


          <p className="text-2xl leading-relaxed text-white sm:text-3xl">

            Que vous choisissiez de soutenir financièrement le projet
            ou simplement de suivre son évolution, votre présence
            compte dans cette aventure.

          </p>


        </div>


      </section>


    </main>
  );
}


// "use client";

// import { motion } from "framer-motion";
// import {
//   MessageCircle,
//   Send,
//   Users,
// } from "lucide-react";

// import {
//   FaFacebook,
//   FaLinkedin,
// } from "react-icons/fa";


// const communities = [
//   {
//     name: "WhatsApp",
//     description:
//       "Recevez les nouvelles importantes et suivez les prochaines étapes.",
//     icon: MessageCircle,
//     link: "#",
//   },
//   {
//     name: "Telegram",
//     description:
//       "Un espace pour suivre l'évolution de l'aventure.",
//     icon: Send,
//     link: "#",
//   },
//   {
//     name: "LinkedIn",
//     description:
//         "Découvrez les actualités professionnelles et les avancées importantes.",
//     icon: FaLinkedin,
//     link: "#",
//   },
//   {
//     name: "Facebook",
//     description:
//         "Partagez cette aventure avec votre réseau.",
//     icon: FaFacebook,
//     link: "#",
//   },
// ];


// export default function CommunityPage() {
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

//             <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#FF9E01]/10 text-[#FF9E01]">

//               <Users size={32} />

//             </div>


//             <p className="mb-5 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
//               Communauté
//             </p>


//             <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">

//               Les premières personnes qui écrivent cette histoire.

//             </h1>


//             <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#A1A1AA]">

//               Les grandes aventures ne naissent jamais seules.

//               Nous invitons toutes les personnes intéressées à suivre,
//               encourager et accompagner cette évolution.

//             </p>


//           </motion.div>


//         </div>

//       </section>




//       {/* Community links */}

//       <section className="py-24">

//         <div className="mx-auto max-w-6xl px-6 lg:px-8">


//           <div className="grid gap-6 md:grid-cols-2">


//             {communities.map((community, index) => {

//               const Icon = community.icon;

//               return (

//                 <motion.a
//                   key={community.name}
//                   href={community.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
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
//                   className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20"
//                 >


//                   <div className="flex items-start gap-5">


//                     <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FF9E01]/10 text-[#FF9E01]">

//                       <Icon size={24} />

//                     </div>



//                     <div>

//                       <h2 className="text-xl font-semibold text-white">

//                         Rejoindre {community.name}

//                       </h2>


//                       <p className="mt-3 leading-7 text-[#A1A1AA]">

//                         {community.description}

//                       </p>


//                     </div>


//                   </div>


//                 </motion.a>

//               );

//             })}


//           </div>


//         </div>

//       </section>




//       {/* Closing message */}

//       <section className="border-t border-white/10 py-24">


//         <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">


//           <p className="text-2xl leading-relaxed text-white sm:text-3xl">

//             Chaque message, chaque partage et chaque encouragement
//             participent à écrire les premières pages de cette aventure.

//           </p>


//         </div>


//       </section>


//     </main>
//   );
// }