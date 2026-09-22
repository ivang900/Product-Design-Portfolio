import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      // Navigate home first, then scroll after page loads
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinkClass =
    "text-sm text-[#242424] hover:text-[#6B5D44] transition-colors";
  const activeLinkClass = "text-sm text-[#6B5D44]";

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-[#D6CFC2] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side - Name */}
          <div className="flex items-center">
            <span className="font-medium text-[#0A0A0A]">Ivan Gonzalez</span>
            <span className="mx-2 text-[#565656]">|</span>
            <span className="text-[1.05rem] text-[#242424]">Product Designer & Developer</span>
          </div>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("work")}
              className={navLinkClass}
            >
              My Projects
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={navLinkClass}
            >
              About
            </button>
            <Link
              to="/process"
              className={isActive("/process") ? activeLinkClass : navLinkClass}
            >
              Process
            </Link>
            <Link
              to="/resume"
              className={
                isActive("/resume")
                  ? `${activeLinkClass} border border-[#6B5D44] px-4 py-1.5 rounded-lg`
                  : `${navLinkClass} border border-[#D6CFC2] px-4 py-1.5 rounded-lg hover:border-[#6B5D44]`
              }
            >
              Resume
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-[#242424]" />
            ) : (
              <Menu className="h-6 w-6 text-[#242424]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#D6CFC2]">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("work")}
                className="text-sm text-[#242424] hover:text-[#6B5D44] transition-colors text-left"
              >
                My Projects
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm text-[#242424] hover:text-[#6B5D44] transition-colors text-left"
              >
                About
              </button>
              <Link
                to="/process"
                onClick={() => setMobileMenuOpen(false)}
                className={
                  isActive("/process")
                    ? "text-sm text-[#6B5D44] text-left"
                    : "text-sm text-[#242424] hover:text-[#6B5D44] transition-colors text-left"
                }
              >
                Process
              </Link>
              <Link
                to="/resume"
                onClick={() => setMobileMenuOpen(false)}
                className={
                  isActive("/resume")
                    ? "text-sm text-[#6B5D44] text-left"
                    : "text-sm text-[#242424] hover:text-[#6B5D44] transition-colors text-left"
                }
              >
                Resume
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}