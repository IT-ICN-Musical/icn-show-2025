import { Committee } from "@/types/committee";

import AnnisaMaharaniSarasvati from "./annisa-maharani-sarasvati.jpg";
import ArdiSyahdaAhmadHakim from "./ardi-syahda-ahmad-hakim.jpg";
import BrendanAlexander from "./brendan-alexander.jpg";
import CommitteeImage from "./committee.jpg";
import DeniseEvangelinePigety from "./denise-evangeline-pigety.jpg";
import FarhanAkbar from "./farhan-akbar.jpg";
import FlorettaSetiaPradana from "./floretta-setia-pradana.jpg";
import FrederickHanson from "./frederick-hanson.jpg";
import JosefEvanHalim from "./josef-evan-halim.jpg";
import JustineAlexanderWijaya from "./justine-alexander-wijaya.jpg";
import KimberlyAtmadja from "./kimberly-atmadja.jpg";
import MichellePhylicia from "./michelle-phylicia.jpg";
import MuhammadMikailRais from "./muhammad-mikail-rais.jpg";
import MuhammadRafiAdzikraSujai from "./muhammad-rafi-adzikra-sujai.jpg";
import OwenNigelTjiptarahardja from "./owen-nigel-tjiptarahardja.jpg";
import PhoebeMarvella from "./phoebe-marvella.jpg";
import RichardFernando from "./richard-fernando.jpg";
import SharonTjiptoSantoso from "./sharon-tjipto-santoso.jpg";
import TimothyLouisBarus from "./timothy-louis-barus.jpg";
import WilsenChandraPutra from "./wilsen-chandra-putra.jpg";

const ActorsCommittee: Committee = {
  type: "Arts & Production",
  name: "Actors",
  image_src: CommitteeImage.src,
  members: [
    // Group 1: Main Committee
    {
      name: "Richard Fernando",
      image_src: RichardFernando.src,
      role: "Main Committee",
      course: "MAE/3",
    },
    {
      name: "Sharon Tjipto Santoso",
      image_src: SharonTjiptoSantoso.src,
      role: "Main Committee",
      course: "BUS/2",
    },
    {
      name: "Floretta Setia Pradana",
      image_src: FlorettaSetiaPradana.src,
      role: "Main Committee",
      course: "BS/4",
    },
    // Group 2: Act Coach
    {
      name: "Ardi Syahda Ahmad Hakim",
      image_src: ArdiSyahdaAhmadHakim.src,
      role: "Act Coach",
      course: "EEE/4",
    },
    {
      name: "Kimberly Atmadja",
      image_src: KimberlyAtmadja.src,
      role: "Act Coach",
      course: "MSE/3",
    },
    {
      name: "Michelle Phylicia",
      image_src: MichellePhylicia.src,
      role: "Act Coach",
      course: "ME/2",
    },
    {
      name: "Muhammad Mikail Rais",
      image_src: MuhammadMikailRais.src,
      role: "Act Coach",
      course: "EEE/3",
    },
    {
      name: "Muhammad Rafi Adzikra Sujai",
      image_src: MuhammadRafiAdzikraSujai.src,
      role: "Act Coach",
      course: "CSC/4",
    },
    {
      name: "Timothy Louis Barus",
      image_src: TimothyLouisBarus.src,
      role: "Act Coach",
      course: "MAE/2",
    },
    // Group 3: Vocal Coach / Vocal Director
    {
      name: "Annisa Maharani Sarasvati",
      image_src: AnnisaMaharaniSarasvati.src,
      role: "Vocal Coach",
      course: "MAE/4",
    },

    {
      name: "Josef Evan Halim",
      image_src: JosefEvanHalim.src,
      role: "Vocal Coach",
      course: "BEEC/4",
    },
    // Group 4: No Role
    {
      name: "Brendan Alexander",
      image_src: BrendanAlexander.src,
      role: "Vocal Coach",
      course: "EEE/2",
    },
    {
      name: "Denise Evangeline Pigety",
      image_src: DeniseEvangelinePigety.src,
      role: "",
      course: "MAE/1",
    },
    {
      name: "Farhan Akbar",
      image_src: FarhanAkbar.src,
      role: "",
      course: "CEE/2",
    },
    {
      name: "Frederik Hanson",
      image_src: FrederickHanson.src,
      role: "",
      course: "EEE/4",
    },
    {
      name: "Justine Alexander Wijaya",
      image_src: JustineAlexanderWijaya.src,
      role: "",
      course: "ENE/1",
    },
    {
      name: "Owen Nigel Tjiptarahardja",
      image_src: OwenNigelTjiptarahardja.src,
      role: "",
      course: "BCG/2",
    },
    {
      name: "Phoebe Marvella",
      image_src: PhoebeMarvella.src,
      role: "",
      course: "MSE/1",
    },
    {
      name: "Wilsen Chandra Putra",
      image_src: WilsenChandraPutra.src,
      role: "",
      course: "MAE/4",
    },
  ],
};

export default ActorsCommittee;
