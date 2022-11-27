import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BuyModal = ({ treatement, setTreatment }) => {
    const { title } = treatement;
    const { user } = useContext(AuthContext)


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const review = form.review.value;


        const booking = {
            title: title,
            name: name,
            email: email,
            phone: phone,
            address: address,
            review: review
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Buy confirmed')
                }
            })


    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-primary btn-sm btn-circle absolute right-2 top-2 ">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-8'>

                        <input name='title' type="title" defaultValue={title} disabled className="input w-full input-bordered" />
                        <input name='phone' type="phone" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name='address' type="address" placeholder="Locations" className="input w-full input-bordered" />
                        <input name='review' type="review" placeholder="Review" className="input w-full input-bordered" />
                        <br />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="email" className="input w-full input-bordered" />
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Full Name" className="input w-full input-bordered" />
                        <input className='w-full  btn btn-primary' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BuyModal;