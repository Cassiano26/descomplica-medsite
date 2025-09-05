"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Import Desktop como default export

// Import Mobile como named export
import { MobileHomePage } from "../components/Home/mobile/MobileHomePage";
import DesktopHomePage from "../components/Home/desktop/DesktopHomePage";


export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900); // breakpoint para mobile
    };

    handleResize(); // inicializa
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileHomePage /> : <DesktopHomePage />;
}
