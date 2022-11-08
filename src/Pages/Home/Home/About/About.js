import React from 'react';
import img1 from '../../../../assets/1.jpg'

const About = () => {
    return (
        <div className="hero  bg-base-200 mb-5 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img1} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Color Canvas</h1>
                    <p className="py-6">I concerned about my customers and so I have come up with packages
                        <br /> for all kinds of people considering their different taste and requirements as well as <br /> budget limitation. I don't provide a final price until consulting with my potential client. <br /> <br /> Every moment of your life is beautiful. Your each movement, emotion is nothing <br /> but a beautiful picture and I just want to hold on those moments with my gear <br /> and make it perfect with the touch of my editing.</p>

                </div>
            </div>
        </div>
    );
};

export default About;