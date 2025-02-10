import { Committee } from "@/types/committee";

import AnastasiaKoesoemo from "./anastasia-koesoemo.jpg";
import ChristineXue from "./christine-xue.jpg";
import PublicityImage from "./publicity.jpg";
import PutriAkilahRahmani from "./putri-akilah-rahmani.jpg";
import RaidonJantanata from "./raidon-jantanata.jpg";
import ValdyLionelChristian from "./valdy-lionel-christian.jpg";
import VerenaReginaTirtajasa from "./verena-regina-tirtajasa.jpg";

const PublicityCommittee: Committee = {
  type: "External Affairs",
  name: "Publicity",
  image_src: PublicityImage.src,
  members: [
    // Main Committee
    {
      name: "Putri Akilah Rahmani",
      image_src: PutriAkilahRahmani.src,
      role: "Main Committee",
      course: "AERO/3",
    },
    // Other Members (sorted alphabetically)
    {
      name: "Anastasia Koesoemo",
      image_src: AnastasiaKoesoemo.src,
      role: "",
      course: "MAS/1",
    },
    {
      name: "Christine Xue",
      image_src: ChristineXue.src,
      role: "",
      course: "SSS/4",
    },
    {
      name: "Raidon Jantanata",
      image_src: RaidonJantanata.src,
      role: "",
      course: "PSY/2",
    },
    {
      name: "Valdy Lionel Christian",
      image_src: ValdyLionelChristian.src,
      role: "",
      course: "MAE/4",
    },
    {
      name: "Verena Regina Tirtajasa",
      image_src: VerenaReginaTirtajasa.src,
      role: "",
      course: "MAE/4",
    },
  ],
};

export default PublicityCommittee;
