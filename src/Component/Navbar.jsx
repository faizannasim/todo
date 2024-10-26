import React from 'react';


const header = {
  name: "Faizan Nasim",
  menu: [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "About Me",
      link: "#",
    },
    {
      name: "Service",
      link: "#",
    },
    {
      name: "Project",
      link: "#",
    },
    {
      name: "Contact",
      link: "#",
    }
  ],
  contact: {
    name: "Contact Button",
    link: "mailto:faizannasim59@gmail.com", 
  }
};


const Navbar = () => {
  return (
    <div className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold md:inline">{header.name}</div>
        <div className="space-x-6 hidden md:flex">
          {header.menu.map((menuItem, index) => (
            <a key={index} href={menuItem.link} className="hover:text-gray-400">
              {menuItem.name}
            </a>
          ))}
        </div>
        <a
          href={header.contact.link}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded"
        >
          {header.contact.name}
        </a>
      </div>
    </div>
  );
};

export default Navbar;