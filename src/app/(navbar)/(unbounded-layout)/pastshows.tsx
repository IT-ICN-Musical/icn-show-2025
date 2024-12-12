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
    year: 2024,
    subtext: "This train service will end at TE17 Outram Park",
  },
  {
    name: "Kaharsa",
    year: 2024,
    subtext: "This train service will end at TE17 Outram Park",
  },
  {
    name: "Kaharsa",
    year: 2024,
    subtext: "This train service will end at TE17 Outram Park",
  },
  {
    name: "Kaharsa",
    year: 2024,
    subtext: "This train service will end at TE17 Outram Park",
  },
  {
    name: "Kaharsa",
    year: 2024,
    subtext: "This train service will end at TE17 Outram Park",
  },
  {
    name: "Kaharsa",
    year: 2024,
    subtext: "This train service will end at TE17 Outram Park",
  },
  {
    name: "Kaharsa",
    year: 2024,
    subtext: "This train service will end at TE17 Outram Park",
  },
];

export default function PastShows() {
  return (
    <div className="grid gap-4">
      {shows.map((show, index) => (
        <Card key={index} className="my-4">
          <CardHeader>
            <CardTitle>{show.name}</CardTitle>
            <CardDescription>{show.year}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{show.subtext}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
