import { PartyPopper } from "lucide-react";

import { Card, CardDescription } from "@/components/ui/card";

export function PromotionBanner() {
  return (
    <Card className="w-full bg-[#F7FFFE] px-4 py-4">
      <div className="flex gap-4">
        <PartyPopper className="text-[#4D9B8F]" size={24} />
        <CardDescription>
          <span className="text-xl text-[#30B566] font-semibold">
            Your promotion code is here!
          </span>
          <br />
          Use <span className="font-bold"> K$HRSA</span> to get{" "}
          <span className="font-bold"> 50%</span> off of your total purchase
          without minimum. Only applicable for non-bundle items
        </CardDescription>
      </div>
    </Card>
  );
}
