import { Committee } from "@/types/committee";

import MuhammadAdamNurkholis from "./muhammad-adam-nurkholis.jpg";
import PutiKinantiNaylaRahmania from "./puti-kinanti-nayla-rahmania.jpg";
import WelfareImage from "./welfare.jpg";

const WelfareCommittee: Committee = {
  type: "External Affairs",
  name: "Welfare",
  image_src: WelfareImage.src,
  members: [
    {
      name: "Puti Kinanti Nayla Rahmania",
      image_src: PutiKinantiNaylaRahmania.src,
      role: "Main Committee",
      course: "CBE/3",
    },
    {
      name: "Muhammad Adam Nurkholis",
      image_src: MuhammadAdamNurkholis.src,
      role: "Main Committee",
      course: "CEE/2",
    },
  ],
};

export default WelfareCommittee;
