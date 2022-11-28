import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loader from '../../../Loader/Loader';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { title, price } = booking;
    if (navigation.state === "loading") {
        return <Loader></Loader>
    }
    return (
        <div>
            <h3 className="text-3xl  mt-10 m-5">Payment for {title}</h3>
            <p className="text-xl mt-10 m-5">Please pay <strong>${price}</strong> to buy this {title}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;