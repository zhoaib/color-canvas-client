import React from 'react';

const ServiceCard = ({ service }) => {
    const { name, details, picture, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price} Taka BDT</p>
                <p>{details.slice(0, 70) + '...'}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">View details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;