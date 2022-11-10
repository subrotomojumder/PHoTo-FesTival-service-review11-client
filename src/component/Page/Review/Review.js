import React from 'react';
import { FaStar } from 'react-icons/fa';

const Review = ({ review }) => {
    const { date, reviewText, rating, reviewers, reviewerPhoto, reviewerEmail } = review;
    return (
        <div className="p-5 rounded shadow-sm">
            <div className='flex'>
                <img className='w-12 h-12 rounded-full' src={reviewerPhoto} alt="" />
                <div className='ml-2'>
                    <span className='mt-4 space'>{reviewers}</span>
                    <br />
                    <small>{reviewerEmail}</small>
                </div>
            </div>
            <h6 className="mt-3 mb-1 font-semibold leading-5">Review : {reviewText}</h6>
            <p className="mb-2 text-sm text-gray-900">
                Ratings :
                {
                    [...Array(+rating).keys()].map(r => <FaStar key={r} className='inline text-warning ml-2 mb-1' />)
                }
            </p>
            <p className='font-light'>Date: {date}</p>
        </div>
    );
};

export default Review;