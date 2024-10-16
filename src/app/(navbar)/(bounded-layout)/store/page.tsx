import { fetchShowDetails } from "@/api/items";

import { TicketSelection } from "@/components/store/ticket-selection";
import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

export default async function Shop() {
  const show = await fetchShowDetails("8365ade3-b1b0-4bbb-8801-a8eefbcffa58");

  return (
    <main>
      <Typography variant="h3" className="font-safira-march mb-2">
        Store
      </Typography>

      <TicketSelection show={show}>
        <Button>Open Drawer</Button>
      </TicketSelection>
    </main>
  );
}
