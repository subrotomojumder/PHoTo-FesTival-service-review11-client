import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import ReviewForm from '../Review/ReviewForm';
import Review from '../Review/Review';

const ServiceDetails = () => {
    const [allReview, setAllReview] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const service = useLoaderData();
    const { serviceName, servicePhoto, description, charge, ratings, _id } = service;
    // loaded all reviews
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setAllReview(data))
    }, [_id, refresh])
    return (
        <div className='lg:grid grid-cols-2 my-8 relative'>
            <div>
                <div className="card card-compact bg-slate-100 shadow-lg my-5 lg:my-0 border lg:sticky top-0">
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
                                    [...Array(+ratings).keys()].map(ret => <FaStar className='text-yellow-300 ml-1' key={ret} />)
                                }
                            </div>
                        </div>
                        <h3 className='text-lg'>Special Photography with <span className='text-green-700 text-semibold'>PHoTo FesTival</span></h3>
                        <p><span className='text-primary'>Description:</span> {description}</p>
                    </div>
                </div>
            </div>
            <div className='mx-6'>
                <ReviewForm service={service} setRefresh={setRefresh}></ReviewForm>
                <h1 className='text-center text-2xl font-semibold text-primary'>Service Review</h1>
                <div>
                    {
                        allReview.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;