"use client";

import { useCartStore } from "@/store/cart";
import { ArrowRight, BadgeCheck, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderID = searchParams.get("orderID");
  const { resetCart } = useCartStore();

  useEffect(() => {
    resetCart();
  }, [resetCart]);

  return (
    <div className="w-full h-full min-h-[100vh] flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <BadgeCheck
          size={192}
          strokeWidth={1}
          className="max-w-full asepct-square text-emerald-400 mb-2"
        />
        <Typography variant="h4" as="h4" className="font-semibold mb-4">
          Payment successful!
        </Typography>
        <Typography variant="p" as="p" className="text-sm text-center mb-4">
          Please check your email inbox (including spam/junk inbox) for further
          instructions for your purchase.
        </Typography>

        <Typography
          variant="p"
          as="p"
          className="text-sm text-center font-light"
        >
          Contact us via Telegram/WhatsApp if there are any issues with your
          purchase (ID: <span className="font-mono">{orderID}</span>)
        </Typography>
        <ul className="mb-8">
          <li>
            <Typography variant="p" className="font-light text-sm">
              👤 Karin (
              <Link
                className="underline text-sky-400 hover:opacity-75 transition-opacity duration-250"
                href="https://t.me/starryseven"
              >
                @starryseven
              </Link>{" "}
              /{" "}
              <Link
                href="https://wa.me/6582604648"
                className="underline text-sky-400 hover:opacity-75 transition-opacity duration-250"
              >
                +65 8260 4648
              </Link>
              )
            </Typography>
          </li>
          <li>
            <Typography variant="p" className="font-light text-sm">
              👤 Theonie (
              <Link
                className="underline text-sky-400 hover:opacity-75 transition-opacity duration-250"
                href="https://t.me/theonie0412"
              >
                @theonie0412
              </Link>{" "}
              /{" "}
              <Link
                href="https://wa.me/628116097663"
                className="underline text-sky-400 hover:opacity-75 transition-opacity duration-250"
              >
                +62 8116097663
              </Link>
              )
            </Typography>
          </li>
        </ul>
        <Button className="" variant="outline" onClick={() => router.push("/")}>
          Back to Home <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
