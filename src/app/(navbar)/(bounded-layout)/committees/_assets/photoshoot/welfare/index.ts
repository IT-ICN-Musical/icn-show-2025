import { Committee } from "@/types/committee";

import MuhammadAdamNurkholis from "./muhammad-adam-nurkholis.jpg";
import PutiKinantiNaylaRahmania from "./puti-kinanti-nayla-rahmania.jpg";
import WelfareImage from "./welfare.jpg";

const WelfareCommittee: Committee = {
  type: "Arts & Production",
  name: "Welfare",
  image_src: WelfareImage.src,
  members: [
    {
      name: "Muhammad Adam Nurkholis",
      image_src: MuhammadAdamNurkholis.src,
      role: "Main Committee",
      course: "CEE/2",
    },
    {
      name: "Puti Kinanti Nayla Rahmania",
      image_src: PutiKinantiNaylaRahmania.src,
      role: "Main Committee",
      course: "CBE/3",
    },
  ],
};

export default WelfareCommittee;
