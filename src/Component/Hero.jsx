import React from 'react';
import HeroImage from '../assets/fzn.png';

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img 
        src={HeroImage} 
        alt="Faizan Nasim"  
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
      />
      <h1 className='text-4xl font-bold'>
        I'm {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Faizan Nasim</span>
        , Front-end Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        I specialize in building modern and responsive websites.
      </p>
      <div className='mt-8 space-x-4'>
        <a 
          href={"mailto:faizannasim59@gmail.com`"} // Replace with your email address
          className='bg-gradient-to-r from-pink-400 to-red-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded'
        >
          Contact Me
        </a>
        <a 
          href="https://drive.google.com/file/d/1NqFYWVUeW5OFhhaaKzj3tNl-zRl90mAZ/view" // Replace with the actual path to your resume file
          download 
          className='bg-gradient-to-r from-yellow-400 to-brown-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded'
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
