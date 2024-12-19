import { request } from "@/lib/request";
import Link from "next/link";
import { redirect } from "next/navigation";

import { MyTicketsCard } from "../store/_components/my-tickets-card";

export const dynamic = "force-dynamic";

type MyTicketsBackend = {
  name: string;
  show_time: { start_time: string; end_time: string };
  show: string;
  category: string;
  viewer_id: string;
};
export default async function MyTickets({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const emailToken = (await searchParams).token;
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
      <div className="text-center text-lg">My Tickets</div>
      <div className="font-mont text-[1rem] mt-1 text-center">
        Go back to{" "}
        <Link
          className="text-blue-500 "
          href={`/my-purchases?token=${emailToken}`}
        >
          My Tickets
        </Link>
        ?
      </div>
      <div className="mt-10 space-y-2">
        {myTickets?.map((data) => (
          <MyTicketsCard
            name={data.name}
            showTime={{
              startTime: data.show_time.start_time,
              endTime: data.show_time.end_time,
            }}
            key={data.viewer_id}
            show={data.show}
            category={data.category}
            viewerId={data.viewer_id}
          />
        ))}
      </div>
    </main>
  );
}
