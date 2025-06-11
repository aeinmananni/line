import type { InputHTMLAttributes } from "react";

type InputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ label, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2 w-full ">
      {label && <label>{label}</label>}
      <input
        {...props}
        className={`outline-none focus:border-purple-900  py-1 md:py-3 px-1 rounded-lg shadow-md placeholder-purple-800  border-purple-300 border shadow-purple-300 text-purple-800 text-sm w-full bg-transparent`}
      />
    </div>
  );
}
