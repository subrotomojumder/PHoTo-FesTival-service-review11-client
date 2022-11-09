import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
    const { serviceName, servicePhoto, description, charge, _id } = service;
    return (
        <div>
            <div className="card card-compact bg-slate-100 shadow-lg my-5 lg:my-0 border">
                <figure><img src={servicePhoto} alt="" className='lg:h-72 w-fll' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl text-gray-600"><span className='text-lg'>Work: </span>{serviceName}</h2>
                    <p><span className='text-primary'>Description:</span> {description.length > 100 ? description.slice(0, 100) + '....' : description}</p>
                    <div className="card-actions justify-between mt-4">
                        <div>
                            <p>Contact: <span className='font-semibold'>hanif@12gmail.com</span></p>
                            <h3 className='text-xl'>My Demand: <span className='text-warning'>{charge}tk</span></h3>
                        </div>
                        <Link to={`/services/${_id}`}><button className="btn btn-outline btn-primary mt-4">See Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;