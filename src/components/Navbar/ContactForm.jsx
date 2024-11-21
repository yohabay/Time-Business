import emailjs from "emailjs-com";
import React, { useState } from "react";

const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_epskkbl", // Replace with your service ID
        "template_hbkbguq", // Replace with your template ID
        {
          user_name: formData.name, // Make sure these match your template variables
          user_email: formData.email,
          user_message: formData.message,
        },
        "yohannis" // Replace with your user ID
      )
      .then(
        (response) => {
          console.log("Message sent successfully", response);
          setIsSuccess(true);
          setIsError(false);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending message", error);
          setIsError(true);
          setIsSuccess(false);
        }
      );
  };

  if (!isOpen) return null; // If modal is not open, don't render anything

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-80 md:w-96">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

        {isError && (
          <div className="text-red-500 mb-4">
            There was an error sending your message. Please try again.
          </div>
        )}

        {isSuccess && (
          <div className="text-green-500 mb-4">
            Your message has been sent successfully!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button type="submit" className="primary-btn">
            Send Message
          </button>
        </form>
        <button onClick={onClose} className="mt-4 text-red-500">
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
