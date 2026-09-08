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
import OurFeatures from "./components/Sections/OurFeatures/OurFeatures";
import OurProduct from "./components/Sections/OurProduct/OurProduct";
import FAQ from "./components/Sections/FAQ/FAQ";
import Testimonials from "./components/Sections/Testimonials/Testimonials";
import MissionVision from "./components/Sections/MissionVision/MissionVision";
import PressReleases from "./components/Sections/PressReleases/PressReleases";
import OurValues from "./components/Sections/OurValues/OurValues";
import JobOpenings from "./components/Sections/JobOpenings/JobOpenings";
import Protect from "./components/Sections/Protect/Protect";
import Benefits from "./components/Sections/Benefits/Benefits";
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

       <Route path="/dashboard" element={<Dashboard />} >

         <Route path="our-products" element={<OurProduct />} />
        <Route path="our-features" element={<OurFeatures />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="testimonials" element={<Testimonials />} />

        <Route path="mission-vision" element={<MissionVision />} />
        <Route path="press-releases" element={<PressReleases />} />

 
        <Route path="our-values" element={<OurValues />} />
        <Route path="benefits" element={<Benefits />} />
        <Route path="job-openings" element={<JobOpenings />} />

        <Route path="protect" element={<Protect />}/>
       
       </Route>


      </Routes>

    </>
  );
}

export default App;

