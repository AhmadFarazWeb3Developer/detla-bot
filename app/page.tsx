import Navbar from "@/components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSections";
import Cards from "@/components/Cards";

export default function Home() {
  return (
    <div className="bg-[#0a0f0b] min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <Cards />
    </div>
  );
}
