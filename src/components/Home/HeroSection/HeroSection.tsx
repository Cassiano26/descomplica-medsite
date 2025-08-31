"use client";

import { useMediaQuery, useTheme } from "@mui/material";
import { MobileHero } from "./MobileHero";
import { DesktopHero } from "./DesktopHero";

export const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return isMobile ? <MobileHero /> : <DesktopHero />;
};
