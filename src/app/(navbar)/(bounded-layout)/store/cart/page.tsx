import BundleComponent from "@/components/cart/bundle-component";
import ClothingComponent from "@/components/cart/clothing-component";
import FooterCart from "@/components/cart/footer-component";
import GenericItemComponent from "@/components/cart/generic-item";
import TicketComponent from "@/components/cart/ticket";

export default function Cart() {
  const { cart } = useCart;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Content Section */}
      <main className="flex-2 overflow-y-auto p-4 space-y-4"></main>

      {/* Footer Section */}
      <FooterCart />
    </div>
  );
}
