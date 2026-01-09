"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSections";
import Cards from "@/components/Cards";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      return await fetch("/api/users").then((res) => res.json());
    },
  });

  console.log(data);

  return (
    <div className="bg-[#0a0f0b] min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <Cards />
    </div>
  );
}
