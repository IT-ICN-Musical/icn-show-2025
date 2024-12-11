import Typography from "@/components/typography/typography";

import { MyTicketsCard } from "../store/_components/my-tickets-card";

export default async function MyTickets() {
  return (
    <main className="font-safira-march">
      <div className="text-center">My Tickets</div>
      <div className="mt-10 space-y-2">
        <MyTicketsCard
          name={"Rafpang"}
          showTime={{
            startTime: new Date(),
            endTime: new Date(),
          }}
          show={"Matinee"}
          category="A"
          viewerId="VIEWER ID GOES HERE"
        />
      </div>
    </main>
  );
}
