import { createBrowserRouter } from "react-router";
import ScrollToTopLayout from "./components/ScrollToTop";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import CaseStudyHealthBridge from "./pages/CaseStudyHealthBridge";
import CaseStudyNexus from "./pages/CaseStudyNexus";
import CaseStudyWorkflow from "./pages/CaseStudyWorkflow";
import CaseStudyCodecClub from "./pages/CaseStudyCodecClub";
import CaseStudyCareBridge from "./pages/CaseStudyCareBridge";
import CaseStudyAICore from "./pages/CaseStudyAICore";
import Process from "./pages/Process";
import Resume from "./pages/Resume";

export const router = createBrowserRouter([
  {
    Component: ScrollToTopLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/case-study/faster-ai-real-estate",
        Component: CaseStudy,
      },
      {
        path: "/case-study/healthbridge-telemedicine",
        Component: CaseStudyHealthBridge,
      },
      {
        path: "/case-study/nexus-enterprise-dashboard",
        Component: CaseStudyNexus,
      },
      {
        path: "/case-study/workflow-automation-suite",
        Component: CaseStudyWorkflow,
      },
      {
        path: "/case-study/ai-core",
        Component: CaseStudyAICore,
      },
      {
        path: "/case-study/codec-club-hub",
        Component: CaseStudyCodecClub,
      },
      {
        path: "/case-study/choc-hackathon",
        Component: CaseStudyCareBridge,
      },
      {
        path: "/process",
        Component: Process,
      },
      {
        path: "/resume",
        Component: Resume,
      },
    ],
  },
]);