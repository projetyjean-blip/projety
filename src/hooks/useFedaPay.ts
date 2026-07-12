"use client";

declare global {
  interface Window {
    FedaPay: any;
  }
}

export function useFedaPay() {

  const openCheckout = () => {

    console.log("FedaPay :", window.FedaPay);


    if (!window.FedaPay) {
      alert(
        "Le service de paiement n'est pas encore chargé. Réessayez dans quelques secondes."
      );

      return;
    }


    const widget = window.FedaPay.init({

      public_key:
        process.env.NEXT_PUBLIC_FEDAPAY_PUBLIC_KEY,


      transaction: {
        amount: 5000,
        description:
          "Soutien au Projet Y",
      },


      customer: {
        email: "",
      },


      onComplete(response:any) {

        console.log(
          "Paiement terminé",
          response
        );


        window.location.href =
          "/merci";

      },

    });


    widget.open();

  };


  return {
    openCheckout,
  };
}