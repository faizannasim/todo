import React from 'react';

const Hero = () => {
    return (
        <main className='hero container'>
            <div className='hero-Content'>
                <h1>YOUR FEET DESERVE THE BEST </h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE
                     HERE TO HELP YOU WITH OUR 
                     SHOES.YOUR FEET  DESERVE THE BEST AND
                    WE’RE HERE TO HELP YOU WITH OUR SHOES
                    
                    </p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className='secondary-btn'>Cateogory</button>
                </div>

                <div className="shopping">
                    <p>Also Available on</p>

                    <div className='Brand-icon'>
                        <img src="/images/amazon.png" alt='amazon-logo' />
                        <img src="/images/flipkart.png" alt='amazon-logo' />
                        </div>
                </div>
            </div>
            <div className='heroImage'>
                <img src="/images/shoe_image.png" alt='Hero-image' />
            </div>
        </main>
    );
};

export default Hero;