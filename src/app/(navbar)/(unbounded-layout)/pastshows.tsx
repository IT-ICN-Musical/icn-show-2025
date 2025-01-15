"use client";

import Image from "next/image";
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
  }
  return (
    <div className="relative mx-auto w-[50vw] h-[80vh]">
      <div className="overflow-x-hidden relative w-[50vw] h-[80vh]">
        <div
          className="flex transition-transform duration-500 w-[50vw] h-[80vh]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {shows.map((show, index) => (
            <div key={index} className="flex-shrink-0 w-[97.5%] h-[90%] my-4 mx-2 relative">
              <Card>
                <CardContent>
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50 z-10">
                  <p className="font-safira-march text-white text-l">{show.name}</p>
                  <p className="font-mont text-white text-m">{show.year}</p>
                  <p className="font-mont text-white text-m">{show.subtext}</p>
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

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {shows.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-black' : 'bg-gray-400'}`}
          ></div>
        ))}
      </div>
    </div>
  );
}