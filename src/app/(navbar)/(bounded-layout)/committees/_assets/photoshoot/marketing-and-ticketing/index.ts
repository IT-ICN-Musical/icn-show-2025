import { Committee } from "@/types/committee";

import AngelicaFeliceJunardi from "./angelica-felice-junardi.jpg";
import BernardLesleyEfendy from "./bernard-lesley-effendy.jpg";
import CynthiaOktavianiPantoro from "./cynthia-oktaviani-pantoro.jpg";
import JadelynMinnekeSutopo from "./jadelyn-minneke-sutopo.jpg";
import KatarinaKoesoemo from "./katarina-koesoemo.jpg";
import MiraclePascalGunarsih from "./miracle-pascal-gunarsih.jpg";
import Mnt from "./mnt.jpg";
import RafiBintangPangestu from "./rafi-bintang-pagi-pangestu.jpg";
import TheonieWijaya from "./theonie-wijaya.jpg";
import VerenaReginaTirtajasa from "./verena-regina-tirtajasa.jpg";

const MarketingAndTicketingCommittee: Committee = {
  type: "External Affairs",
  name: "Marketing and Ticketing",
  image_src: Mnt.src,
  members: [
    // Main Committee (sorted alphabetically)
    {
      name: "Katarina Koesoemo",
      image_src: KatarinaKoesoemo.src,
      role: "Main Committee",
      course: "BSPY/3",
    },
    {
      name: "Theonie Wijaya",
      image_src: TheonieWijaya.src,
      role: "Main Committee",
      course: "ECPS/3",
    },
    // Other Members (sorted alphabetically)
    {
      name: "Angelica Felice Junardi",
      image_src: AngelicaFeliceJunardi.src,
      role: "",
      course: "CBE/2",
    },
    {
      name: "Bernard Lesley Efendy",
      image_src: BernardLesleyEfendy.src,
      role: "",
      course: "CSC/4",
    },
    {
      name: "Cynthia Oktaviani Pantoro",
      image_src: CynthiaOktavianiPantoro.src,
      role: "",
      course: "CEE/3",
    },
    {
      name: "Jadelyn Minneke Sutopo",
      image_src: JadelynMinnekeSutopo.src,
      role: "",
      course: "BCG/1",
    },
    {
      name: "Miracle Pascal Gunarsih",
      image_src: MiraclePascalGunarsih.src,
      role: "",
      course: "AE/2",
    },
    {
      name: "Rafi Bintang Pangestu",
      image_src: RafiBintangPangestu.src,
      role: "",
      course: "CBE/4",
    },
    {
      name: "Verena Regina Tirtajasa",
      image_src: VerenaReginaTirtajasa.src,
      role: "",
      course: "MAE/4",
    },
  ],
};

export default MarketingAndTicketingCommittee;
