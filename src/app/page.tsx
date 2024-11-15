"use client";

import {
  MotionConfig,
  type Variants,
  animate,
  motion,
  useAnimate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { ReactLenis } from "lenis/dist/lenis-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";

import Background1 from "./_assets/background.png";
import Cave from "./_assets/cave.png";
import HourGlass from "./_assets/hour-glass.png";
import IcnLogo from "./_assets/icn-logo.png";
import LeftForeground from "./_assets/left-foreground.png";
import MainForeground from "./_assets/main-foreground.png";
import RightForeground from "./_assets/right-foreground.png";
import Countdown from "./_components/countdown";
import Descriptions from "./_components/descriptions";
import Sponsors from "./_components/sponsors";

const animationOrder = {
  initial: 0,
  bottomInitial: 0.07,
  animation1: 0.28,
  showLogo: 0.29,
  scrollSpace1: 0.36,
  animation2: 0.51,
  scrollSpace2: 0.58,
  animation3: 0.73,
  scrollSpace3: 0.79,
  animation4: 0.94,
  scrollSpace4: 1,
};

export default function LandingPage() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const autoScrollProgress = useMotionValue(0);
  const [autoAnimationComplete, setAutoAnimationComplete] = useState(false);
  const combinedScrollProgress = useMotionValue(0);

  const remainingScrollRange = 1 - animationOrder.showLogo;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!autoAnimationComplete) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [autoAnimationComplete]);

  useEffect(() => {
    const startAutoAnimation = async () => {
      await animate(autoScrollProgress, animationOrder.showLogo, {
        duration: 4,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (value) => {
          combinedScrollProgress.set(value);
        },
        onComplete: () => {
          setAutoAnimationComplete(true);
        },
      });
    };

    startAutoAnimation();
  }, []);

  useEffect(() => {
    if (autoAnimationComplete) {
      const unsubscribe = scrollYProgress.on("change", (latest) => {
        const mappedProgress =
          animationOrder.showLogo + latest * remainingScrollRange;
        combinedScrollProgress.set(mappedProgress);
      });

      return () => unsubscribe();
    }
  }, [autoAnimationComplete, scrollYProgress]);

  const bgPosition = useTransform(combinedScrollProgress, (pos) =>
    pos >= 0.46 ? "relative" : "sticky",
  );

  const initialBgScale = useTransform(
    combinedScrollProgress,
    [animationOrder.bottomInitial, animationOrder.animation1],
    [2, 1],
  );

  const bgY = useTransform(
    combinedScrollProgress,
    [animationOrder.bottomInitial, animationOrder.animation1],
    ["-60%", "0%"],
  );

  const bgOpacity = useTransform(
    combinedScrollProgress,
    [animationOrder.scrollSpace1, animationOrder.scrollSpace1 + 0.07],
    [1, 0],
  );

  const cavePosition = useTransform(combinedScrollProgress, (pos) =>
    pos >= 0.46 ? "relative" : "fixed",
  );

  const caveScale = useTransform(
    combinedScrollProgress,
    [animationOrder.bottomInitial, animationOrder.animation1],
    [3, 1],
  );

  const leftForegroundScale = useTransform(
    combinedScrollProgress,
    [animationOrder.bottomInitial, animationOrder.animation1],
    [3, 1],
  );

  const leftForegroundX = useTransform(
    combinedScrollProgress,
    [
      animationOrder.initial,
      animationOrder.bottomInitial,
      animationOrder.animation1,
      animationOrder.showLogo,
      animationOrder.scrollSpace1,
      animationOrder.animation2,
      animationOrder.scrollSpace2,
      animationOrder.animation3,
      animationOrder.scrollSpace3,
      animationOrder.animation4,
      animationOrder.scrollSpace4,
    ],
    [
      "-30%",
      "-30%",
      "-15%",
      "-15%",
      "-15%",
      "0%",
      "0%",
      "-60%",
      "-60%",
      "-10%",
      "-10%",
    ],
  );

  const rightForegroundScale = useTransform(
    combinedScrollProgress,
    [animationOrder.bottomInitial, animationOrder.animation1],
    [3, 1],
  );

  const rightForegroundX = useTransform(
    combinedScrollProgress,
    [
      animationOrder.initial,
      animationOrder.bottomInitial,
      animationOrder.animation1,
      animationOrder.showLogo,
      animationOrder.scrollSpace1,
      animationOrder.animation2,
      animationOrder.scrollSpace2,
      animationOrder.animation3,
      animationOrder.scrollSpace3,
      animationOrder.animation4,
      animationOrder.scrollSpace4,
    ],
    ["30%", "30%", "0%", "0%", "0%", "80%", "80%", "0%", "0%", "0%", "0%"],
  );

  const logoScale = useTransform(
    combinedScrollProgress,
    [animationOrder.animation1, animationOrder.showLogo],
    [3, 1],
  );

  const logoOpacity = useTransform(
    combinedScrollProgress,
    [
      animationOrder.animation1,
      animationOrder.showLogo,
      animationOrder.scrollSpace1,
      animationOrder.scrollSpace1 + 0.07,
    ],
    [0, 1, 1, 0],
  );

  const logoX = useTransform(
    combinedScrollProgress,
    [
      animationOrder.animation1,
      animationOrder.scrollSpace1,
      animationOrder.animation2,
      animationOrder.scrollSpace2,
    ],
    ["-50%", "-50%", "-50%", "100%"],
  );

  const logoY = useTransform(
    combinedScrollProgress,
    [
      animationOrder.animation1,
      animationOrder.scrollSpace1,
      animationOrder.animation2,
      animationOrder.scrollSpace2,
    ],
    ["-40%", "-40%", "-40%", "100%"],
  );

  const descriptionX = useTransform(
    combinedScrollProgress,
    [
      animationOrder.scrollSpace1,
      animationOrder.animation2,
      animationOrder.scrollSpace2,
      animationOrder.scrollSpace2 + 0.07,
    ],
    ["0%", "90%", "90%", "0%"],
  );

  const descriptionPosition = useTransform(combinedScrollProgress, (pos) =>
    pos >= animationOrder.animation3 || pos < animationOrder.scrollSpace1
      ? "relative"
      : "fixed",
  );

  const descriptionOpacity = useTransform(
    combinedScrollProgress,
    [
      animationOrder.scrollSpace1,
      animationOrder.animation2,
      animationOrder.scrollSpace2,
      animationOrder.scrollSpace2 + 0.07,
    ],
    [0, 1, 1, 0],
  );

  const sponsorsX = useTransform(
    combinedScrollProgress,
    [
      animationOrder.scrollSpace2,
      animationOrder.animation3,
      animationOrder.scrollSpace3,
      animationOrder.scrollSpace3 + 0.07,
    ],
    ["0%", "-30%", "-30%", "0%"],
  );

  const sponsorsPosition = useTransform(combinedScrollProgress, (pos) =>
    pos >= animationOrder.animation4 || pos < animationOrder.scrollSpace2
      ? "relative"
      : "fixed",
  );

  const sponsorsOpacity = useTransform(
    combinedScrollProgress,
    [
      animationOrder.scrollSpace2,
      animationOrder.animation3,
      animationOrder.scrollSpace3,
      animationOrder.scrollSpace3 + 0.07,
    ],
    [0, 1, 1, 0],
  );

  const sponsorScale = useTransform(
    combinedScrollProgress,
    [
      animationOrder.scrollSpace2,
      animationOrder.animation3,
      animationOrder.scrollSpace3,
      animationOrder.scrollSpace3 + 0.07,
    ],
    [0.3, 1, 1, 0.5],
  );

  const countdownPosition = useTransform(combinedScrollProgress, (pos) =>
    pos < animationOrder.scrollSpace3 ? "relative" : "fixed",
  );

  const countdownOpacity = useTransform(
    combinedScrollProgress,
    [
      animationOrder.scrollSpace3,
      animationOrder.animation4,
      animationOrder.scrollSpace4,
    ],
    [0, 1, 1],
  );

  const countdownScale = useTransform(
    combinedScrollProgress,
    [animationOrder.scrollSpace3, animationOrder.animation4],
    [0.3, 1],
  );

  return (
    <MotionConfig reducedMotion="never">
      <ReactLenis root>
        <section ref={targetRef}>
          <div className="relative h-[1000vh] bg-primary-800">
            <motion.img
              src={Background1.src}
              alt="backround-image"
              style={{
                scale: initialBgScale,
                position: bgPosition,
                y: bgY,
                opacity: bgOpacity,
              }}
              className="min-h-screen w-screen object-cover object-bottom top-0 overflow-hidden"
            />
            <motion.img
              src={Cave.src}
              alt="cave"
              style={{
                scale: caveScale,
                opacity: bgOpacity,
                position: cavePosition,
              }}
              className="min-h-screen object-bottom top-0 overflow-hidden"
            />
            <motion.img
              src={LeftForeground.src}
              alt="left-foreground"
              style={{
                x: leftForegroundX,
                scale: leftForegroundScale,
              }}
              className="min-h-screen object-cover object-bottom fixed left-0 top-0 overflow-hidden"
            />
            <motion.img
              src={RightForeground.src}
              alt="right-foreground"
              style={{
                x: rightForegroundX,
                scale: rightForegroundScale,
              }}
              className="min-h-screen object-cover object-bottom fixed right-0 top-0 overflow-hidden"
            />
            <motion.div
              style={{
                scale: logoScale,
                opacity: logoOpacity,
                x: logoX,
                y: logoY,
              }}
              className="object-bottom fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 overflow-hidden flex flex-col"
            >
              <img src={IcnLogo.src} alt="cave" />
              <p className="font-safira-march text-primary-800 items-center text-center pt-5">
                Scroll Down
              </p>
            </motion.div>
            <motion.div
              style={{
                x: descriptionX,
                position: descriptionPosition,
                opacity: descriptionOpacity,
              }}
              className="top-[35vh] left-[10vw] w-[40vw]"
            >
              <Descriptions />
            </motion.div>
            <motion.div
              style={{
                scale: sponsorScale,
                opacity: sponsorsOpacity,
                position: sponsorsPosition,
                x: sponsorsX,
              }}
              className="w-[70vw] top-[20vh] right-[10vw]"
            >
              <Sponsors />
            </motion.div>
            <motion.div
              style={{
                opacity: countdownOpacity,
                scale: countdownScale,
                position: countdownPosition,
              }}
              className="w-screen h-screen top-0"
            >
              <Countdown />
            </motion.div>
          </div>
        </section>
      </ReactLenis>
    </MotionConfig>
  );
}
