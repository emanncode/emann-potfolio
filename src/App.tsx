import Navbar from "@/components/layout/navbar/Navbar";

import Hero from "@/components/sections/hero/Hero";
import AboutSection from "@/components/sections/about/AboutSection";

import Cursor from "@/components/providers/Cursor";
import Grain from "@/components/providers/Grain";

import Divider from "@/components/ui/divider/Divider";

export default function App() {
  return (
    <main className="min-h-screen bg-bg text-text">
      {/* GLOBAL EFFECTS */}
      <Cursor />

      <Grain />

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      <Divider />

      {/* ABOUT */}
      <AboutSection />

      <Divider />
    </main>
  );
}
