import { Header, Main } from "../components";

import { Outlet } from "react-router";
export default function Home() {
  return (
    <div className="w-full h-full bg-slate-500/50 backdrop-blur-lg rounded-md border-white flex flex-col overflow-hidden">
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}
