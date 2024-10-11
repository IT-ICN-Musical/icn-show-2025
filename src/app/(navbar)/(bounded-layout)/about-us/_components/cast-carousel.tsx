"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { casts } from "../_constants/casts";

const CastCarousel = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const checkScreenSize = () => {
    if (window.innerWidth > 768) {
      setIsLargeScreen(true);
    } else {
      setIsLargeScreen(false);
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleSlideClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  return (
    <>
      <h1 className="py-1">Featuring Cast</h1>

      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView="auto"
          centeredSlides={true}
          grabCursor={true}
          loop={true}
          rewind={true}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          navigation={isLargeScreen}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="mySwiper"
        >
          {casts.map((cast, index) => (
            <SwiperSlide
              key={index}
              className="mb-8"
              onClick={() => handleSlideClick(index)}
            >
              <div className="w-auto h-74 pt-10 transition-transform transform hover:scale-105 duration-300">
                <div className="relative w-64 h-64 bg-white border border-primary-700 rounded-lg overflow-visible pt-15">
                  <div className="absolute inset-x-0 -top-8 h-[calc(65%+3rem)] overflow-visible">
                    <Image
                      src={cast.image}
                      alt={cast.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="rounded-t-lg object-cover object-top"
                    />
                  </div>
                  <div className="absolute bottom-0 w-full h-[35%] bg-primary-700 p-3 text-white rounded-b-lg">
                    <div className="flex justify-between items-center mb-1">
                      <h2 className="text-[12px] font-bold font-mont">
                        {cast.name}
                      </h2>
                      <div className="flex flex-col items-end">
                        <p className="text-[8px] font-medium font-mont">
                          Playing as
                        </p>
                        <p className="text-[12px] font-bold font-mont">
                          {cast.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-[8px] font-mont">{cast.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default CastCarousel;
