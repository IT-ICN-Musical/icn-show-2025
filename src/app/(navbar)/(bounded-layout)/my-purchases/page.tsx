import Typography from "@/components/typography/typography";

import { PurchaseCard } from "../store/_components/purchase-card";

type MyPurchaseBackend = {
  title: string;
  show: { start_time: string; end_time: string };
  show_quantity: number;
  merch_size: string;
  image_url: string;
  merch_quantity: number;
  generic_quantity: number;
};

type MyPurchases = {
  [date: string]: MyPurchaseBackend[];
};

const mock: MyPurchases[] = [
  {
    "29 September 2024": [
      {
        title: "Early bird matinee",
        show: {
          start_time: new Date().toUTCString(),
          end_time: new Date().toUTCString(),
        },
        show_quantity: 2,
        merch_quantity: 0,
        generic_quantity: 0,
        merch_size: "",
        image_url: "https://picsum.photos/id/237/200/300",
      },
      {
        title: "T-shirt 1",
        show: {
          start_time: "",
          end_time: "",
        },
        generic_quantity: 0,
        show_quantity: 0,
        merch_quantity: 5,
        merch_size: "XL",
        image_url: "https://picsum.photos/id/237/200/300",
      },
      {
        title: "T-Shirt + 1 Early Bird Matinee Bundle",
        show: {
          start_time: new Date().toUTCString(),
          end_time: new Date().toUTCString(),
        },
        show_quantity: 1,
        generic_quantity: 0,
        merch_quantity: 5,
        merch_size: "XL",
        image_url: "https://picsum.photos/id/237/200/300",
      },
    ],
  },
  {
    "30 September 2024": [
      {
        title: "Early bird matinee",
        show: {
          start_time: new Date().toUTCString(),
          end_time: new Date().toUTCString(),
        },
        show_quantity: 2,
        merch_quantity: 0,
        generic_quantity: 0,

        merch_size: "",
        image_url: "https://picsum.photos/id/237/200/300",
      },
      {
        title: "T-shirt 1",
        show: {
          start_time: "",
          end_time: "",
        },
        show_quantity: 0,
        merch_quantity: 5,
        generic_quantity: 0,

        merch_size: "XL",
        image_url: "https://picsum.photos/id/237/200/300",
      },
      {
        title: "T-Shirt + 1 Early Bird Matinee Bundle",
        show: {
          start_time: new Date().toUTCString(),
          end_time: new Date().toUTCString(),
        },
        show_quantity: 1,
        generic_quantity: 0,
        merch_quantity: 5,
        merch_size: "XL",
        image_url: "https://picsum.photos/id/237/200/300",
      },
      {
        title: "Key Chain",
        show: {
          start_time: "",
          end_time: "",
        },
        show_quantity: 0,
        generic_quantity: 1,
        merch_quantity: 0,
        merch_size: "",
        image_url: "https://picsum.photos/id/237/200/300",
      },
    ],
  },
];

export default async function MyPurchases() {
  return (
    <main className="font-safira-march">
      <div className="text-center">My Purchases</div>

      {mock.map((dateEntry, index) => {
        const date = Object.keys(dateEntry)[0];
        const purchases = dateEntry[date];

        return (
          <div key={index} className="mt-10 space-y-2">
            <Typography
              variant="p"
              className="text-slate-500 text-center text-md sm:text-xl mb-4"
            >
              {date}
            </Typography>

            {purchases.map((purchase, idx) => (
              <PurchaseCard
                key={idx}
                title={purchase.title}
                showTimings={{
                  startTime: purchase.show.start_time || "",
                  endTime: purchase.show.end_time || "",
                }}
                showQuantity={purchase.show_quantity}
                merchQuantity={purchase.merch_quantity}
                merchSize={purchase.merch_size}
                imageUrl={purchase.image_url}
                genericQuantity={purchase.generic_quantity}
              />
            ))}
          </div>
        );
      })}
    </main>
  );
}
