import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
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

    useTitle('Review')
    return (
        <div>
            <h1>Your reviews</h1>
            <div className="overflow-x-auto w-full mx-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Events</th>
                            <th>Review</th>
                            <th>Favorite Color</th>
                            <th></th>
                            <th>
                                <label>

                                </label>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myReview.map(review => <MyReviewRow
                            key={review._id}
                            review={review}
                            ></MyReviewRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;