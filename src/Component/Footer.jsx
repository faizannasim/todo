import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const footer = {
  name: "faizan nasim",
  section: [
    {
      description: "Frontend Developer based in the Delhi, specializing in web development",
      mail: "Your Email",
      button: "Subscribe"
    }
  ],
  menu: {
    info: "Faizan Nasim. All rights reserved.",
    twitter: "https://x.com/FaizanNasim8",
    linkedin: "https://www.linkedin.com/in/faizan-nasim-2262a930a/",
    git: "https://github.com/faizannasim",
    linkone:"Privacy",
    link: "Terms of Service"
  }
}

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">{footer.name}</h3>

            {footer.section.map((section) => (
              <p key={section.description} className="text-gray-400">
                {section.description}
              </p>
            ))}
          </div>
          <div className="flex-1 w-full">
            {footer.section.map((section) => (
              <form key={section.mail} className="flex items-center justify-center">
                <input
                  type="email"
                  placeholder={section.mail}
                  className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                  focus:outline-none focus:border-green-400"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                  py-2 rounded-r-lg"
                >
                  {section.button}
                </button>
              </form>
            ))}
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} {footer.menu.info}
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href={footer.menu.twitter} className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href={footer.menu.linkedin} className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href={footer.menu.git} className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href={footer.menu.linkone} className="text-gray-400 hover:text-white">
            {footer.menu.linkone}
            </a>
            <a href={footer.menu.link} className="text-gray-400 hover:text-white">
            {footer.menu.link}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;