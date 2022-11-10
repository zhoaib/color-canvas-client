import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://color-canvas-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='bg-base-200 py-10 my-5 rounded-lg'>
            <div className='text-center mb-5'>
                <p className='text-2xl '>Services</p>
                <p className='text-4xl'>Packages You Can Choose</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ml-5'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center p-10'>
                <Link className="btn btn-primary " to='/allservices'>See All Services</Link>
            </div>
        </div>
    );
};

export default Services;