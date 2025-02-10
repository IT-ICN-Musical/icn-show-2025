"use client";

import { checkOrder } from "@/api/order";
import { generateOTP, verifyOTP } from "@/api/otp";
import { useMutation } from "@tanstack/react-query";
import { Info } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function VerifyEmailDialog({
  open,
  email,
  setOpen,
  onSuccess,
}: {
  open: boolean;
  email: string;
  setOpen: (value: boolean) => void;
  onSuccess: (token: string) => void;
}) {
  const [successMessage, setSuccessMessage] = useState<string>();

  const { mutate, error, isPending, isSuccess, reset } = useMutation({
    mutationFn: verifyOTP,
    onSuccess: (data) => {
      setSuccessMessage("Redirecting to my purchase page...");
      onSuccess(data.token);
    },
  });

  useEffect(() => {
    if (open) reset();
  }, [open, reset]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const otp = e.currentTarget.otp.value as string;
            mutate({ email, otp });
          }}
        >
          <DialogHeader>
            <DialogTitle>Verify Email</DialogTitle>
            <DialogDescription>
              Enter the 6-digit OTP that has been sent to <b>{email}</b>
              <span className="flex items-center gap-2 text-xs font-light mt-2">
                <Info size={16} /> Didnt't receive? Make sure to check your
                junk/spam folder.
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="w-full py-4">
            <div className="flex justify-center w-full">
              <InputOTP name="otp" id="otp" maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <Typography
              variant="p"
              className="mt-4 text-red-500 text-sm font-book w-full"
            >
              {error?.message}
            </Typography>
            <Typography
              variant="p"
              className="mt-4 text-lime-400 text-sm font-book w-full"
            >
              {successMessage}
            </Typography>
          </div>

          <DialogFooter>
            <Button type="submit" disabled={isPending || isSuccess}>
              Verify OTP
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default function Page() {
  const [email, setEmail] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const { mutate: generateOTPMutate, error: generateOTPError } = useMutation({
    mutationFn: generateOTP,
    mutationKey: ["generateOTP"],
    onSuccess: () => {
      setOpen(true);
    },
  });

  const {
    mutate: checkMutate,
    error,
    isPending,
  } = useMutation({
    mutationFn: checkOrder,
    mutationKey: ["checkOrder"],
    onSuccess: () => {
      generateOTPMutate({ email });
    },
  });

  const router = useRouter();

  return (
    <main className="flex w-full h-screen -my-6 items-center justify-center">
      <VerifyEmailDialog
        onSuccess={(token) => router.push(`/my-purchases?token=${token}`)}
        email={email}
        open={open}
        setOpen={setOpen}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const email = e.currentTarget.email.value;
          setEmail(email);
          checkMutate({ email });
        }}
        className="flex flex-col items-center w-full gap-2"
      >
        <Typography
          variant="h3"
          as="h3"
          className="font-safira-march leading-[5rem] "
        >
          Orders
        </Typography>

        <Input
          className="max-w-sm w-full"
          name="email"
          id="email"
          placeholder="Email"
        />
        <Typography
          variant="p"
          className="text-rose-700 text-left w-full max-w-sm ml-4"
        >
          {generateOTPError?.message}
        </Typography>
        <Typography
          variant="p"
          className="text-rose-700 text-left w-full max-w-sm ml-4"
        >
          {error?.message}
        </Typography>
        <Button type="submit" className="w-full max-w-sm" disabled={isPending}>
          Submit
        </Button>
      </form>
    </main>
  );
}
