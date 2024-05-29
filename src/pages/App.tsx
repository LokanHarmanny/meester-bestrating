import { Outlet } from "react-router-dom";
import Header from "../ui/Header";

export default function App() {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col relative">
          <div className="bg-slate-200 w-screen h-[4.7rem] md:h-[9.5rem] absolute -z-1 "></div>
          <Header />
          <div id="detail" className="mt-10">
            <Outlet />
          </div>
        </div>
      </body>
    </html>
  );
}
