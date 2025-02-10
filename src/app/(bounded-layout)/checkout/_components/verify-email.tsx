"use client";

import { verifyOTP } from "@/api/otp";
import { useMutation } from "@tanstack/react-query";
import { Info } from "lucide-react";
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
  const [errorMessage, setErrorMessage] = useState<string>();

  const { mutate, error, isPending, isSuccess, reset } = useMutation({
    mutationFn: verifyOTP,
    onSuccess: (data) => {
      setSuccessMessage("Redirecting to Stripe...");
      onSuccess(data.token);
    },
    onError: (error) => {
      setSuccessMessage(undefined);
      setErrorMessage("An error has occured. Please try again.");
      console.log(error);
    },
  });

  useEffect(() => {
    if (open) {
      reset();
      setSuccessMessage(undefined);
      setErrorMessage(undefined);
    }
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
            <Typography
              variant="p"
              className="mt-4 text-red-500 text-sm font-book w-full"
            >
              {errorMessage}
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
