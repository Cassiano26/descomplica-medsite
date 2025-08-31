"use client";

import DesktopHomePage from "../components/Home/desktop/DesktopHomePage";
import { MobileHomePage } from "../components/Home/mobile/MobileHomePage";

export default function Home() {
  return (
    <main>
      <MobileHomePage />
      <DesktopHomePage />
    </main>
  );
}
