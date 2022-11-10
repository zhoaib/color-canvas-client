import React from 'react';
import drone from '../../../../assets/drone.PNG'

const Business = () => {
    return (
        <div className="hero  bg-base-200 mb-5 rounded-lg my-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={drone} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Drone Photography</h1>
                    <p className="py-6">I can also give you the best drone service in town. You can take the drone for photography or cinematography</p>

                </div>
            </div>
        </div>
    );
};

export default Business;