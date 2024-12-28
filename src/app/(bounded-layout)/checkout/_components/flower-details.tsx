import { FlowerDetails as FlowerDetailsType } from "@/types/checkout";
import { useState } from "react";

import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FlowerDetail = {
  name: string;
  item_id: string;
  quantity: number;
};

type FlowerDetailsProps = {
  flowers: FlowerDetail[];
  flowerDetails: FlowerDetailsType[];
  setFlowerDetails: (value: FlowerDetailsType[]) => void;
};

function FlowerDetailsDialog({
  flower,
  name,
  flowerDetail,
  setFlowerDetail,
}: {
  flower: FlowerDetail;
  name: string;
  flowerDetail: FlowerDetailsType;
  setFlowerDetail: (value: FlowerDetailsType) => void;
}) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(flowerDetail?.messages);

  const completed = flowerDetail?.messages.every(
    (viewer) => viewer.from !== "" && viewer.to !== "" && viewer.message !== "",
  );
  return (
    <div className="flex w-full gap-2 items-center">
      <Typography variant="p" className="text-sm font-book">
        {flower.name} x{flower.quantity}
      </Typography>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {completed ? (
            <Button className="opacity-50">
              Edit flower details (completed)
            </Button>
          ) : (
            <Button>Add flower details</Button>
          )}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Viewer Details</DialogTitle>
            <DialogDescription>{name}</DialogDescription>
          </DialogHeader>
          <div className="w-full py-4 overflow-y-auto max-h-[400px] px-1">
            <div className="flex flex-col w-full gap-2">
              {[...Array(flower.quantity)].map((_, index) => (
                <div key={index} className="flex flex-col gap-2 mb-2">
                  <Typography variant="p" className="text-base font-book">
                    Flower {index + 1}
                  </Typography>
                  <Input
                    value={messages[index]?.from}
                    onChange={(e) => {
                      const newFlowers = structuredClone(messages);
                      newFlowers[index].from = e.target.value;
                      setMessages(newFlowers);
                    }}
                    placeholder={`From`}
                  />
                  <Input
                    value={messages[index]?.to}
                    onChange={(e) => {
                      const newFlowers = structuredClone(messages);
                      newFlowers[index].to = e.target.value;
                      setMessages(newFlowers);
                    }}
                    placeholder={`To`}
                  />
                  <Textarea
                    value={messages[index]?.message}
                    onChange={(e) => {
                      const newFlowers = structuredClone(messages);
                      newFlowers[index].message = e.target.value;
                      setMessages(newFlowers);
                    }}
                    placeholder={`Message`}
                  />
                  <span className="flex gap-2 items-center">
                    <Typography variant="p" className="text-sm font-light">
                      Deliver to recipient?
                    </Typography>
                    <Checkbox
                      checked={messages[index]?.delivery}
                      onCheckedChange={(checked) => {
                        const newFlowers = structuredClone(messages);
                        newFlowers[index].delivery = checked === true;
                        setMessages(newFlowers);
                      }}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              onClick={() => {
                setFlowerDetail({
                  ...flowerDetail,
                  messages,
                });
                setOpen(false);
              }}
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export function FlowerDetails({
  flowers,
  flowerDetails,
  setFlowerDetails,
}: FlowerDetailsProps) {
  console.log(flowerDetails);
  return (
    <div className="my-4 p-4 bg-white rounded-lg shadow">
      <Typography as="h5" className="font-mont font-medium mb-3">
        Flower Details*
      </Typography>
      <div className="flex flex-col w-full gap-2">
        {flowers.map((flower, index) => {
          const flowerDetail = flowerDetails[index];

          const setFlowerDetail = (value: FlowerDetailsType) => {
            setFlowerDetails([
              ...flowerDetails.slice(0, index),
              value,
              ...flowerDetails.slice(index + 1),
            ]);
          };
          return (
            <FlowerDetailsDialog
              key={index}
              name={flower.name}
              flower={flower}
              flowerDetail={flowerDetail}
              setFlowerDetail={setFlowerDetail}
            />
          );
        })}
      </div>
    </div>
  );
}
