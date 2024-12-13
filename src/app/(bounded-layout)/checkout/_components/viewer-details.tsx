import { ViewerDetails as ViewerDetailsType } from "@/types/checkout";
import { useState } from "react";

import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
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

type TicketDetail = {
  name: string;
  item_id: string;
  quantity: number;
};

type ViewerDetailsProps = {
  tickets: TicketDetail[];
  viewerDetails: ViewerDetailsType[];
  setViewerDetails: (value: ViewerDetailsType[]) => void;
};

function ViewerDetailsDialog({
  ticket,
  name,
  viewerDetail,
  setViewerDetail,
}: {
  ticket: TicketDetail;
  name: string;
  viewerDetail: ViewerDetailsType;
  setViewerDetail: (value: ViewerDetailsType) => void;
}) {
  const [open, setOpen] = useState(false);
  const [viewers, setViewers] = useState<string[]>(viewerDetail?.viewers);

  const completed = viewerDetail?.viewers.every((viewer) => viewer !== "");

  return (
    <div className="flex w-full gap-2 items-center">
      <Typography variant="p" className="text-sm font-book">
        {ticket.name} x{ticket.quantity}
      </Typography>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {completed ? (
            <Button className="opacity-50">
              Edit viewer details (completed)
            </Button>
          ) : (
            <Button>Add viewer details</Button>
          )}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Viewer Details</DialogTitle>
            <DialogDescription>{name}</DialogDescription>
          </DialogHeader>
          <div className="w-full py-4">
            <div className="flex flex-col w-full gap-2">
              {[...Array(ticket.quantity)].map((_, index) => (
                <Input
                  key={index}
                  value={viewers[index]}
                  onChange={(e) => {
                    const newViewers = [...viewers];
                    newViewers[index] = e.target.value;
                    setViewers(newViewers);
                  }}
                  placeholder={`Viewer ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              onClick={() => {
                setViewerDetail({
                  ...viewerDetail,
                  viewers,
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

export function ViewerDetails({
  tickets,
  viewerDetails,
  setViewerDetails,
}: ViewerDetailsProps) {
  return (
    <div className="my-4 p-4 bg-white rounded-lg shadow">
      <Typography as="h5" className="font-mont font-medium mb-3">
        Viewer Details*
      </Typography>
      <div className="flex flex-col w-full gap-2">
        {tickets.map((ticket, index) => {
          const viewerDetail = viewerDetails[index];

          const setViewerDetail = (value: ViewerDetailsType) => {
            setViewerDetails([
              ...viewerDetails.slice(0, index),
              value,
              ...viewerDetails.slice(index + 1),
            ]);
          };
          return (
            <ViewerDetailsDialog
              key={index}
              name={ticket.name}
              ticket={ticket}
              viewerDetail={viewerDetail}
              setViewerDetail={setViewerDetail}
            />
          );
        })}
      </div>
    </div>
  );
}
