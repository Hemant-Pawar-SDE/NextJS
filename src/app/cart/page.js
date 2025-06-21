import { redirect } from "next/navigation";

export default function CartPage() {
  const cartEmpty = true;

  if (cartEmpty) {
    redirect("/cart/emptyCart");
  }
}
