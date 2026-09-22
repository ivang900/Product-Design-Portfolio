import { useState, useEffect, useCallback } from "react";
import {
  Code2,
  Palette,
  Database,
  Brain,
  Workflow,
  Cloud,
  Shield,
  Zap,
  Trophy,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import irvineHacksImage from "../../assets/e5a488f1b2af3779ae9920137b2092ad19365006.png";
import chocWinImage from "../../assets/choc-win.jpeg";

const hackathonWins = [
  {
    image: chocWinImage,
    alt: "CHOC Research Pediatric and Lifespan Data Science Conference Hackathon winning team",
    title: "CHOC Research Pediatric and Lifespan Data Science Conference Hackathon",
    subtitle: "",
  },
  {
    image: irvineHacksImage,
    alt: "Hackathon Winning Team at IrvineHacks 2026",
    title: "IrvineHacks 2026 — Track Winners",
    subtitle: "First American Best AI Usage in Real Estate",
  },
];

const skills = {
  Design: [
    { name: "Figma", icon: Palette },
    { name: "Canva", icon: Palette },
    { name: "User Research", icon: Brain },
    { name: "Prototyping", icon: Workflow },
  ],
  Development: [
    { name: "Python", icon: Code2 },
    { name: "Claude Code", icon: Code2 },
    { name: "Command Line Interface", icon: Zap },
    { name: "PostgreSQL", icon: Database },
  ],
  "AI & Data": [
    { name: "LLM Integration", icon: Brain },
    { name: "RAG Systems", icon: Database },
    { name: "Backend APIs", icon: Brain },
    { name: "Data Pipelines", icon: Workflow },
  ],
  Infrastructure: [
    { name: "Azure", icon: Cloud },
    { name: "AWS: RDS/EC2", icon: Cloud },
    { name: "Docker", icon: Cloud },
    { name: "Git", icon: Workflow },
  ],
};

export function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = hackathonWins.length;

  const goPrev = useCallback(
    () => setActiveIndex((i) => (i - 1 + total) % total),
    [total]
  );
  const goNext = useCallback(
    () => setActiveIndex((i) => (i + 1) % total),
    [total]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  const active = hackathonWins[activeIndex];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#EBE6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Bio Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0A0A0A] mb-4 sm:mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-[#242424]">
              <p>
                Hello! My name is Ivan Gonzalez and I am a 3rd year Informatics major at UC Irvine, where I design products that use Tech, Data and AI to solve real world problems.
              </p>
              <p>
                With capabilities in Design, Programming, Researching, and overall Communication
                I find fulfillment in using these skills to make the lives of others easier.
              </p>
              <p>
                My approach starts with the user. I sketch and prototype fast, build what I
                design, and lean on modern AI tools to move from idea to working screen
                quickly. Whether it's redesigning an AI platform's UI or designing an
                intuitive dashboard for complex data, I focus on solutions that are both
                usable and technically sound.
              </p>
              <p>
                Right now I'm the product owner and designer for an internal AI platform, AI Core.
              </p>
            </div>
          </div>

          {/* Technical Toolkit */}
          <div>
            <h3 className="text-xl sm:text-2xl text-[#0A0A0A] mb-6 sm:mb-8">
              Technical Toolkit
            </h3>
            <div className="space-y-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-sm uppercase tracking-[0.18em] font-spec text-[#6B5D44] mb-4">
                    {category}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {items.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-[#D6CFC2]"
                        >
                          <Icon className="h-5 w-5 text-[#6B5D44]" />
                          <span className="text-sm text-[#242424]">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hackathon Winning Team Carousel */}
        <div
          className="relative mt-12 sm:mt-16 industrial-band overflow-hidden"
          role="region"
          aria-roledescription="carousel"
          aria-label="Hackathon wins"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 sm:p-8 md:px-16">
            <div className="flex-shrink-0 w-full md:w-1/2 lg:w-2/5">
              <ImageWithFallback
                key={active.image as unknown as string}
                src={active.image}
                alt={active.alt}
                className="w-full rounded-lg shadow-lg object-cover aspect-[4/3] transition-opacity duration-300"
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-2 bg-[#0A0A0A] text-[#F5F2EC] px-3 py-1 text-xs font-spec uppercase tracking-[0.18em] mb-3">
                <Trophy className="h-3.5 w-3.5" />
                Hackathon Winning Team
              </div>
              <h3 className="text-xl sm:text-2xl text-[#0A0A0A] mb-2">
                {active.title}
              </h3>
              {active.subtitle && (
                <p className="text-[#242424] text-sm sm:text-base">
                  {active.subtitle}
                </p>
              )}
              <div
                className="mt-5 flex items-center justify-center md:justify-start gap-2"
                role="tablist"
                aria-label="Select hackathon"
              >
                {hackathonWins.map((win, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === activeIndex}
                    aria-label={`Show ${win.title}`}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === activeIndex
                        ? "w-6 bg-[#6B5D44]"
                        : "w-2 bg-[#D6CFC2] hover:bg-[#565656]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous hackathon"
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-md border border-[#D6CFC2] flex items-center justify-center text-[#242424] hover:text-[#6B5D44] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B5D44] transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next hackathon"
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-md border border-[#D6CFC2] flex items-center justify-center text-[#242424] hover:text-[#6B5D44] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B5D44] transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}