"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  ShieldCheck,
  Users,
} from "lucide-react";
import FedaPayButton from "@/components/FedaPayButton";
import FedaPayLoader from "@/components/payment/FedapayLoader";


const reasons = [
  "Finaliser le développement du premier prototype",
  "Mettre en place les ressources techniques nécessaires",
  "Préparer les premières phases de test",
  "Construire les bases pour la suite du projet",
];


export default function SupportPage() {
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

              <Heart size={32} />

            </div>


            <p className="mb-5 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
              Soutenir le Projet Y
            </p>


            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">

              Aidez-nous à franchir la prochaine étape.

            </h1>


            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#A1A1AA]">

              Depuis plusieurs mois, nous construisons le Projet Y avec
              patience et détermination.

              Aujourd'hui, le premier prototype approche d'une étape
              importante, et nous avons besoin de personnes qui souhaitent
              accompagner cette aventure.

            </p>


          </motion.div>


        </div>

      </section>





      {/* Pourquoi soutenir */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">


          <div className="grid gap-8 lg:grid-cols-2">



            <motion.div
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
            >

              <h2 className="text-3xl font-semibold text-white">

                Votre soutien nous aide concrètement à :

              </h2>


              <ul className="mt-8 space-y-5">

                {reasons.map((reason) => (

                  <li
                    key={reason}
                    className="flex gap-3 text-[#A1A1AA]"
                  >

                    <CheckCircle2
                      size={22}
                      className="shrink-0 text-[#FF9E01]"
                    />

                    <span>
                      {reason}
                    </span>

                  </li>

                ))}

              </ul>


            </motion.div>





            {/* Contribution */}

            <motion.div
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
            >

              <ShieldCheck
                size={36}
                className="text-[#FF9E01]"
              />


              <h2 className="mt-6 text-3xl font-semibold text-white">

                Chaque contribution compte.

              </h2>


              <p className="mt-5 leading-8 text-[#A1A1AA]">

                Que ce soit 1 000 FCFA ou le montant de votre choix,
                votre participation contribue directement aux prochaines
                étapes du Projet Y.

              </p>


              <p className="mt-4 leading-8 text-[#A1A1AA]">

                Lorsque plusieurs personnes décident de soutenir une même
                vision, même les petites contributions peuvent permettre
                de grandes avancées.

              </p>


              <Link
                href="https://sandbox-me.fedapay.com/soutiens-au-projet-y"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#FF9E01] px-7 py-4 font-semibold text-black transition hover:opacity-90"
              >

                Soutenir le Projet Y


                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />

              </Link>


              <p className="mt-5 text-sm text-[#A1A1AA]">

                Paiement sécurisé via notre solution partenaire.

              </p>


            </motion.div>


          </div>


        </div>


      </section>





      {/* Alternative */}

      <section className="border-y border-white/10 py-24">

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">


          <Users
            size={36}
            className="mx-auto text-[#FF9E01]"
          />


          <h2 className="mt-6 text-3xl font-semibold text-white">

            Vous souhaitez aider autrement ?

          </h2>


          <p className="mt-5 text-lg leading-8 text-[#A1A1AA]">

            Si vous ne pouvez pas participer financièrement,
            vous pouvez également rejoindre notre communauté,
            partager le projet, donner votre avis ou simplement
            suivre son évolution.

            Chaque personne qui croit en cette aventure compte.

          </p>


          <Link
            href="/community"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white/5"
          >

            Rejoindre la communauté

            <ArrowRight size={18} />

          </Link>


        </div>

      </section>





      {/* Closing */}

      <section className="py-24">

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">


          <p className="text-2xl leading-relaxed text-white sm:text-3xl">

            Aujourd'hui, le Projet Y est encore en construction.

            Demain, cette aventure portera les traces de toutes
            les personnes qui auront décidé d'y croire dès le début.

          </p>


        </div>

      </section>


    </main>
  );
}








// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   CheckCircle2,
//   Heart,
//   ShieldCheck,
// } from "lucide-react";


// const reasons = [
//   "Poursuivre le travail de développement",
//   "Finaliser les prochaines étapes importantes",
//   "Préparer les premières expérimentations",
//   "Faire grandir une communauté engagée",
// ];


// export default function SupportPage() {
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

//               <Heart size={32} />

//             </div>


//             <p className="mb-5 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
//               Soutenir l'aventure
//             </p>


//             <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">

//               Chaque grande vision commence avec des personnes qui y croient.

//             </h1>


//             <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#A1A1AA]">

//               Votre soutien nous accompagne dans la construction
//               de cette aventure et nous aide à poursuivre le travail
//               engagé avec patience et responsabilité.

//             </p>


//           </motion.div>


//         </div>

//       </section>





//       {/* Pourquoi soutenir */}

//       <section className="py-24">

//         <div className="mx-auto max-w-7xl px-6 lg:px-8">


//           <div className="grid gap-8 lg:grid-cols-2">



//             <motion.div
//               animate={{
//                 opacity: 1,
//                 x: 0,
//               }}
//               transition={{
//                 duration: 0.6,
//                 ease: "easeOut",
//               }}
//               className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
//             >

//               <h2 className="text-3xl font-semibold text-white">

//                 Votre soutien contribue à :

//               </h2>


//               <ul className="mt-8 space-y-5">

//                 {reasons.map((reason) => (

//                   <li
//                     key={reason}
//                     className="flex gap-3 text-[#A1A1AA]"
//                   >

//                     <CheckCircle2
//                       size={22}
//                       className="shrink-0 text-[#FF9E01]"
//                     />

//                     <span>
//                       {reason}
//                     </span>

//                   </li>

//                 ))}

//               </ul>


//             </motion.div>





//             {/* Payment */}

//             <motion.div
//               animate={{
//                 opacity: 1,
//                 x: 0,
//               }}
//               transition={{
//                 duration: 0.6,
//                 ease: "easeOut",
//               }}
//               className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
//             >

//               <ShieldCheck
//                 size={36}
//                 className="text-[#FF9E01]"
//               />


//               <h2 className="mt-6 text-3xl font-semibold text-white">

//                 Un soutien simple et sécurisé.

//               </h2>


//               <p className="mt-5 leading-8 text-[#A1A1AA]">

//                 Les contributions sont réalisées via une solution
//                 de paiement externe sécurisée.

//                 Aucune information bancaire n'est conservée
//                 sur ce site.

//               </p>



//               {/* Remplacement futur par lien FedaPay */}

//               <Link
//                 href="#"
//                 className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#FF9E01] px-7 py-4 font-semibold text-black transition hover:opacity-90"
//               >

//                 Soutenir maintenant


//                 <ArrowRight
//                   size={18}
//                   className="transition-transform group-hover:translate-x-1"
//                 />

//               </Link>


//               <p className="mt-5 text-sm text-[#A1A1AA]">

//                 Vous serez redirigé vers une page de paiement sécurisée.

//               </p>


//             </motion.div>


//           </div>


//         </div>


//       </section>




//       {/* Closing */}

//       <section className="border-t border-white/10 py-24">

//         <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

//           <p className="text-2xl leading-relaxed text-white sm:text-3xl">

//             Votre soutien représente plus qu'une contribution.

//             Il accompagne les premières étapes d'une aventure
//             qui continue de se construire.

//           </p>

//         </div>

//       </section>


//     </main>
//   );
// }




// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   CheckCircle2,
//   Heart,
//   ShieldCheck,
// } from "lucide-react";


// const reasons = [
//   "Poursuivre le travail de développement",
//   "Finaliser les prochaines étapes importantes",
//   "Préparer les premières expérimentations",
//   "Faire grandir une communauté engagée",
// ];


// export default function SupportPage() {
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

//               <Heart size={32} />

//             </div>


//             <p className="mb-5 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">
//               Soutenir l'aventure
//             </p>


//             <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">

//               Chaque grande vision commence avec des personnes qui y croient.

//             </h1>


//             <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#A1A1AA]">

//               Votre soutien nous accompagne dans la construction
//               de cette aventure et nous aide à poursuivre le travail
//               engagé avec patience et responsabilité.

//             </p>


//           </motion.div>


//         </div>

//       </section>




//       {/* Pourquoi soutenir */}

//       <section className="py-24">

//         <div className="mx-auto max-w-7xl px-6 lg:px-8">


//           <div className="grid gap-8 lg:grid-cols-2">


//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: -20,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 x: 0,
//               }}
//               viewport={{
//                 once: true,
//               }}
//               transition={{
//                 duration: 0.6,
//               }}
//               className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
//             >

//               <h2 className="text-3xl font-semibold text-white">

//                 Votre soutien contribue à :

//               </h2>


//               <ul className="mt-8 space-y-5">

//                 {reasons.map((reason) => (

//                   <li
//                     key={reason}
//                     className="flex gap-3 text-[#A1A1AA]"
//                   >

//                     <CheckCircle2
//                       size={22}
//                       className="shrink-0 text-[#FF9E01]"
//                     />

//                     <span>
//                       {reason}
//                     </span>

//                   </li>

//                 ))}

//               </ul>


//             </motion.div>




//             {/* Payment */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: 20,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 x: 0,
//               }}
//               viewport={{
//                 once: true,
//               }}
//               transition={{
//                 duration: 0.6,
//               }}
//               className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
//             >

//               <ShieldCheck
//                 size={36}
//                 className="text-[#FF9E01]"
//               />


//               <h2 className="mt-6 text-3xl font-semibold text-white">

//                 Un soutien simple et sécurisé.

//               </h2>


//               <p className="mt-5 leading-8 text-[#A1A1AA]">

//                 Les contributions sont réalisées via une solution
//                 de paiement externe sécurisée.

//                 Aucune information bancaire n'est conservée
//                 sur ce site.

//               </p>


//               {/* Remplacement futur par lien FedaPay */}

//               <Link
//                 href="#"
//                 className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#FF9E01] px-7 py-4 font-semibold text-black transition hover:opacity-90"
//               >

//                 Soutenir maintenant


//                 <ArrowRight
//                   size={18}
//                   className="transition-transform group-hover:translate-x-1"
//                 />

//               </Link>


//               <p className="mt-5 text-sm text-[#A1A1AA]">

//                 Vous serez redirigé vers une page de paiement sécurisée.

//               </p>


//             </motion.div>


//           </div>


//         </div>


//       </section>



//       {/* Closing */}

//       <section className="border-t border-white/10 py-24">

//         <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

//           <p className="text-2xl leading-relaxed text-white sm:text-3xl">

//             Votre soutien représente plus qu'une contribution.

//             Il accompagne les premières étapes d'une aventure
//             qui continue de se construire.

//           </p>

//         </div>

//       </section>


//     </main>
//   );
// }