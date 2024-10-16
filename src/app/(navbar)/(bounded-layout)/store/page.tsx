import { fetchClothingDetails, fetchShowDetails } from "@/api/items";

import { ClothingSelection } from "@/components/store/clothing-selection";
import { TicketSelection } from "@/components/store/ticket-selection";
import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";

export default async function Shop() {
  return (
    <main>
      <Typography variant="h3" className="font-safira-march mb-2">
        Store
      </Typography>
    </main>
  );
}
