// pages/cart.js
import BundleComponent from "@/components/cart/bundle-component";
import ClothingComponent from "@/components/cart/clothing-component";
import GenericItemComponent from "@/components/cart/generic-item";
import TicketComponent from "@/components/cart/ticket";

export default function Cart() {
  return (
    <div className="p-4 space-y-4">
      <TicketComponent
        title="Matinee Ticket - CAT A"
        dateTime="19 Feb 2025, 12:00 - 14:00 SGT"
        price={20.0}
      />
      <ClothingComponent name="T-Shirt" size="M" price={15.0} stock={1} />
      <BundleComponent bundleName="Bundle A" price={50.0} />
      <GenericItemComponent itemName="Generic Item" price={10.0} />
    </div>
  );
}
