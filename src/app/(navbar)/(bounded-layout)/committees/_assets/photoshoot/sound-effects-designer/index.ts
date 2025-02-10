import { Committee } from "@/types/committee";

import DanielLee from "./daniel-lee.jpg";
import LeonardoMarcoEdilyn from "./leonardo-marco-edilyn.jpg";
import MatthewOsvaldo from "./matthew-osvaldo.jpg";
import SayyedMuhammadRizwanHarahap from "./sayyed-muhammad-rizwan-harahap.jpg";
import Sfd from "./sfd.jpg";

const SoundEffectsCommittee: Committee = {
  type: "Arts & Production",
  name: "Sound Effects",
  image_src: Sfd.src,
  members: [
    {
      name: "Matthew Osvaldo",
      image_src: MatthewOsvaldo.src,
      role: "Main Committee",
      course: "MSE/4",
    },
    {
      name: "Daniel Lee",
      image_src: DanielLee.src,
      role: "",
      course: "EEE/1",
    },
    {
      name: "Leonardo Marco Edilyn",
      image_src: LeonardoMarcoEdilyn.src,
      role: "",
      course: "MSE/4",
    },
    {
      name: "Sayyed Muhammed Ridzwan Harahap",
      image_src: SayyedMuhammadRizwanHarahap.src,
      role: "",
      course: "NBS/1",
    },
  ],
};

export default SoundEffectsCommittee;
