import { useState } from "react";
import { Link } from "react-router";
import challengeImage from "../../assets/726a5266f20fb91e7261c8b2c64c1830f2444bb7.png";
import finalScreenshot1 from "../../assets/5465e312effb0c60dab2816a4a2fb58ea19a214d.png";
import finalScreenshot2 from "../../assets/866a16253e71554bf652a23e98a946eb4ed65b45.png";
import clubHubV2Home from "../../assets/clubhubupdate2home.png";
import clubHubV2Results from "../../assets/clubhubresultspageupdate.png";
import {
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
  Code2,
  Palette,
  Database,
  ChevronLeft,
  ChevronRight,
  Search,
  MessageSquare,
  Target,
  TrendingUp,
  Lightbulb,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const deliverableSlides = [
  {
    label: "Current State",
    cards: [
      {
        src: clubHubV2Home,
        alt: "Updated Club Hub landing page",
        title: "Landing Page",
        caption:
          "Refined landing experience based on early stakeholder feedback.",
      },
      {
        src: clubHubV2Results,
        alt: "Updated Club Hub search results page",
        title: "Search Results",
        caption:
          "Updated results layout improving scannability and ranking clarity.",
      },
    ],
  },
  {
    label: "Deployment 1 State",
    cards: [
      {
        src: finalScreenshot1,
        alt: "Club Hub landing page with search bar",
        title: "Landing Page",
        caption:
          "Clean, minimal interface inviting students to describe their interests in natural language.",
      },
      {
        src: finalScreenshot2,
        alt: "Club Hub search results showing matched organizations",
        title: "Search Results",
        caption:
          "Semantic search returns ranked club matches with scores, categories, and direct website links.",
      },
    ],
  },
];

// Outcome metrics — all sourced from the deployed app's click-log telemetry
// (145 search→click events, Feb 20 – Jun 23, 2026) and the org index.
const metrics = [
  { value: "100+", label: "Clubs & orgs indexed" },
  { value: "145+", label: "Logged searches (Feb to June 2026)" },
  { value: "~6", label: "Avg. daily active users" },
  { value: "40%", label: "Clicks within the top 3 results" },
];

export default function CaseStudyCodecClub() {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = deliverableSlides.length;
  const goPrevSlide = () =>
    setSlideIndex((i) => (i - 1 + totalSlides) % totalSlides);
  const goNextSlide = () => setSlideIndex((i) => (i + 1) % totalSlides);
  const activeSlide = deliverableSlides[slideIndex];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-[#D6CFC2] z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="flex items-center text-sm text-[#3F3F3F] hover:text-[#6B5D44] transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {/* A. The Setup — outcome-forward */}
        <section className="py-16 bg-gradient-to-b from-[#EBE6DC] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Project Title and Role */}
              <div className="lg:col-span-2">
                <div className="mb-4">
                  <Badge className="bg-[#6B5D44] text-white mb-4">
                    Community Product
                  </Badge>
                </div>
                <h1 className="text-5xl text-[#0A0A0A] mb-6">
                  CODEC Club Hub
                </h1>
                <p className="text-xl text-[#3F3F3F] mb-8">
                  CODEC Club Hub lets UC Irvine students find clubs by describing their interests in plain language, instead of browsing a static directory that assumes they already know what they're looking for. I scoped, shipped, and instrumented the product, then used 145+ real searches to decide what to fix next.
                </p>
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  <div>
                    <div className="text-sm text-[#6B6B6B] mb-1">Role</div>
                    <div className="text-[#0A0A0A]">
                      Ivan Gonzalez: Product (Scoping &amp; Roadmap), Research &amp; Engineering
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-[#6B6B6B] mb-1">Timeline</div>
                    <div className="text-[#0A0A0A]">Oct. 2025 - Present</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#6B6B6B] mb-1">Team</div>
                    <div className="text-[#0A0A0A]">
                      CODEC Board
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <a
                    href="https://codec.clotho.ics.uci.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#6B5D44] hover:bg-[#4A3F2D] text-white">
                      Visit Site
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* Technical Stack Sidebar */}
              <div className="bg-[#EBE6DC] p-6 rounded-lg border border-[#D6CFC2] h-fit">
                <h3 className="text-lg text-[#0A0A0A] mb-4">
                  Technical Stack
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center text-sm text-[#6B6B6B] mb-2">
                      <Palette className="h-4 w-4 mr-2" />
                      Design
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Figma</Badge>
                      <Badge variant="secondary">Canva</Badge>
                      <Badge variant="secondary">Paper + Pencil</Badge>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-[#6B6B6B] mb-2">
                      <Code2 className="h-4 w-4 mr-2" />
                      Development
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">Flask</Badge>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-[#6B6B6B] mb-2">
                      <Database className="h-4 w-4 mr-2" />
                      AI &amp; Data
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">ChromaDB</Badge>
                      <Badge variant="secondary">Sentence-Transformers</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* B. The Outcome — lead with results */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-sm uppercase tracking-[0.18em] font-spec text-[#6B5D44] mb-3">
                The Outcome
              </div>
              <h2 className="text-3xl text-[#0A0A0A] mb-4">
                Shipped, used, and instrumented
              </h2>
              <p className="text-[#3F3F3F] max-w-2xl mx-auto">
                The product is live for the UCI community. Rather than stop at launch, I added click-logging so every search and result click became evidence for the next iteration.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="bg-white rounded-lg border border-[#D6CFC2] shadow-sm p-6 text-center"
                >
                  <div className="text-4xl text-[#0A0A0A] mb-2">{m.value}</div>
                  <div className="text-sm text-[#6B6B6B]">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-[#EBE6DC] border-l-4 border-[#6B5D44] p-6 rounded-r-lg max-w-3xl mx-auto">
              <p className="text-[#3F3F3F]">
                <strong className="text-[#0A0A0A]">The headline finding:</strong> only 21% of clicks landed on the #1 result and 40% within the top three, meaning students scrolled <em>past</em> the top results most of the time. The clear priority became ranking quality rather than coverage.
              </p>
            </div>
          </div>
        </section>

        {/* C. The Problem */}
        <section className="py-16 bg-[#EBE6DC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="text-sm uppercase tracking-[0.18em] font-spec text-[#6B5D44] mb-3">
                  The Problem
                </div>
                <h2 className="text-3xl text-[#0A0A0A] mb-4">
                  A directory you can only use if you already know the answer
                </h2>
                <p className="text-[#3F3F3F] mb-6">
                  UCI's organizations live on CampusGroups, but there was no low-effort way to <em>discover</em> them. The existing experience worked only if a student already knew a club's formal name or category, which is the opposite of how people describe what they're into.
                </p>
                <ul className="space-y-3 text-[#3F3F3F]">
                  <li className="flex items-start">
                    <Search className="h-5 w-5 text-[#6B5D44] mr-3 mt-0.5 flex-shrink-0" />
                    Search is small and buried in the corner, easy to miss entirely.
                  </li>
                  <li className="flex items-start">
                    <Target className="h-5 w-5 text-[#6B5D44] mr-3 mt-0.5 flex-shrink-0" />
                    Org details are gated behind extra clicks, and interactive elements don't read as interactive.
                  </li>
                  <li className="flex items-start">
                    <MessageSquare className="h-5 w-5 text-[#6B5D44] mr-3 mt-0.5 flex-shrink-0" />
                    The system assumes students arrive knowing the exact term to search for.
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="h-5 w-5 text-[#6B5D44] mr-3 mt-0.5 flex-shrink-0" />
                    Weak visual hierarchy makes the directory hard to scan, hurting engagement and follow-through.
                  </li>
                </ul>
              </div>
              <div>
                <div className="bg-white p-2 rounded-lg border border-[#D6CFC2] shadow-sm">
                  <div className="w-full aspect-video bg-[#EBE6DC] flex items-center justify-center rounded-md overflow-hidden">
                    <img
                      src={challengeImage}
                      alt="UCI CampusGroups platform showing university departments, affinity groups, and student organizations"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-[#8A8A8A] px-2 py-2">
                    The existing CampusGroups directory, the starting point for the redesign.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* D. Users & Research */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-sm uppercase tracking-[0.18em] font-spec text-[#6B5D44] mb-3">
                Users &amp; Research
              </div>
              <h2 className="text-3xl text-[#0A0A0A] mb-4">
                Who I talked to before building
              </h2>
              <p className="text-[#3F3F3F] max-w-2xl mx-auto">
                Discovery combined direct conversations with students, recurring stakeholder meetings, and a hard look at the raw organization data.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Students */}
              <div className="bg-white p-6 rounded-lg border border-[#D6CFC2] shadow-sm">
                <h3 className="text-lg text-[#0A0A0A] mb-3">Students</h3>
                <p className="text-sm text-[#3F3F3F]">
                  As a UCI student, I lived the problem first-hand. I also talked with friends, classmates, and club members, and one reaction kept repeating. People either had no idea the campus had this many clubs to choose from, or had never even heard of CampusGroups, the platform that was supposed to list them all.
                </p>
              </div>
              {/* Stakeholders */}
              <div className="bg-white p-6 rounded-lg border border-[#D6CFC2] shadow-sm">
                <h3 className="text-lg text-[#0A0A0A] mb-3">Stakeholders</h3>
                <p className="text-sm text-[#3F3F3F]">
                  Stakeholders were me, the CODEC Board, and our faculty advisor. The most consequential input reshaped how we approached ranking. v1 only logged the query itself, but my advisor pushed to also track <em>what students click</em>, building behavioral profiles the way Google does, so the system could learn what a good result actually looks like. That conversation is what created the click-logging telemetry this project now runs on.
                </p>
              </div>
              {/* Data */}
              <div className="bg-white p-6 rounded-lg border border-[#D6CFC2] shadow-sm">
                <h3 className="text-lg text-[#0A0A0A] mb-3">The org data</h3>
                <p className="text-sm text-[#3F3F3F]">
                  All organization data (names, links, membership benefits, mission statements) came from CampusGroups. It was unstructured and uneven: some orgs were missing links or descriptions, and a number were effectively "dead" and had to be filtered out.
                </p>
              </div>
            </div>

            <div className="bg-[#EBE6DC] border border-[#D6CFC2] rounded-lg p-6 max-w-3xl mx-auto">
              <div className="flex items-center mb-2">
                <Lightbulb className="h-5 w-5 text-[#6B5D44] mr-2" />
                <h4 className="text-[#0A0A0A]">What surprised me</h4>
              </div>
              <p className="text-sm text-[#3F3F3F]">
                The language gap. Students don't describe their interests the way clubs describe themselves. Listings are generic and formal, like "Computing-based organization," while students talk in shorthand and slang, typing "computer" or the name of a hobby. That mismatch between how orgs are advertised and how people actually search became the core problem the product had to solve, and later it was exactly what the telemetry confirmed.
              </p>
            </div>
          </div>
        </section>

        {/* E. The Core Decision */}
        <section className="py-16 bg-[#EBE6DC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-sm uppercase tracking-[0.18em] font-spec text-[#6B5D44] mb-3">
                The Core Decision
              </div>
              <h2 className="text-3xl text-[#0A0A0A] mb-4">
                Semantic search over better filters
              </h2>
              <p className="text-[#3F3F3F] max-w-2xl mx-auto">
                The central bet: students don't describe their interests in the formal language clubs are listed under. Better filters would still require knowing the right category, so I chose meaning-based matching instead.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Option A */}
              <div className="bg-white p-6 rounded-lg border border-[#D6CFC2]">
                <div className="text-sm uppercase tracking-[0.18em] font-spec text-[#8A8A8A] mb-2">
                  Option A: Not chosen
                </div>
                <h3 className="text-lg text-[#0A0A0A] mb-3">
                  Improve the existing directory &amp; filters
                </h3>
                <ul className="space-y-2 text-sm text-[#3F3F3F]">
                  <li>Faster to build on top of CampusGroups' structure.</li>
                  <li>Precise <em>if</em> a student already knows the category or keyword.</li>
                  <li className="text-[#6B5D44]">Breaks down the moment someone types how they actually talk ("I like birds," "k-pop").</li>
                </ul>
              </div>
              {/* Option B */}
              <div className="bg-white p-6 rounded-lg border-2 border-[#6B5D44]">
                <div className="text-sm uppercase tracking-[0.18em] font-spec text-[#6B5D44] mb-2">
                  Option B: Shipped
                </div>
                <h3 className="text-lg text-[#0A0A0A] mb-3">
                  Semantic search on embeddings
                </h3>
                <ul className="space-y-2 text-sm text-[#3F3F3F]">
                  <li>Embeddings capture <em>meaning</em>; similar intent and org descriptions cluster nearby.</li>
                  <li>Cosine similarity maps a casual query to the nearest organizations.</li>
                  <li className="text-[#6B5D44]">No need for students to know the "right" words first.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-l-4 border-[#6B5D44] p-6 rounded-r-lg max-w-3xl mx-auto mb-8">
              <p className="text-[#3F3F3F]">
                <strong className="text-[#0A0A0A]">The tradeoff I accepted:</strong> semantic ranking is fuzzy where filters are exact. I traded predictable, precise filtering for forgiving, intent-based matching, betting that removing the "know the right term" barrier mattered more than perfect precision. The telemetry later showed exactly where that bet needs tuning.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <h4 className="text-[#0A0A0A] mb-4">What I traded off to ship v1</h4>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border border-[#D6CFC2]">
                  <div className="text-sm text-[#0A0A0A] mb-1">
                    <strong>Visual polish and branding</strong>
                  </div>
                  <p className="text-sm text-[#3F3F3F]">
                    v1 shipped intentionally plain. The club's logo and branding system wasn't finished yet, so I chose to prove the core search experience worked before investing in styling.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-[#D6CFC2]">
                  <div className="text-sm text-[#0A0A0A] mb-1">
                    <strong>Star-based match scores</strong>
                  </div>
                  <p className="text-sm text-[#3F3F3F]">
                    v1 displayed the query-match score as stars, but users read them as a <em>rating of the club</em> rather than how well it matched <em>their</em> search. I removed that misleading signal in v2, a small change that made a big difference in how results were understood.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* F. Final Deliverable — versioned carousel */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-[#0A0A0A] mb-4 text-center">
              The Product
            </h2>
            <p className="text-center text-[#3F3F3F] mb-12 max-w-2xl mx-auto">
              A deliberately simple search experience: describe your interests, get a ranked list of real orgs with categories and direct links. Toggle between the first deployment and the current state.
            </p>

            <div className="mb-12">
              <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
                <h3 className="text-xl text-[#0A0A0A]">UI/UX Display</h3>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-[#6B6B6B]">
                    {activeSlide.label}
                  </span>
                  <div className="flex items-center gap-1.5" role="tablist" aria-label="Select version">
                    {deliverableSlides.map((s, i) => (
                      <button
                        key={s.label}
                        type="button"
                        role="tab"
                        aria-selected={i === slideIndex}
                        aria-label={`Show ${s.label}`}
                        onClick={() => setSlideIndex(i)}
                        className={`h-2 rounded-full transition-all ${
                          i === slideIndex
                            ? "w-6 bg-[#6B5D44]"
                            : "w-2 bg-[#D6CFC2] hover:bg-[#8A8A8A]"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="relative"
                role="region"
                aria-roledescription="carousel"
                aria-label="UI/UX deliverable versions"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {activeSlide.cards.map((card, idx) => (
                    <div
                      key={`${slideIndex}-${idx}`}
                      className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#D6CFC2]"
                    >
                      <div className="w-full aspect-video bg-[#EBE6DC] flex items-center justify-center">
                        <ImageWithFallback
                          src={card.src}
                          alt={card.alt}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-[#0A0A0A] mb-2">{card.title}</h4>
                        <p className="text-sm text-[#3F3F3F]">{card.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={goPrevSlide}
                  aria-label="Previous version"
                  className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white hover:bg-white shadow-md border border-[#D6CFC2] flex items-center justify-center text-[#3F3F3F] hover:text-[#6B5D44] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B5D44] transition"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={goNextSlide}
                  aria-label="Next version"
                  className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white hover:bg-white shadow-md border border-[#D6CFC2] flex items-center justify-center text-[#3F3F3F] hover:text-[#6B5D44] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B5D44] transition"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* G. What the Data Taught Me */}
        <section className="py-16 bg-[#EBE6DC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-sm uppercase tracking-[0.18em] font-spec text-[#6B5D44] mb-3">
                What the Data Taught Me
              </div>
              <h2 className="text-3xl text-[#0A0A0A] mb-4">
                145 real searches, one clear lesson
              </h2>
              <p className="text-[#3F3F3F] max-w-2xl mx-auto">
                I instrumented the deployed app to log every query, the ranked results, and which result the student actually clicked. Between February and June 2026 that produced 145 real searches with their clicks, and a specific direction.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg border border-[#D6CFC2] shadow-sm">
                <h4 className="text-[#0A0A0A] mb-2">People don't speak in "club language"</h4>
                <p className="text-sm text-[#3F3F3F]">
                  Students typed short, casual queries like "data," "k-pop," "rowing," and "birds," not the formal names and mission-statement phrasing the clubs were listed under. Meaning-based matching was the right call, but the vocabulary gap is real and wide.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-[#D6CFC2] shadow-sm">
                <h4 className="text-[#0A0A0A] mb-2">Ranking is the bottleneck</h4>
                <p className="text-sm text-[#3F3F3F]">
                  Only 21% of clicks hit the top result and 40% the top three, so 6 in 10 students scrolled further to find their match. The right orgs were being retrieved, but not ordered well enough. The fix is better ranking and hybrid keyword-plus-semantic filtering, not more data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* H. What I'd Do Differently */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-sm uppercase tracking-[0.18em] font-spec text-[#6B5D44] mb-3">
                What I'd Do Differently
              </div>
              <h2 className="text-3xl text-[#0A0A0A] mb-4">
                Honest retrospectives
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-[#EBE6DC] border border-[#D6CFC2] rounded-lg">
                <div className="flex-shrink-0 w-6 h-6 bg-[#6B5D44] text-white rounded-full flex items-center justify-center text-xs mt-0.5">
                  1
                </div>
                <div>
                  <div className="text-sm text-[#0A0A0A] mb-1">
                    <strong>Instrument on day one</strong>
                  </div>
                  <div className="text-sm text-[#3F3F3F]">
                    Click-logging is what turned opinions into direction. If I rebuilt this, telemetry would ship with v1 instead of after, and I'd have caught the ranking gap weeks earlier.
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-[#EBE6DC] border border-[#D6CFC2] rounded-lg">
                <div className="flex-shrink-0 w-6 h-6 bg-[#6B5D44] text-white rounded-full flex items-center justify-center text-xs mt-0.5">
                  2
                </div>
                <div>
                  <div className="text-sm text-[#0A0A0A] mb-1">
                    <strong>Design for how students actually type</strong>
                  </div>
                  <div className="text-sm text-[#3F3F3F]">
                    I optimized for natural-language blurbs, but most real queries were one or two words. A hybrid approach that layers keyword and category signals onto semantic matching would serve how students actually search.
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-[#EBE6DC] border border-[#D6CFC2] rounded-lg">
                <div className="flex-shrink-0 w-6 h-6 bg-[#6B5D44] text-white rounded-full flex items-center justify-center text-xs mt-0.5">
                  3
                </div>
                <div>
                  <div className="text-sm text-[#0A0A0A] mb-1">
                    <strong>Treat data quality as a feature</strong>
                  </div>
                  <div className="text-sm text-[#3F3F3F]">
                    Uneven and "dead" org entries from CampusGroups directly hurt result quality. A lightweight cleaning and freshness pass would raise the ceiling on everything downstream.
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-[#EBE6DC] border border-[#D6CFC2] rounded-lg">
                <div className="flex-shrink-0 w-6 h-6 bg-[#6B5D44] text-white rounded-full flex items-center justify-center text-xs mt-0.5">
                  4
                </div>
                <div>
                  <div className="text-sm text-[#0A0A0A] mb-1">
                    <strong>Test across every category, including the ones I don't know</strong>
                  </div>
                  <div className="text-sm text-[#3F3F3F]">
                    My own test queries leaned heavily on ICS clubs because I know them all, and that bias showed. When an arts student or anyone outside tech searched, results were weaker: more dead clubs and off-target matches surfaced because I'd validated against the corner of the ecosystem I understood best. Next time I'd deliberately test accuracy across all industries before trusting the results.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* I. What's Next */}
        <section className="py-16 bg-white border-t border-[#D6CFC2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-[#0A0A0A] mb-4 text-center">
              What's Next
            </h2>
            <p className="text-center text-[#3F3F3F] mb-12 max-w-2xl mx-auto">
              The roadmap, grounded in what the data has already shown.
            </p>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#6B5D44]"></div>

              <div className="space-y-12">
                {/* Phase 1 — done */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right">
                    <div className="bg-white p-6 rounded-lg border border-[#D6CFC2] inline-block">
                      <div className="text-sm uppercase tracking-[0.18em] font-spec text-[#6B5D44] mb-2">
                        Phase 1: Shipped
                      </div>
                      <h4 className="text-lg text-[#0A0A0A] mb-3">
                        Build &amp; deploy
                      </h4>
                      <ul className="text-sm text-[#3F3F3F] space-y-2 text-left">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-[#6B5D44] mr-2 mt-0.5 flex-shrink-0" />
                          Scoped and launched a working semantic search product indexing 100+ orgs.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:block"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 hidden md:block">
                    <div className="w-8 h-8 bg-[#6B5D44] rounded-full border-4 border-white"></div>
                  </div>
                </div>

                {/* Phase 2 — done */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="hidden md:block"></div>
                  <div>
                    <div className="bg-white p-6 rounded-lg border border-[#D6CFC2] inline-block">
                      <div className="text-sm uppercase tracking-[0.18em] font-spec text-[#6B5D44] mb-2">
                        Phase 2: Shipped
                      </div>
                      <h4 className="text-lg text-[#0A0A0A] mb-3">
                        Instrument &amp; learn
                      </h4>
                      <ul className="text-sm text-[#3F3F3F] space-y-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-[#6B5D44] mr-2 mt-0.5 flex-shrink-0" />
                          Added click-logging telemetry and collected 145+ real searches with their clicks.
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-[#6B5D44] mr-2 mt-0.5 flex-shrink-0" />
                          Identified ranking quality as the most important problem to fix.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 hidden md:block">
                    <div className="w-8 h-8 bg-[#6B5D44] rounded-full border-4 border-white"></div>
                  </div>
                </div>

                {/* Phase 3 — next */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right">
                    <div className="bg-white p-6 rounded-lg border-2 border-dashed border-[#D6CFC2] inline-block">
                      <div className="text-sm uppercase tracking-[0.18em] font-spec text-[#8A8A8A] mb-2">
                        Phase 3: Next
                      </div>
                      <h4 className="text-lg text-[#0A0A0A] mb-3">
                        Fix ranking
                      </h4>
                      <ul className="text-sm text-[#3F3F3F] space-y-2 text-left">
                        <li className="flex items-start">
                          <ArrowRight className="h-4 w-4 text-[#6B5D44] mr-2 mt-0.5 flex-shrink-0" />
                          Layer keyword and category signals onto semantic matching (hybrid ranking).
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-4 w-4 text-[#6B5D44] mr-2 mt-0.5 flex-shrink-0" />
                          Use logged click positions to tune and measure result ordering.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:block"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 hidden md:block">
                    <div className="w-8 h-8 bg-white border-4 border-[#6B5D44] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
