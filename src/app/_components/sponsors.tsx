import Typography from "@/components/typography/typography";

import emeraldStephenRiady from "../_assets/logo/emerald-stephen-riady.png";
import goldBraincode from "../_assets/logo/gold-braincode.jpeg";
import goldHdl from "../_assets/logo/gold-hdl.png";
import goldSamudera from "../_assets/logo/gold-samudera.png";
import mpAsianGeography from "../_assets/logo/mp-asian-geography.png";
import mpDanamic from "../_assets/logo/mp-danamic.png";
import mpKompasiana from "../_assets/logo/mp-kompasiana.png";
import mpReadersDigest from "../_assets/logo/mp-readers-digest.png";
import mpSunmedia from "../_assets/logo/mp-sunmedia.png";
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
    url: "http://www.oue.com.sg/",
    category: "Emerald Sponsors",
  },
  {
    image: platinumBCA,
    alt: "Platinum BCA",
    url: "https://www.bca.co.id/en/tentang-bca",
    category: "Platinum Sponsors",
  },
  {
    image: platinumHillcon,
    alt: "Platinum Hillcon",
    url: "https://www.hillcon.co.id/",
    category: "Platinum Sponsors",
  },
  {
    image: goldBraincode,
    alt: "Gold Braincode",
    url: "https://www.braincodesolution.com/#/",
    category: "Gold Sponsors",
  },
  {
    image: goldHdl,
    alt: "Gold Hai Di Lao",
    url: "https://www.haidilao-inc.com/sg",
    category: "Gold Sponsors",
  },
  {
    image: goldSamudera,
    alt: "Gold Samudera",
    url: "http://www.samudera.id/",
    category: "Gold Sponsors",
  },
  {
    image: silverBI,
    alt: "Silver BI",
    url: "https://www.bi.go.id/en/default.aspx",
    category: "Silver Sponsors",
  },
  {
    image: silverIndomie,
    alt: "Silver Indomie",
    url: "http://www.indofoodinternational.com",
    category: "Silver Sponsors",
  },
  {
    image: silverPertamina,
    alt: "Silver Pertamina",
    url: "https://www.pertamina-pis.com/",
    category: "Silver Sponsors",
  },
  {
    image: silverWardaya,
    alt: "Silver Wardaya College",
    url: "https://www.wardayacollege.com/?amp=1#top",
    category: "Silver Sponsors",
  },
  {
    image: mpAsianGeography,
    alt: "MP Asian Geography",
    url: "http://www.AsianGeo.com",
    category: "Media Partners",
    new_col: true,
  },
  {
    image: mpDanamic,
    alt: "MP Danamic",
    url: "https://dnmc.sg/",
    category: "Media Partners",
  },
  {
    image: mpKompasiana,
    alt: "MP Kompasiana",
    url: "https://www.kompasiana.com/",
    category: "Media Partners",
  },
  {
    image: mpReadersDigest,
    alt: "MP Readers Digest",
    url: "https://www.rdasia.com/",
    category: "Media Partners",
  },
  {
    image: mpSunmedia,
    alt: "MP Sunmedia",
    url: "https://linktr.ee/sunmedia",
    category: "Media Partners",
  },
];

export default function Sponsors({ onLoadOnce }: { onLoadOnce: () => void }) {
  const sponsorsType = sponsors.reduce(
    (acc, sponsor) => {
      if (!acc[sponsor.category]) {
        acc[sponsor.category] = [];
      }
      acc[sponsor.category].push(sponsor);
      return acc;
    },
    {} as Record<string, typeof sponsors>,
  );

  return (
    <>
      <div className="flex-col flex gap-4 items-center justify-center w-full">
        {Object.entries(sponsorsType).map(([type, sponsors], index) => (
          <div key={index} className="w-full lg:w-3/4 2xl:w-[55%]">
            <Typography
              variant="h4"
              as="h4"
              className="font-safira-march text-white text-lg md:text-xl text-center w-full"
              style={{
                lineHeight: "2.50rem",
              }}
            >
              {type}
            </Typography>
            <div className="flex gap-4 flex-wrap w-full justify-center">
              {sponsors.map((data, index) => (
                <a
                  key={index}
                  className="w-[15.5%] lg:w-[16.5%] xl:w-[16.75%] aspect-square bg-white p-1 hover:opacity-75 duration-250 transition-opacity  "
                  href={data.url}
                  target="_blank"
                >
                  <div className="w-full h-full relative">
                    <BaseImage
                      src={data.image}
                      alt={data.alt}
                      fill={true}
                      className="object-contain"
                      onLoadOnce={onLoadOnce}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
        {/* <Typography
          variant="h3"
          as="h3"
          className="font-safira-march text-white text-3xl text-center"
          style={{
            lineHeight: "3.25rem",
          }}
        >
          Sponsors & Partners
        </Typography>
        <div className="flex gap-4 flex-wrap w-full justify-center">
          {sponsors.map((data, index) => (
            <a
              key={index}
              className="w-1/5 aspect-square bg-white p-1 hover:opacity-75 duration-500"
              href={data.url}
            >
              <div className="w-full h-full relative">
                <BaseImage
                  src={data.image}
                  alt={data.alt}
                  fill={true}
                  className="object-contain"
                  onLoadOnce={onLoadOnce}
                />
              </div>
            </a>
          ))}
        </div> */}
      </div>
    </>
  );
}
