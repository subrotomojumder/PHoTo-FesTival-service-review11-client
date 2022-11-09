import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const AllService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-20'>
            <h2 className='text-3xl text-primary font-semibold text-center font-serif'>Some of my service</h2>
            <div className='lg:grid grid-cols-3 gap-4 my-8'>
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default AllService;