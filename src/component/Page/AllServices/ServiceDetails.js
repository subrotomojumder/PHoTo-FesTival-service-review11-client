import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const ServiceDetails = () => {
    const service = useLoaderData();
    console.log(service)
    const { serviceName, servicePhoto, description, charge, ratings, _id } = service;
    return (
        <div>
            <div className='lg:grid grid-cols-2 my-8'>
                <div>
                    <div className="card card-compact bg-slate-100 shadow-lg my-5 lg:my-0 border">
                        <img src={servicePhoto} alt="" className='w-fll' />
                        <div className="card-body">
                            <h2 className="card-title text-3xl text-gray-600"><span className='text-lg'>Events: </span>{serviceName}</h2>
                            <div className="card-actions justify-between items-end mt-3 mb-2">
                                <div>
                                    <h3 className='text-xl mb-1'>My Demand: <span className='text-warning'>{charge}tk</span></h3>
                                    <p>Contact: <span className='font-semibold'>hanif@12gmail.com</span></p>
                                </div>
                                <div className='flex items-center mr-4'> 
                                    Ratings: 
                                    {
                                        [...Array(+ratings).keys()].map(ret => <FaStar className='text-yellow-300 ml-1' />)
                                    }
                                </div>
                            </div>
                            <h3 className='text-lg'>Special Photography with <span className='text-green-700 text-semibold'>PHoTo FesTival</span></h3>
                            <p><span className='text-primary'>Description:</span> {description}</p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h1 className='text-center text-2xl font-semibold text-primary'>Service Review</h1>
                    <hr className='mx-4 lg:mx-14' />
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;