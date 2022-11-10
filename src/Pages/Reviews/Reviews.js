import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewRow from './ReviewRow';

const Reviews = () => {
    useTitle('My-Reviews')

    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://color-canvas-server.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => setReviews(data));
    }, [user?.email, logOut])

    const handleDelete = id => {
        const proceed = window.confirm('You want to remove this review?');
        if (proceed) {
            fetch(`https://color-canvas-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        alert('Delete Successfully');
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    const handleMessageUpdate = id => {
        fetch(`https://color-canvas-server.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Review Edited' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(review => review._id !== id);
                    const approving = reviews.find(review => review._id === id);
                    approving.status = "Review Edited"

                    const newReviews = [approving, ...remaining];
                    setReviews(newReviews);
                }
            })
    }

    return (
        <div>
            <h2 className='text-2xl text-center my-10'>You have {reviews.length} reviews</h2>
            <div className="overflow-x-auto w-full my-10 ">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Your Review</th>
                            <th>Package Price</th>
                            <th>Delete Review / Edit Review</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            reviews.map(review => <ReviewRow
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                                handleMessageUpdate={handleMessageUpdate}
                            ></ReviewRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reviews;