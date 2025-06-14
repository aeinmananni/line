import { Cart } from "../../components";
import { GLASSESS_ITEMS } from "./data";

export default function Sunglasses() {
  return (
    <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 gap-2">
      {GLASSESS_ITEMS.map((it, index) => (
        <Cart key={index} {...it} />
      ))}
    </div>
  );
}
