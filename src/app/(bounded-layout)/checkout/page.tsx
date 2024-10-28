"use client";

import ICN2024 from "@/_assets/icn2024.png";
import MerchPic from "@/_assets/merch.jpeg";
import TicketTemplate from "@/_assets/ticket-template.svg";
import { Clock12, Ruler, Shirt, Ticket } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export default function Checkout() {
  const router = useRouter();
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
  ]);

  return (
    <div className="relative flex flex-col min-h-screen h-screen">
      <div className="bg-zinc-50 w-full flex-grow ">
        <div className="top-0" style={{ zIndex: 3 }}>
          <button
            className="absolute left-5 text-black text-3xl"
            onClick={() => router.back()}
          >
            ←
          </button>
          <header className="text-center bg-white shadow-sm pb-4 mb-2">
            <h1 className="font-safira-march text-center">Checkout</h1>
          </header>
        </div>
        {/* Tickets */}
        <div className="px-4">
          {tickets.map((ticket, index) => (
            <div key={index} className="relative mb-2">
              <div className="absolute top-1">
                <Image
                  src={TicketTemplate}
                  alt="ticket template"
                  className=" object-cover w-full"
                  style={{ zIndex: 0 }}
                />
              </div>
              <div
                className=" p-4 relative flex flex-row items-center"
                style={{ zIndex: 1 }}
              >
                <div>
                  <Image
                    className="w-16 h-16 rounded-sm mr-4"
                    src={ticket.img}
                    alt="ticket image"
                  />
                </div>
                <div>
                  <p className="text-sm font-mont font-medium">
                    Matinee Ticket - CAT {ticket.category}
                  </p>
                  <div className="flex flex-row items-center">
                    <Clock12 strokeWidth={2} className="w-4" color="#71717A" />
                    <p className="font-mont text-xs font-normal ml-1 text-zinc-500">
                      {ticket.time}
                    </p>
                  </div>
                  <div className="flex flex-row items-center">
                    <Ticket strokeWidth={2} className="w-4" color="#71717A" />
                    <p className="font-mont text-xs font-normal ml-1 text-zinc-500">
                      x {ticket.quantity}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Merch */}
          {merchs.map((merch, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg border-gray-200 border flex flex-row mb-2 h-[88px] items-center"
            >
              <div>
                <Image
                  className="w-16 h-16 rounded-sm mr-4"
                  src={merch.img}
                  alt="ticket image"
                />
              </div>
              <div>
                <p className="text-sm font-mont font-medium">{merch.name}</p>
                <div className="flex flex-row items-center">
                  <Ruler strokeWidth={2} className="w-4" color="#71717A" />
                  <p className="font-mont text-xs font-normal ml-1 text-zinc-500">
                    Size {merch.size}
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <Shirt strokeWidth={2} className="w-4" color="#71717A" />
                  <p className="font-mont text-xs font-normal ml-1 text-zinc-500">
                    x {merch.quantity}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="bg-white rounded-lg shadow-sm flex flex-col h-[102px] p-4">
            <p className="font-mont text-sm font-medium mb-1">Promo Code</p>
            <div className="flex-row flex justify-between">
              <input
                type="text"
                placeholder="Enter the Promo Code"
                className="p-3 rounded-lg border-gray-200 border text-sm font-mont font-light w-9/12"
              />
              <Button className="bg-primary-700 h-full">Apply</Button>
            </div>
          </div>
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
        <div className="bg-white shadow-sm p-4 absolute bottom-0 w-full">
          <button className="bg-primary-700 rounded-lg w-full text-white text-center h-11">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
