"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  QrCode,
  ShieldCheck,
} from "lucide-react";

export default function QrSupportSection() {
  return (
    <section className="border-t border-white/10 bg-[#09090B] py-24">

      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        <motion.div
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12"
        >

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Texte */}

            <div>

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF9E01]/10 text-[#FF9E01]">

                <QrCode size={28} />

              </div>

              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#FF9E01]">

                Paiement rapide

              </p>

              <h2 className="text-4xl font-semibold tracking-tight text-white">

                Contribuez simplement en scannant ce QR Code.

              </h2>

              <p className="mt-6 text-lg leading-8 text-[#A1A1AA]">

                Si vous utilisez votre téléphone, il vous suffit de
                scanner ce QR Code avec l'appareil photo du téléphone ou votre application de paiement
                compatible afin d'accéder directement à notre page de
                contribution sécurisée.

              </p>

              <p className="mt-5 text-lg leading-8 text-[#A1A1AA]">

                Une solution simple, rapide et sécurisée pour soutenir
                l'évolution du Projet Y.

              </p>

              <div className="mt-8 flex items-center gap-3 text-white">

                <ShieldCheck
                  size={22}
                  className="text-[#FF9E01]"
                />

                <span>
                  Paiement entièrement sécurisé via FedaPay.
                </span>

              </div>

            </div>

            {/* QR */}

            <div className="flex justify-center">

  <div className="rounded-[2rem] border border-white/10 bg-white p-3 shadow-2xl">

    <Image
      src="/images/qr.png"
      alt="QR Code FedaPay"
      width={225}
      height={225}
      priority
      className="h-auto w-[420px] max-w-full rounded-2xl"
    />

  </div>

</div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}