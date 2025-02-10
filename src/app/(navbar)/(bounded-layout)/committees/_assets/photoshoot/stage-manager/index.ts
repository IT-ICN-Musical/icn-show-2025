import { Committee } from "@/types/committee";

import CherlynClaire from "./cherlyn-claire.jpg";
import DanielLee from "./daniel-lee.jpg";
import KimoraYauw from "./kimora-yauw.jpg";
import StageManagerImage from "./sm.jpg";
import VanessaArifianto from "./vanessa-arifianto.jpg";

const StageManagerCommittee: Committee = {
  type: "Arts & Production",
  name: "Stage Manager",
  image_src: StageManagerImage.src,
  members: [
    {
      name: "Cherlyn Claire Sanjaya",
      image_src: CherlynClaire.src,
      role: "Main Committee",
      course: "BUS/2",
    },
    {
      name: "Daniel Lee",
      image_src: DanielLee.src,
      role: "",
      course: "EEE/1",
    },
    {
      name: "Kimora Yauw",
      image_src: KimoraYauw.src,
      role: "",
      course: "IEM/1",
    },
    {
      name: "Vanessa Stefany Arifianto",
      image_src: VanessaArifianto.src,
      role: "",
      course: "MAS/1",
    },
  ],
};

export default StageManagerCommittee;
