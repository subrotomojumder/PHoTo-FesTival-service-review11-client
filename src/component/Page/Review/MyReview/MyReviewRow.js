import React from 'react';
import { FaStar, FaTrash } from 'react-icons/fa';

const MyReviewRow = ({ review, handleDeleteReview, setReviewId }) => {
    const { reviewText, _id, reviewers, rating, serviceImg, serviceName, date } = review;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-16 h-12 rounded-md">
                            <img src={serviceImg} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="">{serviceName}</div>
                        <div className="text-sm opacity-50">{date}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className='font-semibold text-purple-600'>{reviewText}</span>
                <br />
                <span className="badge badge-ghost badge-sm">{reviewers}</span>
            </td>
            <td className='hidden lg:block'>{[...Array(+rating).keys()].map(r => <FaStar className='inline ml-1 text-yellow-500' key={r} />)}</td>
            <th>
                <label htmlFor="my-modal-3" onClick={()=>setReviewId(_id)} className="btn btn-ghost btn-xs">Edit</label>
            </th>
            <th>
                <label>
                    <button className='btn btn-ghost btn-xs btn-circle' onClick={() => handleDeleteReview(_id)}><FaTrash className='text-gray-600 text-lg hover:text-red-500'></FaTrash></button>
                </label>
            </th>
        </tr>
    );
};

export default MyReviewRow;