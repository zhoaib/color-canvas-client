import React, { useEffect, useState } from 'react';
import ServiceCard from '../Home/Services/ServiceCard';

const AllServices = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allservices')
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
        </div>
    );
};

export default AllServices;