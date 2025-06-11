import { Logo } from "./components";
import { Button, Input } from "../../custom";
import { GiBasket } from "react-icons/gi";
import { FaRegUserCircle, FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router";
export default function Header() {
  const nav = useNavigate();
  return (
    <div className="w-full border-t-2 border-l-2 border-r-2 border-dashed border-purple-800  h-max flex justify-between items-center ">
      <Logo />
      <div className="flex flex-col lg:flex-row justify-end items-center gap-1  w-1/2 p-1">
        <Input placeholder="دنبال چی میگردی رفیق؟" className="" />
        <div className="flex items-center justify-center gap-1">
          <Button onClick={() => nav("/about")}>
            <FaInfoCircle size={20} />
            <span className="w-max">{`درباره ما`}</span>
          </Button>
          <Button>
            <GiBasket size={20} />
            <span className="w-max">{`سبد خرید`}</span>
          </Button>

          <Button>
            <FaRegUserCircle size={20} />
            <span className="w-max">{`باشگاه اکسسوری‌لاین`}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
