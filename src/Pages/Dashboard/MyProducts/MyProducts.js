import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loader from '../../Loader/Loader';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';


const MyProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);


    const closeModal = () => {
        setDeletingProduct(null);
    }

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/sellers?email=${user?.email}`;

    const { data: bookings = [], isLoading, refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });
    const handleDeleteDoctor = doctor => {
        fetch(`http://localhost:5000/sellers/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })

    }


    if (isLoading) {
        return <Loader></Loader>
    }
    return (


        <div>
            <h3 className='text-3xl mb-5'>My Products</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>brand</th>
                            <th>title</th>
                            <th>price</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map((bookings, i) => <tr
                                key={bookings._id}
                            >
                                <td>{i + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 mask mask-squircle">
                                            <img src={bookings.img} alt='' />
                                        </div>
                                    </div>
                                </td>

                                <td>{bookings.brand}</td>
                                <td>{bookings.title}</td>
                                <td>{bookings.price}</td>
                                <td><label
                                    onClick={() => setDeletingProduct(bookings)}
                                    htmlFor="my-modal" className="btn btn-primary">Delete</label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingProduct && <ConfirmationModal
                title={`Are you sure you want to delete`}
                message={`If you delete ${deletingProduct.name}. It can't be get the data back`}
                successAction={handleDeleteDoctor}
                successButtonName="Delete"
                modalData={deletingProduct}
                closeModal={closeModal}
            ></ConfirmationModal>}
        </div>

    );
};

export default MyProducts;