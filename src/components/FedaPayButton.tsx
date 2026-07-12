"use client";

import { ArrowRight, Heart } from "lucide-react";
import { useFedaPay } from "@/hooks/useFedaPay";

export default function FedaPayButton() {
  const { openCheckout } = useFedaPay();

  return (
    <button
      onClick={openCheckout}
      className="group inline-flex items-center gap-3 rounded-full bg-[#FF9E01] px-7 py-4 font-semibold text-black transition hover:opacity-90 cursor-pointer"
    >
      <Heart size={20} />

      Soutenir le Projet Y

      <ArrowRight
        size={18}
        className="transition-transform group-hover:translate-x-1"
      />
    </button>
  );
}