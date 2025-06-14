import { Sidebar } from "./components";

type MainProps = {
  children: React.ReactNode;
};
export default function Main({ children }: MainProps) {
  return (
    <div className="w-full h-full border-2 border-dashed border-purple-800 flex overflow-hidden">
      <Sidebar />
      <div className="w-full h-full overflow-y-auto flex flex-col">
        {children}
      </div>
    </div>
  );
}
