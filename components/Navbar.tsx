import { ArrowUpRight, Triangle, Activity, ArrowDownRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className=" w-full  font-aeonik-bold  bg-[#0a0d0c] py-4 px-6 flex items-center ">
      <div className=" w-full flex items-center flex-row justify-between ">
        <Triangle className="text-[#1fffa9] mr-2" />

        <div className=" flex flex-row items-center gap-2 text-[#a3b4a0]">
          <p>Profit</p> <span>0%</span>
          {1 > 0 ? (
            <ArrowUpRight className="text-[#1fffa9]" size={18} />
          ) : (
            <ArrowDownRight className="text-red-400" size={18} />
          )}
          <Activity size={16} className="text-[#a3b4a0]" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
