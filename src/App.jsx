import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Component imports
import About from "./components/About/About.jsx";
import BlogsComp from "./components/Blogs/BlogsComp.jsx";
import BrandsLogo from "./components/BrandsLogo/BrandsLogo.jsx";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <div id="hero">
        <Hero />
      </div>
      {/* BrandsLogo Section */}
      <div id="brands">
        <BrandsLogo />
      </div>
      {/* Services Section */}
      <div id="services">
        <Services />
      </div>
      {/* Testimonials Section */}
      {/* <div id="testimonials">
        <Testimonial />
      </div> */}
      {/* About Section */}
      <div id="about">
        <About />
      </div>
      {/* Blogs Section */}
      <div id="blogs">
        <BlogsComp />
      </div>
      <Footer />
    </div>
  );
};

export default App;
