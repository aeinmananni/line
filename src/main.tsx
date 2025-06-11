import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Circle } from "./custom/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex flex-col w-full h-screen overflow-hidden border border-red-500 relative p-1 ">
      <Circle className="bg-yellow-500 -top-6 -start-8 blur-3xl" />
      <Circle className="bg-pink-500 top-32 end-0 blur-3xl" />
      <Circle className="bg-orange-500 -bottom-20 -start-6 !w-72 !h-72 md:!w-96 md:!h-96 blur-3xl" />
      <Circle className="bg-green-500 -bottom-24 end-64 opacity-0 lg:opacity-100 !w-[40%] !h-[40%] blur-3xl" />
      <Circle className="bg-purple-500 top-1/5 start-1/4 opacity-0 lg:opacity-100 !w-[40%] !h-[40%] blur-3xl" />
      <App />
    </div>
  </StrictMode>
);
