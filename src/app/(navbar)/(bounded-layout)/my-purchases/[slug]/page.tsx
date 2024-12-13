import { request } from "@/lib/request";
import { redirect } from "next/navigation";

import Typography from "@/components/typography/typography";

import { PurchaseCard } from "../../store/_components/purchase-card";

export const dynamic = "force-dynamic";

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

export default async function MyPurchases({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const emailToken = (await params).slug;
  const response = await request<MyPurchases[]>({
    method: "GET",
    path: `v2/order/my-purchases?emailToken=${emailToken}`,
  });

  let myPurchases: MyPurchases[] | undefined;

  if (response.success) {
    myPurchases = response.data;
  } else {
    redirect("/orders");
  }

  return (
    <main className="font-safira-march">
      <div className="text-center">My Purchases</div>

      {myPurchases?.map((dateEntry, index) => {
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
