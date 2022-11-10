import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../context/AuthProvider';
import { useTitle } from '../../../../Hooks/UseTitle';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
    const [myReview, setMyReview] = useState([])
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReview(data))
    }, [user.email])

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
    }

    useTitle('Review')
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
                                myReview.map(review => <MyReviewRow
                                    key={review._id}
                                    review={review}
                                    handleDeleteReview={handleDeleteReview}
                                ></MyReviewRow>)
                            }
                        </tbody>
                    }
                </table>
                { myReview.length < 1 && <h1 className='text-center text-2xl mt-20'>No reviews added were!</h1>}
            </div>
        </div>
    );
};

export default MyReview;