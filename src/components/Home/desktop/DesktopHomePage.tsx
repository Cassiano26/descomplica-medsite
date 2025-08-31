"use client";

import { Box } from "@mui/material";
import { HeroSection } from "@/src/components/Home/HeroSection/HeroSection";
import { AboutSection } from "@/src/components/Home/AboutSection/AboutSection";
import { ResultsSection } from "@/src/components/Home/ResultsSection/ResultsSection";
import { StepperSection } from "@/src/components/Home/StepperSection/StepperSection";
import { FooterCTA } from "@/src/components/Home/FooterCTA/FooterCTA";

const DesktopHomePage = () => {
  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <HeroSection />
      <AboutSection />
      <ResultsSection />
      <StepperSection />
      <FooterCTA />
    </Box>
  );
};

export default DesktopHomePage;
