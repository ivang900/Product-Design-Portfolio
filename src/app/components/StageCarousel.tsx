import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export type Stage = { img: string; alt: string; tag: string; caption: string };

export function StageCarousel({ slides }: { slides: Stage[] }) {
  const [i, setI] = useState(0);
  const total = slides.length;
  const prev = () => setI((n) => (n - 1 + total) % total);
  const next = () => setI((n) => (n + 1) % total);
  const s = slides[i];
  const btnClass =
    "shrink-0 h-12 w-12 rounded-full bg-white hover:bg-[#EBE6DC] shadow-sm border border-[#D6CFC2] flex items-center justify-center text-[#242424] hover:text-[#6B5D44] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B5D44] transition";

  return (
    <div className="max-w-5xl mx-auto">
      {/* Stage stepper — shows the full 1·2·3 process and the current stage */}
      <div
        className="flex flex-wrap justify-center gap-2 mb-4"
        role="tablist"
        aria-label="Select stage"
      >
        {slides.map((sl, idx) => {
          const activeStep = idx === i;
          return (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={activeStep}
              aria-label={`Stage ${idx + 1}: ${sl.tag}`}
              onClick={() => setI(idx)}
              className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-spec font-bold uppercase tracking-[0.18em] transition-colors ${
                activeStep
                  ? "bg-[#0A0A0A] text-[#F5F2EC]"
                  : "bg-white border border-[#D6CFC2] text-[#454545] hover:border-[#6B5D44] hover:text-[#6B5D44]"
              }`}
            >
              <span className={activeStep ? "text-[#B8A689]" : "text-[#6B5D44]"}>
                {idx + 1}
              </span>
              {sl.tag}
            </button>
          );
        })}
      </div>

      <div className="relative bg-white rounded-lg border border-[#D6CFC2] overflow-hidden">
        <div className="relative aspect-video bg-[#EBE6DC] flex items-center justify-center">
          <ImageWithFallback
            key={i}
            src={s.img}
            alt={s.alt}
            className="w-full h-full object-contain transition-opacity duration-300"
          />
        </div>
      </div>

      {/* Controls under the image */}
      <div className="mt-5 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous stage"
          className={btnClass}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <p className="flex-1 text-center text-base sm:text-lg text-[#242424]">
          <span className="font-spec font-bold uppercase tracking-[0.18em] text-[#0A0A0A] mr-2">
            {i + 1} / {total}
          </span>
          {s.caption}
        </p>
        <button
          type="button"
          onClick={next}
          aria-label="Next stage"
          className={btnClass}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
