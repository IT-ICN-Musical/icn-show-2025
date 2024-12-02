import { PartyPopper } from "lucide-react";

import { Card, CardDescription } from "@/components/ui/card";

export function AppliedPromotionBanner() {
  return (
    <Card className="w-full bg-[#F7FFFE] px-4 py-4">
      <div className="flex gap-4 items-center">
        <PartyPopper className="text-[#4D9B8F]" size={36} />
        <p className="font-mont text-xs font-normal">
          Congratulations! Your promo code has been successfully applied. Enjoy
          your discount!
        </p>
      </div>
    </Card>
  );
}
