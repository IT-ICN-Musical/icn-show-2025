import { Clock1, MapPin } from "lucide-react";
import Image from "next/image";

import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";

import senjakala from "../_assets/senjakala.webp";

export function TrailerSynopsis({ onClickBuy }: { onClickBuy: () => void }) {
  return (
    <div className="bg-secondary-950">
      <div className="flex justify-center items-center h-full min-h-screen w-full">
        <div className="grid py-4 grid_cols-1 md:grid-cols-2 px-4 gap-4 justify-items-center">
          <div className="flex flex-col items-center md:order-2 max-w-[100vw] w-full">
            <Image src={senjakala} alt="Senjakala Logo" width={160} />
            <Typography
              className="mt-4 font-mont text-primary-400"
              variant="h5"
            >
              ICN 2025
            </Typography>
            <Typography
              className="mt-2 font-safira text-primary-400"
              variant="h4"
            >
              Senjakala
            </Typography>
            <hr className="mt-6 border primary-400 w-8" />
            <Typography
              variant="p"
              className="mt-4 text-primary-50 w-full px-4 max-w-xl text-justify"
            >
              Meet Arya Rahma Aditya, a man born and raised in Yogyakarta who
              had a dream to become a theater director. Yet, he had to face
              strong disapproval from his father due to the social stigma and
              the instability of the industry. With Arya’s talent and huge
              dedication, he endured all the obstacles for the price of
              achievements and recognition.
              <br />
              <br />
              However, his arrogance brought him to become self-reliant and
              fierce toward his team. At the pinnacle of his career, Arya’s life
              was shattered by an overwhelming turn of events and he sank into
              the depths of despair. Follow along with us on Arya’s journey to
              see how his perfect world falls apart and unfolds.
            </Typography>
            <Button
              variant="outline"
              size="lg"
              onClick={onClickBuy}
              className="font-mont border-primary-400 mt-4 bg-transparent text-primary-50"
            >
              Buy tickets here
            </Button>
          </div>
          <div className="p-4 flex flex-col justify-center items-center max-w-[100vw] md:order-1 px-4">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/gqK9JeijnZI?si=GjpbYeSFqjEsK4dE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className="w-full mt-2 text-primary-50 ">
              <div className="flex items-center gap-2">
                <Clock1 width={32} />{" "}
                <Typography variant="h5" className="text-primary-50 font-light">
                  15th February 2025, 14:00/19:00
                </Typography>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <MapPin width={32} />{" "}
                <a
                  href="https://maps.app.goo.gl/SC4cVTJFGZYq1aaZ9"
                  target="_blank"
                >
                  <Typography
                    variant="h5"
                    className="text-primary-50 font-light underline hover:opacity-50 duration-200 transition-opacity"
                  >
                    School of the Arts Drama Theatre, 1 Zubir Said Dr, Singapore
                    227968
                  </Typography>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
