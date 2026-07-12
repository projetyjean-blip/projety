import Hero from "@/components/sections/Hero";
import StorySection from "@/components/sections/StorySection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import Timeline from "@/components/sections/Timeline";
import ConfidentialitySection from "@/components/sections/ConfidentialitySection";
import SupportSection from "@/components/sections/SupportSection";
import CommunitySection from "@/components/sections/CommunitySection";
import JournalPreview from "@/components/sections/JournalPreview";
import CreatorSection from "@/components/sections/CreatorSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CreatorSection />
      <StorySection />
      <PhilosophySection />
      <Timeline />
      <ConfidentialitySection />
      <SupportSection />
      <CommunitySection />
      <JournalPreview />
    </>
  );
}
// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Heart,
//   Users,
// } from "lucide-react";


// export default function Home() {

//   return (
//     <div className="overflow-hidden">


//       {/* HERO */}

//       <section className="relative flex min-h-[90vh] items-center">

//         <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">


//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 30,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.8,
//             }}
//             className="max-w-3xl"
//           >


//             {/* Badge */}

//             <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#A1A1AA]">

//               <span className="h-2 w-2 rounded-full bg-[#FF9E01]" />

//               Une vision en construction

//             </div>



//             {/* Title */}

//             <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">

//               Construisons ensemble
//               une technologie qui
//               rapproche les êtres humains.

//             </h1>



//             {/* Description */}

//             <p className="mt-8 max-w-2xl text-lg leading-8 text-[#A1A1AA]">

//               Derrière chaque innovation se cache une histoire
//               faite de réflexion, de travail et de persévérance.

//               Aujourd'hui, nous partageons cette aventure et invitons
//               celles et ceux qui souhaitent accompagner cette naissance
//               à rejoindre la communauté.

//             </p>



//             {/* Buttons */}

//             <div className="mt-10 flex flex-col gap-4 sm:flex-row">


//               <Link
//                 href="/support"
//                 className="group flex items-center justify-center gap-2 rounded-full bg-[#FF9E01] px-7 py-4 font-semibold text-black transition hover:opacity-90"
//               >

//                 <Heart size={20} />

//                 Soutenir cette aventure


//                 <ArrowRight
//                   size={18}
//                   className="transition-transform group-hover:translate-x-1"
//                 />

//               </Link>



//               <Link
//                 href="/community"
//                 className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white/5"
//               >

//                 <Users size={20} />

//                 Rejoindre la communauté

//               </Link>


//             </div>


//           </motion.div>



//         </div>



//         {/* Décoration */}

//         <div className="pointer-events-none absolute right-[-200px] top-1/2 hidden h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#FF9E01]/10 blur-3xl lg:block" />


//       </section>

//     </div>
//   );
// }