// ClothOutOfStock.tsx
import { Ruler, Trash2 } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

import { Checkbox } from "@/components/ui/checkbox";

import imageUrl from "../placeholder.jpg";

interface ClothOutOfStockProps {
  name: string;
  size: string;
}

const ClothOutOfStock: FC<ClothOutOfStockProps> = ({ name, size }) => (
  <div className="relative flex items-center p-4 rounded-lg shadow-md border max-w-xl mx-auto overflow-hidden bg-gray-100">
    {/* Checkbox Icon */}
    <div className="mr-3">
      <Checkbox
        className="w-6 h-6 text-black border-gray-300 focus:ring-2 focus:ring-black"
        disabled
      />
    </div>

    {/* Clothing Image */}
    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 opacity-50">
      <Image
        src={imageUrl}
        alt={`Image of ${name}`}
        width={80}
        height={80}
        className="object-cover"
      />
    </div>

    {/* Clothing Details */}
    <div className="flex-1 ml-4">
      <h3 className="text-base font-semibold text-gray-400">{name}</h3>
      <div className="flex items-center text-gray-500 mt-1">
        <Ruler size={16} className="mr-1" />
        <span className="text-sm">{size}</span>
      </div>
      <p className="mt-2 text-sm font-bold text-red-500">Out of Stock</p>
    </div>

    {/* Trash Icon */}
    <button className="p-2 text-gray-500 hover:text-gray-700">
      <Trash2 size={24} />
    </button>
  </div>
);

export default ClothOutOfStock;
