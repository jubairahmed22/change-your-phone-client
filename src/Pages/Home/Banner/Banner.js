import React from 'react';
import { Link } from 'react-router-dom';
import bannerimg from '../../../images/bannerImgOne.jpg'

const Banner = () => {
    return (
        <div className="hero rounded-lg bg-info  mt-10">
            <div className="hero-content flex-col lg:flex-row">
                <img src={bannerimg} className="rounded-lg w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Change Your Phone</h1>
                    <p className="py-6">Android phones vary widely in both price and user experience, <br /> from just a couple hundred dollars to well over $1,000, <br /> and from unbelievably frustrating to unbelievably impressive.</p>
                    <Link to="/signup" className="btn btn-primary">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;