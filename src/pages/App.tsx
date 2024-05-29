import { Outlet } from "react-router-dom";
import Header from "../ui/Header";

export default function App() {
  return (
    <div className="flex flex-col relative overflow-hidden">
      <div className="bg-slate-200 w-screen h-[4.7rem] md:h-[9.5rem] absolute -z-1 "></div>
      <Header />
      <main className="flex flex-col align-middle text-center mt-10 mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
