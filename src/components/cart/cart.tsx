import { useState } from "react";
import { FaRegStar } from "react-icons/fa6";
import type { DataTypeItems } from "../../models";
type CartProps = DataTypeItems;

export default function Cart({ image, title, description, price }: CartProps) {
  const [isLike, setIsLike] = useState<boolean>(false);
  return (
    <div className=" flex flex-col w-full rounded-md p-2 gap-2 border relative">
      <div className="overflow-hidden w-full h-1/2 border rounded-lg">
        <img
          src={image}
          className="bg-cover bg-center w-full h-full rounded-md"
        />
      </div>
      <div className="w-full flex justify-between">
        <span className="font-bold">{title}</span>
        <FaRegStar
          className={`${isLike ? "text-yellow-500" : ""} cursor-pointer`}
          size={20}
          onClick={() => setIsLike((c) => !c)}
        />
      </div>
      <span>{description}</span>
      <div className="flex justify-end items-center font-bold text-lg absolute left-2 bottom-0">
        <span>{price} تومان</span>
      </div>
    </div>
  );
}
