import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Reviews = () => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    return (
        <div>

        </div>
    );
};

export default Reviews;