// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaAppleAlt, FaBriefcase, FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Health",
    icon: <FaCameraRetro className="text-4xl text-primary" />,
    link: "#",
    description:
      "Comprehensive professional and technology-based services focused on public health, disease prevention, treatment, and consultancy tailored to community needs",
    aosDelay: "0",
  },
  {
    name: "Agriculture",
    icon: <GiNotebook className="text-4xl text-primary" />,
    link: "#",
    description:
      "Sustainable farming practices, input supply, and product marketing, utilizing innovative technology-based platforms.",
    aosDelay: "300",
  },
  {
    name: "Entereprunership/Innovation",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "Support for aspiring entrepreneurs through training, mentorship, and access to resources for building sustainable businesses",
    aosDelay: "500",
  },
  {
    name: "Finance",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "Providing financial consultancy and support to foster economic growth and stability within communities.",
    aosDelay: "700",
  },
  {
    name: "Business Consultancy and Projects Management",
    icon: <FaBriefcase className="text-4xl text-primary" />, // Changed to a business-related icon
    link: "#",
    description:
      "Offering expert business consultancy and project management services to help organizations optimize operations, enhance efficiency, and achieve their strategic goals.",
    aosDelay: "500",
  },
  {
    name: "Nutrition",
    icon: <FaAppleAlt className="text-4xl text-primary" />, // Changed to a nutrition-related icon
    link: "#",
    description:
      "Promoting healthy lifestyles through personalized nutritional advice, meal planning, and guidance to improve well-being and overall health.",
    aosDelay: "500",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            ></p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
