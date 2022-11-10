import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SingleService from '../Page/AllServices/SingleService';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://service-review-server-lake.vercel.app/services?limit=3')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-20'>
            <h2 className='text-3xl text-primary font-semibold text-center font-serif'>Some of my service</h2>
            <div className='lg:grid grid-cols-3 gap-8 my-8'>
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }
            </div>
            <div className='flex justify-center my-4'>
                <Link to='/all-service'><button className='btn btn-warning btn-outline w-32 mx-au'>see all...</button></Link>
                </div>
        </div>
    );
};

export default Services;