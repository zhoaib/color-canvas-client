import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyCart = () => {
    const { name, picture, details, price, } = useLoaderData();
    return (
        <div>
            <h2 className='text-3xl text-center py-10'>You have added the {name}</h2>
            <div className="card w-96 bg-base-200 shadow-xl my-10 mx-auto">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price} Taka BDT</p>
                    <p>{details}</p>

                </div>
            </div>
        </div>
    );
};

export default MyCart;