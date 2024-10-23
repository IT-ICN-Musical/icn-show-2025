// TicketComponent.tsx
import { Clock, Trash2 } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

import placeholder from "./placeholder.jpg";
import TicketTemplate from "./ticket-template";

// SVG Wrapper

interface TicketComponentProps {
  title: string;
  dateTime: string;
  originalPrice?: number;
  price: number;
}

const TicketComponent: FC<TicketComponentProps> = ({
  title,
  dateTime,
  price,
  originalPrice,
}) => {
  return (
    <TicketTemplate className="">
      {/* Checkbox */}
      <div className="flex-shrink-0">
        <input
          type="checkbox"
          className="w-5 h-5 rounded border-gray-300 focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Ticket Image */}
      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={placeholder}
          alt="Ticket placeholder"
          width={64}
          height={64}
          className="object-cover"
        />
      </div>

      {/* Ticket Details */}
      <div className="flex-1">
        <h3 className="text-base font-semibold">{title}</h3>
        <div className="flex items-center text-xs text-gray-500 mt-1">
          <Clock size={16} className="mr-1" />
          <span>{dateTime}</span>
        </div>

        {/* Pricing Section */}
        <div className="mt-2">
          {originalPrice && (
            <p className="text-sm text-gray-400 line-through">
              SGD {originalPrice.toFixed(2)}
            </p>
          )}
          <p className="text-lg font-bold text-red-600">
            SGD {price.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Trash Icon */}
      <button className="p-2 text-gray-500 hover:text-gray-700">
        <Trash2 size={24} />
      </button>
    </TicketTemplate>
  );
};

export default TicketComponent;
