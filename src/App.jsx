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

function App() {
  localStorage.clear();
  return (
    <>
      <Nav logo="/assets/img/Logo/logoNavBar.webp" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/security" element={<Security />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer logo="/assets/img/Logo/logoNavBar.webp" />
    </>
  );
}

export default App;
