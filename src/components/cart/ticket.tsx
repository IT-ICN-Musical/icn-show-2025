// TicketComponent.tsx
import { Clock, Trash2 } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

import { Checkbox } from "@/components/ui/checkbox";

// Custom Checkbox
import placeholder from "./placeholder.jpg";
import ticketTemplate from "./ticket-template.svg";

interface TicketComponentProps {
  title: string;
  dateTime: string;
  originalPrice?: number; // Optional original price for discount
  price: number;
}

const TicketComponent: FC<TicketComponentProps> = ({
  title,
  dateTime,
  price,
  originalPrice,
}) => {
  return (
    <div
      className="relative w-full flex items-center p-4 rounded-lg shadow-md max-w-xl mx-auto overflow-hidden"
      style={{
        backgroundImage: `url(${ticketTemplate.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Checkbox */}
      <div className="mr-3">
        <Checkbox className="w-6 h-6 text-black border-gray-300 focus:ring-2 focus:ring-black" />
      </div>

      {/* Ticket Image */}
      <div className="ml-1 w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={placeholder}
          alt="Ticket placeholder"
          width={100}
          height={100}
          className="object-cover"
        />
      </div>

      {/* Ticket Details */}
      <div className="flex-1 ml-4">
        <h3 className="text-base font-semibold">{title}</h3>
        <div className="flex items-center text-xs text-gray-500 mt-1">
          <Clock size={16} className="mr-1" />
          <span>{dateTime}</span>
        </div>

        {/* Pricing Section */}
        <div className="mt-2 flex items-baseline space-x-1">
          {originalPrice && (
            <p className="text-sm text-gray-400 line-through">
              SGD {originalPrice.toFixed(2)}
            </p>
          )}
          <span className="text-sm text-red-600">SGD</span>
          <p className="text-lg font-bold text-red-600">{price.toFixed(2)}</p>
        </div>
      </div>

      {/* Trash Icon */}
      <button className="p-2 text-gray-500 hover:text-gray-700">
        <Trash2 size={24} />
      </button>
    </div>
  );
};

export default TicketComponent;
