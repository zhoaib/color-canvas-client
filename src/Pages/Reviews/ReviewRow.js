import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review, handleDelete, handleMessageUpdate }) => {
    const { serviceName, price, message, customer, service, _id, status } = review;
    const [reviewService, setReviewService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data));
    }, [service])



    return (
        <tr >

            <td>
                <div className="flex items-center space-x-3 ">
                    <div className="avatar">
                        <div className="mask mask-squircle rounded-lg w-12 h-12">
                            {
                                reviewService?.picture &&
                                <img src={reviewService.picture} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">Package Name: {serviceName}</div>
                    </div>
                </div>
            </td>
            <td>
                "{message}"
            </td>
            <td> {price}</td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-primary mx-2 ">Delete Review</button>
                <button onClick={() => handleMessageUpdate(_id)} className="btn btn-primary ">{status ? status : 'Edit Review'}</button>
            </th>
        </tr>
    );
};

export default ReviewRow;