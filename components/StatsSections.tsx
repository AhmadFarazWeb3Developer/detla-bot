import ArbitrageTable from "./ArbitrageTable";
const StatsSection = () => {
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
        <ArbitrageTable />
      </div>
    </section>
  );
};

export default StatsSection;
