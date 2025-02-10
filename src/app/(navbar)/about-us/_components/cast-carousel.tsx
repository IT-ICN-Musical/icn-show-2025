"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";

import { casts } from "../_constants/casts";

const CastCarousel = () => {
  const [currentCast, setCurrentCast] = useState(0);
  const cast = casts[currentCast];

  return (
    <>
      <Typography variant="h4" className="font-safira py-1 text-center">
        Featuring Casts
      </Typography>

      <div className="w-full mt-8 flex flex-col overflow-x-auto">
        <div className="flex flex-row gap-2 md:gap-10 w-fit md:w-full justify-center">
          {casts.map((cast, idx) => {
            return (
              <Button
                variant={idx === currentCast ? "default" : "outline"}
                key={idx}
                onClick={() => {
                  setCurrentCast(idx);
                }}
                className="font-mont text-lg border-2 border-primary-800 hover:border-black"
                size="lg"
              >
                {cast.role.split(" ")[0]}
              </Button>
            );
          })}
        </div>
      </div>
      <div className="w-auto h-fit pt-10 flex justify-center">
        <div className="relative w-[30rem] h-[45rem] g-white border-[16px] border-primary-800 rounded-xl overflow-visible pt-15 group box-border">
          <div className="bg-primary-800 w-full h-[50%] bg-primary-800">
            <div
              className="w-full h-full rounded-lg bg-white"
              style={{
                backgroundImage: `url(${cast.background.src})`,
                backgroundSize: "cover",
              }}
            >
              <div className="absolute inset-x-0 -top-8 h-[calc(65%+3rem)] overflow-visible">
                <Image
                  src={cast.image}
                  alt={cast.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-t-lg object-cover object-top transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-[50%] bg-primary-800 p-3 text-white">
            <div className="flex flex-col items-center mb-2 gap">
              <h2 className="text-3xl font-semibold font-mont">{cast.role}</h2>
              <p className="text-md font-light font-mont">played by</p>
              <p className="text-2xl font-semibold font-mont">{cast.name}</p>
            </div>
            <p className="mt-8 text-base font-mont text-justify">
              {cast.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CastCarousel;
