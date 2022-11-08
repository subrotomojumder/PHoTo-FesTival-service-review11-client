import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleService from '../Page/AllServices/SingleService';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services?limit=3')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-10'>
            <h2 className='text-3xl font-semibold text-center font-serif'>Some of my service</h2>
            <div className='lg:grid grid-cols-3 gap-4'>
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }
            </div>
            <button className='btn btn-outline btn-warning'>see all...</button>
        </div>
    );
};

export default Services;