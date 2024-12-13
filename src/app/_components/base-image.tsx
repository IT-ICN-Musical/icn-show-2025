import Image, { ImageProps } from "next/image";
import { forwardRef, useEffect, useRef, useState } from "react";

// addRef: (ref: HTMLImageElement) => void
export const BaseImage = forwardRef<
  HTMLImageElement,
  ImageProps & { onLoadOnce: () => void }
>((props, ref) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const hydrationReported = useRef(false);
  const executed = useRef(false);

  useEffect(() => {
    if (!hydrationReported.current) {
      setIsHydrated(true);
      hydrationReported.current = true;
      // alert(`${props.src.src}: ${hydrationReported.current}`);
    }
  }, []);

  if (!isHydrated) {
    return (
      <div
        style={{
          width: props.fill ? "100%" : props.width,
          height: props.fill ? "100%" : props.height,
          position: props.fill ? "relative" : "static",
        }}
        className="placeholder-base-image"
      />
    );
  }
  const { onLoad: onLoadProps, onLoadOnce, ...rest } = props;

  return (
    <Image
      onLoad={(e) => {
        if (!executed.current && onLoadOnce) {
          //alert(`before  ${executed.current}`);
          executed.current = true;
          //alert(`after  ${executed.current}`);
          onLoadOnce();
        }
        if (onLoadProps) {
          onLoadProps(e);
        }
      }}
      ref={ref}
      {...rest}
      loading="eager"
    />
  );
});

BaseImage.displayName = "BaseImage";
