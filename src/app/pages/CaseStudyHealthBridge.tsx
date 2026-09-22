import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code2,
  Palette,
  Database,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import homeLandingPage from "../../assets/healthcoach/homeLandingPage.png";
import accountSetup from "../../assets/healthcoach/accountSetup.png";
import initialGoalSetting from "../../assets/healthcoach/initialGoalSetting.png";
import landingPage from "../../assets/healthcoach/landingPage.png";
import workoutEndMotivation from "../../assets/healthcoach/InteractiveWorkoutEndMotivation.png";
import smartGoalsVideo from "../../assets/healthcoach/LLMInteractiveSmartGoals.mov";
import workoutsVideo from "../../assets/healthcoach/LLMInteractiveWorkouts.mov";
import garminDashboardVideo from "../../assets/healthcoach/garminWatchDataDashboard.mov";

type DeliverableMedia = {
  type: "image" | "video";
  src: string;
  title: string;
  caption: string;
};

const deliverableMedia: DeliverableMedia[] = [
  {
    type: "image",
    src: accountSetup,
    title: "Account Setup",
    caption:
      "A personalized onboarding form that gathers age, background, and interests so the experience can meet each teen where they are.",
  },
  {
    type: "image",
    src: initialGoalSetting,
    title: "Goal Setting",
    caption:
      "Teens pick a few simple, changeable goals across weight and asthma management — or write their own.",
  },
  {
    type: "image",
    src: landingPage,
    title: "Home Dashboard",
    caption:
      "A friendly overview of active goals, learning modules, and daily activity synced from a linked Garmin watch.",
  },
  {
    type: "video",
    src: smartGoalsVideo,
    title: "Smart Goal Setting — my contribution",
    caption:
      "The piece I built. An interactive, LLM-driven flow that teaches teens how to set real, achievable goals — and lets them edit and refine those goals themselves instead of following a static checklist.",
  },
  {
    type: "video",
    src: workoutsVideo,
    title: "Interactive Workouts",
    caption:
      "LLM-generated workouts tailored to asthma and weight-management needs, adapting to each teen.",
  },
  {
    type: "image",
    src: workoutEndMotivation,
    title: "Workout Complete",
    caption:
      "Positive reinforcement at the end of every session to celebrate effort and keep momentum going.",
  },
  {
    type: "video",
    src: garminDashboardVideo,
    title: "Garmin Data Dashboard",
    caption:
      "Because the platform works with Centralive, teens can link a Garmin watch — its data flows through Centralive to populate the dashboard.",
  },
];

export default function CaseStudyHealthBridge() {
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
                    PHIT Intern
                  </Badge>
                  <Badge className="bg-green-500 text-white mb-4 ml-2">
                    Completed
                  </Badge>
                </div>
                <h1 className="text-5xl text-[#0A0A0A] mb-6">
                  Rady Children's Health: Scoping & Designing A Health Coach Platform
                </h1>
                <p className="text-xl text-[#242424] mb-8">
                  This project allowed our team to explore the impact emerging technologies like AI Agents and LLMs can have in pediatric care settings. We designed an MVP health coach platform for young teens living with asthma and obesity — helping them build better habits in the hope of better long-term health outcomes.
                </p>
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  <div>
                    <div className="text-sm text-[#454545] mb-1">Role</div>
                    <div className="text-[#0A0A0A]">
                      UI/UX Researcher, Project Scoping, Collaboration, AI Agent Developer
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-[#454545] mb-1">Timeline</div>
                    <div className="text-[#0A0A0A]">10 weeks · Completed June 2026</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#454545] mb-1">Team</div>
                    <div className="text-[#0A0A0A]">1 Ivan Gonzalez, 2 Jerald Adriano, 3 Kathryn Ng, 4 Thuy Nguyen</div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-end gap-3 mt-6">
                  <a
                    href="https://docs.google.com/presentation/d/11GmRxPr3gUl2qOnxbs3CK5dkJT9ez7kpCITV26NP1ic/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="border-[#6B5D44] text-[#6B5D44] hover:bg-[#6B5D44]/10"
                    >
                      View Presentation
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* Technical Stack Sidebar + preview */}
              <div className="space-y-6">
              <div className="bg-[#EBE6DC] p-6 rounded-lg border border-[#D6CFC2] h-fit">
                <h3 className="text-lg text-[#0A0A0A] mb-4">Technical Stack</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center text-sm text-[#454545] mb-2">
                      <Palette className="h-4 w-4 mr-2" />
                      Design
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Figma Make</Badge>
                      <Badge variant="secondary">Gemini CLI</Badge>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-[#454545] mb-2">
                      <Code2 className="h-4 w-4 mr-2" />
                      Development
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">Claude Code</Badge>
                      <Badge variant="secondary">Git</Badge>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-[#454545] mb-2">
                      <Database className="h-4 w-4 mr-2" />
                      Standards & AI
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">HIPAA</Badge>
                      <Badge variant="secondary">Centralive</Badge>
                      <Badge variant="secondary">AI Agent Safeguards</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border border-[#D6CFC2] shadow-lg bg-white">
                <ImageWithFallback
                  src={homeLandingPage}
                  alt="Pre-auth landing page for the Teen Health Coach platform"
                  className="w-full h-auto"
                />
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* B. Research & Ideation */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-[#0A0A0A] mb-12 text-center">
              Research & Ideation
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* The Challenge */}
              <div>
                <h3 className="text-xl text-[#0A0A0A] mb-4">The Challenge</h3>
                <div className="prose prose-gray">
                  <p className="text-[#242424] mb-4">
                    We set out to build an MVP for a health platform aimed at young teens living with asthma and obesity. The goal was to help them build better habits — and, in turn, reach better health outcomes. A central bet was LLM integration: language models can drive the interactivity and learning that keeps a young audience engaged in their own care.
                  </p>
                  <p className="text-[#242424]">
                    <strong>Key Pain Points:</strong>
                  </p>
                  <ul className="text-[#242424] space-y-2">
                    <li>1. There is currently no interactive health platform that actually teaches young teens about their conditions.</li>
                    <li>2. Existing resources are static and clinical — not engaging for the age group that needs them most.</li>
                    <li>3. Habit-building guidance rarely meets teens at their level or keeps them coming back.</li>
                    <li>4. Care tools are built for adults or clinicians, not for the kids living with these conditions day to day.</li>
                  </ul>
                </div>
              </div>

              {/* Research Synthesis */}
              <div>
                <h3 className="text-xl text-[#0A0A0A] mb-4">
                  Research & Discovery
                </h3>
                <div className="bg-[#EBE6DC] p-6 rounded-lg border border-[#D6CFC2]">
                  <h4 className="text-sm uppercase tracking-[0.18em] font-spec text-[#6B5D44] mb-4">
                    Primary Data Sources
                  </h4>
                  <div className="space-y-4 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-[#D6CFC2]">
                      <div className="font-medium text-[#0A0A0A] mb-1">
                        Dr. Lois Sayrs
                      </div>
                      <p className="text-sm text-[#242424]">
                        Our primary research outlet — provided key insights on our young audience and how to design for teens.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-[#D6CFC2]">
                      <div className="font-medium text-[#0A0A0A] mb-1">
                        First-Hand Lived Experience
                      </div>
                      <p className="text-sm text-[#242424]">
                        I brought lived experience to the table. I genuinely enjoyed putting myself in their shoes and designing something I wish I'd had growing up.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-[#D6CFC2]">
                      <div className="font-medium text-[#0A0A0A] mb-1">
                        Centralive Platform
                      </div>
                      <p className="text-sm text-[#242424]">
                        A HIPAA-compliant data platform the MVP was designed to work with. Teens can link a Garmin watch to Centralive, and that wearable data flows in to populate the dashboard.
                      </p>
                    </div>
                  </div>

                  <h4 className="text-sm uppercase tracking-[0.18em] font-spec text-[#6B5D44] mb-4">
                    Key Insights
                  </h4>
                  <ul className="space-y-2 text-sm text-[#242424]">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-[#6B5D44] mr-2 mt-0.5 flex-shrink-0" />
                      Young teens need simplicity — but simple can't mean boring. Engagement is what keeps them learning.
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-[#6B5D44] mr-2 mt-0.5 flex-shrink-0" />
                      LLMs can turn passive health information into interactive, conversational learning.
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-[#6B5D44] mr-2 mt-0.5 flex-shrink-0" />
                      Designing from lived experience surfaces needs that clinical research alone can miss.
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-[#6B5D44] mr-2 mt-0.5 flex-shrink-0" />
                      Working within a HIPAA-compliant platform (Centralive) shapes what the experience can and can't do from day one.
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-[#6B5D44] mr-2 mt-0.5 flex-shrink-0" />
                      Linking a Garmin watch through Centralive brings real activity data into the experience, making the dashboard personal and live.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* C. Final Deliverable */}
        <section className="py-16 bg-[#EBE6DC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-[#0A0A0A] mb-4 text-center">
              The Deliverable
            </h2>
            <p className="text-center text-[#242424] mb-12 max-w-2xl mx-auto">
              A walkthrough of the MVP health coach platform we designed and built over the 10-week internship — from onboarding to LLM-driven coaching and a wearable-powered dashboard.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {deliverableMedia.map((media) => (
                <div
                  key={media.title}
                  className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#D6CFC2]"
                >
                  <div className="relative w-full aspect-video bg-[#EBE6DC] flex items-center justify-center overflow-hidden">
                    {media.type === "image" ? (
                      <ImageWithFallback
                        src={media.src}
                        alt={media.title}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <video
                        src={media.src}
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-contain bg-black"
                      />
                    )}
                    <Badge className="absolute top-3 left-3 bg-[#6B5D44] text-white">
                      {media.type === "video" ? "Demo" : "Screen"}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h4 className="text-[#0A0A0A] mb-2">{media.title}</h4>
                    <p className="text-sm text-[#242424]">{media.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* D. The Feedback & Iteration Loop */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-[#0A0A0A] text-white mb-4">
                Designing With Feedback
              </Badge>
              <h2 className="text-3xl text-[#0A0A0A] mb-4">
                The Feedback & Iteration Loop
              </h2>
              <p className="text-[#242424] max-w-2xl mx-auto">
                Weekly review sessions kept the design honest. Every iteration was measured against the needs of a young, condition-affected audience.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="lg:col-span-2 flex flex-col items-center">
                <h3 className="text-xl text-[#0A0A0A] mb-6">
                  What Shaped the Design
                </h3>
                <div className="space-y-4 max-w-xl w-full">
                  <div className="flex items-start space-x-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5">
                      1
                    </div>
                    <div>
                      <div className="text-sm text-[#0A0A0A] mb-1">
                        <strong>Weekly Review Sessions</strong>
                      </div>
                      <div className="text-xs text-[#242424]">
                        Regular check-ins let us course-correct fast and validate direction against real feedback each week.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5">
                      2
                    </div>
                    <div>
                      <div className="text-sm text-[#0A0A0A] mb-1">
                        <strong>Accessibility</strong>
                      </div>
                      <div className="text-xs text-[#242424]">
                        The platform had to be usable by everyone in our audience — accessibility was a first-class design constraint, not an afterthought.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5">
                      3
                    </div>
                    <div>
                      <div className="text-sm text-[#0A0A0A] mb-1">
                        <strong>Simple, But Engaging</strong>
                      </div>
                      <div className="text-xs text-[#242424]">
                        Simplicity for a younger audience — without losing the engagement that keeps teens coming back and learning.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* E. What's Next */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-[#0A0A0A] mb-4 text-center">
              What's Next
            </h2>
            <p className="text-center text-[#242424] mb-12 max-w-2xl mx-auto">
              A Roadmap of This Project's Lifecycle
            </p>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#6B5D44]"></div>

              <div className="space-y-12">
                {/* Phase 1 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right">
                    <div className="bg-white p-6 rounded-lg border border-[#D6CFC2] inline-block">
                      <div className="text-sm uppercase tracking-[0.18em] font-spec text-[#6B5D44] mb-2">
                        Phase 1 — Complete
                      </div>
                      <h4 className="text-lg text-[#0A0A0A] mb-3">
                        Scope, Design & Build the MVP
                      </h4>
                      <ul className="text-sm text-[#242424] space-y-2 text-left">
                        <li className="flex items-start">
                          <ArrowRight className="h-4 w-4 text-[#6B5D44] mr-2 mt-0.5 flex-shrink-0" />
                          Researched the audience, scoped the platform, and designed and built a working MVP over 10 weeks.
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-4 w-4 text-[#6B5D44] mr-2 mt-0.5 flex-shrink-0" />
                          Designed to work with Centralive, a HIPAA-compliant data platform.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:block"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 hidden md:block">
                    <div className="w-8 h-8 bg-[#6B5D44] rounded-full border-4 border-white"></div>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="hidden md:block"></div>
                  <div>
                    <div className="bg-white p-6 rounded-lg border border-[#D6CFC2] inline-block">
                      <div className="text-sm uppercase tracking-[0.18em] font-spec text-[#6B5D44] mb-2">
                        Phase 2 — Next
                      </div>
                      <h4 className="text-lg text-[#0A0A0A] mb-3">
                        Hand Off to Development
                      </h4>
                      <ul className="text-sm text-[#242424] space-y-2">
                        <li className="flex items-start">
                          <ArrowRight className="h-4 w-4 text-[#6B5D44] mr-2 mt-0.5 flex-shrink-0" />
                          Hand off the design and MVP to a development team to take it to production.
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-[#6B5D44] mr-2 mt-0.5 flex-shrink-0" />
                          Carry the HIPAA and Centralive integration requirements forward into build.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 hidden md:block">
                    <div className="w-8 h-8 bg-[#6B5D44] rounded-full border-4 border-white"></div>
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
