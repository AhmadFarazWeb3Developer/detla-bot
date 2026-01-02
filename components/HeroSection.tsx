import Image from "next/image";

function HeroSection() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center bg-[#0a0d0c] text-white px-6">
      <div className="relative mb-8">
        <div className="absolute -inset-4 bg-[#00ff7f]/20 blur-3xl rounded-full" />
        <Image
          src="/images/delta-bot.png"
          alt="Delta Bot"
          width={160}
          height={160}
        />
      </div>

      <h1 className="text-4xl sm:text-5xl  font-aeonik-regular leading-tight text-center mb-4">
        Trade Smarter On-Chain with <br />
        <span className="text-[#1fffa9]">Delta Bot</span>
      </h1>

      <p className="text-[#a3b4a0] text-center max-w-xl mb-8 text-base font-aeonik-light ">
        A high-performance trading bot that continuously monitors multiple DEXs,
        detects price inefficiencies, and executes profitable trades — all
        without manual intervention.
      </p>

      <div className="flex gap-4">
        <button className="px-6 py-3 bg-[#1fffa9] hover:bg-[#1eff7f] text-[#0a0d0c] rounded-lg font-aeonik-regular transition-colors cursor-pointer">
          Launch App
        </button>
        <button className="px-6 py-3 border border-[#a3b4a0] hover:border-[#1fffa9] rounded-lg text-[#a3b4a0] hover:text-[#1fffa9] transition-colors cursor-pointer">
          View Docs
        </button>
      </div>
    </section>
  );
}
export default HeroSection;
