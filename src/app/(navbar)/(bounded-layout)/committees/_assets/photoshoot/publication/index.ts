import { Committee } from "@/types/committee";

import AnsonDouglasHakim from "./anson-douglas-hakim.jpg";
import ElbertOsvaldoYen from "./elbert-osvaldo-yen.jpg";
import FederricoHansenBudianto from "./federrico-hansen-budianto.jpg";
import JoeyBastariThamrin from "./joey-bastari-thamrin.jpg";
import Pubs from "./pubs.jpg";
import SayyedMuhammadRizwanHarahap from "./sayyed-muhammad-rizwan-harahap.jpg";
import ValdyLionelChristian from "./valdy-lionel-christian.jpg";
import VerenaDanamayaBintang from "./verena-danamaya-bintang.jpg";
import WilliamMulia from "./william-mulia.jpg";

const PublicationsCommittee: Committee = {
  type: "External Affairs",
  name: "Publications",
  image_src: Pubs.src,
  members: [
    {
      name: "Federrico Hansen Budianto",
      image_src: FederricoHansenBudianto.src,
      role: "Main Committee",
      course: "DSAI/2",
    },
    {
      name: "Joey Bastari Thamrin",
      image_src: JoeyBastariThamrin.src,
      role: "Main Committee",
      course: "MAE/3",
    },
    {
      name: "Anson Douglas Hakim",
      image_src: AnsonDouglasHakim.src,
      role: "",
      course: "MAE/4",
    },
    {
      name: "Elbert osvaldo yen",
      image_src: ElbertOsvaldoYen.src,
      role: "",
      course: "MAE/3",
    },

    {
      name: "Sayyed Muhammed Ridzwan Harahap",
      image_src: SayyedMuhammadRizwanHarahap.src,
      role: "",
      course: "NBS/1",
    },
    {
      name: "Valdy Lionel Christian",
      image_src: ValdyLionelChristian.src,
      role: "",
      course: "MAE/4",
    },
    {
      name: "Verena Danamaya Bintang",
      image_src: VerenaDanamayaBintang.src,
      role: "",
      course: "PSY/1",
    },
    {
      name: "William Mulia",
      image_src: WilliamMulia.src,
      role: "",
      course: "CEE/1",
    },
  ],
};

export default PublicationsCommittee;
