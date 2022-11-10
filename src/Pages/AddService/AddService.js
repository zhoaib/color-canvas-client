import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const AddService = () => {
    const { name, _id, price, picture } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const cname = form.cname.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: name,
            price,
            customer: cname,
            email,
            message,


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
                console.log(data)
                if (data.acknowledged) {
                    alert('Thank you for your review')
                    form.reset();
                }
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='bg-base-200 mb-10 rounded-lg'>
            <form onSubmit={handleReview}>
                <h2 className='text-2xl text-center py-5'>Please add a review about our {name} </h2>
                <div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto rounded-2xl">
                        <figure><img src={picture} alt="Shoes" /></figure>
                    </div>
                </div>
                <input name='cname' type="text" placeholder="Your Name" className="input input-bordered w-full my-3 " />
                <input name='email' type="text" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full my-3" readOnly />
                <textarea name='message' className="textarea textarea-bordered w-full my-3" placeholder="Your Review"></textarea>
                <input className="btn btn-primary m-3 mb-7 mx-8 " type="submit" value="Add Review" required />

            </form>
        </div>
    );
};

export default AddService;