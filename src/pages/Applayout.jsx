import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Applayout = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] gap-x-4 bg-slate-50">
      <Navbar />
      <div className="flex justify-center overflow-y-scroll">
        <main className="relative mx-auto flex h-full max-w-[80%] flex-col">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Applayout;
