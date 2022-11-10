import React from 'react';
import img from '../../../../assets/img.jpeg'

const OverAll = () => {
    return (
        <div className="hero  bg-base-200 mb-5 rounded-lg my-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold ">Over All</h1>
                    <p className="py-6">Premium Wedding Photography and Cinematography, Personal Event Photo Shoots, Fashion Photo shoots & Corporate Photo shoot.</p>

                </div>
            </div>
        </div>
    );
};

export default OverAll;