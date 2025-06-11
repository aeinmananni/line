import { Sidebar } from "./components";

type MainProps = {
  children: React.ReactNode;
};
export default function Main({ children }: MainProps) {
  return (
    <div className="w-full h-full border-2 border-dashed border-purple-800 flex">
      <Sidebar />
      <div className="w-full h-full border border-green-500">{children}</div>
    </div>
  );
}
