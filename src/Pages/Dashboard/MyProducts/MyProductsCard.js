

const MyProductsCard = ({ bookings }) => {

    const { img, brand, price,
        title } = bookings
    return (
        <div className="card w-60  shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{brand}</h2>
                <h2 className="card-title">{title}</h2>
                <h2 className="card-title">{price}</h2>
                <label htmlFor="my-modal" className="btn btn-primary">Delete</label>

            </div>
        </div>
    );
};

export default MyProductsCard;