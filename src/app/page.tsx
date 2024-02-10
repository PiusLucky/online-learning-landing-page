"use client";

import NavBar from "@/components/common/NavBar";
import AllInOneSection from "@/components/sections/AllInOneSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import IntegrationSection from "@/components/sections/IntegrationSection";
import LatestNewsSection from "@/components/sections/LatestNewsSection";
import LogoGroupSection from "@/components/sections/LogoGroupSection";
import OurFeaturesSection from "@/components/sections/OurFeaturesSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import WhatIsSkilllineSection from "@/components/sections/WhatIsSkilllineSection";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <div className="bg-[#FFF2E1] clippy">
        <NavBar />
        <HeroSection />
      </div>
      <div className="flex flex-col gap-32">
        <LogoGroupSection />
        <div className="mx-3 md:mx-16 pb-32">
          <AllInOneSection />
          <WhatIsSkilllineSection />
          <OurFeaturesSection />
          <IntegrationSection />
          <TestimonialSection />
          <LatestNewsSection />
        </div>
        <FooterSection />
      </div>
    </main>
  );
}
