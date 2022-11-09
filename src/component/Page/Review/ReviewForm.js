import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';
import { AuthContext } from '../../../context/AuthProvider';

const ReviewForm = ({service, setRefresh}) => {
    const { user } = useContext(AuthContext);
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    const handleAddReview = e => {
        e.preventDefault();
        // create review
        const review = {
            date: date,
            reviewText: e.target.reviewText.value, 
            rating: e.target.rating.value,
            reviewers: user.displayName,
            reviewerEmail: user.email,
            reviewerPhoto: user.photoURL,
            serviceName: service.serviceName,
            serviceImg: service.servicePhoto,
            serviceId: service._id
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged) {
                e.target.reset();
                setRefresh(current => setRefresh(!current))
                toast.success('Added your important review');
            }
        })

    };
    return (
        <div className='border-2 bg-orange-200 sticky top-0'>
            <form onSubmit={handleAddReview} className='relative px-4 py-2'>
                <div className='flex'>
                    <div className="form-control w-full mr-3">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Add your comments</span>
                        </label>
                        <textarea name='reviewText' type="text" placeholder="type here your review...." className="p-2 h-12 border-2 border-gray-400" required/>
                    </div>
                    <div className="form-control w-32">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Ratings <FaStar className='text-orange-400 inline'/></span>
                        </label>
                            <select name="rating" className='h-8'>
                                <option value="5">5 star</option>
                                <option value="4">4 star</option>
                                <option value="3">3 star</option>
                                <option value="2">2 star</option>
                            </select>
                    </div>
                </div>
                <h3 className='absolute top-0 left-1/3 text-sm ml-8'>{time}</h3>
                <div className='text-center mt-4'>
                    <h4 className={`${user?.email && 'hidden'} text-xl mb-2 text-gray-700`}>Please login and add a review</h4>
                    <button className='btn btn-warning font-semibold' disabled={!user?.email}>Add Review</button>
                </div>
            </form>
        </div>
    );
};

export default ReviewForm;