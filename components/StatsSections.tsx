import { Bot, Brain } from "lucide-react";
import { RiExchangeFundsLine } from "react-icons/ri";
import { VscGraphLine } from "react-icons/vsc";

function StatsSection() {
  return (
    <section className="bg-[#0a0f0b] text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-white">
          Live Protocol Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="relative bg-[#0f1410]/80 backdrop-blur-sm rounded-xl p-6 border border-[#1a1f1b] hover:border-[#00ff7f]/50 transition-all duration-300">
            <div className="absolute -inset-1 bg-[#1fffa9]/5 blur-xl rounded-xl -z-10 opacity-0 hover:opacity-100 transition-opacity"></div>
            <p className="text-[#a3b4a0] text-sm mb-2">Connected DEXs</p>
            <h3 className="text-4xl font-bold text-[#1fffa9]">2</h3>
          </div>

          <div className="relative bg-[#0f1410]/80 backdrop-blur-sm rounded-xl p-6 border border-[#1a1f1b] hover:border-[#1fffa9]/50 transition-all duration-300">
            <div className="absolute -inset-1 bg-[#1fffa9]/5 blur-xl rounded-xl -z-10 opacity-0 hover:opacity-100 transition-opacity"></div>
            <p className="text-[#a3b4a0] text-sm mb-2">Tracked Tokens</p>
            <h3 className="text-4xl font-bold text-[#1fffa9]">8</h3>
          </div>

          <div className="relative bg-[#0f1410]/80 backdrop-blur-sm rounded-xl p-6 border border-[#1a1f1b] hover:border-[#1fffa9]/50 transition-all duration-300">
            <div className="absolute -inset-1 bg-[#1fffa9]/5 blur-xl rounded-xl -z-10 opacity-0 hover:opacity-100 transition-opacity"></div>
            <p className="text-[#a3b4a0] text-sm mb-2">Total Pool Liquidity</p>
            <h3 className="text-4xl font-bold text-[#1fffa9]">$1.2M</h3>
          </div>
        </div>

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
              No need for manual monitoring - the bot scans DEX pools and
              executes trades automatically.
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
              Delta Bot monitors liquidity pools from multiple DEXs to find the
              best arbitrage opportunities.
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
              Real-time tracking of pool reserves to detect price differences
              across exchanges instantly.
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
      </div>
    </section>
  );
}

export default StatsSection;
