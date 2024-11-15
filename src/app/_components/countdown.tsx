import Image from "next/image";

import Typography from "@/components/typography/typography";

import HourGlass from "../_assets/hour-glass.png";

export default function Countdown() {
  return (
    <>
      <div className="absolute top-0 right-0 w-screen h-screen flex items-center justify-center hour-glass">
        <Image src={HourGlass} alt="hour-glass" />
      </div>
      <div className="absolute top-0 z-10 main-foreground font-safira-march h-screen w-screen flex items-center justify-center gap-40 count-down">
        <div className="flex flex-col items-center justify-center text-center">
          <Typography variant="h1" className="text-white">
            00
          </Typography>
          <Typography variant="h6" className="text-white">
            Days
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <Typography variant="h1" className="text-white">
            00
          </Typography>
          <Typography variant="h6" className="text-white">
            Hours
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <Typography variant="h1" className="text-white">
            00
          </Typography>
          <Typography variant="h6" className="text-white">
            Minutes
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <Typography variant="h1" className="text-white">
            00
          </Typography>
          <Typography variant="h6" className="text-white">
            Seconds
          </Typography>
        </div>
      </div>
    </>
  );
}
