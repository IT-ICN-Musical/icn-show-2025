import { request } from "@/lib/request";
import { redirect } from "next/navigation";

import { MyTicketsCard } from "../../store/_components/my-tickets-card";

export const dynamic = "force-dynamic";

type MyTicketsBackend = {
  name: string;
  show_time: { start_time: string; end_time: string };
  show: string;
  category: string;
  viewer_id: string;
};
export default async function MyTickets({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const emailToken = (await params).slug;
  const response = await request<MyTicketsBackend[]>({
    method: "GET",
    path: `v2/order/my-tickets?emailToken=${emailToken}`,
  });

  let myTickets: MyTicketsBackend[] | undefined;
  if (response.success) {
    myTickets = response.data;
  } else {
    redirect("/orders");
  }

  return (
    <main className="font-safira-march">
      <div className="text-center">My Tickets</div>
      <div className="mt-10 space-y-2">
        {myTickets?.map((data) => (
          <MyTicketsCard
            name={data.name}
            showTime={{
              startTime: data.show_time.start_time,
              endTime: data.show_time.end_time,
            }}
            show={data.show}
            category={data.category}
            viewerId={data.viewer_id}
          />
        ))}
      </div>
    </main>
  );
}
