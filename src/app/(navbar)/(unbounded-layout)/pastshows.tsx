"use client";

import Image from "next/image";
import { useSwipeable } from 'react-swipeable';
import { useState } from "react";
import "src/app/globals.css";
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";

const shows = [
  {
    name: "Kaharsa",
    year: 2020,
    subtext: "This train service will end at TE3 Woodlands South",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/R151_train_at_Tuas_Depot.jpg/450px-R151_train_at_Tuas_Depot.jpg",
  },
  {
    name: "Kaharsa",
    year: 2021,
    subtext: "This train service will end at TE9 Caldecott",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/R151_train_at_Tuas_Depot.jpg/450px-R151_train_at_Tuas_Depot.jpg",
  },
  {
    name: "Kaharsa",
    year: 2022,
    subtext: "This train service will end at TE14 Orchard",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/R151_train_at_Tuas_Depot.jpg/450px-R151_train_at_Tuas_Depot.jpg",
  },
  {
    name: "Kaharsa",
    year: 2023,
    subtext: "This train service will end at TE17 Outram Park",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/R151_train_at_Tuas_Depot.jpg/450px-R151_train_at_Tuas_Depot.jpg",
  },
  {
    name: "Kaharsa",
    year: 2024,
    subtext: "This train service will end at TE22 Gardens by the Bay",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/R151_train_at_Tuas_Depot.jpg/450px-R151_train_at_Tuas_Depot.jpg",
  },
  {
    name: "Kaharsa",
    year: 2025,
    subtext: "This train service will end at TE27 Marine Terrace",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/R151_train_at_Tuas_Depot.jpg/450px-R151_train_at_Tuas_Depot.jpg",
  },
  {
    name: "Kaharsa",
    year: 2026,
    subtext: "This train service will end at TE29 Bayshore",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/R151_train_at_Tuas_Depot.jpg/450px-R151_train_at_Tuas_Depot.jpg",
  },
];

export default function PastShows() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shows.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + shows.length) % shows.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextCard,
    onSwipedRight: prevCard,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div>
    <div {...handlers} className="relative mx-auto w-[80vw] h-[120vw] overflow-hidden rounded-lg">
      <div className="flex h-[95%] transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {shows.map((show, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            <Card className="relative w-full h-full rounded-lg overflow-hidden">
              <CardContent className="relative w-full h-full">
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50 z-10">
                  <p className="font-safira-march text-white text-lg">{show.name}</p>
                  <p className="font-mont text-white text-md">{show.year}</p>
                  <p className="font-mont text-white text-md">{show.subtext}</p>
                </div>
                <Image
                  src={show.image_url}
                  alt={show.name}
                  width={800}
                  height={800}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 margin-2vw">
        {shows.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`${currentIndex === index ? 'bg-black w-5 h-3 rounded-full cursor-pointer ' : 'bg-gray-400 w-3 h-3 rounded-full cursor-pointer '}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
