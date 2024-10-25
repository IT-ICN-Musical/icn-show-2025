"use client";

import { MotionConfig, type Variants, motion, useAnimate } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";

import Background1 from "./_assets/background.png";
import Cave from "./_assets/cave.png";
import HourGlass from "./_assets/hour-glass.png";
import IcnLogo from "./_assets/icn-logo.png";
import LeftForeground from "./_assets/left-foreground.png";
import MainForeground from "./_assets/main-foreground.png";
import RightForeground from "./_assets/right-foreground.png";

export default function LandingPage() {
  const [scope, animate] = useAnimate();

  const goToPageTwo = () => {
    animate(
      ".background1",
      {
        opacity: 0,
      },
      { duration: 2.5 },
    );
    animate(
      ".cave",
      {
        opacity: 0,
      },
      { duration: 2.5 },
    );
    animate(
      ".icn-logo",
      {
        opacity: 0,
      },
      { duration: 2.5 },
    );
    animate(
      ".icn-logo",
      {
        opacity: 0,
      },
      { duration: 2.5 },
    );
    animate(
      ".first-button",
      {
        opacity: 0,
      },
      { duration: 2.5 },
    );
    animate(
      ".right-foreground",
      {
        opacity: 0,
        transform: "translateX(20%)",
      },
      {
        duration: 2.5,
      },
    );
    animate(
      ".main-foreground",
      {
        opacity: 0,
      },
      { duration: 2.5 },
    );
    animate(
      ".left-foreground",
      {
        scaleX: 1.05,
        transform: "translateX(0)",
      },
      {
        duration: 2.5,
      },
    );
    animate(
      ".synopsis",
      {
        opacity: 1,
      },
      { duration: 2.5 },
    );
  };

  const goToPageThree = () => {
    animate(
      ".right-foreground",
      {
        opacity: 1,
        transform: "translateX(0)",
      },
      { duration: 2.5 },
    );
    animate(
      ".left-foreground",
      {
        opacity: 0,
        transform: "translateX(-10%)",
      },
      { duration: 2.5 },
    );
    animate(
      ".synopsis",
      {
        opacity: 0,
      },
      { duration: 2.5 },
    );
    animate(
      ".sponsors",
      {
        opacity: 1,
      },
      { duration: 2.5 },
    );
  };

  const goToPageFour = () => {
    animate(".count-down", { opacity: 1 }, { duration: 2.5 });
    animate(".sponsors", { opacity: 0 }, { duration: 2.5 });
    animate(
      ".left-foreground",
      { opacity: 1, transform: "translateX(-10%)" },
      { duration: 2.5 },
    );
    animate(
      ".right-foreground",
      { opacity: 1, transform: "translateX(5%)" },
      { duration: 2.5 },
    );
    animate(".hour-glass", { opacity: 1 }, { duration: 2.5 });
  };
  return (
    <div
      className="w-screen h-screen relative overflow-hidden bg-primary-800"
      ref={scope}
    >
      <MotionConfig>
        <Image
          src={Background1}
          alt="background-image"
          className="w-screen h-screen object-cover absolute top-0 background1"
        />

        <Image
          src={Cave}
          alt="cave"
          className="h-screen absolute z-10 left-[50%] -translate-x-[50%] cave"
        />
        <div className="absolute left-[50%] -translate-x-[50%] z-30 top-[50%] -translate-y-[50%] flex flex-col items-center justify-center gap-8">
          <Image src={IcnLogo} alt="icn-logo" className="w-[15rem] icn-logo" />
          <Button
            className="border border-white font-safira-march z-30 first-button"
            onClick={goToPageTwo}
          >
            Scroll down
          </Button>
        </div>
        <Image
          src={LeftForeground}
          alt="left-foreground"
          className="absolute left-0 h-screen top-0 z-20 -translate-x-[10%] left-foreground"
        />
        <Image
          src={RightForeground}
          alt="right-foreground"
          className="absolute right-0 h-screen top-0 z-20 translate-x-[5%] right-foreground"
        />
        <Image
          src={MainForeground}
          alt="main-foreground"
          className="absolute top-0 w-screen h-screen z-10 main-foreground"
        />
      </MotionConfig>
      <motion.div
        className="w-screen h-screen flex items-center justify-end synopsis top-0"
        initial={{ opacity: 0 }}
      >
        <div className="flex items-center flex-col justify-end w-8/12 z-30 absolute">
          <div className="text-white w-3/6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
            magnam nam omnis nulla iure culpa incidunt, beatae mollitia
            perferendis officia, ut eveniet rerum aut aliquam facilis esse?
            Quibusdam, laborum! Temporibus vero delectus ea! Quia nulla optio
            autem corporis quam sunt eveniet, natus quisquam sed voluptas, nam
            odio earum esse quasi vitae velit numquam eligendi? Rerum neque
            praesentium iste molestiae repudiandae?
          </div>
          <Button
            className="border border-white font-safira-march z-30 second-button"
            onClick={goToPageThree}
          >
            Buy Tickets
          </Button>
        </div>
      </motion.div>
      <motion.div
        className="w-screen h-screen items-center justify-start flex sponsors absolute top-0"
        initial={{ opacity: 0 }}
      >
        <div className="flex-col flex gap-20 items-center justify-center w-8/12">
          <Typography variant="h2" className="font-safira-march text-white">
            Sponsors
          </Typography>
          <div className="flex gap-4 flex-wrap w-[40rem] justify-center">
            {new Array(8).fill(0).map((_, index) => (
              <div key={index} className="w-1/5 aspect-square bg-white"></div>
            ))}
          </div>
          <Button
            className="border border-white font-safira-march z-30 second-button"
            onClick={goToPageFour}
          >
            Go Down (temporary)
          </Button>
        </div>
      </motion.div>
      <motion.div
        className="absolute top-0 right-0 w-screen h-screen flex items-center justify-center hour-glass"
        initial={{ opacity: 0 }}
      >
        <Image src={HourGlass} alt="hour-glass" />
      </motion.div>
      <motion.div
        className="absolute top-0 z-10 main-foreground font-safira-march h-screen w-screen flex items-center justify-center gap-40 count-down"
        initial={{ opacity: 0 }}
      >
        <div>
          <Typography variant="h1" className="text-white">
            00
          </Typography>
          <Typography variant="h6" className="text-white">
            Days
          </Typography>
        </div>
        <div>
          <Typography variant="h1" className="text-white">
            00
          </Typography>
          <Typography variant="h6" className="text-white">
            Hours
          </Typography>
        </div>
        <div>
          <Typography variant="h1" className="text-white">
            00
          </Typography>
          <Typography variant="h6" className="text-white">
            Minutes
          </Typography>
        </div>
        <div>
          <Typography variant="h1" className="text-white">
            00
          </Typography>
          <Typography variant="h6" className="text-white">
            Seconds
          </Typography>
        </div>
      </motion.div>
    </div>
  );
}
