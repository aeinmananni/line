import type { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  children?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`py-2 px-1 md:p-3 flex justify-center text-xs md:text-[16px] items-center gap-1 rounded-lg active:scale-90 shadow-md shadow-purple-300 border border-purple-300 text-purple-900 duration-300 w-max ${props.className}`}
    >
      {children}
    </button>
  );
}
