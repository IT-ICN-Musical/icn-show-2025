// BundleComponent.tsx
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

import { Checkbox } from "@/components/ui/checkbox";

import imageUrl from "./placeholder.jpg";

interface BundleComponentProps {
  bundleName: string;
  price: number;
}

const BundleComponent: FC<BundleComponentProps> = ({ bundleName, price }) => (
  <div className="relative flex items-center p-4 rounded-lg shadow-md border max-w-xl mx-auto overflow-hidden bg-white">
    {/* Checkbox */}
    <div className="mr-3">
      <Checkbox className="w-6 h-6 text-black border-gray-300 focus:ring-2 focus:ring-black" />
    </div>

    {/* Image Placeholder */}
    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-700">
      <Image
        src={imageUrl}
        alt={`Image of ${bundleName}`}
        width={80}
        height={80}
        className="object-cover"
      />
    </div>

    {/* Bundle Details */}
    <div className="flex-1 ml-4">
      <h3 className="text-base font-semibold text-black">{bundleName}</h3>
      <div className="mt-2 flex items-baseline space-x-1">
        <span className="text-sm text-gray-500">SGD</span>
        <p className="text-lg font-bold text-black">{price.toFixed(2)}</p>
      </div>
    </div>

    {/* Trash Icon */}
    <button className="p-2 text-gray-500 hover:text-gray-700">
      <Trash2 size={24} />
    </button>
  </div>
);

export default BundleComponent;
