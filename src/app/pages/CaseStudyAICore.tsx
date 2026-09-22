import { useState } from "react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  Code2,
  Palette,
  PenLine,
  Sparkles,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// AI Core — design process assets
import wireframe from "../../assets/aicore/projects-wireframe.jpg";
import projectsHome from "../../assets/aicore/projects-home.png";
import projectsDetail from "../../assets/aicore/projects-detail.png";
import projectsChat from "../../assets/aicore/projects-chat.png";
import togglesOldEntry from "../../assets/aicore/toggles-v1-old-entry.png";
import togglesOldPanel from "../../assets/aicore/toggles-v1-old-panel.png";
import togglesNewEntry from "../../assets/aicore/toggles-v2-new-entry.png";
import togglesNewModal from "../../assets/aicore/toggles-v2-new-modal.png";
import landingV1 from "../../assets/aicore/landing-v1-old.png";
import landingV2 from "../../assets/aicore/landing-v2.png";
import landingV3 from "../../assets/aicore/landing-v3-final.png";
import landingSidebarDetail from "../../assets/aicore/landing-v1-sidebar-detail.png";
import landingSidebarDetailNew from "../../assets/aicore/landing-v3-sidebar-detail.png";
import chatA from "../../assets/aicore/chat-a.png";
import chatB from "../../assets/aicore/chat-b.png";
import chatC from "../../assets/aicore/chat-c-final.png";

type Stage = { img: string; alt: string; tag: string; caption: string };

function StageCarousel({ slides }: { slides: Stage[] }) {
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

type CompareSlide = {
  img: string;
  alt: string;
  tag: string;
  heading: string;
  body: string;
};

function IconCompare({ slides }: { slides: CompareSlide[] }) {
  const [i, setI] = useState(0);
  const total = slides.length;
  const prev = () => setI((n) => (n - 1 + total) % total);
  const next = () => setI((n) => (n + 1) % total);
  const s = slides[i];
  const chip =
    "px-3 py-1 text-xs font-spec font-bold uppercase tracking-[0.18em] transition-colors";
  const btn =
    "shrink-0 h-9 w-9 rounded-full bg-white hover:bg-[#EBE6DC] shadow-sm border border-[#D6CFC2] flex items-center justify-center text-[#242424] hover:text-[#6B5D44] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B5D44] transition";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[16rem_1fr] gap-6 sm:gap-10 items-center">
      {/* Image carousel */}
      <div className="w-full max-w-[16rem] mx-auto">
        <div
          className="flex justify-center gap-2 mb-3"
          role="tablist"
          aria-label="Before or after"
        >
          {slides.map((sl, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={idx === i}
              onClick={() => setI(idx)}
              className={`${chip} ${
                idx === i
                  ? "bg-[#0A0A0A] text-[#F5F2EC]"
                  : "bg-white border border-[#D6CFC2] text-[#454545] hover:border-[#6B5D44] hover:text-[#6B5D44]"
              }`}
            >
              {sl.tag}
            </button>
          ))}
        </div>
        <div className="bg-[#EBE6DC] border border-[#D6CFC2] rounded-lg overflow-hidden">
          <div className="aspect-[3/4] flex items-center justify-center">
            <ImageWithFallback
              key={i}
              src={s.img}
              alt={s.alt}
              className="w-full h-full object-contain transition-opacity duration-300"
            />
          </div>
        </div>
        <div className="mt-3 flex items-center justify-center gap-3">
          <button type="button" onClick={prev} aria-label="Previous" className={btn}>
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="font-spec font-bold uppercase tracking-[0.18em] text-sm text-[#0A0A0A]">
            {s.tag}
          </span>
          <button type="button" onClick={next} aria-label="Next" className={btn}>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Per-slide text */}
      <div>
        <div className="text-sm uppercase tracking-[0.18em] font-spec text-[#6B5D44] mb-2">
          A closer look: the sidebar
        </div>
        <h4 className="text-xl text-[#0A0A0A] mb-2">{s.heading}</h4>
        <p className="text-base sm:text-lg text-[#242424]">{s.body}</p>
      </div>
    </div>
  );
}

export default function CaseStudyAICore() {
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

      {/* Main Content */}
      <div className="pt-16">
        {/* A. The Setup */}
        <section className="py-16 bg-gradient-to-b from-[#EBE6DC] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Project Title and Role */}
              <div className="lg:col-span-2">
                <div className="mb-4">
                  <Badge className="bg-[#6B5D44] text-white mb-4">
                    Internship
                  </Badge>
                  <Badge className="bg-green-600 text-white mb-4 ml-2">
                    In Progress
                  </Badge>
                </div>
                <div className="inline-flex items-center gap-2.5 mb-5 bg-[#0A0A0A] text-[#F5F2EC] px-4 py-2.5 text-sm sm:text-base font-spec font-bold uppercase tracking-[0.18em]">
                  <Sparkles className="h-5 w-5 shrink-0" />
                  How I use AI in my design process
                </div>
                <h1 className="text-5xl text-[#0A0A0A] mb-6">AI Core</h1>
                <p className="text-xl text-[#242424] mb-8">
                  I'm the product owner of AI Core, an internal AI platform running live in production. The codebase was built by an outside vendor and handed off as a bare repository — no documentation. My work spans documenting and stabilizing the existing system, improving its output, rebuilding its UI, and extending what it can do to drive company-wide adoption.
                </p>
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  <div>
                    <div className="text-sm text-[#454545] mb-1">Role</div>
                    <div className="text-[#0A0A0A]">
                      Product Owner & UI/UX — AI Core
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-[#454545] mb-1">Timeline</div>
                    <div className="text-[#0A0A0A]">In Progress</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#454545] mb-1">Design tools</div>
                    <div className="text-[#0A0A0A]">Paper, Claude Code, React</div>
                  </div>
                </div>
              </div>

              {/* Technical Stack Sidebar */}
              <div className="space-y-6">
                <div className="bg-[#EBE6DC] p-6 rounded-lg border border-[#D6CFC2] h-fit">
                  <h3 className="text-lg text-[#0A0A0A] mb-4">
                    Technical Stack
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center text-sm text-[#454545] mb-2">
                        <Palette className="h-4 w-4 mr-2" />
                        Design
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Hand Wireframing</Badge>
                        <Badge variant="secondary">Company Brand Palette</Badge>
                        <Badge variant="secondary">Marketing Collaboration</Badge>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center text-sm text-[#454545] mb-2">
                        <Code2 className="h-4 w-4 mr-2" />
                        Development
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">Python</Badge>
                        <Badge variant="secondary">Node 24</Badge>
                        <Badge variant="secondary">GitHub Actions</Badge>
                        <Badge variant="secondary">Claude Code</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* B. Designing AI Core — the AI-in-process centerpiece */}
        <section className="py-16 bg-[#EBE6DC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-sm uppercase tracking-[0.18em] font-spec text-[#6B5D44] mb-3">
                Designing the UI
              </div>
              <h2 className="text-3xl text-[#0A0A0A] mb-4">
                Sketch, Build, Iterate
              </h2>
              <p className="text-[#242424] max-w-2xl mx-auto">
                AI Core shipped with a working but confusing UI. I redesigned it
                the way I work fastest: sketch the screen by hand, then iterate
                assisted by the Claude Code CLI, leveraging React to redesign the
                existing UI against the patterns people already trust from ChatGPT
                and Claude.
              </p>
            </div>

            {/* The three-step method */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
              {[
                {
                  icon: PenLine,
                  step: "1. Sketch",
                  body: "Draw the screen and its flow on paper first, so the layout is settled before any code.",
                },
                {
                  icon: Sparkles,
                  step: "2. Build",
                  body: "Iterate the sketch into a working React UI, assisted by the Claude Code CLI, to redesign the existing screens.",
                },
                {
                  icon: RefreshCw,
                  step: "3. Iterate",
                  body: "Refine against conventions users already know from ChatGPT and Claude, cutting friction each pass.",
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

            {/* Process subsections — divided for clear separation */}
            <div className="mt-10 border-t border-[#D6CFC2] divide-y divide-[#D6CFC2]">

            {/* C1. Projects — paper to product */}
            <div className="py-12 sm:py-20">
              <h3 className="text-2xl text-[#0A0A0A] mb-2">
                Projects: from paper to product
              </h3>
              <p className="text-[#242424] max-w-3xl mb-8">
                I sketched the projects feature as four screens: icon entry,
                projects home, a project workspace, and a project chat. The shell
                stays the same across them; only the content changes. Then I built
                each screen out.
              </p>
              <StageCarousel
                slides={[
                  {
                    img: wireframe,
                    alt: "Hand-drawn wireframes of the AI Core projects feature with four numbered screens",
                    tag: "Sketch",
                    caption:
                      "One page of paper wireframes: icon entry, projects home, inside a project, and the project chat.",
                  },
                  {
                    img: projectsHome,
                    alt: "Shipped AI Core projects home screen with project cards",
                    tag: "Home",
                    caption:
                      "Projects home, with searchable cards, sort, and a clear new-project entry.",
                  },
                  {
                    img: projectsDetail,
                    alt: "Shipped AI Core project workspace with instructions and files panels",
                    tag: "Workspace",
                    caption:
                      "Inside a project: an ask box, instructions that steer every chat, files, and past chats.",
                  },
                  {
                    img: projectsChat,
                    alt: "Shipped AI Core project chat screen with model selector",
                    tag: "Chat",
                    caption:
                      "A project chat that reuses the same shell, with per-chat model selection.",
                  },
                ]}
              />
            </div>

            {/* C2. Settings — before / after */}
            <div className="py-12 sm:py-20">
              <h3 className="text-2xl text-[#0A0A0A] mb-2">
                Chat settings: fixing a hidden, screen-eating menu
              </h3>
              <p className="text-[#242424] max-w-3xl mb-8">
                The toggle for chat settings was hidden up in the corner and very
                unintuitive, and the config panel opened on the side and ate the
                screen. I moved the entry into the ask box and made settings open
                in a center modal you can dismiss with the x or by clicking off it,
                taking inspiration from existing solutions like ChatGPT and Claude.
              </p>
              <StageCarousel
                slides={[
                  {
                    img: togglesOldEntry,
                    alt: "AI Core before, chat settings hidden behind a corner gear icon",
                    tag: "Before · Entry",
                    caption:
                      "The settings entry was a gear tucked in the top corner, easy to miss.",
                  },
                  {
                    img: togglesOldPanel,
                    alt: "AI Core before, config panel opening on the side and taking up the screen",
                    tag: "Before · Panel",
                    caption:
                      "Opening it pushed a full side panel over the conversation.",
                  },
                  {
                    img: togglesNewEntry,
                    alt: "AI Core after, settings entry moved into the ask box",
                    tag: "After · Entry",
                    caption:
                      "The entry now lives in the ask box, where people expect it.",
                  },
                  {
                    img: togglesNewModal,
                    alt: "AI Core after, settings in a dismissible center modal",
                    tag: "After · Modal",
                    caption:
                      "Settings open in a center modal you can dismiss with the x or a click off it.",
                  },
                ]}
              />
            </div>

            {/* C3. Landing — three passes */}
            <div className="py-12 sm:py-20">
              <h3 className="text-2xl text-[#0A0A0A] mb-2">
                Landing page: three passes to something clean
              </h3>
              <p className="text-[#242424] max-w-3xl mb-8">
                The landing started cluttered, anchored by a heavy "Start a new
                chat" button. Three passes later it's a clean, centered ask box
                with the controls people already expect.
              </p>
              <StageCarousel
                slides={[
                  {
                    img: landingV1,
                    alt: "AI Core landing page, first version",
                    tag: "v1",
                    caption:
                      "A bulky speech-bubble button and a bare sidebar.",
                  },
                  {
                    img: landingV2,
                    alt: "AI Core landing page, second version",
                    tag: "v2",
                    caption: "Centered the ask box and calmed the sidebar.",
                  },
                  {
                    img: landingV3,
                    alt: "AI Core landing page, current version",
                    tag: "Current",
                    caption:
                      "In-box attach and settings, a feedback entry, and an honest disclaimer.",
                  },
                ]}
              />

              {/* Callout: the sidebar buttons */}
              <div className="mt-8 max-w-5xl mx-auto bg-white border border-[#D6CFC2] rounded-lg p-6 sm:p-8">
                <IconCompare
                  slides={[
                    {
                      img: landingSidebarDetail,
                      alt: "Before: the sidebar's top button was a logout-style arrow icon, not a menu",
                      tag: "Before",
                      heading: "Unclear buttons with misleading icons",
                      body: 'A sidebar dropdown that reads "log out," and a new chat icon that reads "add file or add new."',
                    },
                    {
                      img: landingSidebarDetailNew,
                      alt: "After: an actual hamburger menu icon, bigger and bolder",
                      tag: "After",
                      heading:
                        "A new, updated icon with clear meaning that indicates a sidebar menu",
                      body: 'The icons are now bolder, larger, and have clear meaning, with a compose icon that reads "new page to chat on."',
                    },
                  ]}
                />
              </div>
            </div>

            {/* C4. Message rendering */}
            <div className="py-12 sm:py-20">
              <h3 className="text-2xl text-[#0A0A0A] mb-2">
                Message rendering: readable at any length
              </h3>
              <p className="text-[#242424] max-w-3xl mb-6">
                I tested the chat view against long responses to get message
                width, spacing, and the answer bubble to a comfortable read.
              </p>
              <StageCarousel
                slides={[
                  {
                    img: chatB,
                    alt: "AI Core chat rendering, early pass",
                    tag: "Early",
                    caption:
                      "Bounded bubbles with a full chat-history sidebar.",
                  },
                  {
                    img: chatA,
                    alt: "AI Core chat rendering, refined pass",
                    tag: "Refined",
                    caption:
                      "Pared back to a single, full-width column that reads cleanly at length.",
                  },
                  {
                    img: chatC,
                    alt: "AI Core chat rendering, current pass",
                    tag: "Current",
                    caption:
                      "A calmer empty state and consistent controls.",
                  },
                ]}
              />
            </div>
            </div>
          </div>
        </section>

        {/* C. The Work */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-[#0A0A0A] mb-12 text-center">
              The Work
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* What I'm Responsible For */}
              <div>
                <h3 className="text-xl text-[#0A0A0A] mb-4">
                  What I'm Responsible For
                </h3>
                <p className="text-[#242424] mb-4">
                  I inherited a live, vendor-built platform with only a repository and no documentation. From there, ownership spans the full lifecycle:
                </p>
                <ul className="text-[#242424] space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-[#6B5D44] mr-2 mt-1 flex-shrink-0" />
                    Documenting the existing codebase from scratch.
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-[#6B5D44] mr-2 mt-1 flex-shrink-0" />
                    Standing up a push-to-dev and push-to-prod process with GitHub Actions.
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-[#6B5D44] mr-2 mt-1 flex-shrink-0" />
                    Mapping the Azure backend — AI Foundry for model endpoints, Azure for hosting and deployment.
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-[#6B5D44] mr-2 mt-1 flex-shrink-0" />
                    Tracing down and fixing bugs across the platform.
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-[#6B5D44] mr-2 mt-1 flex-shrink-0" />
                    Improving output quality.
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-[#6B5D44] mr-2 mt-1 flex-shrink-0" />
                    Overhauling the UI — basing it on familiar solutions like Claude and ChatGPT to make the transition to the new platform as intuitive as possible.
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-[#6B5D44] mr-2 mt-1 flex-shrink-0" />
                    Extending functionality based on research into why people reach for ChatGPT over AI Core — e.g. adding image generation to close adoption gaps.
                  </li>
                </ul>
              </div>

              {/* End Goals */}
              <div>
                <h3 className="text-xl text-[#0A0A0A] mb-4">End Goals</h3>
                <div className="bg-[#EBE6DC] p-6 rounded-lg border border-[#D6CFC2] space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-[#D6CFC2]">
                    <div className="font-medium text-[#0A0A0A] mb-1">
                      Increase platform adoption
                    </div>
                    <p className="text-sm text-[#242424]">
                      Higher adoption means fewer enterprise AI seats to pay for. The platform saves money because the company's Microsoft enterprise plan makes LLM calls cheaper than full per-seat licenses.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-[#D6CFC2]">
                    <div className="font-medium text-[#0A0A0A] mb-1">
                      Overhaul the UI
                    </div>
                    <p className="text-sm text-[#242424]">
                      Make AI Core intuitive by grounding it in existing solutions users already know, lowering the barrier to switching.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* D. Call to Action */}
        <section className="py-16 bg-gradient-to-b from-[#EBE6DC] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#242424] max-w-2xl mx-auto mb-8">
              AI Core is live and still evolving. More of the design work — image
              generation and the next round of adoption research — is in progress.
            </p>
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
                to="/case-study/choc-hackathon"
                className="inline-flex items-center text-sm text-[#6B5D44] hover:text-[#4A3F2D]"
              >
                Next case study: CareBridge
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
