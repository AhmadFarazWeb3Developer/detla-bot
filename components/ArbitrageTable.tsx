import { ArrowUpRight, ArrowDownRight, Activity } from "lucide-react";

const pairs = [
  {
    pair: "ETH / USDC",
    dexA: "1,240 ETH",
    dexB: "1,180 ETH",
    delta: "+4.9%",
    direction: "up",
  },
  {
    pair: "WBTC / USDT",
    dexA: "320 BTC",
    dexB: "335 BTC",
    delta: "-4.4%",
    direction: "down",
  },
  {
    pair: "ARB / ETH",
    dexA: "2.1M ARB",
    dexB: "2.3M ARB",
    delta: "+9.5%",
    direction: "up",
  },
];

const ArbitrageTable = () => {
  return (
    <section className="bg-[#0a0f0b] text-white">
      <div className="w-full mx-auto ">
        <div className="overflow-hidden rounded-xl border border-[#1a1f1b] bg-[#0f1410]/80 backdrop-blur-sm">
          <table className="w-full text-sm">
            <thead className="bg-[#0f1410] text-[#a3b4a0]">
              <tr>
                <th className="px-6 py-4 text-left">Pair</th>
                <th className="px-6 py-4 text-left">Dex-A Reserves</th>
                <th className="px-6 py-4 text-left">Dex-B Reserves</th>
                <th className="px-6 py-4 text-left">Δ Difference</th>
                <th className="px-6 py-4 text-left">Signal</th>
              </tr>
            </thead>

            <tbody>
              {pairs.map((row, i) => (
                <tr
                  key={i}
                  className="border-t border-[#1a1f1b] hover:bg-[#1fffa9]/5 transition"
                >
                  <td className="px-6 py-4 font-medium text-white">
                    {row.pair}
                  </td>

                  <td className="px-6 py-4 text-[#a3b4a0]">{row.dexA}</td>

                  <td className="px-6 py-4 text-[#a3b4a0]">{row.dexB}</td>

                  <td
                    className={`px-6 py-4 font-semibold ${
                      row.direction === "up" ? "text-[#1fffa9]" : "text-red-400"
                    }`}
                  >
                    {row.delta}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {row.direction === "up" ? (
                        <ArrowUpRight className="text-[#1fffa9]" size={18} />
                      ) : (
                        <ArrowDownRight className="text-red-400" size={18} />
                      )}
                      <Activity size={16} className="text-[#a3b4a0]" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ArbitrageTable;
