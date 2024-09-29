import { cn } from "@/lib/utils";
import * as React from "react";

export enum TypographyVariant {
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
}

export enum TypographyColor {
  "black",
  "white",
  "blue",
}

export type TypographyProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  color?: keyof typeof TypographyColor;
  variant?: keyof typeof TypographyVariant;
  children: React.ReactNode;
} & React.ComponentProps<"p">;

export default function Typography<T extends React.ElementType>({
  as,
  children,
  className,
  color = "black",
  variant,
  ...rest
}: TypographyProps<T>) {
  const Component = as || "p";
  return (
    <Component
      className={cn(
        "font-mont",
        [
          variant === "h1" && ["text-5xl"],
          variant === "h2" && ["text-4xl"],
          variant === "h3" && ["text-3xl"],
          variant === "h4" && ["text-2xl"],
          variant === "h5" && ["text-xl"],
          variant === "h6" && ["text-lg"],
          variant === "p" && ["text-base"],
        ],

        //#region  //*=========== Color ===========
        [
          color === "black" && ["text-black"],
          color === "white" && ["text-white"],
          color === "blue" && ["text-blue-500"],
        ],
        //#endregion  //*======== Color ===========
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
