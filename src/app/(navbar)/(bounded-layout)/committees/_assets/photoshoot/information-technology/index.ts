import { Committee } from "@/types/committee";

import BryanAtistaKiely from "./bryan-atista-kiely.jpg";
import ClaytonFernalo from "./clayton-fernalo.jpg";
import ElvinSugianto from "./elvin-sugianto.jpg";
import EmmanuelMatthewChristopherLoho from "./emmanuel-matthew-christopher-loho.jpg";
import GoodwillBrianLion from "./goodwill-brian-lion.jpg";
import ITImage from "./it.jpg";
import JoshuaJames from "./joshua-james.jpg";
import JuanFrederick from "./juan-frederick.jpg";
import KlarissaWitania from "./klarissa-witania.jpg";
import KristianHadinataAchwan from "./kristian-hadinata-achwan.jpg";
import RafiBintangPangestu from "./rafi-bintang-pangestu.jpg";
import ReswaraAnargyaDzakirullah from "./reswara-anargya-dzakirullah.jpg";

const InformationTechnologyCommittee: Committee = {
  type: "External Affairs",
  name: "Information Technology",
  image_src: ITImage.src,
  members: [
    // Main Committee
    {
      name: "Clayton Fernalo",
      image_src: ClaytonFernalo.src,
      role: "Main Committee",
      course: "CSC/3",
    },
    // Other Members
    {
      name: "Bryan Atista Kiely",
      image_src: BryanAtistaKiely.src,
      role: "",
      course: "DSAI/3",
    },
    {
      name: "Juan Frederick",
      image_src: JuanFrederick.src,
      role: "",
      course: "CSC/3",
    },
    {
      name: "Klarissa Witania",
      image_src: KlarissaWitania.src,
      role: "",
      course: "IEM/2",
    },
    {
      name: "Elvin Sugianto",
      image_src: ElvinSugianto.src,
      role: "",
      course: "IEM/3",
    },
    {
      name: "Kristian Hadinata Achwan",
      image_src: KristianHadinataAchwan.src,
      role: "",
      course: "MACS/4",
    },
    {
      name: "Emmanuel Matthew Christopher Loho",
      image_src: EmmanuelMatthewChristopherLoho.src,
      role: "",
      course: "CE/1",
    },
    {
      name: "Rafi Bintang Pangestu",
      image_src: RafiBintangPangestu.src,
      role: "",
      course: "CBE/4",
    },
    {
      name: "Goodwill Bryan Lion",
      image_src: GoodwillBrianLion.src,
      role: "",
      course: "IEM/2",
    },
    {
      name: "Reswara Anargya Dzakirullah",
      image_src: ReswaraAnargyaDzakirullah.src,
      role: "",
      course: "CSC/2",
    },
    {
      name: "Joshua James",
      image_src: JoshuaJames.src,
      role: "",
      course: "EEE/3",
    },
  ],
};

export default InformationTechnologyCommittee;
