import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  FileText,
  Palette,
  Users,
  MessageSquare,
  StickyNote,
  UserRound,
  Search,
  Tag,
  Accessibility,
  ThumbsUp,
  AlertTriangle,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { StageCarousel } from "../components/StageCarousel";

// Reddit Redesign — research & design assets
import affinityByInterviewee from "../../assets/reddit/affinity-by-interviewee.png";
import affinityIteration1 from "../../assets/reddit/affinity-iteration-1.png";
import affinityFinal from "../../assets/reddit/affinity-final.png";
import persona from "../../assets/reddit/persona-felin.png";
import storyboard from "../../assets/reddit/storyboard.png";

const documents = [
  { label: "Interview Protocol", href: "https://docs.google.com/document/d/1jXa4kIDkAV3K-WExn1GAJke5fZF9KbYzGlZ2Vo-Nd1A/edit?usp=sharing" },
  { label: "Interview Notes", href: "https://docs.google.com/document/d/1jDEtVWDbw7N3RoDZ1Ypt_q8YyLGSLypc61Khpl5jf1w/edit?usp=sharing" },
  { label: "Affinity Analysis", href: "https://www.figma.com/board/yw523Y7G7WtBV4D8wDftgM/Minus-One-Affinity-Mapping-Project-2?node-id=0-1&p=f" },
  { label: "Persona", href: "https://www.figma.com/design/sk6KQ04ZX4A4BTFcwtbUSd/P2-User-Persona---Minus-One-Team?node-id=0-1" },
  { label: "Storyboard", href: "https://www.figma.com/design/1Iu26orh2A54aTaM0yWRoX/Storyboard-Template-(Community)-(Copy)?node-id=92-297&p=f" },
  { label: "Expert Analysis", href: "https://docs.google.com/document/d/10lWNhInuPlte_GCQPQiH14u02iIiTLrSMr5T4pcXnn4/edit?usp=sharing" },
  { label: "Wireframes", href: "https://www.figma.com/design/xuQxFlNwYTApbHM6aV6gHt/Project-%233---Minus-One?node-id=0-1&p=f" },
  { label: "Mockups", href: "https://www.figma.com/design/xuQxFlNwYTApbHM6aV6gHt/Project-%233---Minus-One?node-id=1-2&p=f" },
];

const prototypeUrl =
  "https://www.figma.com/design/xuQxFlNwYTApbHM6aV6gHt/Project-%233---Minus-One?node-id=1-3";
const videoDemoUrl =
  "https://drive.google.com/file/d/19Dn0IlwWHXSmRw7foaMFdKg0X0Vy3OVn/view?usp=sharing";

const usabilityResults = [
  {
    user: "User 1",
    liked: ["Everything felt easier to find", "Posting was efficient"],
    issue: "Couldn't find the topic system when creating a post.",
    fix: "Make the topic button larger or color-coded so it stands out.",
  },
  {
    user: "User 2",
    liked: [
      "Topics helped surface specific information",
      "Adding a topic on the post page felt intuitive",
      "Play icon made videos easy to tell apart from images",
    ],
    issue: "Worried tags would get cluttered once more majors are added.",
    fix: 'Group tags under a general "By Major" option that filters down further.',
  },
  {
    user: "User 3",
    liked: ["Helpful for CS students to post and filter", "More convenient play / pause control"],
    issue: "After scrolling, nothing shows which topic is selected, so it's easy to forget.",
    fix: "Show the selected topic inside the search bar so the scope stays visible.",
  },
  {
    user: "User 4",
    liked: ["Tags made finding posts easier", "Videos no longer autoplay out loud on load"],
    issue: "Posting had too many steps, and the right category wasn't always clear.",
    fix: "Let tags be added later, and add examples or definitions under each category.",
  },
];

export default function CaseStudyReddit() {
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
                    Course Project
                  </Badge>
                  <Badge className="bg-[#0A0A0A] text-white mb-4 ml-2">
                    IN4MATX 131 · UC Irvine
                  </Badge>
                </div>
                <h1 className="text-4xl sm:text-5xl text-[#0A0A0A] mb-6">
                  Reddit Redesign: Finding CS Help on r/UCI
                </h1>
                <p className="text-xl text-[#242424] mb-8">
                  UCI Computer Science students lean on Reddit when classes get
                  hard and office hours are full, but the answers they need are
                  buried under weak search and filtering. Our team, Minus One,
                  interviewed CS students, built a persona from what we heard,
                  and redesigned r/UCI around a topic-and-tag filter system plus
                  accessibility fixes, then tested it with real users.
                </p>
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  <div>
                    <div className="text-sm text-[#454545] mb-1">My role</div>
                    <div className="text-[#0A0A0A]">
                      Recruiter · User Story · Expert Review
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-[#454545] mb-1">Team</div>
                    <div className="text-[#0A0A0A]">4 designers</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#454545] mb-1">Timeline</div>
                    <div className="text-[#0A0A0A]">Fall 2024</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#454545] mb-1">Design tools</div>
                    <div className="text-[#0A0A0A]">Paper, Figma, FigJam</div>
                  </div>
                </div>
              </div>

              {/* Methods + Documents Sidebar */}
              <div className="space-y-6">
                <div className="bg-[#EBE6DC] p-6 rounded-lg border border-[#D6CFC2] h-fit">
                  <h3 className="text-lg text-[#0A0A0A] mb-4">Methods</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center text-sm text-[#454545] mb-2">
                        <Users className="h-4 w-4 mr-2" />
                        Research
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Recruiting</Badge>
                        <Badge variant="secondary">User Interviews</Badge>
                        <Badge variant="secondary">Affinity Mapping</Badge>
                        <Badge variant="secondary">Persona</Badge>
                        <Badge variant="secondary">Storyboard</Badge>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center text-sm text-[#454545] mb-2">
                        <Palette className="h-4 w-4 mr-2" />
                        Design
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">User Story</Badge>
                        <Badge variant="secondary">Expert Review</Badge>
                        <Badge variant="secondary">Wireframes</Badge>
                        <Badge variant="secondary">Mockups</Badge>
                        <Badge variant="secondary">Prototype</Badge>
                        <Badge variant="secondary">Usability Testing</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-[#D6CFC2] h-fit">
                  <h3 className="flex items-center text-lg text-[#0A0A0A] mb-4">
                    <FileText className="h-4 w-4 mr-2" />
                    Project documents
                  </h3>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    {documents.map((d) => (
                      <li key={d.label}>
                        <a
                          href={d.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[#6B5D44] hover:text-[#4A3F2D]"
                        >
                          {d.label}
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* B. The Problem */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-sm uppercase tracking-[0.18em] font-spec text-[#6B5D44] mb-3">
                The problem
              </div>
              <h2 className="text-3xl text-[#0A0A0A] mb-4">
                Reddit has the answers. Finding them is the hard part.
              </h2>
              <p className="text-[#242424] max-w-2xl mx-auto">
                Across four interviews, the same three themes kept coming up.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {[
                {
                  icon: FileText,
                  title: "Classes outpace support",
                  body: "Course content is hard and TAs and professors are stretched thin. Official ICS resources lack candid reviews of classes, so students go looking elsewhere.",
                },
                {
                  icon: Users,
                  title: "Community is hard to find",
                  body: "Commuters especially struggle to connect. As one student put it: “it can be hard to make connections with people within the CS community at UCI, especially as a commuter.”",
                },
                {
                  icon: Search,
                  title: "Search buries what matters",
                  body: "Reddit is trusted for honest, first-hand advice, but finding the same post twice is hard, answers hide in replies, and auto-playing video gets in the way.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="bg-[#EBE6DC] p-5 rounded-lg border border-[#D6CFC2]"
                >
                  <div className="h-9 w-9 rounded-md bg-[#6B5D44]/10 text-[#6B5D44] flex items-center justify-center mb-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg text-[#0A0A0A] mb-1">{title}</h3>
                  <p className="text-sm text-[#242424]">{body}</p>
                </div>
              ))}
            </div>

            {/* User story */}
            <div className="max-w-4xl mx-auto bg-[#0A0A0A] text-[#F5F2EC] rounded-lg p-6 sm:p-10">
              <div className="text-sm uppercase tracking-[0.18em] font-spec text-[#B8A689] mb-3">
                The user story I wrote
              </div>
              <p className="text-xl sm:text-2xl leading-relaxed">
                “As a CS student at UC Irvine, I want to filter information by
                topics and tags to easily find CS resources and connect with the
                CS community, so that I can excel both academically and socially
                at UC Irvine.”
              </p>
            </div>
          </div>
        </section>

        {/* C. Understanding users */}
        <section className="py-16 bg-[#EBE6DC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-sm uppercase tracking-[0.18em] font-spec text-[#6B5D44] mb-3">
                Understanding users
              </div>
              <h2 className="text-3xl text-[#0A0A0A] mb-4">
                Recruit, Interview, Synthesize
              </h2>
              <p className="text-[#242424] max-w-2xl mx-auto">
                We scoped our subpopulation to UCI CS majors: broad enough to
                gather real data, specific enough to stay relevant.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {[
                {
                  icon: Users,
                  step: "1. Recruit",
                  body: "I recruited four CS students and screened each against our criteria, watching for bias like only picking heavy Reddit fans.",
                },
                {
                  icon: MessageSquare,
                  step: "2. Interview",
                  body: "Open-ended interviews with a dedicated interviewer and scribe, then a pass to pull out the strongest quotes.",
                },
                {
                  icon: StickyNote,
                  step: "3. Affinity map",
                  body: "Quotes and findings on sticky notes, sorted by person, then into themes, then refined into insights.",
                },
                {
                  icon: UserRound,
                  step: "4. Persona",
                  body: "Felin Le: a commuting CS student who turns to Reddit for help and community.",
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

            <div className="mt-10 border-t border-[#D6CFC2] divide-y divide-[#D6CFC2]">
              {/* Affinity mapping */}
              <div className="py-12 sm:py-20">
                <h3 className="text-2xl text-[#0A0A0A] mb-2">
                  Affinity mapping: from quotes to themes
                </h3>
                <p className="text-[#242424] max-w-3xl mb-8">
                  Laying every quote out as a sticky note made patterns easy to
                  spot. Three passes took us from individual interviews to four
                  clear buckets: what works and what doesn't, for CS at UCI and
                  for Reddit itself.
                </p>
                <StageCarousel
                  slides={[
                    {
                      img: affinityByInterviewee,
                      alt: "Affinity diagram with sticky notes of key quotes and findings grouped by interviewee",
                      tag: "Data dump",
                      caption:
                        "Key quotes and findings from each interview, grouped by participant.",
                    },
                    {
                      img: affinityIteration1,
                      alt: "First affinity iteration sorting quotes into four categories",
                      tag: "Finding themes",
                      caption:
                        "First sort into four categories: CS at UCI and Reddit, positives and negatives.",
                    },
                    {
                      img: affinityFinal,
                      alt: "Final affinity diagram with refined themes such as difficult to find information and responses from similar people",
                      tag: "Final",
                      caption:
                        "Refined themes, like “Difficult to find information” and “Responses from similar people.”",
                    },
                  ]}
                />
              </div>

              {/* Persona */}
              <div className="py-12 sm:py-20">
                <h3 className="text-2xl text-[#0A0A0A] mb-2">
                  Persona: Felin Le
                </h3>
                <p className="text-[#242424] max-w-3xl mb-8">
                  We narrowed our findings into one actionable persona: a
                  tech-savvy, community-seeking commuter who trusts Reddit but
                  struggles with how its information is organized. Her
                  frustrations set the focus for the redesign: make r/UCI easier
                  to navigate and search.
                </p>
                <div className="max-w-5xl mx-auto bg-white rounded-lg border border-[#D6CFC2] overflow-hidden">
                  <ImageWithFallback
                    src={persona}
                    alt="User persona for Felin Le, a 19-year-old commuting UCI computer science student, with bio, goals, frustrations, personality, and motivations"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Storyboard */}
              <div className="py-12 sm:py-20">
                <h3 className="text-2xl text-[#0A0A0A] mb-2">
                  Storyboard: a late-night bug
                </h3>
                <p className="text-[#242424] max-w-3xl mb-8">
                  Felin's project is due tomorrow. Office hours are full and
                  nobody in Discord is awake. A Google search lands her in an
                  r/UCI thread where five years of students have shared advice,
                  and she gets unstuck. Reddit came through, but only after a
                  detour through Google.
                </p>
                <div className="max-w-5xl mx-auto bg-white rounded-lg border border-[#D6CFC2] overflow-hidden">
                  <ImageWithFallback
                    src={storyboard}
                    alt="Seven-panel storyboard of Felin struggling with a coding bug, searching Google, and finding help on r/UCI"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* D. The Redesign */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-sm uppercase tracking-[0.18em] font-spec text-[#6B5D44] mb-3">
                The redesign
              </div>
              <h2 className="text-3xl text-[#0A0A0A] mb-4">
                Expert Review to Prototype
              </h2>
              <p className="text-[#242424] max-w-2xl mx-auto">
                I led the expert review of Reddit. Listing strengths and
                weaknesses surfaced things regular users overlook: missing
                accessibility features and a cluttered UI. Together with the user
                story, that defined what we built.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Key features */}
              <div>
                <h3 className="text-xl text-[#0A0A0A] mb-4">What we built</h3>
                <div className="space-y-4">
                  <div className="bg-[#EBE6DC] p-5 rounded-lg border border-[#D6CFC2]">
                    <div className="flex items-center font-medium text-[#0A0A0A] mb-1">
                      <Tag className="h-4 w-4 mr-2 text-[#6B5D44]" />
                      Topic &amp; tag filtering on r/UCI
                    </div>
                    <p className="text-sm text-[#242424]">
                      Posts carry topics, and the subreddit can be filtered by
                      them, so a CS student can jump straight to class help
                      instead of scrolling through everything.
                    </p>
                  </div>
                  <div className="bg-[#EBE6DC] p-5 rounded-lg border border-[#D6CFC2]">
                    <div className="flex items-center font-medium text-[#0A0A0A] mb-1">
                      <Accessibility className="h-4 w-4 mr-2 text-[#6B5D44]" />
                      Accessibility updates
                    </div>
                    <p className="text-sm text-[#242424]">
                      Text labels on every post action button, and a visible
                      play / pause control so videos stop auto-playing.
                    </p>
                  </div>
                </div>
              </div>

              {/* How we got there */}
              <div>
                <h3 className="text-xl text-[#0A0A0A] mb-4">How we got there</h3>
                <ul className="text-[#242424] space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-[#6B5D44] mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <span className="text-[#0A0A0A]">Wireframes:</span> paper
                      sketches of where filtering could live, then merged into
                      one Figma wireframe and iterated as a team.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-[#6B5D44] mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <span className="text-[#0A0A0A]">Mockups:</span> matched
                      Reddit's own color, type, iconography, and proportions so
                      the new screens feel native.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-[#6B5D44] mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <span className="text-[#0A0A0A]">Prototype:</span> wired
                      up the key flow, not every button, so testers could see the
                      goal at a glance.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={prototypeUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="w-full bg-[#0A0A0A] hover:bg-[#242424] text-white"
                >
                  Open the interactive prototype
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href={videoDemoUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-[#6B5D44] text-[#6B5D44] hover:bg-[#EBE6DC]"
                >
                  Watch the video demo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* E. Usability testing */}
        <section className="py-16 bg-[#EBE6DC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-sm uppercase tracking-[0.18em] font-spec text-[#6B5D44] mb-3">
                Usability testing
              </div>
              <h2 className="text-3xl text-[#0A0A0A] mb-4">
                What four testers told us
              </h2>
              <p className="text-[#242424] max-w-2xl mx-auto">
                All four found information faster with topics. Every tester also
                surfaced a friction point, and each one points to a concrete next
                iteration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {usabilityResults.map((r) => (
                <div
                  key={r.user}
                  className="bg-white p-6 rounded-lg border border-[#D6CFC2]"
                >
                  <div className="text-sm uppercase tracking-[0.18em] font-spec font-bold text-[#0A0A0A] mb-4">
                    {r.user}
                  </div>
                  <div className="flex items-center text-sm text-[#454545] mb-2">
                    <ThumbsUp className="h-4 w-4 mr-2 text-[#6B5D44]" />
                    Worked
                  </div>
                  <ul className="text-sm text-[#242424] space-y-1 mb-4 pl-6 list-disc">
                    {r.liked.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                  <div className="flex items-center text-sm text-[#454545] mb-2">
                    <AlertTriangle className="h-4 w-4 mr-2 text-[#6B5D44]" />
                    Friction
                  </div>
                  <p className="text-sm text-[#242424] mb-4 pl-6">{r.issue}</p>
                  <div className="border-t border-[#D6CFC2] pt-3 flex items-start text-sm text-[#0A0A0A]">
                    <ArrowRight className="h-4 w-4 text-[#6B5D44] mr-2 mt-0.5 flex-shrink-0" />
                    {r.fix}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* F. Reflection */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-[#0A0A0A] mb-12 text-center">
              What I'd Do Differently
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Screen at scale",
                  body: "I recruited by approaching people who looked like a fit, which relied on luck. Next time: a short screener survey sent widely, then pick the strongest candidates.",
                },
                {
                  title: "Start from the user's seat",
                  body: "We first framed the user story as designers. Stepping into Felin's perspective sooner would have saved us time.",
                },
                {
                  title: "Benchmark before recommending",
                  body: "Finding best-practice examples was the hardest part of the expert review. Quick mini-reviews of comparable platforms up front would have made the recommendations easy.",
                },
              ].map(({ title, body }) => (
                <div
                  key={title}
                  className="bg-[#EBE6DC] p-6 rounded-lg border border-[#D6CFC2]"
                >
                  <h3 className="text-lg text-[#0A0A0A] mb-2">{title}</h3>
                  <p className="text-sm text-[#242424]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* G. Call to Action */}
        <section className="py-16 bg-gradient-to-b from-[#EBE6DC] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#242424] max-w-2xl mx-auto mb-8">
              Built by team Minus One for IN4MATX 131 at UC Irvine: Amanda Kim
              Pho, Heidi Thy Tran, Ivan Gonzalez, and Qianyi Liu.
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
                to="/case-study/faster-ai-real-estate"
                className="inline-flex items-center text-sm text-[#6B5D44] hover:text-[#4A3F2D]"
              >
                Next case study: FASTer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
