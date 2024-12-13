import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";

export default function Descriptions({
  onClickBuy,
}: {
  onClickBuy: () => void;
}) {
  return (
    <>
      <div className="flex items-center flex-col">
        <div className="text-white mb-5">
          <Typography variant="h6" className="text-lg md:text-xl text-white">
            In the heart of Yogyakarta, Arya Rahma Aditya rises from family
            disapproval to become a celebrated theater director. Despite his raw
            talent and dedication, success comes at a price – arrogance isolates
            him from his team, and his perfectly crafted world stands on the
            edge of collapse. <br />
            <br />
            When tragedy strikes, this powerful story follows one man's journey
            from triumph to rock bottom, and the path that unfolds in its wake.
          </Typography>
        </div>
        <Button
          variant="ghost"
          className="border bg-none border-white font-safira-march text-white p-2 rounded-md hover:pointer"
          onClick={onClickBuy}
        >
          Buy Tickets
        </Button>
      </div>
    </>
  );
}
