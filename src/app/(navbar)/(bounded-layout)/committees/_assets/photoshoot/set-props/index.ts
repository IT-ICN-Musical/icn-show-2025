import { Committee } from "@/types/committee";

import AnastasyaKoesoemo from "./anastasya-koesoemo.jpg";
import ArielWilly from "./ariel-willy.jpg";
import CelineRuslim from "./celine-ruslim.jpg";
import DafaBriliantHerdiansyah from "./dafa-briliant-herdiansyah.jpg";
import FarassyifaFuadSalim from "./farassyifa-fuad-salim.jpg";
import KendrickLiusBong from "./kendrick-lius-bong.jpg";
import LionelOwenWijaya from "./lionel-owen-wijaya.jpg";
import MichaelAngelo from "./michael-angelo.jpg";
import MitchellChandiPujokusumo from "./mitchell-chandi-pujokusumo.jpg";
import MuhammadRajaJauhari from "./muhammad-raja-jauhari.jpg";
import NicholasHenry from "./nicholas-henry.jpg";
import RosyadZulfikarAkbari from "./rosyad-zulfikar-akbari.jpg";
import SetpropsImage from "./setprops.jpg";
import WilliamMulia from "./william-mulia.jpg";

const SetpropsCommittee: Committee = {
  type: "Arts & Production",
  name: "SPE",
  image_src: SetpropsImage.src,
  members: [
    // Main Committee (sorted alphabetically)
    {
      name: "Farassyifa Fuad Salim",
      image_src: FarassyifaFuadSalim.src,
      role: "Main Committee",
      course: "CEE/2",
    },
    {
      name: "Muhammad Raja Jauhari",
      image_src: MuhammadRajaJauhari.src,
      role: "Main Committee",
      course: "BIE/4",
    },
    // Other Members (sorted alphabetically by name)
    {
      name: "Anastasia Koesoemo",
      image_src: AnastasyaKoesoemo.src,
      role: "",
      course: "MAS/1",
    },
    {
      name: "Ariel Willy Saragi S",
      image_src: ArielWilly.src,
      role: "",
      course: "ADM/1",
    },
    {
      name: "Celine Ruslim",
      image_src: CelineRuslim.src,
      role: "",
      course: "MAE/1",
    },
    {
      name: "Dafa Briliant Herdiansyah",
      image_src: DafaBriliantHerdiansyah.src,
      role: "",
      course: "CEE/2",
    },
    {
      name: "Kendrick Lius Bong",
      image_src: KendrickLiusBong.src,
      role: "",
      course: "MSE/1",
    },
    {
      name: "Lionel Owen Wijaya",
      image_src: LionelOwenWijaya.src,
      role: "",
      course: "CSC/2",
    },
    {
      name: "Michael Angelo",
      image_src: MichaelAngelo.src,
      role: "",
      course: "MAE/1",
    },
    {
      name: "Mitchell Chandi Pujokusumo",
      image_src: MitchellChandiPujokusumo.src,
      role: "",
      course: "CBE/1",
    },
    {
      name: "Nicholas Henry",
      image_src: NicholasHenry.src,
      role: "",
      course: "EEE/1",
    },
    {
      name: "Rosyad Zulfikar Akbari",
      image_src: RosyadZulfikarAkbari.src,
      role: "",
      course: "CEE/2",
    },
    {
      name: "William Mulia",
      image_src: WilliamMulia.src,
      role: "",
      course: "CEE/1",
    },
  ],
};

export default SetpropsCommittee;
