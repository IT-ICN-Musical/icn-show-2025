import { Committee } from "@/types/committee";

import EnzioDwiputraSujandi from "./enzio-dwiputra-sujandi.jpg";
import GabbieClarissaUtama from "./gabbie-clarissa.jpg";
import HerbieTio from "./herbie-tio.jpg";
import JamesKenrick from "./james-kenrick.jpg";
import JaniceAngelaTee from "./janice-angela-tee.jpg";
import JasonLihan from "./jason-lihan.jpg";
import JuanPatrickHasugian from "./juan-patrick-hasugian.jpg";
import KennethTanudjaja from "./kenneth-tanudjaja.jpg";
import MichaelAndrewChan from "./michael-andrew-chan.jpg";
import MichaelChandraRafidianta from "./michael-chandra-rafidianta.jpg";
import MichelleLouissa from "./michelle-louissa.jpg";
import MusicianImage from "./musician.jpg";
import ShelinaZhan from "./shelina-zhan.jpg";
import TheodoreAmadeoArgasetyaAtmadja from "./theodore-amadeo-argasetya-atmadja.jpg";
import VicyieJanvierRasio from "./vicyie-janvier-rasio.jpg";
import VincentWijaya from "./vincent-wijaya.jpg";
import VittoriaTan from "./vittoria-tan.jpg";

const MusiciansCommittee: Committee = {
  type: "Arts & Production",
  name: "Musicians",
  image_src: MusicianImage.src, // No group photo provided
  members: [
    // Main Committee (sorted alphabetically)
    {
      name: "Michael Chandra Rafidianta",
      image_src: MichaelChandraRafidianta.src,
      role: "Main Committee",
      course: "CEE/2",
    },
    {
      name: "Theodore Amadeo Argasetya Atmadja",
      image_src: TheodoreAmadeoArgasetyaAtmadja.src,
      role: "Main Committee",
      course: "MAE/2",
    },
    // Composers (sorted alphabetically)
    {
      name: "Jason Lihan",
      image_src: JasonLihan.src,
      role: "Composer",
      course: "MSE/2",
    },
    {
      name: "Kenneth Tanudjaja",
      image_src: KennethTanudjaja.src,
      role: "Composer",
      course: "EEE/3",
    },
    {
      name: "Michael Andrew Chan",
      image_src: MichaelAndrewChan.src,
      role: "Composer",
      course: "MAS/4",
    },
    {
      name: "Vicyie Janvier Rasio",
      image_src: VicyieJanvierRasio.src,
      role: "Composer",
      course: "BIE/4",
    },
    // Other Members (sorted alphabetically)
    {
      name: "Enzio Dwiputra Sujandi",
      image_src: EnzioDwiputraSujandi.src,
      role: "",
      course: "CS/1",
    },
    {
      name: "Gabbie Clarissa Utama",
      image_src: GabbieClarissaUtama.src,
      role: "",
      course: "EEE/1",
    },
    {
      name: "Herbie Tio",
      image_src: HerbieTio.src,
      role: "",
      course: "CBE/1",
    },
    {
      name: "James Kenrick",
      image_src: JamesKenrick.src,
      role: "",
      course: "BSB/1",
    },
    {
      name: "Janice Angela Tee",
      image_src: JaniceAngelaTee.src,
      role: "",
      course: "IEM/2",
    },
    {
      name: "Juan Patrick Hasugian",
      image_src: JuanPatrickHasugian.src,
      role: "",
      course: "EEE/1",
    },
    {
      name: "Michelle Louisa Tanuwijaya",
      image_src: MichelleLouissa.src,
      role: "",
      course: "MAE/1",
    },
    {
      name: "Shelina Zhan",
      image_src: ShelinaZhan.src,
      role: "",
      course: "CBE/1",
    },
    {
      name: "Vincent Tirta Wijaya",
      image_src: VincentWijaya.src,
      role: "",
      course: "CBC/2",
    },
    {
      name: "Vittoria Tan",
      image_src: VittoriaTan.src,
      role: "",
      course: "ACBS/2",
    },
  ],
};

export default MusiciansCommittee;
