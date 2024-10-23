/* eslint-disable no-unused-vars */
import React from "react";

const About = () => {
  return (
    <div className="p-6 bg-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
      <div className="flex flex-wrap -mx-3">
        <section className="mb-6 px-3 w-full sm:w-1/3">
          <div className="bg-white shadow-md rounded-lg p-4 h-full">
            <h3 className="text-xl font-semibold mb-2">Company Background</h3>
            <p>
              Founded with a vision to solve the gap of health service by
              sustainable and resilient, integrated professional service
              delivery and innovative tech-based solutions.
            </p>
          </div>
        </section>
        <section className="mb-6 px-3 w-full sm:w-1/3">
          <div className="bg-white shadow-md rounded-lg p-4 h-full">
            <h3 className="text-xl font-semibold mb-2">Our Company Values</h3>
            <p>
              Integrity, collaboration, and innovation in serving diverse
              communities.
            </p>
          </div>
        </section>
        <section className="mb-6 px-3 w-full sm:w-1/3">
          <div className="bg-white shadow-md rounded-lg p-4 h-full">
            <h3 className="text-xl font-semibold mb-2">Human Resources</h3>
            <p>
              Our team comprises experts in public health and agriculture,
              technology; economists, each bringing unique insights and
              experience to drive impactful solutions.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
