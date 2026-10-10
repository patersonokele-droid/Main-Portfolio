"use client"

import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <a href="#main-content" className="sr-only z-[60] rounded-md bg-amber-200 px-4 py-3 text-sm font-semibold text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <Navbar></Navbar>
      <div id="main-content" tabIndex={-1} className="outline-none">
        <HeroSection></HeroSection>
      </div>
      <Footer></Footer>
    </>
  );
}
