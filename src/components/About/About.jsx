/* eslint-disable no-unused-vars */
import React from "react";
import { FaClipboardCheck, FaHeart, FaRocket, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>

      {/* Flexbox container for section rows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Mission Section */}
        <section className=" shadow-md rounded-lg p-4">
          <div className="flex items-center mb-4">
            <FaRocket className="text-primary text-2xl mr-4" />
            <h3 className="text-xl font-semibold">Our Mission</h3>
          </div>
          <p>
            We are dedicated to empowering industries through cutting-edge
            solutions that help businesses innovate, grow, and thrive. Our
            mission is to create sustainable value through technology and
            strategic partnerships.
          </p>
        </section>

        {/* Values Section */}
        <section className=" shadow-md rounded-lg p-4">
          <div className="flex items-center mb-4">
            <FaHeart className="text-primary text-2xl mr-4" />
            <h3 className="text-xl font-semibold">Our Values</h3>
          </div>
          <ul className="list-disc pl-6 space-y-2">
            <li>Integrity in all of our dealings</li>
            <li>Innovation that drives progress</li>
            <li>Collaboration across all stakeholders</li>
            <li>Commitment to excellence</li>
          </ul>
        </section>

        {/* Team Section */}
        <section className=" shadow-md rounded-lg p-4">
          <div className="flex items-center mb-4">
            <FaUsers className="text-primary text-2xl mr-4" />
            <h3 className="text-xl font-semibold">Our Team</h3>
          </div>
          <p>
            Our team is made up of diverse professionals with expertise in
            technology, health, agriculture, and business. Together, we strive
            to bring innovative solutions to real-world problems.
          </p>
        </section>
      </div>

      {/* Additional Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {/* Achievements Section */}
        <section className=" shadow-md rounded-lg p-4">
          <div className="flex items-center mb-4">
            <FaClipboardCheck className="text-primary text-2xl mr-4" />
            <h3 className="text-xl font-semibold">Our Achievements</h3>
          </div>
          <ul className="list-disc pl-6 space-y-2">
            <li>Successful implementation of innovative tech solutions</li>
            <li>Partnerships with global leaders in tech and agriculture</li>
            <li>Recognition for excellence in service delivery</li>
          </ul>
        </section>

        {/* Future Goals Section */}
        <section className=" shadow-md rounded-lg p-4">
          <div className="flex items-center mb-4">
            <FaRocket className="text-primary text-2xl mr-4" />
            <h3 className="text-xl font-semibold">Our Future Goals</h3>
          </div>
          <ul className="list-disc pl-6 space-y-2">
            <li>Expanding our technological impact in emerging markets</li>
            <li>
              Fostering more sustainable solutions for agriculture and health
            </li>
            <li>Continued growth through partnerships and innovation</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
