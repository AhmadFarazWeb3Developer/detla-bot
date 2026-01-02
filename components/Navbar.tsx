import { Triangle } from "lucide-react";

function Navbar() {
  return (
    <nav className="w-full  font-aeonik-bold  bg-[#0a0d0c] py-4 px-6 flex items-center ">
      <div className="flex items-center">
        <Triangle className="text-[#1fffa9] mr-2" />
        <h1 className="text-[#1fffa9] text-xl font-medium">Bot</h1>
      </div>
      <div className="ml-auto"></div>
    </nav>
  );
}

export default Navbar;
