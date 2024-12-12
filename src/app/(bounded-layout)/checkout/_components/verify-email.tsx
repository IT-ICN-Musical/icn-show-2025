"use client";

import { verifyOTP } from "@/api/otp";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

  const { mutate, error, isPending, isSuccess } = useMutation({
    mutationFn: verifyOTP,
    onSuccess: (data) => {
      setSuccessMessage("Redirecting to Stripe...");
      onSuccess(data.token);
    },
  });

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
              Please enter the OTP code sent to {email}
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
