import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Component import
import About from "./components/About/About.jsx";
import BlogsComp from "./components/Blogs/BlogsComp.jsx";
import BrandsLogo from "./components/BrandsLogo/BrandsLogo.jsx";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";

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
      <Hero />
      <BrandsLogo />
      <Services />
      <Testimonial />
      <About />
      <BlogsComp />

      <Footer />
    </div>
  );
};

export default App;
