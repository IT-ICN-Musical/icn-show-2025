import Typography from "@/components/typography/typography";

import { MyTicketsCard } from "../store/_components/my-tickets-card";

type MyTicketsBackend = {
  name: string;
  show_time: { start_time: string; end_time: string };
  show: string;
  category: string;
  viewer_id: string;
};

const mockMyTickets: MyTicketsBackend[] = [
  {
    name: "Rafi Pangesttu",
    show_time: {
      start_time: new Date().toISOString(),
      end_time: new Date().toISOString(),
    },
    show: "Early Bird Matinee",
    category: "A",
    viewer_id: "AAAAABB",
  },
  {
    name: "Pangsit Pangestu",
    show_time: {
      start_time: new Date().toISOString(),
      end_time: new Date().toISOString(),
    },
    show: "Early Bird Night",
    category: "B",
    viewer_id: "AAAAA",
  },
];

export default async function MyTickets() {
  return (
    <main className="font-safira-march">
      <div className="text-center">My Tickets</div>
      <div className="mt-10 space-y-2">
        {mockMyTickets.map((data) => (
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
