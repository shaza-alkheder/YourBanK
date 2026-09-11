import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Layout/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Careers from "./pages/Careers/Careers";
import Security from "./pages/Security/Security";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Nav from "./components/Layout/Navbar/Nav";
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

// import Dashboard from "./pages/DashBoard/DashBoard";

function App() {
  return (
    <>
      {/*<Nav logo="/assets/img/Logo/logoNavBar.webp" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/security" element={<Security />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer logo="/assets/img/Logo/logoNavBar.webp" /> */}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav logo="/assets/img/Logo/logoNavBar.webp" />
              <Home />
              <Footer logo="/assets/img/Logo/logoNavBar.webp" />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Nav logo="/assets/img/Logo/logoNavBar.webp" />
              <About />
              <Footer logo="/assets/img/Logo/logoNavBar.webp" />
            </>
          }
        />

        <Route
          path="/careers"
          element={
            <>
              <Nav logo="/assets/img/Logo/logoNavBar.webp" />
              <Careers />
              <Footer logo="/assets/img/Logo/logoNavBar.webp" />
            </>
          }
        />

        <Route
          path="/security"
          element={
            <>
              <Nav logo="/assets/img/Logo/logoNavBar.webp" />
              <Security />
              <Footer logo="/assets/img/Logo/logoNavBar.webp" />
            </>
          }
        />

        <Route
          path="/signup"
          element={
            <>
              <Nav logo="/assets/img/Logo/logoNavBar.webp" />
              <SignUp />
              <Footer logo="/assets/img/Logo/logoNavBar.webp" />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <Nav logo="/assets/img/Logo/logoNavBar.webp" />
              <Login />
              <Footer logo="/assets/img/Logo/logoNavBar.webp" />
            </>
          }
        />

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
