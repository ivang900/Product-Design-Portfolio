import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  Code2,
  Palette,
  Database,
  ExternalLink,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export default function CaseStudyNexus() {
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
              <div className="lg:col-span-2">
                <div className="mb-4">
                  <Badge className="bg-[#6B5D44] text-white mb-4">
                    Kaiser Permanente: Healthcare Administration Intern
                  </Badge>
                </div>
                <h1 className="text-5xl text-[#0A0A0A] mb-6">
                  A Reimagined Waiting Room Experience
                </h1>
                <p className="text-xl text-[#3F3F3F] mb-8">
                  Wouldn't you like to know your relative place in line when waiting in the Emergency Room? With respect to your triage level you are assigned a color and a random number only you know to protect your identity.
                </p>
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  <div>
                    <div className="text-sm text-[#6B6B6B] mb-1">Role</div>
                    <div className="text-[#0A0A0A]">Researcher & Dashboard Developer</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#6B6B6B] mb-1">Timeline</div>
                    <div className="text-[#0A0A0A]">6 weeks</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#6B6B6B] mb-1">Team</div>
                    <div className="text-[#0A0A0A]">1 Ivan Gonzalez, 2 Mackenzie Huynh, 3 Toni Lee, 4 Emily Miranda, 5 Mina Nguyen</div>
                  </div>
                </div>
              </div>

              {/* Technical Stack Sidebar */}
              <div className="bg-[#EBE6DC] p-6 rounded-lg border border-[#D6CFC2] h-fit">
                <h3 className="text-lg text-[#0A0A0A] mb-4">Technical Stack</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center text-sm text-[#6B6B6B] mb-2">
                      <Palette className="h-4 w-4 mr-2" />
                      Design
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Figma</Badge>
                      <Badge variant="secondary">Gemini</Badge>
                      <Badge variant="secondary">Canva</Badge>

                    </div>
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-[#6B6B6B] mb-2">
                      <Code2 className="h-4 w-4 mr-2" />
                      Development
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Gemini</Badge>
                      <Badge variant="secondary">Webstorm IDE</Badge>
                      <Badge variant="secondary">HTML/CSS/React</Badge>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-[#6B6B6B] mb-2">
                      <Database className="h-4 w-4 mr-2" />
                      Infrastructure
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Portfolio */}
        <section className="py-16 bg-white">
          <div className="text-center space-y-4">
            <a
              href="https://www.canva.com/design/DAGs0SawPl4/tqgNegGS5iqOkDaERpetFg/edit?utm_content=DAGs0SawPl4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#6B5D44] hover:bg-[#4A3F2D] text-white px-8 py-3">
                View my presentation here!
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <div>
              <Link to="/">
                <Button variant="outline" className="border-[#6B5D44] text-[#6B5D44] hover:bg-[#6B5D44]/10 px-8 py-3 mt-4">
                  Back to Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}