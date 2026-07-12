"use client";

import Script from "next/script";
import { useState } from "react";

export default function FedaPayLoader() {

  const [loaded, setLoaded] = useState(false);


  return (
    <Script
      id="fedapay-checkout"
      src="https://cdn.fedapay.com/checkout.js"
      strategy="afterInteractive"
      onLoad={() => {
        console.log("FedaPay chargé");
        setLoaded(true);
        console.log(window.FedaPay);
      }}
    />
  );
}