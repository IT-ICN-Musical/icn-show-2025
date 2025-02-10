import { Committee } from "@/types/committee";

import BillyMuliorahardjo from "./billy-muliorahardjo.jpg";
import GerrenOwenLimantara from "./gerren-owen-limantara.jpg";
import HaidarPrayataWirasana from "./haidar-prayata-wirasana.jpg";
import MarshellaAngelin from "./marshella-angelin.jpg";
import RubenManuelSitorus from "./ruben-manuel-sitorus.jpg";
import TopsImage from "./tops.jpg";
import YvesSamsonLi from "./yves-samson-li.jpg";

const TOPSCommittee: Committee = {
  type: "TOPS",
  name: "TOPS",
  image_src: TopsImage.src,
  members: [
    // Producer
    {
      name: "Billy Muliorahardjo",
      image_src: BillyMuliorahardjo.src,
      role: "Producer",
      course: "MAE/4",
    },
    // Artistic Directors (sorted alphabetically by first name)
    {
      name: "Gerren Owen Limantara",
      image_src: GerrenOwenLimantara.src,
      role: "Artistic Director",
      course: "MAE/4",
    },
    {
      name: "Marshella Angelin",
      image_src: MarshellaAngelin.src,
      role: "Artistic Director",
      course: "MSE/3",
    },
    // Head of External Affairs (sorted alphabetically by first name)
    {
      name: "Haidar Prayata Wirasana",
      image_src: HaidarPrayataWirasana.src,
      role: "Head of External Affairs",
      course: "MADA/2",
    },
    {
      name: "Yves Samson Li",
      image_src: YvesSamsonLi.src,
      role: "Head of External Affairs",
      course: "CE/3",
    },
    // Production Manager
    {
      name: "Ruben Manuel Sitorus",
      image_src: RubenManuelSitorus.src,
      role: "Production Manager",
      course: "AERO/4",
    },
  ],
};

export default TOPSCommittee;
