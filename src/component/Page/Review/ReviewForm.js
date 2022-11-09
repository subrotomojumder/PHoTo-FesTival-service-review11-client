import React from 'react';
import { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { AuthContext } from '../../../context/AuthProvider';

const ReviewForm = ({service}) => {
    const { user } = useContext(AuthContext);

    const handleAddReview = e => {
        e.preventDefault();

        // create review
        const review = {
            reviewText: e.target.reviewText.value, 
            rating: e.target.rating.value,
            reviewers: user.displayName,
            reviewerEmail: user.email,
            reviewerPhoto: user.photoURL,
            serviceName: service.serviceName,
            serviceImg: service.servicePhoto,
            serviceId: service._id
        }

        console.log(review)

    }
    return (
        <div className='mx-6 border-2 p-4 bg-orange-200'>
            <form onSubmit={handleAddReview} >
                <div className='flex'>
                    <div className="form-control w-full mr-3">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Add your comments</span>
                        </label>
                        <textarea name='reviewText' type="text" placeholder="type here your review...." className="p-3 border-2 border-gray-400" />
                    </div>
                    <div className="form-control w-32">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Ratings <FaStar className='text-orange-400 inline'/></span>
                        </label>
                            <select name="rating" className=''>
                                <option value="2">2 star</option>
                                <option value="3">3 star</option>
                                <option value="4">4 star</option>
                                <option value="5">5 star</option>
                            </select>
                    </div>
                </div>
                <div className='text-center mt-4'>
                    <h4 className={`${user?.email && 'hidden'} text-xl mb-2 text-gray-700`}>Please login and add a review</h4>
                    <button className='btn btn-warning font-semibold' disabled={!user?.email}>Add Review</button>
                </div>
            </form>
        </div>
    );
};

export default ReviewForm;