import Typography from "@/components/typography/typography";

import emeraldStephenRiady from "../_assets/logo/emerald-stephen-riady.png";
import goldBraincode from "../_assets/logo/gold-braincode.jpeg";
import goldHdl from "../_assets/logo/gold-hdl.png";
import goldSamudera from "../_assets/logo/gold-samudera.png";
import mpAsianGeography from "../_assets/logo/mp-asian-geography.png";
import mpDanamic from "../_assets/logo/mp-danamic.png";
import mpKompasiana from "../_assets/logo/mp-kompasiana.png";
import mpReadersDigest from "../_assets/logo/mp-readers-digest.png";
import platinumBCA from "../_assets/logo/platinum-bca.png";
import platinumHillcon from "../_assets/logo/platinum-hillcon.png";
import silverBI from "../_assets/logo/silver-bi.png";
import silverIndomie from "../_assets/logo/silver-indomie.png";
import silverPertamina from "../_assets/logo/silver-pertamina.png";
import silverWardaya from "../_assets/logo/silver-wardaya.png";
import { BaseImage } from "./base-image";

const sponsors = [
  {
    image: emeraldStephenRiady,
    alt: "Emerald Stephen Riady",
  },
  {
    image: platinumBCA,
    alt: "Platinum BCA",
  },
  {
    image: platinumHillcon,
    alt: "Platinum Hillcon",
  },
  {
    image: goldBraincode,
    alt: "Gold Braincode",
  },
  {
    image: goldHdl,
    alt: "Gold Hai Di Lao",
  },
  {
    image: goldSamudera,
    alt: "Gold Samudera",
  },

  {
    image: silverBI,
    alt: "Silver BI",
  },
  {
    image: silverIndomie,
    alt: "Silver Indomie",
  },
  {
    image: silverPertamina,
    alt: "Silver Pertamina",
  },
  {
    image: silverWardaya,
    alt: "Silver Wardaya College",
  },
  {
    image: mpAsianGeography,
    alt: "MP Asian Geography",
  },
  {
    image: mpDanamic,
    alt: "MP Danamic",
  },
  {
    image: mpKompasiana,
    alt: "MP Kompasiana",
  },
  {
    image: mpReadersDigest,
    alt: "MP Readers Digest",
  },
];

export default function Sponsors({ onLoadOnce }: { onLoadOnce: () => void }) {
  return (
    <>
      <div className="flex-col flex gap-20 items-center justify-center">
        <Typography variant="h2" className="font-safira-march text-white">
          Sponsors
        </Typography>
        <div className="flex gap-4 flex-wrap w-full justify-center">
          {sponsors.map((data, index) => (
            <div key={index} className="w-1/5 aspect-square bg-white p-1">
              <div className="w-full h-full relative">
                <BaseImage
                  src={data.image}
                  alt={data.alt}
                  fill={true}
                  className="object-contain"
                  onLoadOnce={onLoadOnce}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
