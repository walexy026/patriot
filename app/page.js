"use client";
import About from "@/components/home/About";
import Blog from "@/components/home/Blog";
// import Carousal from "@/components/home/Carousal";
import CoreTeam from "@/components/home/CoreTeam";
import Hero from "@/components/home/Hero";
import Newsletter from "@/components/home/Newsletter";
import Partners from "@/components/home/Partners";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* <Carousal /> */}
      <CoreTeam />

      <Stats />
      <Blog />
      <Partners />
      <Newsletter />
      <Testimonials />
    </>
  );
}
