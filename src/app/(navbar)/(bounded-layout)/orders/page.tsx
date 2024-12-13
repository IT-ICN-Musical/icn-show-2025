import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <main className="flex w-full h-screen -my-6 items-center justify-center">
      <div className="flex flex-col items-center w-full gap-2">
        <Typography
          variant="h3"
          as="h3"
          className="font-safira-march leading-[5rem] "
        >
          Orders
        </Typography>
        <Input className="max-w-sm w-full" placeholder="Email" />
        <Button type="button" className="w-full max-w-sm">
          Submit
        </Button>
      </div>
    </main>
  );
}
