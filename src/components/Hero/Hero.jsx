import React, { useState } from "react";
import yellowCar from "../../assets/website/image.png";

const Hero = () => {
  // State to toggle the visibility of additional content
  const [showMore, setShowMore] = useState(false);

  // Toggle the state when Learn More is clicked
  const handleLearnMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={yellowCar}
              alt="Yellow Car"
              className="w-full sm:max-w-[280px] md:max-w-[430px]"
            />
            <div
              data-aos="slide-right"
              className="absolute -bottom-5 -right-8 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md"
            >
              <p className="text-gray-500 text-sm ">⭐Projects</p>
              <h1 className="font-bold">
                3+ <span className="font-normal">Done</span>
              </h1>
            </div>
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Innovative Practices in{" "}
              <span className="text-primary">Health and Agriculture</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Our Company is dedicated to enhancing public health and
              agricultural productivity through innovative technology services
              and research. We aim to serve communities by improving health
              outcomes and promoting sustainable nutrition agriculture
              practices.
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
