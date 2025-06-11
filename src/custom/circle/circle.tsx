type CircleProps = {
  className: string;
};

export default function Circle({ className }: CircleProps) {
  return (
    <div
      className={`w-44 h-44 md:w-72 md:h-72 rounded-full   ${className} absolute`}
    />
  );
}
