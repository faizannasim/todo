import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold md:inline'>Faizan Nasim</div>
        <div className='space-x-6'>
          <a href='#home' className='hover:text-gray-400'>Home</a>
          <a href='#about' className='hover:text-gray-400'>About Me</a>
          <a href='#service' className='hover:text-gray-400'>Services</a> {/* Changed to lowercase "service" */}
          <a href='#project' className='hover:text-gray-400'>Projects</a>
          <a href='#contact' className='hover:text-gray-400'>Contact</a>
        </div>
        <a 
          href={`mailto:faizannasim59@gmail.com`} // Replace with your email address
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded'
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
