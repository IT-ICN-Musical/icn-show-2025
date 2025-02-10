import { Committee } from "@/types/committee";

import AgustinusIvanEffendi from "./agustinus-ivan-effendi.jpg";
import AmandaChristalineCuaca from "./amanda-christaline-cuaca.jpg";
import AngelineHartonoWijaya from "./angeline-hartono-wijaya.jpg";
import AnsonDouglasHakim from "./anson-douglas-hakim.jpg";
import AureliaPrielaTanuwibowo from "./aurelia-priela-tanuwibowo.jpg";
import CalistaPrisciliaDestyne from "./calista-priscilia-destyne.jpg";
import CellineTaniaWijaya from "./celline-tania-wijaya.jpg";
import CindyAustin from "./cindy-austin.jpg";
import GeoffvincNg from "./geoffvinc-ng.jpg";
import JessicaClaraSalim from "./jessica-clara-salim.jpg";
import JudahValiantPrimeldi from "./judah-valiant-primeldi.jpg";
import KellynWu from "./kellyn-wu.jpg";
import KlarissaWitania from "./klarissa-witania.jpg";
import Muw from "./muw.jpg";
import RicaAngelina from "./rica-angelina.jpg";
import SherynWu from "./sheryn-wu.jpg";
import WilsonNoelPrajnaSuharlim from "./wilson-noel-prajna-suharlim.jpg";

const MakeupAndWardrobeCommittee: Committee = {
  type: "Arts & Production",
  name: "Makeup and Wardrobe",
  image_src: Muw.src,
  members: [
    // Main Committee (sorted alphabetically)
    {
      name: "Celline Tania Wijaya",
      image_src: CellineTaniaWijaya.src,
      role: "Main Committee",
      course: "BUS/2",
    },
    {
      name: "Jessica Clara Salim",
      image_src: JessicaClaraSalim.src,
      role: "Main Committee",
      course: "PSY/2",
    },
    // Other Members (sorted alphabetically)
    {
      name: "Agustinus Ivan Effendi",
      image_src: AgustinusIvanEffendi.src,
      role: "",
      course: "MAE/2",
    },
    {
      name: "Amanda Christaline Cuaca",
      image_src: AmandaChristalineCuaca.src,
      role: "",
      course: "CBE/1",
    },
    {
      name: "Angeline Hartono Wijaya",
      image_src: AngelineHartonoWijaya.src,
      role: "",
      course: "EEE/1",
    },
    {
      name: "Anson Douglas Hakim",
      image_src: AnsonDouglasHakim.src,
      role: "",
      course: "MAE/4",
    },
    {
      name: "Aurelia Priela Tanuwibowo",
      image_src: AureliaPrielaTanuwibowo.src,
      role: "",
      course: "BIE/1",
    },
    {
      name: "Calista Priscilia Destyne",
      image_src: CalistaPrisciliaDestyne.src,
      role: "",
      course: "ENE/3",
    },
    {
      name: "Cindy Austin",
      image_src: CindyAustin.src,
      role: "",
      course: "CS/1",
    },
    {
      name: "Geoffvinc Ng",
      image_src: GeoffvincNg.src,
      role: "",
      course: "PHMP/4",
    },
    {
      name: "Judah Valiant Primeldi",
      image_src: JudahValiantPrimeldi.src,
      role: "",
      course: "CBE/1",
    },
    {
      name: "Kellyn Wu",
      image_src: KellynWu.src,
      role: "",
      course: "EEE/1",
    },
    {
      name: "Klarissa Witania",
      image_src: KlarissaWitania.src,
      role: "",
      course: "IEM/2",
    },
    {
      name: "Rica Angelina",
      image_src: RicaAngelina.src,
      role: "",
      course: "MAE/2",
    },
    {
      name: "Sheryn Wu",
      image_src: SherynWu.src,
      role: "",
      course: "MSE/2",
    },
    {
      name: "Wilson Noel Prajna Suharlim",
      image_src: WilsonNoelPrajnaSuharlim.src,
      role: "",
      course: "CBE/2",
    },
  ],
};

export default MakeupAndWardrobeCommittee;
