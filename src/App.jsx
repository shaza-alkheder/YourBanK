import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Careers from "./pages/Careers/Careers";
import Security from "./pages/Security/Security";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import MissionVisionDashboard from "./components/Dashboard/Sections/MissionVisionDashboard/MissionVisionDashboard";
import FAQDashboard from "./components/Dashboard/Sections/FAQDashboard/FAQDashboard";
import OurProductDashboard from "./components/Dashboard/Sections/OurProductDashboard/OurProductDashboard";
import OurFeatureDashboard from "./components/Dashboard/Sections/OurFeatureDashboard/OurFeatureDashboard";
import OurValuesDashboard from "./components/Dashboard/Sections/OurValuesDashboard/OurValuesDashboard";
import ProtectDashboard from "./components/Dashboard/Sections/ProtectDashboard/ProtectDashboard";
import BenefitsDashboard from "./components/Dashboard/Sections/BenefitsDashboard/BenefitsDashboard";
import TestimonialsDashboard from "./components/Dashboard/Sections/TestimonialsDashboard/TestimonialsDashboard";
import PressReleasesDashboard from "./components/Dashboard/Sections/PressReleasesDashboard/PressReleasesDashboard";
import JobOpeningsDashboard from "./components/Dashboard/Sections/JobOpeningsDashboard/JobOpeningsDashboard";
import NavFooterLayout from "./components/Layout/NavFooterLayout/NavFooterLayout";
import ScrollToTop from "./components/UI/ScrollToTop/ScrollToTop";


function App() {
  localStorage.clear()
  return (
    <>
    <ScrollToTop />
  

      <Routes>

          <Route element={<NavFooterLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/security" element={<Security />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
          </Route>

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="mission-vision" element={<MissionVisionDashboard />} />
          <Route path="our-values" element={<OurValuesDashboard />} />
          <Route path="faq" element={<FAQDashboard />} />
          <Route path="our-products" element={<OurProductDashboard />} />
          <Route path="our-features" element={<OurFeatureDashboard />} />
          <Route path="Testimonials" element={<TestimonialsDashboard />} />
          <Route path="Press-Releases" element={<PressReleasesDashboard />} />
          <Route path="Job-Openings" element={<JobOpeningsDashboard />} />
          <Route path="protect" element={<ProtectDashboard />} />
          <Route path="benefits" element={<BenefitsDashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
