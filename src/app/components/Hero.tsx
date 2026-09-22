import { Link } from "react-router";
import { ArrowRight, ChevronDown, Trophy } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState, useRef } from "react";

export function Hero() {
  const [opacity, setOpacity] = useState(1);
  const heroRef = useRef<HTMLElement>(null);

  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      // Fade out over the first 40% of viewport scroll
      const fadeEnd = windowHeight * 0.4;
      const newOpacity = Math.max(0, 1 - scrollY / fadeEnd);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#EBE6DC]"
    >
      <div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{
          opacity,
          transform: `translateY(${(1 - opacity) * 30}px)`,
          transition: "none",
          willChange: "opacity, transform",
        }}
      >
        {/* Context eyebrow (+20%) */}
        <p className="text-[0.9rem] sm:text-[1.05rem] text-[#242424] tracking-wider uppercase mb-5 sm:mb-6">
          UC Irvine · B.S. Informatics · <span className="underline">Expected Graduation June 2027</span> · Orange County, CA
        </p>

        {/* Headline (−1 size step, ~20% smaller) */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A0A0A] mb-6 sm:mb-8 max-w-4xl mx-auto leading-[1.05]">
          Give me an ambiguous problem with no clear spec.
          <br />
          <span className="text-[#6B5D44]">I'll sketch it, design it, and ship it.</span>
        </h1>

        {/* Award badge (replaces the ticker) — matches the award chip in AboutSection */}
        <Link
          to="/case-study/faster-ai-real-estate"
          className="inline-flex items-center gap-2 mb-8 sm:mb-10 bg-[#6B5D44] text-white px-4 py-2 text-sm sm:text-base font-spec uppercase tracking-[0.12em] hover:bg-[#4A3F2D] transition-colors"
        >
          <Trophy className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
          IrvineHacks 2026 Winner — First American Best AI Usage
        </Link>

        {/* CTAs: Work + Resume */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <Button
            onClick={scrollToWork}
            size="lg"
            className="bg-[#6B5D44] hover:bg-[#4A3F2D] text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg group"
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Link
            to="/resume"
            className="inline-flex items-center justify-center rounded-md border border-[#D6CFC2] bg-white/60 hover:border-[#6B5D44] hover:text-[#6B5D44] text-[#242424] px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg transition-colors"
          >
            Resume
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#565656]"
        style={{ opacity: opacity }}
      >
        <span className="text-xs mb-2 tracking-wider uppercase">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </div>
    </section>
  );
}