import React from 'react';
import soesImage from "../assets/soes.png";
import calculatorImage from "../assets/calculator.png" 
import FaizanImage from "../assets/faizan.png"
import { MdDescription } from 'react-icons/md';

const projects = [
    {
        id: 1,
        name: "Landing Page",
        technologies: "React",
        image: soesImage,
        github: "https://github.com/faizannasim/nike-Brand-Page.git",
    },
    {
        id: 2,
        name: "Calculator",
        technologies: "Html,Css And JavaScript",
        image: calculatorImage,
        github: "https://github.com/faizannasim/Cod-Soft/tree/7fb742f82db611aebdf255bab0fe57f497edbad9/calculator%20%40%20cod%20soft",
    },
    {
        id: 3,
        name: "Personal Portfolio",
        technologies: "React",
        
        image: FaizanImage,
        github: "#",
    },
    {
        id: 4,
        name: "xyz",
        technologies: "React",
        image: soesImage,
        github: "#",
    }
];

const Project = () => {
    return (
        <div className="bg-black text-white py-20" id="project">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map(project => (
                        <div key={project.id} className='bg-gray-800 p-6 rounded-lg transition-transform duration-300 transform hover:shadow-lg hover:scale-105'>
                            <img src={project.image} alt={project.name} className='w-full h-40 object-cover rounded-md' />
                            <h3 className='text-lg font-semibold mt-4'>{project.name}</h3>
                            <p className='mt-2'>{project.technologies}</p>
                            <a href={project.github} className='text-blue-400 hover:text-blue-600 hover:underline'>Github</a>
                        </div>
                        
                        
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Project;
