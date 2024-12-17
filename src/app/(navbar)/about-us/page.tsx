"use client";

import { useRouter } from "next/navigation";

import CastCarousel from "./_components/cast-carousel";
import { TrailerSynopsis } from "./_components/trailer-synopsis";

export default function Show() {
  const router = useRouter();
  const onClickBuy = () => {
    router.push("/store");
  };

  return (
    <main className="font-safira-march">
      <TrailerSynopsis onClickBuy={onClickBuy} />
      <div className="flex flex-col items-center h-screen">
        <div className="relative max-w-3xl w-full px-4 lg:px-0 py-6 mt-20">
          <div className="my-2">
            <CastCarousel />
          </div>
        </div>
      </div>
    </main>
  );
}
