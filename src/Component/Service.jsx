import React from 'react';

const services = [
    {
        id: 1,
        title: "Web Site Design",
        Description: "xyz",
    },
    {
        id: 2,
        title: "Frontend Development",
        Description: "xyz",
    },
    {
        id: 3,
        title: "Full Stack Development",
        Description: "xyz",
    }
];

const Service = () => {
    return (
        <div className="bg-black text-white py-20" id="service">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {services.map(service => (
                        <div key={service.id}
                            className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-transform duration-300 transform hover:scale-105'>
                            <div className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-brown-400 mb-2'>
                                {service.id}
                            </div>
                            <h3 className='text-lg font-semibold'>{service.title}</h3>
                            <p className='mt-2 text-gray-300'>{service.Description}</p>
                            <a href='#' className="mt-4 inline-block text-yellow-500 hover:text-blue-500">
                                Learn More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Service;
