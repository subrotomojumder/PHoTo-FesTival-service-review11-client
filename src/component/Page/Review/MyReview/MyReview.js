import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';
import { AuthContext } from '../../../../context/AuthProvider';
import { useTitle } from '../../../../Hooks/UseTitle';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
    const [myReview, setMyReview] = useState([]);
    const [reviewId, setReviewId] = useState('');
    const { user, logOut } = useContext(AuthContext);
    const date = new Date().toLocaleDateString();

    useTitle('Review')
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('review-token')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        return logOut()
                            .then()
                            .catch(e => console.error(e.message));
                    }
                    return res.json();
                })
                .then(data => setMyReview(data))
        }
    }, [user?.email])

    // review delete function
    const handleDeleteReview = (id) => {
        const agree = window.confirm('Are you sure want to delete !');
        if (agree) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success('Your review delete !')
                        const remaining = myReview.filter(review => review._id !== id);
                        setMyReview(remaining);
                    }
                })
        }
    };

    // review updateFunction
    const handleUpdateReview = e => {
        e.preventDefault();
        const form = e.target;
        const reviewText = form.reviewText.value;
        const rating = form.rating.value;
        const updateData = {
            reviewText,
            rating,
            date
        }
        fetch(`http://localhost:5000/reviews/${reviewId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    form.reset();
                    toast.success('Your review updated');
                    const remaining = myReview.filter(review => review._id !== reviewId);
                    const updated = myReview.find(review => review._id === reviewId);
                    updated.reviewText = reviewText;
                    updated.rating = rating;
                    updated.date = date;
                    setMyReview([updated, ...remaining])
                }
            })
    };
    return (
        <div>
            <h1 className='text-center text-2xl mt-2'>Your reviews</h1>
            <div className="overflow-x-auto w-full mx-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th><span className='ml-3'>Events Activity</span></th>
                            <th>Review</th>
                            <th className='hidden lg:block'>Ratings</th>
                            <th>Update</th>
                            <th> </th>
                        </tr>
                    </thead>
                    {myReview &&
                        <tbody>
                            {
                                myReview?.map(review => <MyReviewRow
                                    key={review._id}
                                    review={review}
                                    handleDeleteReview={handleDeleteReview}
                                    setReviewId={setReviewId}
                                ></MyReviewRow>)
                            }
                        </tbody>
                    }
                </table>
                {myReview?.length < 1 && <h1 className='text-center text-2xl mt-20'>No reviews added were!</h1>}
            </div>
            <>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2 text-xl">✕</label>
                        <form onSubmit={handleUpdateReview} className='relative px-4 py-2'>
                            <div className='flex'>
                                <div className="form-control w-full mr-3">
                                    <label className="label">
                                        <span className="label-text font-semibold text-lg">Your new review</span>
                                    </label>
                                    <textarea name='reviewText' type="text" placeholder="type here your review...." className="p-2 h-12 border-2 border-gray-400" required />
                                </div>
                                <div className="form-control w-32">
                                    <label className="label">
                                        <span className="label-text font-semibold text-lg">Ratings <FaStar className='text-orange-400 inline' /></span>
                                    </label>
                                    <select name="rating" className='h-8'>
                                        <option value="5">5 star</option>
                                        <option value="4">4 star</option>
                                        <option value="3">3 star</option>
                                        <option value="2">2 star</option>
                                    </select>
                                </div>
                            </div>
                            <div className='text-center mt-4'>
                                <button type='submit' className='btn btn-warning font-semibold'>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        </div>
    );
};

export default MyReview;