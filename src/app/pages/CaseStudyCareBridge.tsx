import { useState } from "react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Trophy,
  Code2,
  Palette,
  Brain,
  ImageIcon,
  ChevronLeft,
  ChevronRight,
  Clock,
  Users,
  GitMerge,
  Hammer,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import coverImage from "../../assets/carebridge-cover.png";
import personaImage from "../../assets/choc-persona.png";
import paperWireframeImage from "../../assets/choc-paper-wireframe.jpg";
import userflowImage from "../../assets/choc-userflow.jpg";
import figmaEditsImage from "../../assets/choc-figma-edits.JPG";
import demoVideo from "../../assets/choc-carebridge-demo.mov";

const sketchSlides = [
  {
    src: paperWireframeImage,
    alt: "Paper wireframe sketches for CareBridge",
    caption: "Quick manual sketching to use as starting point in Figma Make.",
  },
  {
    src: userflowImage,
    alt: "User flow diagram for CareBridge",
    caption: "Quick manual sketching to use as starting point in Figma Make.",
  },
];

function SketchCarousel() {
  const [i, setI] = useState(0);
  const total = sketchSlides.length;
  const prev = () => setI((n) => (n - 1 + total) % total);
  const next = () => setI((n) => (n + 1) % total);
  const slide = sketchSlides[i];

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-[#D6CFC2]">
      <div className="relative bg-[#EBE6DC]">
        <div className="aspect-video flex items-center justify-center">
          <ImageWithFallback
            key={i}
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-contain transition-opacity duration-300"
          />
        </div>
        <button
          type="button"
          onClick={prev}
          aria-label="Previous sketch"
          className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 hover:bg-white shadow-md border border-[#D6CFC2] flex items-center justify-center text-[#242424] hover:text-[#6B5D44] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B5D44] transition"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next sketch"
          className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 hover:bg-white shadow-md border border-[#D6CFC2] flex items-center justify-center text-[#242424] hover:text-[#6B5D44] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B5D44] transition"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-[#0A0A0A]">Early Sketches</h4>
          <div className="flex items-center gap-1.5">
            {sketchSlides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Show slide ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === i
                    ? "w-5 bg-[#6B5D44]"
                    : "w-2 bg-[#D6CFC2] hover:bg-[#565656]"
                }`}
              />
            ))}
          </div>
        </div>
        <p className="text-sm text-[#242424]">{slide.caption}</p>
      </div>
    </div>
  );
}

// Reusable placeholder block — drop an <ImageWithFallback /> in to replace.
function ImagePlaceholder({
  label,
  aspect = "aspect-video",
}: {
  label: string;
  aspect?: string;
}) {
  return (
    <div
      className={`w-full ${aspect} bg-[#EBE6DC] border-2 border-dashed border-[#D6CFC2] rounded-lg flex flex-col items-center justify-center text-[#565656]`}
    >
      <ImageIcon className="h-8 w-8 mb-2" />
      <span className="text-sm">{label}</span>
    </div>
  );
}

export default function CaseStudyCareBridge() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-[#D6CFC2] z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="flex items-center text-sm text-[#242424] hover:text-[#6B5D44] transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* A. The Setup */}
        <section className="py-16 bg-gradient-to-b from-[#EBE6DC] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="mb-4">
                  <Badge className="bg-[#0A0A0A] text-white mb-4">
                    <Trophy className="h-3.5 w-3.5 mr-1" />
                    Hackathon Winner
                  </Badge>
                  <Badge className="bg-[#6B5D44] text-white mb-4 ml-2">
                    Healthcare
                  </Badge>
                </div>
                <h1 className="text-4xl sm:text-5xl text-[#0A0A0A] mb-6">
                  CareBridge: From Discharge Plan to Recovery Plan
                </h1>
                <p className="text-xl text-[#242424] mb-8">
                  &ldquo;A high-risk transition made safe and easy.&rdquo; A mobile-first
                  companion that turns complex hospital discharge paperwork into
                  clear, plain-language guidance for caregivers — covering
                  medications, follow-ups, warning signs, and community
                  resources.
                </p>
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  <div>
                    <div className="text-sm text-[#454545] mb-1">Role</div>
                    <div className="text-[#0A0A0A]">
                      Ivan Gonzalez: Design — UI/UX
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-[#454545] mb-1">Event</div>
                    <div className="text-[#0A0A0A]">
                      CHOC Research Pediatric &amp; Lifespan Data Science
                      Conference Hackathon
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-[#454545] mb-1">Outcome</div>
                    <div className="text-[#0A0A0A]">Winning Team 🏆</div>
                  </div>
                </div>
              </div>

              {/* Cover image */}
              <div className="bg-[#EBE6DC] p-3 rounded-lg border border-[#D6CFC2] h-fit">
                <ImageWithFallback
                  src={coverImage}
                  alt="CareBridge cover slide — A high-risk transition made safe and easy"
                  className="w-full rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* B. Why This Matters */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-[#0A0A0A] mb-12 text-center">
              Background &amp; Why It Matters
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl text-[#0A0A0A] mb-4">
                  High-Level Description
                </h3>
                <p className="text-[#242424] mb-4">
                  CareBridge is a web/mobile application that converts hospital
                  discharge plans into clear, plain-language guidance for
                  caregivers — helping families stay connected and on track
                  with recovery plans, medications, follow-up appointments, and
                  warning signs.
                </p>
                <p className="text-[#242424]">
                  When medical needs may impair recovery, the app also surfaces
                  essential community resources: transportation, housing, food,
                  and other social supports.
                </p>
              </div>

              <div className="bg-[#EBE6DC] border border-[#D6CFC2] rounded-lg p-6">
                <h3 className="text-xl text-[#0A0A0A] mb-4">
                  Why This Matters
                </h3>
                <p className="text-[#242424] mb-3">
                  Discharge is a high-risk transition. Patients and caregivers
                  often <strong>cannot recall or understand</strong> the
                  information conveyed at discharge.
                </p>
                <p className="text-[#242424]">
                  This problem is worsened when patients have limited health
                  literacy, or cannot respond to even simple instructions due
                  to cognitive impairment. CareBridge meets families where they
                  are — on their phone, in their language, at their reading
                  level.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* C. Meet the User — Persona */}
        <section className="py-16 bg-[#EBE6DC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-[#6B5D44] text-white mb-4">
                Primary Persona
              </Badge>
              <h2 className="text-3xl text-[#0A0A0A] mb-4">
                Meet Maria — The Overwhelmed Caregiver
              </h2>
              <p className="text-[#242424] max-w-2xl mx-auto">
                Every design decision was tested against one question: &ldquo;Would
                Maria understand this?&rdquo;
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Persona portrait + quick facts */}
              <div className="bg-white rounded-lg border border-[#D6CFC2] overflow-hidden">
                <div className="bg-[#EBE6DC] flex items-center justify-center p-2">
                  <ImageWithFallback
                    src={personaImage}
                    alt="Persona slide for Maria Rodriguez"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-[#0A0A0A] mb-1">
                    Maria Rodriguez
                  </h3>
                  <p className="text-sm text-[#454545] mb-4">
                    34 · Single mother of two · Urban
                  </p>
                  <ul className="text-sm text-[#242424] space-y-2">
                    <li>
                      <strong>Language:</strong> Spanish primary, English second
                    </li>
                    <li>
                      <strong>Literacy:</strong> 6th grade reading level
                    </li>
                    <li>
                      <strong>Tech:</strong> Smartphone-only, no home computer
                    </li>
                    <li>
                      <strong>Work:</strong> Multiple part-time jobs, irregular
                      hours
                    </li>
                  </ul>
                </div>
              </div>

              {/* Scenario + pain points */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white p-6 rounded-lg border border-[#D6CFC2]">
                  <h4 className="text-sm uppercase tracking-[0.18em] font-spec text-[#6B5D44] mb-3">
                    The Scenario
                  </h4>
                  <p className="text-[#242424] text-sm">
                    Maria&rsquo;s mother was just discharged after heart surgery.
                    She has 15 pages of medical jargon, verbal instructions she
                    can&rsquo;t fully recall (research shows caregivers forget
                    40–80%), no car for follow-ups, and constant fear of a
                    medication mistake. She is overwhelmed, scared, and needs
                    help <em>now</em>.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-[#D6CFC2]">
                  <h4 className="text-sm uppercase tracking-[0.18em] font-spec text-[#6B5D44] mb-3">
                    Key Pain Points
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#242424]">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-[#6B5D44] mr-2 mt-0.5 flex-shrink-0" />
                      Medical information overload
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-[#6B5D44] mr-2 mt-0.5 flex-shrink-0" />
                      Memory &amp; retention gaps
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-[#6B5D44] mr-2 mt-0.5 flex-shrink-0" />
                      Fear of medication errors
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-[#6B5D44] mr-2 mt-0.5 flex-shrink-0" />
                      Transportation barriers
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-[#6B5D44] mr-2 mt-0.5 flex-shrink-0" />
                      Language &amp; literacy barriers
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-[#6B5D44] mr-2 mt-0.5 flex-shrink-0" />
                      Unclear warning-sign awareness
                    </div>
                  </div>
                </div>

                <blockquote className="bg-[#6B5D44]/5 border-l-4 border-[#6B5D44] p-6 rounded-r-lg">
                  <p className="text-[#242424] italic mb-3">
                    &ldquo;I&rsquo;m so scared I&rsquo;m going to mess something up. The
                    hospital gave me all these papers, but I don&rsquo;t understand
                    half of what they say. I just want to know: what do I give
                    her, when do I give it, and how do I know if something&rsquo;s
                    wrong?&rdquo;
                  </p>
                  <footer className="text-sm text-[#454545]">
                    — Maria Rodriguez
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* Design implications */}
            <div className="mt-12 bg-white p-6 sm:p-8 rounded-lg border border-[#D6CFC2]">
              <h4 className="text-sm uppercase tracking-[0.18em] font-spec text-[#6B5D44] mb-4">
                Design Implications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="p-4 bg-[#EBE6DC] rounded-lg">
                  <div className="font-medium text-[#0A0A0A] mb-1">
                    Mobile-first
                  </div>
                  <div className="text-[#242424]">
                    Works on smartphones with limited data plans.
                  </div>
                </div>
                <div className="p-4 bg-[#EBE6DC] rounded-lg">
                  <div className="font-medium text-[#0A0A0A] mb-1">
                    Visual over text
                  </div>
                  <div className="text-[#242424]">
                    Icons, color-coding, and images replace dense copy.
                  </div>
                </div>
                <div className="p-4 bg-[#EBE6DC] rounded-lg">
                  <div className="font-medium text-[#0A0A0A] mb-1">
                    Plain language
                  </div>
                  <div className="text-[#242424]">
                    6th-grade reading level, no medical jargon.
                  </div>
                </div>
                <div className="p-4 bg-[#EBE6DC] rounded-lg">
                  <div className="font-medium text-[#0A0A0A] mb-1">
                    Bilingual
                  </div>
                  <div className="text-[#242424]">
                    Easy switching between Spanish and English.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* D. Process & Prototypes */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-[#0A0A0A] mb-4 text-center">
              Process &amp; Prototypes
            </h2>
            <p className="text-center text-[#242424] mb-12 max-w-2xl mx-auto">
              From sketches to a working prototype — shipped in a 7-hour build
              window with a multi-disciplinary team.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SketchCarousel />

              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-[#D6CFC2]">
                <div className="bg-[#EBE6DC] aspect-video flex items-center justify-center">
                  <ImageWithFallback
                    src={figmaEditsImage}
                    alt="Fine-tuning the CareBridge design in Figma Make"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-[#0A0A0A] mb-2">Figma Editing</h4>
                  <p className="text-sm text-[#242424]">
                    Fine tuning design on Figma Make.
                  </p>
                </div>
              </div>

            </div>

            {/* Parallelize → Synthesize → Merge */}
            <div className="mt-16">
              <div className="text-center mb-10">
                <Badge className="bg-[#6B5D44] text-white mb-3">
                  Strategy
                </Badge>
                <h3 className="text-2xl text-[#0A0A0A] mb-3">
                  Parallelize, Then Merge
                </h3>
                <p className="text-[#242424] max-w-2xl mx-auto">
                  How a calculated bet about AI-generated UIs let four
                  designers ship one cohesive product in seven hours.
                </p>
              </div>

              {/* The bet */}
              <div className="industrial-band p-6 sm:p-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#B8A689] text-[#0A0A0A] flex items-center justify-center">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg text-[#0A0A0A] mb-2">
                      The 7-hour bet
                    </h4>
                    <p className="text-[#242424]">
                      Claude Code-generated UIs converge on similar layouts and
                      conventions. I bet that letting all four of us design{" "}
                      <strong>in parallel</strong> would produce variants
                      similar enough to merge cleanly — trading reconciliation
                      hell for four times the design exploration in the same
                      window.
                    </p>
                  </div>
                </div>
              </div>

              {/* Flow */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {[
                  {
                    icon: Users,
                    step: "1. Diverge",
                    body: "All four members designed independently against the same brief.",
                  },
                  {
                    icon: Brain,
                    step: "2. Interview",
                    body: "I asked each teammate which parts of their design they most wanted carried forward.",
                  },
                  {
                    icon: GitMerge,
                    step: "3. Plan",
                    body: "Synthesized the consensus into a structured edit plan against one base branch.",
                  },
                  {
                    icon: Hammer,
                    step: "4. Build",
                    body: "Handed the plan to Claude Code and executed the merge as a single coherent build.",
                  },
                ].map(({ icon: Icon, step, body }) => (
                  <div
                    key={step}
                    className="bg-white p-5 rounded-lg border border-[#D6CFC2]"
                  >
                    <div className="h-9 w-9 rounded-md bg-[#6B5D44]/10 text-[#6B5D44] flex items-center justify-center mb-3">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-sm uppercase tracking-[0.18em] font-spec text-[#6B5D44] mb-1">
                      {step}
                    </div>
                    <p className="text-sm text-[#242424]">{body}</p>
                  </div>
                ))}
              </div>

              {/* The merge plan */}
              <div className="bg-[#EBE6DC] border border-[#D6CFC2] rounded-xl p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                  <div>
                    <h4 className="text-xl text-[#0A0A0A]">
                      The Merge Plan
                    </h4>
                    <p className="text-sm text-[#242424] mt-1">
                      Eight edits applied to <code className="text-xs bg-[#EBE6DC] px-1.5 py-0.5 rounded">discharge-planner</code> (base), sourced from teammates&rsquo; branches.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <Badge variant="secondary">Base: planner</Badge>
                    <Badge variant="secondary">planner-2</Badge>
                    <Badge variant="secondary">planner-3</Badge>
                    <Badge variant="secondary">planner-4</Badge>
                  </div>
                </div>

                <ol className="space-y-3">
                  {[
                    {
                      title: "Login flow",
                      body: "Replace base login flow with the cleaner pattern from planner-2.",
                      sources: ["planner-2"],
                    },
                    {
                      title: "Homepage density",
                      body: "Truncate the visit summary into a collapsible drop-down (closed by default, clear chevron icon) to kill vertical scroll.",
                      sources: ["base"],
                    },
                    {
                      title: "Agent ask-box",
                      body: "Add a text input above the \"Caring For\" panel so users can ask discharge-related questions in plain English (e.g., \"Can I eat X with my meds?\"). UI only.",
                      sources: ["new"],
                    },
                    {
                      title: "Resources personalization",
                      body: "Add an intake form/quiz to personalize results, plus a \"Get a ride\" entry point.",
                      sources: ["planner-2", "planner-4"],
                    },
                    {
                      title: "Condition + medication depth",
                      body: "Across all discharge summaries, expand condition and medication detail — readers shouldn't need to leave the app to understand what they were prescribed.",
                      sources: ["base"],
                    },
                    {
                      title: "Medication tab",
                      body: "How-to-use drop-down, list of meds drop-down, upcoming pickups, pickup support (agent, translation, what to ask for, checklist), and a dosing visual for range-based doses.",
                      sources: ["planner-3", "planner-4"],
                    },
                    {
                      title: "Appointments tab",
                      body: "Explain why follow-ups matter, pre-appointment checklist, what to say, and add-to-calendar functionality.",
                      sources: ["planner-4"],
                    },
                    {
                      title: "FAQ",
                      body: "Add a missing FAQ surface, accessible from a footer button.",
                      sources: ["new"],
                    },
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="bg-white p-4 sm:p-5 rounded-lg border border-[#D6CFC2] flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 h-7 w-7 rounded-full bg-[#6B5D44] text-white text-sm flex items-center justify-center">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-3 flex-wrap mb-1">
                          <div className="font-medium text-[#0A0A0A]">
                            {item.title}
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {item.sources.map((s) => (
                              <span
                                key={s}
                                className={`text-[11px] px-2 py-0.5 rounded-full border ${
                                  s === "new"
                                    ? "bg-[#EBE6DC] border-[#D6CFC2] text-[#242424]"
                                    : s === "base"
                                      ? "bg-[#EBE6DC] border-[#D6CFC2] text-[#242424]"
                                      : "bg-[#6B5D44]/10 border-[#6B5D44]/30 text-[#4A3F2D]"
                                }`}
                              >
                                {s === "new" ? "new addition" : `source: ${s}`}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-[#242424]">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* E. Outcome */}
        <section className="py-16 bg-gradient-to-b from-[#EBE6DC] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Trophy className="h-12 w-12 text-[#0A0A0A] mx-auto mb-4" />
            <h2 className="text-3xl text-[#0A0A0A] mb-4">Outcome</h2>
            <p className="text-xl text-[#242424] max-w-2xl mx-auto mb-8">
              Our team won the CHOC Research Pediatric &amp; Lifespan Data
              Science Conference Hackathon.
            </p>
            <div className="max-w-3xl mx-auto">
              <div className="aspect-[16/9] rounded-lg overflow-hidden border border-[#D6CFC2] shadow-md bg-black flex items-center justify-center">
                <video
                  src={demoVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-full object-contain"
                  aria-label="CareBridge product demo"
                />
              </div>
              <p className="text-sm text-[#454545] mt-3">
                Live walkthrough of the CareBridge prototype.
              </p>
            </div>
          </div>
        </section>

        {/* F. Tech Stack */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-[#0A0A0A] mb-12 text-center">
              Tech &amp; Methods
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-[#EBE6DC] p-6 rounded-lg border border-[#D6CFC2]">
                <div className="flex items-center text-sm text-[#454545] mb-3">
                  <Palette className="h-4 w-4 mr-2" />
                  Design
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">User-Centered Design</Badge>
                  <Badge variant="secondary">Prototyping</Badge>
                </div>
              </div>
              <div className="bg-[#EBE6DC] p-6 rounded-lg border border-[#D6CFC2]">
                <div className="flex items-center text-sm text-[#454545] mb-3">
                  <Code2 className="h-4 w-4 mr-2" />
                  Development
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">PyCharm IDE</Badge>
                </div>
              </div>
              <div className="bg-[#EBE6DC] p-6 rounded-lg border border-[#D6CFC2]">
                <div className="flex items-center text-sm text-[#454545] mb-3">
                  <Brain className="h-4 w-4 mr-2" />
                  AI Tooling
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Claude Code</Badge>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link to="/">
                <Button
                  size="lg"
                  className="bg-[#6B5D44] hover:bg-[#4A3F2D] text-white px-8 py-6"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to All Projects
                </Button>
              </Link>
              <div className="mt-4">
                <Link
                  to="/case-study/faster-ai-real-estate"
                  className="inline-flex items-center text-sm text-[#6B5D44] hover:text-[#4A3F2D]"
                >
                  Next case study: FASTer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
