"use client";
import About from "@/components/home/About";
// import Carousal from "@/components/home/Carousal";
import CoreTeam from "@/components/home/CoreTeam";
import Donate from "@/components/home/Donate";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
    
      <Hero />
      <About />
      {/* <Carousal /> */}
      <CoreTeam />
      <Donate />
      <Stats />
      <Testimonials />
    </>
  );
}
