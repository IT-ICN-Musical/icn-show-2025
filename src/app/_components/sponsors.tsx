import Typography from "@/components/typography/typography";

export default function Sponsors() {
  return (
    <>
      <div className="flex-col flex gap-20 items-center justify-center">
        <Typography variant="h2" className="font-safira-march text-white">
          Sponsors
        </Typography>
        <div className="flex gap-4 flex-wrap w-[40rem] justify-center">
          {new Array(8).fill(0).map((_, index) => (
            <div key={index} className="w-1/5 aspect-square bg-white"></div>
          ))}
        </div>
      </div>
      ;
    </>
  );
}
