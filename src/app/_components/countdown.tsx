import Image from "next/image";
import React, { useEffect, useState } from "react";

import Typography from "@/components/typography/typography";

import HourGlass from "../_assets/hour-glass.png";

type MyComponentProps = {
  isMobile: boolean;
  showTime: Date;
};

const Countdown: React.FC<MyComponentProps> = ({ isMobile, showTime }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetTime = new Date(showTime);

      const targetUTC = targetTime.getTime();

      const difference = targetUTC - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Initial calculation
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, [showTime]);

  const padNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  return (
    <>
      <div className="absolute top-0 right-0 w-screen h-screen flex items-center justify-center hour-glass">
        <Image src={HourGlass} alt="hour-glass" loading="eager" />
      </div>
      <div
        className={`absolute top-0 z-10 main-foreground font-safira-march h-screen w-screen 
          flex items-center justify-center ${isMobile ? "gap-20" : "gap-40"} count-down`}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <Typography variant="h1" className="text-white">
            {padNumber(timeLeft.days)}
          </Typography>
          <Typography variant="h6" className="text-white">
            Days
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <Typography variant="h1" className="text-white">
            {padNumber(timeLeft.hours)}
          </Typography>
          <Typography variant="h6" className="text-white">
            Hours
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <Typography variant="h1" className="text-white">
            {padNumber(timeLeft.minutes)}
          </Typography>
          <Typography variant="h6" className="text-white">
            Minutes
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <Typography variant="h1" className="text-white">
            {padNumber(timeLeft.seconds)}
          </Typography>
          <Typography variant="h6" className="text-white">
            Seconds
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Countdown;
