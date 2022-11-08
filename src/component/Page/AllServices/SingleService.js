import React from 'react';

const SingleService = ({ service }) => {
    const { serviceName, servicePhoto, description, charge, _id, } = service;
    return (
        <div>
            <div className="card card-compact bg-slate-100 shadow-xl">
                <figure><img src={servicePhoto} alt="" className='h-72' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{serviceName}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;