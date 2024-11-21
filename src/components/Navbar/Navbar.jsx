import { useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-scroll"; // Import Link from react-scroll
import Logo from "../../assets/image.png";
import ContactForm from "./ContactForm.jsx"; // Import the ContactForm component
import DarkMode from "./DarkMode";
import ResponsiveMenu from "./ResponsiveMenu";

export const MenuLinks = [
  { id: 1, name: "About", link: "about" },
  { id: 2, name: "Services", link: "services" },
  { id: 3, name: "Projects", link: "blogs" }, // This should match the `id` in the corresponding section
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false); // New state to manage modal visibility

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm); // Toggle modal visibility
  };

  return (
    <div className="relative z-10 w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <a href="" className="flex items-center gap-10">
            <img src={Logo} alt="" className="w-36" />
            <span className="text-2xl sm:text-2xl font-semibold ">
              Time Business
            </span>
          </a>
          {/* Desktop view Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-4">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  {/* Use Link from react-scroll to scroll to sections */}
                  <Link
                    to={link} // This will match the id of the section
                    smooth={true} // Enable smooth scroll
                    offset={-70} // Offset to account for navbar height
                    duration={500} // Duration of scroll animation
                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {name}
                  </Link>
                </li>
              ))}
              <button
                onClick={toggleContactForm} // Open contact form on click
                className="primary-btn"
              >
                Get in Touch
              </button>
              <DarkMode />
            </ul>
          </nav>
          {/* Mobile view Drawer */}
          <div className="flex items-center gap-4 md:hidden ">
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
      {/* Pass showContactForm state and toggleContactForm function to ContactForm */}
      <ContactForm isOpen={showContactForm} onClose={toggleContactForm} />
    </div>
  );
};

export default Navbar;
