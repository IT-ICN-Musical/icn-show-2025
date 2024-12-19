"use client";

import QRCodeStyling from "qr-code-styling";
import { useEffect, useRef } from "react";

type QRProps = {
  data: string;
  className?: string;
};

export function QRCode({ data, className }: QRProps) {
  const ref = useRef<HTMLDivElement>(null);
  const imageRes = 1024;

  useEffect(() => {
    const cur = ref.current;
    if (cur) {
      const newQrCode = new QRCodeStyling({
        width: imageRes,
        height: imageRes,
        data: data,
        dotsOptions: {
          color: "#4a2d41",
          type: "classy",
        },
        imageOptions: {
          margin: 16,
          imageSize: 0.5,
        },
      });
      newQrCode.append(ref.current);

      // set width to full for ref.current's child
      const canvas: ChildNode = ref.current.childNodes[0];
      // @ts-expect-error canvas has style
      canvas.style.width = "100%";
    }

    return () => {
      if (cur) {
        // ignore react hook
        cur.innerHTML = "";
      }
    };
  }, [data]);

  return <div className={className} ref={ref} />;
}
