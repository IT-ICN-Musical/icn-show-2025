import Image from "next/image";

import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";

import Background1 from "./_assets/background.png";
import Cave from "./_assets/cave.png";
import IcnLogo from "./_assets/icn-logo.png";
import LeftForeground from "./_assets/left-foreground.png";
import MainForeground from "./_assets/main-foreground.png";
import RightForeground from "./_assets/right-foreground.png";

export default function LandingPage() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll">
      <div className="w-screen h-screen relative snap-always snap-center">
        <Image
          src={Background1}
          alt="background-image"
          className="w-screen h-screen object-cover absolute top-0 -z-10"
        />
        <Image
          src={Cave}
          alt="cave"
          className="h-screen absolute z-10 left-[50%] -translate-x-[50%]"
        />
        <Image
          src={IcnLogo}
          alt="icn-logo"
          className="absolute left-[50%] -translate-x-[50%] z-10 top-[50%] -translate-y-[50%] w-[60rem]"
        />
        <Image
          src={LeftForeground}
          alt="left-foreground"
          className="absolute left-0 h-screen top-0 z-20"
        />
        <Image
          src={RightForeground}
          alt="right-foreground"
          className="absolute right-0 h-screen top-0 z-20"
        />
        <Image
          src={MainForeground}
          alt="main-foreground"
          className="absolute top-0 w-screen h-screen z-10"
        />
      </div>
      <div className="w-screen h-screen bg-[#4A2D41] snap-always snap-center flex items-center justify-end">
        <div className="flex items-center flex-col justify-end w-8/12">
          <div className="text-white w-3/6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
            magnam nam omnis nulla iure culpa incidunt, beatae mollitia
            perferendis officia, ut eveniet rerum aut aliquam facilis esse?
            Quibusdam, laborum! Temporibus vero delectus ea! Quia nulla optio
            autem corporis quam sunt eveniet, natus quisquam sed voluptas, nam
            odio earum esse quasi vitae velit numquam eligendi? Rerum neque
            praesentium iste molestiae repudiandae?
          </div>
          <Button className="mt-8 border border-white">Buy Tickets</Button>
        </div>
      </div>
      <div className="w-screen h-screen bg-[#4A2D41] snap-always snap-center items-center justify-start flex">
        <div className="flex-col flex gap-20 items-center justify-center w-8/12">
          <Typography variant="h2" className="font-safira-march text-white">
            Sponsors
          </Typography>
          <div className="flex gap-4 flex-wrap w-[40rem] justify-center">
            {/* Placeholder content */}
            {new Array(8).fill(0).map((_, index) => (
              <div key={index} className="w-1/5 aspect-square bg-white"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
