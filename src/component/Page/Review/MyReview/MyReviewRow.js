import React from 'react';

const MyReviewRow = ({review}) => {
    const {reviewText, _id, reviewers, rating, serviceImg, serviceName, date} = review;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className=" w-12 h-12">
                            <img src={serviceImg} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>Purple</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
        </tr>
    );
};

export default MyReviewRow;