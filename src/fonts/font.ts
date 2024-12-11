import localFont from "next/font/local";

export const mont = localFont({
  variable: "--font-mont",
  src: [
    {
      path: "./mont/Mont-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./mont/Mont-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
    {
      path: "./mont/Mont-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./mont/Mont-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./mont/Mont-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./mont/Mont-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./mont/Mont-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./mont/Mont-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./mont/Mont-Book.ttf",
      weight: "350",
      style: "normal",
    },
    {
      path: "./mont/Mont-BookItalic.ttf",
      weight: "350",
      style: "italic",
    },
    {
      path: "./mont/Mont-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./mont/Mont-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./mont/Mont-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./mont/Mont-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
  ],
});

export const safiraMarch = localFont({
  variable: "--font-safira-march",
  src: "./safira-march/SafiraMarch.woff2",
});
