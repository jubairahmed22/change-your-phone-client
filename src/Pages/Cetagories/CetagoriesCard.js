import React from 'react';
import { Link } from 'react-router-dom';

const CetagoriesCard = ({ cetagories }) => {
    const { service_id, img, brand, title } = cetagories
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <Link to={`/service/${brand}`}>Click here</Link>
                </div>
            </div>
        </div>
    );
};

export default CetagoriesCard;