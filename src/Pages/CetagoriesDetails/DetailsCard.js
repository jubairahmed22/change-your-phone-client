import React from 'react';

const DetailsCard = ({ allDetails, setTreatment }) => {
    const { title, img, price, email } = allDetails
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <h2 className="card-title">{price} $</h2>
                <p>seller email {email}</p>
                <div className="card-actions">
                    <label htmlFor="booking-modal"
                        onClick={() => setTreatment(allDetails)}
                        className="btn 
                    btn-primary">Buy Now</label>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;