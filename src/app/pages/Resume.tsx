import { Download, ExternalLink } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import resumePdf from "../../assets/Ivan_Gonzalez_Resume.pdf";

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#F5F2EC]">
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <Navigation />

      <main id="main-content" className="pt-16">
        {/* Header */}
        <section className="py-10 sm:py-14 bg-gradient-to-b from-white to-[#EBE6DC]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
              <div>
                <div className="text-sm uppercase tracking-[0.18em] font-spec text-[#6B5D44] mb-2">
                  Product Designer
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A]">
                  Resume
                </h1>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={resumePdf}
                  download="Ivan_Gonzalez_Resume.pdf"
                  className="inline-flex items-center rounded-md bg-[#6B5D44] hover:bg-[#4A3F2D] text-white px-5 py-3 text-base transition-colors"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download PDF
                </a>
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md border border-[#D6CFC2] bg-white/60 hover:border-[#6B5D44] hover:text-[#6B5D44] text-[#242424] px-5 py-3 text-base transition-colors"
                >
                  Open in new tab
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PDF viewer */}
        <section className="py-10 sm:py-12 bg-[#EBE6DC]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-[#D6CFC2] rounded-lg shadow-md overflow-hidden">
              <div className="w-full aspect-[8.5/11]">
                <iframe
                  src={`${resumePdf}#view=FitH`}
                  title="Ivan Gonzalez — Resume"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
            <p className="text-center text-sm text-[#454545] mt-4">
              Can&rsquo;t see the resume?{" "}
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B5D44] hover:text-[#4A3F2D] underline"
              >
                Open the PDF in a new tab.
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
