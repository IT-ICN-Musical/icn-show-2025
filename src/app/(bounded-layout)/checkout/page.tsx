"use client";

import ICN2024 from "@/_assets/icn2024.png";
import MerchPic from "@/_assets/merch.jpeg";
import { fetchPromoCodeDetails } from "@/api/shop";
import { useCartStore } from "@/store/cart";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import { AppliedPromotionBanner } from "./_components/applied-promotion-banner";
import { MerchandiseCardCheckout } from "./_components/merchandise-card-checkout";
import { ShowCardCheckout } from "./_components/show-card-checkout";

export default function Checkout() {
  const router = useRouter();
  // const cart = useCartStore((state) => state.cart);
  // const bundles = cart.filter((item) => item.type === "bundle");
  // const tickets = cart.filter((item) => item.type === "ticket");
  // const clothings = cart.filter((item) => item.type === "clothing");
  const [tickets, setTickets] = useState([
    {
      img: ICN2024,
      category: "A",
      time: "19 Feb 2025, 12.00 - 14.00 SGT",
      price: 10,
      quantity: 4,
    },
  ]);
  const [merchs, setMerchs] = useState([
    {
      img: MerchPic,
      name: "T-shirt, Color",
      size: "L",
      price: 10,
      quantity: 1,
    },
    {
      img: MerchPic,
      name: "T-shirt, Color",
      size: "L",
      price: 10,
      quantity: 1,
    },
  ]);
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  // const [promoDetails, setPromoDetails] =
  //   useState<RetrievePromoCodeDetailsResponse | null>(null);
  // const [promoError, setPromoError] = useState("");

  return (
    <div className="relative flex flex-col min-h-screen h-screen bg-zinc-50">
      <div className="w-full overflow-y-auto pt-[60px] pb-[72px]">
        <div className="absolute top-0 left-0 w-full bg-white shadow-sm py-4 z-20">
          <button
            className="absolute left-5 text-black text-3xl top-3"
            style={{ zIndex: 1 }}
            onClick={() => router.back()}
          >
            ←
          </button>
          <h1 className="font-safira-march text-center">Checkout</h1>
        </div>
        <div className="px-4 my-2">
          {isPromoApplied && <AppliedPromotionBanner />}
        </div>
        {tickets.map((ticket, index) => (
          <div key={index}>
            <ShowCardCheckout
              name={ticket.category}
              time={ticket.time}
              quantity={ticket.quantity}
              image={ticket.img}
            />
          </div>
        ))}
        <div className="px-4">
          {merchs.map((merch, index) => (
            <div key={index}>
              <MerchandiseCardCheckout
                name={merch.name}
                size={merch.size}
                quantity={merch.quantity}
                image={merch.img}
              />
            </div>
          ))}
          {!isPromoApplied && (
            <div>
              <div className="bg-white rounded-lg shadow-sm flex flex-col h-[102px] p-4">
                <p className="font-mont text-sm font-medium mb-1">Promo Code</p>
                <div className="flex-row flex justify-between">
                  <input
                    type="text"
                    placeholder="Enter the Promo Code"
                    className="p-3 rounded-lg border-gray-200 border text-sm font-mont font-normal w-9/12"
                    // value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <Button
                    className="bg-primary-700 h-full"
                    onClick={async () => {
                      try {
                        // const response = await fetchPromoCodeDetails(promoCode);
                        // setPromoDetails(response);
                        setIsPromoApplied(true);
                      } catch {
                        // setPromoError("Invalid Promo Code");
                        // setPromoDetails(null);
                        setIsPromoApplied(false);
                      }
                    }}
                  >
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          )}
          <div className="my-4 p-4 bg-white rounded-lg shadow">
            <p className="text-sm font-mont font-medium mb-3">Price Details</p>
            {tickets.map((ticket, index) => (
              <div key={index} className="flex flex-row justify-between">
                <p className="text-sm font-mont font-normal my-1">
                  CAT {ticket.category} Ticket Price
                </p>
                <p className="text-sm font-mont font-normal my-1">
                  SGD {ticket.price.toFixed(2)} x {ticket.quantity}
                </p>
              </div>
            ))}
            {merchs.map((merch, index) => (
              <div key={index} className="flex flex-row justify-between">
                <p className="text-sm font-mont font-normal my-1">
                  {merch.name}
                </p>
                <p className="text-sm font-mont font-normal my-1">
                  SGD {merch.price.toFixed(2)} x {merch.quantity}
                </p>
              </div>
            ))}
            <div className="flex flex-row justify-between">
              <p className="text-sm font-mont font-normal my-1">
                Service Fee (10%)
              </p>
              <p className="text-sm font-mont font-normal my-1">SGD 5.60</p>
            </div>
            <div className="flex flex-row justify-between border-t mt-2 py-2">
              <p className="text-sm font-mont font-semibold">Total</p>
              <p className="text-sm font-mont font-semibold">SGD 61.60</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-xl p-4 absolute left-0 bottom-0 w-full">
          <Button className="bg-primary-700 rounded-lg w-full text-white text-center h-11">
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  );
}
