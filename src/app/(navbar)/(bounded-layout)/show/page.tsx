import Committees from "src/app/(navbar)/(unbounded-layout)/committees"
import CastCarousel from "./_components/cast-carousel";

export default function Show() {
  return (
    <main className="font-safira-march">
      <p>Show page</p>
      <div className="my-2">
        <CastCarousel />
      </div>
    </main>
  );
}
