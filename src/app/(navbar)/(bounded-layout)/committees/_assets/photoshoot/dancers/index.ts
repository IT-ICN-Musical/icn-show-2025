import { Committee } from "@/types/committee";

import AdheaRezqyMoedjiyanti from "./adhea-rezqy-moedjiyanti.jpg";
import AgathaKristanavia from "./agatha-kristanavia.jpg";
import AskanaMirzaMawlanaIrfany from "./askana-mirza-mawlana-irfany.jpg";
import AydinahasnaHuwaidaAziz from "./aydinahasna-huwaida-aziz.jpg";
import CarllineAngelica from "./carlline-angelica.jpg";
import ClarissaAurelia from "./clarissa-aurelia.jpg";
import DancerImage2 from "./dancer-2.jpg";
import DancerImage from "./dancer.jpg";
import EmmanuellaNicole from "./emmanuella-nicole.jpg";
import FachriAzizFithriadi from "./fachri-aziz-fithriadi.jpg";
import FrederickOwenZhong from "./frederick-owen-zhong.jpg";
import IvanaChristabellaSudjono from "./ivana-christabella-sudjono.jpg";
import JasonJoviBrata from "./jason-jovi-brata.jpg";
import JasonLihan from "./jason-lihan.jpg";
import JustineAlexanderWijaya from "./justine-alexander-wijaya.jpg";
import KevinDanuartaSiahaan from "./kevin-danuarta.jpg";
import KeziaApriliaSanjaya from "./kezia-aprilia-sanjaya.jpg";
import KiaraMaharaniSaputra from "./kiara-maharani-saputra.jpg";
import NajaAndriaMumtaz from "./naa-andria-mumtaz.jpg";
import NadaShafiyah from "./nada-shafiyah.jpg";
import NauraRevaAulia from "./naura-reva-aulia.jpg";
import RaidonJantanata from "./raidon-jantanata.jpg";
import ReubenFarrelWibowo from "./reuben-farrel-wibowo.jpg";
import SebastianMaximillianMartan from "./sebastian-maximillian-martan.jpg";
import ShesiliaMargarethaSimamora from "./shesilia-margaretha-simamora.jpg";
import SteveTristanYuwana from "./steve-tristan-yuwana.jpg";
import VicyieJanvierRasio from "./vicyie-janvier-rasio.jpg";

const DancersCommittee: Committee = {
  type: "Arts & Production",
  name: "Dancers",
  image_src: [DancerImage.src, DancerImage2.src],
  members: [
    // Main Committee (sorted by name)
    {
      name: "Kiara Maharani Saputra",
      image_src: KiaraMaharaniSaputra.src,
      role: "Main Committee",
      course: "PSY/2",
    },
    {
      name: "Reuben Farrel Wibowo",
      image_src: ReubenFarrelWibowo.src,
      role: "Main Committee",
      course: "DSAI/2",
    },
    // Choreographers (sorted by name)
    {
      name: "Emmanuella Nicole",
      image_src: EmmanuellaNicole.src,
      role: "Choreographer",
      course: "BUS/2",
    },
    {
      name: "Kezia Aprilia Sanjaya",
      image_src: KeziaApriliaSanjaya.src,
      role: "Choreographer",
      course: "ECDS/3",
    },
    {
      name: "Shesilia Margaretha Simamora",
      image_src: ShesiliaMargarethaSimamora.src,
      role: "Choreographer",
      course: "MSE/2",
    },
    // Other Members (role left empty) sorted alphabetically by name
    {
      name: "Adhea Rezqy Moedjiyanti",
      image_src: AdheaRezqyMoedjiyanti.src,
      role: "",
      course: "EEE/1",
    },
    {
      name: "Agatha Kristanavia",
      image_src: AgathaKristanavia.src,
      role: "",
      course: "CBC/2",
    },
    {
      name: "Askana Mirza Mawlana Irfany",
      image_src: AskanaMirzaMawlanaIrfany.src,
      role: "",
      course: "MAE/2",
    },
    {
      name: "Aydinahasna Huwaida Aziz",
      image_src: AydinahasnaHuwaidaAziz.src,
      role: "",
      course: "CBE/2",
    },
    {
      name: "Carlline Angelica",
      image_src: CarllineAngelica.src,
      role: "",
      course: "SBS/2",
    },
    {
      name: "Clarissa Aurelia Glorybel",
      image_src: ClarissaAurelia.src,
      role: "",
      course: "DSAI/1",
    },
    {
      name: "Fachri Aziz Fithriadi",
      image_src: FachriAzizFithriadi.src,
      role: "",
      course: "ENE/2",
    },
    {
      name: "Frederick Owen Zhong",
      image_src: FrederickOwenZhong.src,
      role: "",
      course: "MSE/2",
    },
    {
      name: "Ivana Christabella Sudjono",
      image_src: IvanaChristabellaSudjono.src,
      role: "",
      course: "CBE/1",
    },
    {
      name: "Jason Jovi Brata",
      image_src: JasonJoviBrata.src,
      role: "",
      course: "MSE/7",
    },
    {
      name: "Jason Lihan",
      image_src: JasonLihan.src,
      role: "",
      course: "MSE/2",
    },
    {
      name: "Justine Alexander Wijaya",
      image_src: JustineAlexanderWijaya.src,
      role: "",
      course: "ENE/1",
    },
    {
      name: "Kevin Danuarta Siahaan",
      image_src: KevinDanuartaSiahaan.src,
      role: "",
      course: "CEE/2",
    },
    {
      name: "Nada Shafiyah Rahmatunnisa",
      image_src: NadaShafiyah.src,
      role: "",
      course: "MSE/1",
    },
    {
      name: "Naja Andria Mumtaz",
      image_src: NajaAndriaMumtaz.src,
      role: "",
      course: "BIE/1",
    },
    {
      name: "Naura Reva Aulia",
      image_src: NauraRevaAulia.src,
      role: "",
      course: "ADM/1",
    },
    {
      name: "Raidon Jantanata",
      image_src: RaidonJantanata.src,
      role: "",
      course: "PSY/2",
    },
    {
      name: "Sebastian Maximillian Martan",
      image_src: SebastianMaximillianMartan.src,
      role: "",
      course: "CBE/1",
    },
    {
      name: "Steve Tristan Yuwana",
      image_src: SteveTristanYuwana.src,
      role: "",
      course: "AE/2",
    },
    {
      name: "Vicyie Janvier Rasio",
      image_src: VicyieJanvierRasio.src,
      role: "",
      course: "BIE/4",
    },
  ],
};

export default DancersCommittee;
