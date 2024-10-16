import { fetchClothingDetails, fetchShowDetails } from "@/api/items";

import { ClothingSelection } from "@/components/store/clothing-selection";
import { TicketSelection } from "@/components/store/ticket-selection";
import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";

export default async function Shop() {
  const show = await fetchShowDetails("8365ade3-b1b0-4bbb-8801-a8eefbcffa58");
  const clothing = await fetchClothingDetails(
    "508d4c64-2528-4298-8584-828431144cd9",
  );

  return (
    <main>
      <Typography variant="h3" className="font-safira-march mb-2">
        Store
      </Typography>

      <ClothingSelection clothing={clothing}>
        <Button>Open Drawer</Button>
      </ClothingSelection>
    </main>
  );
}
