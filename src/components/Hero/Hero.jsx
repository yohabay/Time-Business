import { useState } from "react";
import heroimage from "../../assets/website/hero1.jpg";

const Hero = () => {
  // State to toggle the visibility of additional content
  const [showMore, setShowMore] = useState(false);

  // Toggle the state when Learn More is clicked
  const handleLearnMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            {/* Main Hero Image */}
            <img
              src={heroimage}
              alt="hero"
              className="w-full h-[280px] sm:max-w-[380px] md:max-w-[430px] shadow-lg shadow-black/30"
            />
            {/* Overlay Image with text next to it */}
            {/* <div className="absolute top-5 left-5 flex items-start space-x-3">
              <img
                src={overlayImage}
                alt="overlay"
                className="w-[120px] h-[180px]"
              />
              <div className="text-primary flex flex-col justify-center ">
                <h3 className="text-2xl font-bold" style={{ fontSize: "30px" }}>
                  Our Digital Health App
                </h3>
              </div>
            </div> */}
            <div
              data-aos="slide-right"
              className="absolute -bottom-5 -right-8 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md"
            ></div>
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Innovative Practices in{" "}
              <span className="text-primary">Health and Agriculture</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Our Company strive to create transformative services that improve
              well-being, optimize agriculture, streamline manufacturing,
              produce nutritious food, and promote sustainable income and
              economic growth. Our focus on innovation establishes us as a
              leader in developing solutions that meet society's demands while
              fostering an easier, healthier, and more resilient system for the
              community's future
            </p>

            {/* Toggleable extra content */}
            {showMore && (
              <div data-aos="fade-up" data-aos-delay="500">
                <p>
                  We work alongside farmers, researchers, and healthcare
                  providers to implement technology-driven solutions that make a
                  lasting impact. Our team is committed to delivering excellence
                  through collaboration and innovation.
                </p>
              </div>
            )}

            {/* Learn More button */}
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn"
              onClick={handleLearnMoreClick}
            >
              {showMore ? "Show Less" : "Learn More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
