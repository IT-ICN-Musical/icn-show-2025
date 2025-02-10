import { Committee } from "@/types/committee";

import CliffSia from "./cliff-sia.jpg";
import TrishaCianita from "./trisha-cianita.jpg";
import Writer from "./writer.jpg";

const ScriptwriterCommittee: Committee = {
  type: "Arts & Production",
  name: "Scriptwriter",
  image_src: Writer.src,
  members: [
    {
      name: "Cliff Sia",
      image_src: CliffSia.src,
      role: "Scriptwriter",
      course: "EEE/2",
    },
    {
      name: "Trisha Cianita",
      image_src: TrishaCianita.src,
      role: "Scriptwriter",
      course: "BUS/2",
    },
  ],
};

export default ScriptwriterCommittee;
