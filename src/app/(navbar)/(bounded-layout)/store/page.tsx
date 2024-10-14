"use client";

import catA from "@/_assets/store/seats/catA.svg";
import catB from "@/_assets/store/seats/catB.svg";
import catC from "@/_assets/store/seats/catC.svg";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Counter } from "@/components/counter";
import { SeatCategory } from "@/components/store/seat-category";
import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

export default function Shop() {
  const [count, setCount] = useState(0);

  const displayAdditionalMessage = count % 5 >= 3;

  return (
    <main>
      <Typography variant="h3" className="font-safira-march mb-2">
        Store
      </Typography>
      <Drawer>
        <DrawerTrigger asChild>
          <Button>Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="flex flex-col mt-6 items-center">
            <Typography variant="h4" className="font-safira-march mb-2">
              Matinee Ticket
            </Typography>
          </div>
          <hr className="border border-1" />
          <div className="px-4 py-6">
            <SeatCategory />
            <hr className="border border-1" />
            <div className="flex flex-row w-full justify-between py-2 items-center">
              <div>
                <Typography variant="p">Number of pax</Typography>
                <Typography
                  variant="p1"
                  color="icn-icon-info"
                  className={cn(count % 5 < 3 && "hidden")}
                >
                  Add {5 - (count % 5)} more to get Bundle Price
                </Typography>
              </div>
              <Counter value={count} setValue={setCount} minValue={0} />
            </div>
            <hr className="border border-1" />
          </div>
        </DrawerContent>
      </Drawer>
    </main>
  );
}
