import Container from "@/components/ui/container/Container";

import { heroData } from "@/data/hero";

import HeroBackground from "./HeroBackground";
import HeroAmbient from "./HeroAmbient";
import HeroContent from "./HeroContent";
import HeroScroll from "./HeroScroll";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative grid min-h-screen
        grid-rows-[1fr_auto]
        overflow-hidden
      "
    >
      <HeroBackground />
      <HeroAmbient />

      <Container className="relative z-10 flex flex-col">
        <HeroContent />

        <div
          className="
            flex items-end justify-between
            border-t border-border
            py-8
          "
        >
          <HeroStats stats={heroData.stats} />

          <div className="hidden md:block">
            <HeroScroll />
          </div>
        </div>
      </Container>
    </section>
  );
}
