import { Download, Mail, Linkedin, Github, MapPin, Phone, ExternalLink } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import resumePdf from "../../assets/Ivan_Gonzalez_Resume.pdf";

const experience = [
  {
    role: "AI Agent Engineer Intern",
    company: "OC Vibe + CEO Leadership Alliance Orange County",
    location: "Orange, CA",
    period: "Jun 2026 – Present",
    bullets: [
      "Owned an early-stage internal AI chat platform 0-to-1 (Azure infrastructure, Python backend) with minimal vendor support, reverse-engineering the system and establishing a dev-to-production workflow.",
      "Ran user research with staff to surface workflow gaps and usability pain points, then scoped and shipped an interface redesign that expanded functionality and increased platform adoption by 8 staff users.",
      "Advised leadership on AI adoption best practices and added an in-platform AI literacy hub with educational content, teaching staff to use AI tools effectively and curbing the team's recurring token spend by 10%.",
    ],
  },
  {
    role: "PHIT Intern",
    company: "UCI PHIT — Rady Children's",
    location: "Orange, CA",
    period: "Jan 2026 – Jun 2026",
    bullets: [
      "Led feature scoping and end-to-end build of an AWS-hosted proof-of-concept AI-powered pediatric health platform across a cross-functional intern team, developed to demonstrate the concept to leadership for buy-in.",
      "Contributed to the platform's PostgreSQL data model and wrote SQL (joins, aggregations) against it to power participant profiles, goal tracking, and check-in data.",
      "Built the retrieval-augmented generation (RAG) pipeline end-to-end: embedded peer-reviewed exercise-medicine literature with PubMedBERT into a ChromaDB vector store with condition-aware reranking and token-budgeted retrieval, grounding a workout-recommendation agent in clinical evidence.",
      "Designed an 8-profile agent-evaluation suite enforcing machine-checkable safety invariants (intensity ceilings, minimum warm-up, required safety cues) and citation coverage; the agent passed all safety checks across the suite, validating the prototype's clinical safety.",
    ],
  },
  {
    role: "Information Technology Intern",
    company: "California Department of Public Health — Childhood Lead Poisoning Prevention Branch",
    location: "Hybrid, CA",
    period: "Jan 2025 – Jun 2025",
    bullets: [
      "Built a Python automation that normalizes Excel datasets by header schema, eliminating manual data prep for nurses and streamlining a recurring operational workflow.",
      "Converted a legacy PDF form into a digital PowerApps form, cutting the data-entry workflow in half by eliminating one of its two manual steps.",
    ],
  },
];

const projects = [
  {
    name: "IrvineHacks 2026 — FASTer",
    stack: "Figma, FastAPI, Gemini API",
    period: "Feb 2026",
    bullets: [
      "Won First American Best AI Usage; ran stakeholder interviews to identify pain points within an internal tool, then defined and scoped a redesigned product from the findings.",
      "Built a FastAPI service using Gemini-2.5-flash to classify extracted legal data into PASS/WARNING/FAIL states, reducing manual document review effort.",
    ],
  },
  {
    name: "Codec Club Hub",
    stack: "Python, Flask, ChromaDB, Sentence-Transformers",
    period: "Nov 2025 – Present",
    bullets: [
      "Built and deployed a semantic search engine matching students to 100+ UCI clubs/organizations via natural language queries, lowering the barrier to campus involvement and accruing an average of 6 daily users.",
      "Instrumented click-logging telemetry capturing 145+ real user searches and click positions, building an evaluation loop to measure retrieval quality and prioritize ranking improvements.",
      "Owned a 0-to-1 product end-to-end: drove scoping, design, and development through bi-weekly stakeholder meetings with a faculty advisor, incorporating feedback into each iteration.",
    ],
  },
];

const education = [
  {
    degree: "B.S. Informatics",
    school: "University of California, Irvine — Donald Bren School of ICS",
    period: "Expected Spring 2027",
    note: "GPA 3.66 · Irvine, CA",
  },
];

const skills: { category: string; items: string[] }[] = [
  {
    category: "Product & Research",
    items: [
      "Product Discovery",
      "Problem Scoping",
      "Stakeholder Management",
      "Competitive Analysis",
      "User Interviews",
      "Affinity Mapping",
      "Journey Mapping",
      "Prioritization",
      "Usability Testing",
      "Cross-functional Collaboration",
    ],
  },
  {
    category: "Data & AI",
    items: [
      "PostgreSQL",
      "RAG Pipelines",
      "Vector Search",
      "Embeddings",
      "Linear Regression",
      "Agent Evaluation",
      "FastAPI",
      "ETL / Data Extraction",
    ],
  },
  {
    category: "Programming",
    items: ["Python", "SQL", "JavaScript", "Java", "HTML/CSS"],
  },
  {
    category: "Tools",
    items: [
      "AWS",
      "Azure",
      "Jira",
      "ServiceNow",
      "Figma",
      "PowerApps",
      "Power Automate",
      "Excel",
      "React",
      "Git",
    ],
  },
  {
    category: "Languages",
    items: ["English", "Spanish"],
  },
];

const certifications = [
  "IBM Data Analyst Professional Certificate",
  "Python for Data Science & AI (IBM)",
  "Claude Code 101",
];

export default function Resume() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Page Header */}
      <section className="pt-32 pb-10 bg-[#EBE6DC] border-b border-[#D6CFC2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="inline-block text-xs uppercase tracking-[0.2em] font-spec text-[#6B5D44] mb-2">
              Resume
            </span>
            <h1 className="text-3xl sm:text-4xl text-[#0A0A0A]">Ivan Gonzalez</h1>
            <p className="text-[#6B6B6B] mt-1 text-sm">
              B.S. Informatics · UC Irvine
            </p>
          </div>
          <a
            href={resumePdf}
            download="Ivan_Gonzalez_Resume.pdf"
            className="flex items-center gap-2 px-5 py-3 bg-[#6B5D44] text-white rounded-lg hover:bg-[#4A3F2D] transition-colors text-sm flex-shrink-0"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </div>
      </section>

      {/* Resume Body */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ── LEFT COLUMN ── */}
            <div className="lg:col-span-1 space-y-8">

              {/* Contact */}
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] font-spec text-[#6B5D44] mb-4">Contact</h2>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-[#3F3F3F]">
                    <Mail className="h-4 w-4 text-[#8A8A8A] flex-shrink-0" />
                    igonzalez0187@gmail.com
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#3F3F3F]">
                    <Phone className="h-4 w-4 text-[#8A8A8A] flex-shrink-0" />
                    323-919-3587
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#3F3F3F]">
                    <MapPin className="h-4 w-4 text-[#8A8A8A] flex-shrink-0" />
                    Irvine, CA
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/ivang9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[#3F3F3F] hover:text-[#6B5D44] transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-[#8A8A8A] flex-shrink-0" />
                      linkedin.com/in/ivang9
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/ivang900"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[#3F3F3F] hover:text-[#6B5D44] transition-colors"
                    >
                      <Github className="h-4 w-4 text-[#8A8A8A] flex-shrink-0" />
                      github.com/ivang900
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] font-spec text-[#6B5D44] mb-4">Skills</h2>
                <div className="space-y-5">
                  {skills.map((group) => (
                    <div key={group.category}>
                      <p className="text-xs text-[#8A8A8A] uppercase tracking-[0.18em] font-spec mb-2">{group.category}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="text-xs px-2 py-1 bg-[#EBE6DC] text-[#3F3F3F] rounded"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] font-spec text-[#6B5D44] mb-4">Certifications</h2>
                <ul className="space-y-2">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex items-start gap-2 text-sm text-[#3F3F3F]">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6B5D44] flex-shrink-0" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div className="lg:col-span-2 space-y-10">

              {/* Summary */}
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] font-spec text-[#6B5D44] mb-4">Summary</h2>
                <p className="text-sm text-[#3F3F3F] leading-relaxed">
                  Informatics student at UC Irvine focused on product management and responsible AI.
                  I turn ambiguous problems into scoped, validated products, owning discovery,
                  roadmap, and delivery. Recent work spans a 0-to-1 internal AI platform at OC Vibe,
                  an AI-powered pediatric health prototype with Rady Children's, and a semantic search
                  product shipped to the UCI community. Comfortable running stakeholder research,
                  making scope tradeoffs, and shipping working products with modern AI tooling.
                </p>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] font-spec text-[#6B5D44] mb-6">Experience</h2>
                <div className="space-y-8">
                  {experience.map((job, i) => (
                    <div key={i} className="relative pl-4 border-l-2 border-[#D6CFC2]">
                      <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-[#6B5D44]" />
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                        <div>
                          <h3 className="text-base text-[#0A0A0A]">{job.role}</h3>
                          <p className="text-sm text-[#6B6B6B]">
                            {job.company} · {job.location}
                          </p>
                        </div>
                        <span className="text-xs text-[#8A8A8A] whitespace-nowrap sm:mt-1">{job.period}</span>
                      </div>
                      <ul className="space-y-1.5">
                        {job.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-[#3F3F3F]">
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-[#8A8A8A] flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] font-spec text-[#6B5D44] mb-6">Projects</h2>
                <div className="space-y-8">
                  {projects.map((project, i) => (
                    <div key={i} className="relative pl-4 border-l-2 border-[#D6CFC2]">
                      <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-[#6B5D44]" />
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                        <div>
                          <h3 className="text-base text-[#0A0A0A]">{project.name}</h3>
                          <p className="text-sm text-[#6B6B6B]">{project.stack}</p>
                        </div>
                        <span className="text-xs text-[#8A8A8A] whitespace-nowrap sm:mt-1">{project.period}</span>
                      </div>
                      <ul className="space-y-1.5">
                        {project.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-[#3F3F3F]">
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-[#8A8A8A] flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] font-spec text-[#6B5D44] mb-6">Education</h2>
                <div className="space-y-6">
                  {education.map((edu, i) => (
                    <div key={i} className="relative pl-4 border-l-2 border-[#D6CFC2]">
                      <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-[#6B5D44]" />
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                        <div>
                          <h3 className="text-base text-[#0A0A0A]">{edu.degree}</h3>
                          <p className="text-sm text-[#6B6B6B]">{edu.school}</p>
                        </div>
                        <span className="text-xs text-[#8A8A8A] whitespace-nowrap sm:mt-1">{edu.period}</span>
                      </div>
                      <p className="text-xs text-[#8A8A8A] italic">{edu.note}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
