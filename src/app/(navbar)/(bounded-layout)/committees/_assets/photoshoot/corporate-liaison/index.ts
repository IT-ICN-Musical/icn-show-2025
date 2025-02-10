import { Committee } from "@/types/committee";

import AfifuddinYunior from "./afifuddin-yunior.jpg";
import AishaTasyaAulia from "./aisha-tasya-aulia.jpg";
import CommitteeImage from "./committee.jpg";
import DylanRafaelSuryacita from "./dylan-rafael-suryacita.jpg";
import FazilArhanifsyah from "./fazil-arhanifsyah.jpg";
import GabrielNicholasOwen from "./gabriel-nicholas-owen.jpg";
import GabriellaSharon from "./gabriella-sharon.jpg";
import GeraldoOwenLimantara from "./geraldo-owen-limantara.jpg";
import NabilaRahmaAisyah from "./nabila-rahma-aisyah.jpg";
import RafieHananiaHertrian from "./rafie-hanania-hetrian.jpg";
import SherynWu from "./sheryn-wu.jpg";
import SutantoTan from "./sutanto-tan.jpg";

const CorporateLiaisonCommittee: Committee = {
  type: "External Affairs",
  name: "Corporate Liaison",
  image_src: CommitteeImage.src,
  members: [
    // Main Committee (sorted alphabetically)
    {
      name: "Afifuddin Yunior",
      image_src: AfifuddinYunior.src,
      role: "Main Committee",
      course: "MSE/3",
    },
    {
      name: "Fazil Arhanifsyah",
      image_src: FazilArhanifsyah.src,
      role: "Main Committee",
      course: "EEE/3",
    },
    {
      name: "Geraldo Owen Limantara",
      image_src: GeraldoOwenLimantara.src,
      role: "Main Committee",
      course: "MSE/2",
    },
    // Other Members (sorted alphabetically by name)
    {
      name: "Aisha Tasya Aulia",
      image_src: AishaTasyaAulia.src,
      role: "",
      course: "IEM/2",
    },
    {
      name: "Dylan Rafael Suryacitra",
      image_src: DylanRafaelSuryacita.src,
      role: "",
      course: "CE/1",
    },
    {
      name: "Gabriel Nicholas Owen",
      image_src: GabrielNicholasOwen.src,
      role: "",
      course: "MSE/2",
    },
    {
      name: "Gabriella Sharon Gunawan",
      image_src: GabriellaSharon.src,
      role: "",
      course: "MAE/1",
    },
    {
      name: "Nabila Rahma Aisyah",
      image_src: NabilaRahmaAisyah.src,
      role: "",
      course: "CBC/1",
    },
    {
      name: "Rafie Hanania Hertrian",
      image_src: RafieHananiaHertrian.src,
      role: "",
      course: "EEE/Y3",
    },
    {
      name: "Sheryn Wu",
      image_src: SherynWu.src,
      role: "",
      course: "MSE/2",
    },
    {
      name: "Sutanto",
      image_src: SutantoTan.src,
      role: "",
      course: "EEE/1",
    },
  ],
};

export default CorporateLiaisonCommittee;
