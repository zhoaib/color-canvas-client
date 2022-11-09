import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceCardDetails = () => {
    const { name, picture, details, price, _id } = useLoaderData();
    return (
        <div className="card card-side bg-base-200 shadow-xl my-20">
            <figure><img className='rounded-lg' src={picture} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2>Price: {price} TK BDT</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">

                    <Link to={`/addservice/${_id}`}>
                        <button className="btn btn-primary">Add Service</button>
                    </Link>


                </div>
            </div>
        </div>
    );
};

export default ServiceCardDetails;