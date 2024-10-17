import Typography from "@/components/typography/typography";

import { BundleCard } from "./_components/bundle-card";
import { MerchandiseCard } from "./_components/merchandise-card";
import { PromotionBanner } from "./_components/promotion-banner";

export default function Shop() {
  return (
    <>
      <br />
      <PromotionBanner />
      <br />
      <br />
      <Typography variant="h4" className="font-safira-march">
        Ticketing
      </Typography>
      <br />
      <br />
      <div className="w-full flex gap-4 flex-wrap items-center justify-center rounded-3xl relative overflow-hidden py-4">
        <div className="absolute h-1/2 w-full bg-gradient-to-b from-[#FF2F3F99] to-white top-0 left-0 -z-10"></div>
        <div className="w-[40rem] flex items-center gap-4">
          {/* Not the final form of countdown component, but might be replaced by some library component. Therefore, it will be hardcoded for now */}
          <div className="text-white font-bold italic text-xl">
            BUNDLES TIME!
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#7E4E70] text-white p-2 rounded-lg">99</div>
            <div className=""> : </div>
            <div className="bg-[#7E4E70] text-white p-2 rounded-lg">60</div>
            <div className=""> : </div>
            <div className="bg-[#7E4E70] text-white p-2 rounded-lg">60</div>
          </div>
        </div>
        <BundleCard
          name="[Bundle] 5x Matinee Tickets"
          time="19 Feb 2025, 12.00 - 14.00 SGT"
          description="[Desc]"
          price="5.00"
          originalPrice="10.00"
        />
        <BundleCard
          name="[Bundle] 5x Matinee Tickets"
          time="19 Feb 2025, 12.00 - 14.00 SGT"
          description="[Desc]"
          price="5.00"
          originalPrice="5.00"
        />
        <BundleCard
          name="Night Ticket"
          time="19 Feb 2025, 12.00 - 14.00 SGT"
          description="[Desc]"
          price="5.00"
          originalPrice="5.00"
        />
        <BundleCard
          name="Matinee Ticket"
          time="19 Feb 2025, 12.00 - 14.00 SGT"
          description="[Desc]"
          price="5.00"
          originalPrice="5.00"
        />
      </div>
      <br />
      <Typography variant="h4" className="font-safira-march">
        Merchandise
      </Typography>
      <br />
      <div className="flex gap-4">
        <MerchandiseCard name="Product Name" price="10.00" />
        <MerchandiseCard name="Product Name" price="10.00" />
        <MerchandiseCard name="Product Name" price="10.00" />
      </div>
    </>
  );
}
