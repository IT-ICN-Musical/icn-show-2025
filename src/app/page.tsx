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

import Background1 from "./_assets/background.png";
import Cave from "./_assets/cave.png";
import LeftFog from "./_assets/fog-left.svg";
import RightFog from "./_assets/fog-right.svg";
import LeftForegroundMobile from "./_assets/foreground-left-mobile.png";
import LeftForeground from "./_assets/foreground-left.png";
import RightForegroundMobile from "./_assets/foreground-right-mobile.png";
import RightForeground from "./_assets/foreground-right.png";
import TopForegroundMobile from "./_assets/foreground-top-mobile.png";
import IcnLogo from "./_assets/icn-logo.png";
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
  const [isMobile, setIsMobile] = useState(false);

  const remainingScrollRange = 1 - animationOrder.showLogo;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  // Responsive check
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Automatic animation at first reload
  useEffect(() => {
    const startAutoAnimation = async () => {
      await animate(autoScrollProgress, animationOrder.showLogo, {
        duration: 4,
        ease: [0.25, 0.1, 0, 1],
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

  // Scroll progress handling
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

  // Backround configuration
  const bgPosition = useTransform(combinedScrollProgress, (pos) =>
    pos >= 0.46 ? "relative" : "fixed",
  );

  const initialBgScale = useTransform(
    combinedScrollProgress,
    [animationOrder.bottomInitial, animationOrder.animation1],
    isMobile ? [2.5, 1.2] : [2, 1],
  );

  const bgY = useTransform(
    combinedScrollProgress,
    [animationOrder.bottomInitial, animationOrder.animation1],
    isMobile ? ["-60%", "0%"] : ["-40%", "0%"],
  );

  const bgOpacity = useTransform(
    combinedScrollProgress,
    [animationOrder.scrollSpace1, animationOrder.scrollSpace1 + 0.07],
    [1, 0],
  );

  // Cave configuration
  const cavePosition = useTransform(combinedScrollProgress, (pos) =>
    pos >= 0.46 ? "relative" : "fixed",
  );

  const caveScale = useTransform(
    combinedScrollProgress,
    [animationOrder.bottomInitial, animationOrder.animation1],
    [3, 1.05],
  );

  const caveOpacity = useTransform(
    combinedScrollProgress,
    [animationOrder.scrollSpace1, animationOrder.scrollSpace1 + 0.07],
    [1, 0],
  );

  const caveX = useTransform(
    combinedScrollProgress,
    [animationOrder.scrollSpace1, animationOrder.scrollSpace1 + 0.07],
    ["-50%", "-50%"],
  );

  const caveY = useTransform(
    combinedScrollProgress,
    [animationOrder.scrollSpace1, animationOrder.scrollSpace1 + 0.07],
    ["-50%", "-50%"],
  );

  // Left Fog Configuration
  const leftFogScale = useTransform(
    combinedScrollProgress,
    [
      animationOrder.animation1,
      animationOrder.showLogo,
      animationOrder.scrollSpace1,
      animationOrder.scrollSpace1 + 0.07,
    ],
    [0.3, 1, 1, 1],
  );
  const leftFogX = useTransform(
    combinedScrollProgress,
    [
      animationOrder.bottomInitial,
      animationOrder.animation1,
      animationOrder.showLogo,
      animationOrder.scrollSpace1,
      animationOrder.scrollSpace1 + 0.07,
    ],
    ["-30%", "-30%", "0%", "0%", "0%"],
  );
  const leftFogOpacity = useTransform(
    combinedScrollProgress,
    [
      animationOrder.animation1,
      animationOrder.showLogo,
      animationOrder.scrollSpace1,
      animationOrder.scrollSpace1 + 0.01,
    ],
    [0, 1, 1, 0],
  );

  // Right Fog Configuration
  const rightFogScale = useTransform(
    combinedScrollProgress,
    [
      animationOrder.animation1,
      animationOrder.showLogo,
      animationOrder.scrollSpace1,
      animationOrder.scrollSpace1 + 0.07,
    ],
    [0.3, 1, 1, 1],
  );
  const rightFogX = useTransform(
    combinedScrollProgress,
    [
      animationOrder.bottomInitial,
      animationOrder.animation1,
      animationOrder.showLogo,
      animationOrder.scrollSpace1,
      animationOrder.scrollSpace1 + 0.07,
    ],
    ["30%", "30%", "0%", "0%", "0%"],
  );
  const rightFogOpacity = useTransform(
    combinedScrollProgress,
    [
      animationOrder.animation1,
      animationOrder.showLogo,
      animationOrder.scrollSpace1,
      animationOrder.scrollSpace1 + 0.01,
    ],
    [0, 1, 1, 0],
  );

  // Left foreground configuration
  const leftForegroundScale = useTransform(
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
    isMobile
      ? [3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      : [3, 3, 1, 1, 1, 1.3, 1.3, 1.2, 1.2, 1, 1],
  );

  const leftForegroundOpacity = useTransform(
    combinedScrollProgress,
    [
      animationOrder.scrollSpace2,
      animationOrder.scrollSpace2 + 0.07,
      animationOrder.scrollSpace3,
      animationOrder.scrollSpace3 + 0.07,
    ],
    isMobile ? [1, 1, 1, 1] : [1, 0, 0, 1],
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
    isMobile
      ? ["-120%", "-120%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%"]
      : [
          "-120%",
          "-120%",
          "-3%",
          "-3%",
          "-3%",
          "15%",
          "15%",
          "10%",
          "10%",
          "-5%",
          "-5%",
        ],
  );
  const leftForegroundY = useTransform(
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
    isMobile
      ? ["0%", "0%", "0%", "0%", "0%", "7%", "7%", "5%", "5%", "8%", "8%"]
      : ["0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%"],
  );

  // Right foreground configuration
  const rightForegroundScale = useTransform(
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
    isMobile
      ? [3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      : [3, 3, 1, 1, 1, 1, 1, 1.2, 1.2, 1, 1],
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
    isMobile
      ? ["120%", "120%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%"]
      : [
          "120%",
          "120%",
          "5%",
          "5%",
          "5%",
          "80%",
          "80%",
          "-8%",
          "-8%",
          "5%",
          "5%",
        ],
  );
  const rightForegroundY = useTransform(
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
    isMobile
      ? ["0%", "0%", "0%", "0%", "0%", "7%", "7%", "5%", "5%", "8%", "8%"]
      : ["0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%"],
  );

  // Top Foreground configuration for Mobile
  const topForegroundScale = useTransform(
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
    [3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  );

  const topForegroundX = useTransform(
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
    ["100%", "100%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%"],
  );

  const topForegroundY = useTransform(
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
    ["0%", "0%", "0%", "0%", "0%", "-7%", "-7%", "-5%", "-5%", "-8%", "-8%"],
  );

  // Logo configuration
  const logoScale = useTransform(
    combinedScrollProgress,
    [animationOrder.animation1, animationOrder.showLogo],
    [3, 0.8],
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
    ["-50%", "-50%", "-50%", "100%"],
  );

  // Description configuration
  const descriptionX = useTransform(
    combinedScrollProgress,
    [
      animationOrder.scrollSpace1,
      animationOrder.animation2,
      animationOrder.scrollSpace2,
      animationOrder.scrollSpace2 + 0.07,
    ],
    isMobile ? ["-50%", "-50%", "-50%", "-50%"] : ["0%", "90%", "90%", "0%"],
  );

  const descriptionY = useTransform(
    combinedScrollProgress,
    [
      animationOrder.scrollSpace1,
      animationOrder.animation2,
      animationOrder.scrollSpace2,
      animationOrder.scrollSpace2 + 0.07,
    ],
    ["-50%", "-50%", "-50%", "-50%"],
  );

  const descriptionScale = useTransform(
    combinedScrollProgress,
    [
      animationOrder.scrollSpace1,
      animationOrder.animation2,
      animationOrder.scrollSpace2,
      animationOrder.scrollSpace2 + 0.07,
    ],
    [0.7, 1, 1, 0.6],
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

  // Sponsor configuration
  const sponsorsX = useTransform(
    combinedScrollProgress,
    [
      animationOrder.scrollSpace2,
      animationOrder.animation3,
      animationOrder.scrollSpace3,
      animationOrder.scrollSpace3 + 0.07,
    ],
    isMobile ? ["-50%", "-50%", "-50%", "-50%"] : ["0%", "-30%", "-30%", "0%"],
  );
  const sponsorsY = useTransform(
    combinedScrollProgress,
    [
      animationOrder.scrollSpace2,
      animationOrder.animation3,
      animationOrder.scrollSpace3,
      animationOrder.scrollSpace3 + 0.07,
    ],
    ["-50%", "-50%", "-50%", "-50%"],
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
      animationOrder.scrollSpace3 + 0.05,
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
    [0.5, 1, 1, 0.5],
  );

  // Countdown configuration
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
    [1.3, 0.65],
  );

  const countdownY = useTransform(
    combinedScrollProgress,
    [
      animationOrder.scrollSpace3,
      animationOrder.animation4,
      animationOrder.scrollSpace4,
    ],
    ["-50%", "-50%", "-50%"],
  );

  return (
    <MotionConfig reducedMotion="never">
      <ReactLenis root>
        <section ref={targetRef}>
          <div className="relative h-[1000vh] bg-primary-800 overflow-hidden">
            {/* Background Image */}
            <motion.img
              src={Background1.src}
              alt="backround-image"
              style={{
                scale: initialBgScale,
                position: bgPosition,
                y: bgY,
                opacity: bgOpacity,
              }}
              className="h-screen w-screen object-cover object-bottom top-0"
            />
            {/* Cave Image */}
            <div
              className={`fixed z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center 
                ${isMobile ? "h-[70vh] w-screen" : "h-screen w-screen"}`}
            >
              <motion.img
                src={Cave.src}
                alt="cave"
                style={{
                  scale: caveScale,
                  opacity: caveOpacity,
                  position: cavePosition,
                }}
                className={`
                     h-full w-auto object-cover object-center
                    `}
              />
            </div>
            {/* Left Fog Image */}
            <div
              className={`fixed top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center 
                ${isMobile ? "h-[70vh] w-screen" : "h-screen w-screen"}`}
            >
              <motion.img
                src={LeftFog.src}
                alt="left-fog"
                style={{
                  scale: leftFogScale,
                  x: leftFogX,
                  opacity: leftFogOpacity,
                }}
                className={`
                     h-full w-auto object-cover object-center
                    `}
              />
            </div>
            {/* Right Fog Image */}
            <div
              className={`fixed top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center 
                ${isMobile ? "h-[70vh] w-screen" : "h-screen w-screen"}`}
            >
              <motion.img
                src={RightFog.src}
                alt="left-fog"
                style={{
                  scale: rightFogScale,
                  x: rightFogX,
                  opacity: rightFogOpacity,
                }}
                className={`
                     h-full w-auto object-cover object-center
                    `}
              />
            </div>
            {/* Right Foreground Image */}
            <motion.img
              src={isMobile ? RightForegroundMobile.src : RightForeground.src}
              alt="right-foreground"
              style={{
                y: rightForegroundY,
                x: rightForegroundX,
                scale: rightForegroundScale,
              }}
              className="fixed h-screen z-20 w-auto object-cover object-right right-0 bottom-0 overflow-hidden"
            />
            {/* Left Foreground Image */}
            <motion.img
              src={isMobile ? LeftForegroundMobile.src : LeftForeground.src}
              alt="left-foreground"
              style={{
                y: leftForegroundY,
                x: leftForegroundX,
                opacity: leftForegroundOpacity,
                scale: leftForegroundScale,
              }}
              className="fixed z-20 left-0 bottom-0
                    h-screen w-auto object-cover object-left overflow-hidden"
            />
            {isMobile && (
              <motion.img
                src={TopForegroundMobile.src}
                alt="top-foreground"
                style={{
                  y: topForegroundY,
                  x: topForegroundX,
                  scale: topForegroundScale,
                }}
                className="fixed right-0 top-0
                    w-screen h-auto z-20 object-cover object-left overflow-hidden"
              />
            )}
            {/* ICN Logo Image */}
            <motion.div
              style={{
                scale: logoScale,
                opacity: logoOpacity,
                x: logoX,
                y: logoY,
              }}
              className={` z-10 object-bottom fixed top-1/2 left-1/2 -translate-y-1/2 
              -translate-x-1/2 overflow-hidden flex flex-col ${isMobile ? "w-[70vw] h-auto" : ""}`}
            >
              <img src={IcnLogo.src} alt="logo" />
              <p className="font-safira-march text-primary-800 items-center text-center pt-5">
                Scroll Down
              </p>
            </motion.div>
            {/* Description */}
            <motion.div
              style={{
                y: descriptionY,
                x: descriptionX,
                position: descriptionPosition,
                opacity: descriptionOpacity,
                scale: descriptionScale,
              }}
              className={`top-1/2 ${isMobile ? "left-1/2 w-[80vw]" : "left-[10vw] w-[40vw]"}`}
            >
              <Descriptions />
            </motion.div>
            {/* Sponsor */}
            <motion.div
              style={{
                scale: sponsorScale,
                opacity: sponsorsOpacity,
                position: sponsorsPosition,
                x: sponsorsX,
                y: sponsorsY,
              }}
              className={`top-1/2 ${isMobile ? "w-[80vw] h-auto left-1/2" : "w-[50vw] h-auto right-[25vw]"}`}
            >
              <Sponsors />
            </motion.div>
            {/* Countdown */}
            <motion.div
              style={{
                opacity: countdownOpacity,
                scale: countdownScale,
                position: countdownPosition,
                y: countdownY,
              }}
              className="w-screen h-screen top-1/2 z-30"
            >
              <Countdown isMobile={isMobile} />
            </motion.div>
          </div>
        </section>
      </ReactLenis>
    </MotionConfig>
  );
}
