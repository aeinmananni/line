import { FaHatCowboy } from "react-icons/fa";
import { IoIosGlasses } from "react-icons/io";
import { MdPermPhoneMsg } from "react-icons/md";
export default function Logo() {
  return (
    <div className="flex gap-2 h-full w-full md:w-1/3 ">
      <div className=" flex-col w-1/6   flex justify-center items-center -space-y-2 relative ">
        <FaHatCowboy size={36} />
        <IoIosGlasses size={36} />
      </div>
      <div className="flex flex-col justify-evenly  ">
        <div className="flex w-full justify-between items-center">
          <span className="text-sm md:text-2xl font-semibold">{`اکسسوری لاین`}</span>
          <div
            style={{ direction: "ltr" }}
            className="font-bold text-xs md:text-lg flex items-center justify-center gap-1"
          >
            <MdPermPhoneMsg className="text-xs md:text-[20px]" />
            <span>{`0990 845 7343`}</span>
          </div>
        </div>
        <span className="text-xs md:text-lg text-purple-800 font-medium w-max">{`ما باور داریم زیبایی واقعی در جزئیات پنهانه`}</span>
      </div>
    </div>
  );
}
