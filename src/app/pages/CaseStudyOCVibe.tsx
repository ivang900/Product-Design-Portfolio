import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  Code2,
  Palette,
  Database,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import ocvibeLogo from "../../assets/OCVIBE/ocvibelogo.png";

export default function CaseStudyOCVibe() {
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
                  <Badge className="bg-green-500 text-white mb-4 ml-2">
                    Internship In Progress
                  </Badge>
                </div>
                <h1 className="text-5xl text-[#0A0A0A] mb-6">OCVIBE</h1>
                <p className="text-xl text-[#3F3F3F] mb-8">
                  I'm the product owner of AI Core, an internal AI platform running live in production. The codebase was built by an outside vendor and handed off as a bare repository — no documentation. My work spans everything from documenting and stabilizing the existing system to improving its output, rebuilding its UI, and extending what it can do to drive company-wide adoption.
                </p>
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  <div>
                    <div className="text-sm text-[#6B6B6B] mb-1">Role</div>
                    <div className="text-[#0A0A0A]">
                      Product Owner — AI Core (Internal AI Platform)
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-[#6B6B6B] mb-1">Timeline</div>
                    <div className="text-[#0A0A0A]">In Progress</div>
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
                      <div className="flex items-center text-sm text-[#6B6B6B] mb-2">
                        <Palette className="h-4 w-4 mr-2" />
                        Design
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Company Brand Palette</Badge>
                        <Badge variant="secondary">Marketing Collaboration</Badge>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center text-sm text-[#6B6B6B] mb-2">
                        <Code2 className="h-4 w-4 mr-2" />
                        Development
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Python</Badge>
                        <Badge variant="secondary">Node 24</Badge>
                        <Badge variant="secondary">GitHub Actions</Badge>
                        <Badge variant="secondary">Claude Code</Badge>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center text-sm text-[#6B6B6B] mb-2">
                        <Database className="h-4 w-4 mr-2" />
                        Azure & AI
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Azure AI Foundry</Badge>
                        <Badge variant="secondary">Azure Hosting & Deploy</Badge>
                        <Badge variant="secondary">Azure OpenAI</Badge>
                        <Badge variant="secondary">Microsoft Enterprise</Badge>
                        <Badge variant="secondary">Entra ID (Auth)</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden border border-[#D6CFC2] shadow-lg bg-white p-8 flex items-center justify-center">
                  <ImageWithFallback
                    src={ocvibeLogo}
                    alt="OCVIBE logo"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Responsibilities & Goals */}
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
                <p className="text-[#3F3F3F] mb-4">
                  I inherited a live, vendor-built platform with only a repository and no documentation. From there, ownership spans the full lifecycle:
                </p>
                <ul className="text-[#3F3F3F] space-y-2">
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
                    <p className="text-sm text-[#3F3F3F]">
                      Higher adoption means fewer enterprise AI seats to pay for. The platform saves money because the company's Microsoft enterprise plan makes LLM calls cheaper than full per-seat licenses.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-[#D6CFC2]">
                    <div className="font-medium text-[#0A0A0A] mb-1">
                      Overhaul the UI
                    </div>
                    <p className="text-sm text-[#3F3F3F]">
                      Make AI Core intuitive by grounding it in existing solutions users already know, lowering the barrier to switching.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internship Roadmap */}
        <section className="py-16 bg-[#EBE6DC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-[#0A0A0A] mb-4 text-center">
              Internship Roadmap
            </h2>
            <div className="max-w-xl mx-auto text-center bg-white p-10 rounded-lg border border-dashed border-[#D6CFC2]">
              <p className="text-[#3F3F3F]">Work in progress.</p>
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
