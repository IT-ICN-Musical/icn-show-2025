import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

export default function Shop() {
  return (
    <main>
      <Typography variant="h3" className="font-safira-march mb-2">
        Store
      </Typography>
      <Drawer>
        <DrawerTrigger asChild>
          <Button>Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <Typography variant="h4" className="font-safira-march">
            Drawer content
          </Typography>
        </DrawerContent>
      </Drawer>
    </main>
  );
}
