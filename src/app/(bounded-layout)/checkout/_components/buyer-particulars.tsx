import Typography from "@/components/typography/typography";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";

export function BuyerParticulars() {
  return (
    <div className="my-4 p-4 bg-white rounded-lg shadow">
      <Typography as="h5" className="font-mont font-medium mb-3">
        Buyer Particulars
      </Typography>
      <div className="flex flex-col gap-2 w-full max-w-[400px]">
        <Input
          name="buyer_name"
          id="buyer_name"
          placeholder="Name*"
          className=""
          required={true}
        />
        <PhoneInput
          id="phone"
          name="phone"
          placeholder="Phone*"
          required={true}
        />
        <Input
          placeholder="Email*"
          type="email"
          id="email"
          name="email"
          required={true}
        />
        <Typography variant="p" className="text-xs text-gray-500">
          We will send the receipt and ticket to this email
        </Typography>
      </div>
    </div>
  );
}
