import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import fasterImage from "../../assets/fd42c9fefa1035e6cf3ee9430d0029a3858c6432.png";
import teenHealthCoachImage from "../../assets/0fff3c3953f226b7410952ac7b3fba41d90567ef.png";
import nexusDashboardImage from "../../assets/73d84cc564eda8a3adc0efffb2726d2808f2aacc.png";
import codecClubImage from "../../assets/codec-club-hub.png";
import careBridgeImage from "../../assets/carebridge-cover.png";
import ocvibeImage from "../../assets/OCVIBE/ocvibelogo.png";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: "ocvibe-internship",
    title: "OCVIBE",
    description: "",
    image: ocvibeImage,
    tags: ["Internship in progress"],
  },
  {
    id: "codec-club-hub",
    title: "Codec Club Hub",
    description:
      "A centralized platform for the Codec Club community — connecting members, sharing resources, and collaborating on projects in one place.",
    image: codecClubImage,
    tags: ["Community", "Web Development", "Collaboration"],
  },
  {
    id: "healthbridge-telemedicine",
    title: "Teen Health Coach: A Health Coach Companion ",
    description:
      "In partnership with Rady Children's Health and UCI's PHIT Program. The ultimate goal was to create a platform that assisted children with Adolescent Obesity and/or Asthma with building healthier lifestyle choices/habits. This project showcases the positive impact that emerging technologies such as AI Agents and LLMs can make in a pediatric setting.",
    image: teenHealthCoachImage,
    tags: ["Research", "UX Design", "Retrieval Augmented Generation", "Agents", "Vector DB", "Collaboration"],
  },
  {
    id: "faster-ai-real-estate",
    title: "FASTer: An Innovative and Modernized User Experience!",
    description:
      "Track Winner IrvineHacks 2026 – First American Best AI Usage in Real Estate",
    image: fasterImage,
    tags: ["Stakeholder Research", "Requirement Elicitation", "Prototyping", "Collaboration", "AI Automation"],
  },
  {
    id: "choc-hackathon",
    title: "CareBridge: From Discharge Plan to Recovery Plan",
    description:
      "A high-risk transition made safe and easy. — CHOC Research Pediatric and Lifespan Data Science Conference Hackathon Winner.",
    image: careBridgeImage,
    tags: ["Multi-Disciplinary Teamwork", "AI Tooling", "User-Centered Design", "Prototyping"],
  },
  {
    id: "nexus-enterprise-dashboard",
    title: "Kaiser Permanente: Waiting Room Dashboard",
    description:
      "During our time as Healthcare Administrative Interns, my team and I were tasked with conducting research, identifying a pain point, and proposing a solution. This showcases our presentation pitched to Administrative Board Members. It also showcases my early adoption of AI tools in 2025.",
    image: nexusDashboardImage,
    tags: ["Interviewing", "Data Analysis", "Presentational Skills", "Veo3", "Gemini"],
  },
  // {
  //   id: "workflow-automation-suite",
  //   title: "WorkFlow: Automation Suite",
  //   description:
  //     "No-code workflow builder reducing manual processes by 70% with intelligent task routing",
  //   image: "https://images.unsplash.com/photo-1659542878872-2b74d4bfa7ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlciUyMGNvbnN0cnVjdGlvbiUyMG1vZGVybiUyMG1pbmltYWx8ZW58MXx8fHwxNzcyNTE3NzM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  //   tags: ["Vue.js", "GraphQL", "MongoDB", "Kubernetes", "AI"],
  // },
];

export function FeaturedProjects() {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0A0A0A] mb-3 sm:mb-4">Products I've Shipped!</h2>
          <p className="text-base sm:text-lg text-[#3F3F3F] max-w-2xl mx-auto px-2">
            Projects and Proof of Concepts that have turned real problems into creative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/case-study/${project.id}`}
              className="group bg-white border border-[#D6CFC2] rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-[#EBE6DC]">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full group-hover:scale-105 transition-transform duration-500 ${
                    project.id === "ocvibe-internship"
                      ? "object-contain p-10"
                      : "object-cover"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {project.id === "healthbridge-telemedicine" && (
                  <Badge className="absolute top-3 right-3 bg-[#0A0A0A] text-white shadow-md">
                    Internship Done!
                  </Badge>
                )}
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl text-[#0A0A0A] mb-2">{project.title}</h3>
                <p className="text-sm text-[#3F3F3F] mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-[#EBE6DC] text-[#3F3F3F] hover:bg-[#6B5D44] hover:text-white transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* CTA */}
                <span className="inline-flex items-center text-[#6B5D44] hover:text-[#4A3F2D] p-0 h-auto group/btn">
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}