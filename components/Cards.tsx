import { Bot, Brain } from "lucide-react";
import { RiExchangeFundsLine } from "react-icons/ri";
import { VscGraphLine } from "react-icons/vsc";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {/* Automation Bot */}
      <div className="bg-[#0f1410]/80 backdrop-blur-sm rounded-xl p-6 border border-[#1a1f1b]">
        <div className="w-12 h-12 bg-[#1fffa9]/10 rounded-lg flex items-center justify-center mb-4">
          <Bot className="text-[#1fffa9]" strokeWidth={1.7} />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-white font-aeonik-light">
          Automation Bot
        </h3>
        <p className="text-[#a3b4a0] text-sm mb-4">
          No need for manual monitoring - the bot scans DEX pools and executes
          trades automatically.
        </p>
        <button className="text-[#1fffa9] text-sm hover:underline">
          Get Started
        </button>
      </div>

      <div className="bg-[#0f1410]/80 backdrop-blur-sm rounded-xl p-6 border border-[#1a1f1b]">
        <div className="w-12 h-12 bg-[#1fffa9]/10 rounded-lg flex items-center justify-center mb-4">
          <RiExchangeFundsLine
            size={24}
            strokeWidth={0.1}
            className="text-[#1fffa9]"
          />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-white font-aeonik-light">
          Multi-Exchange
        </h3>
        <p className="text-[#a3b4a0] text-sm mb-4">
          Delta Bot monitors liquidity pools from multiple DEXs to find the best
          arbitrage opportunities.
        </p>
        <button className="text-[#1fffa9] text-sm hover:underline">
          Get Started
        </button>
      </div>

      {/* Price Monitoring */}
      <div className="bg-[#0f1410]/80 backdrop-blur-sm rounded-xl p-6 border border-[#1a1f1b]">
        <div className="w-12 h-12 bg-[#1fffa9]/10 rounded-lg flex items-center justify-center mb-4">
          <VscGraphLine
            size={24}
            strokeWidth={0.1}
            className=" text-[#1fffa9]"
          />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-white">
          Price Monitoring
        </h3>
        <p className="text-[#a3b4a0] text-sm mb-4">
          Real-time tracking of pool reserves to detect price differences across
          exchanges instantly.
        </p>
        <button className="text-[#1fffa9] text-sm hover:underline">
          Get Started
        </button>
      </div>

      <div className="bg-[#0f1410]/80 backdrop-blur-sm rounded-xl p-6 border border-[#1a1f1b]">
        <div className="w-12 h-12 bg-[#1fffa9]/10 rounded-lg flex items-center justify-center mb-4">
          <Brain size={24} strokeWidth={1.7} className=" text-[#1fffa9]" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-white font-aeonik-light">
          Smart Execution
        </h3>
        <p className="text-[#a3b4a0] text-sm mb-4">
          Executes swaps only when profit margins exceed gas costs, ensuring
          profitable trades.
        </p>
        <button className="text-[#1fffa9] text-sm hover:underline">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Cards;
