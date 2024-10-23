// ClothingComponent.tsx
import { FC } from "react";

import ClothOutOfStock from "./cloth/cloth-out-of-stock";
import ClothWithStock from "./cloth/cloth-with-stock";

interface ClothingComponentProps {
  name: string;
  size: string;
  price: number;
  stock: number;
}

const ClothingComponent: FC<ClothingComponentProps> = ({
  name,
  size,
  price,
  stock,
}) => {
  return stock > 0 ? (
    <ClothWithStock name={name} size={size} price={price} />
  ) : (
    <ClothOutOfStock name={name} size={size} />
  );
};

export default ClothingComponent;
