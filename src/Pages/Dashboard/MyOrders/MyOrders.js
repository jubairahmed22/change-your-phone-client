import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loader from '../../Loader/Loader';
import MyOrdersModal from '../../Shared/MyOrdersModal/MyOrdersModal';

const MyOrders = () => {
    const [deletingOrder, setDeletingOrder] = useState(null);

    const closeModal = () => {
        setDeletingOrder(null);
    }


    const { user } = useContext(AuthContext);

    const url = `https://change-your-phone-server.vercel.app/bookings?email=${user?.email}`;

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
    })
    const handleDeleteOrder = doctor => {
        fetch(`https://change-your-phone-server.vercel.app/orders/${doctor._id}`, {
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
            <h3 className='text-3xl mt-5 mb-5'>My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Model</th>
                            <th>Locatio</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map((bookings, i) => <tr
                                key={bookings._id}
                            >
                                <td>{i + 1}</td>
                                <td>{bookings.name}</td>
                                <td>{bookings.title}</td>
                                <td>{bookings.address}</td>
                                <td>{bookings.price}</td>
                                <td>
                                    {
                                        bookings.price && !bookings.paid && <Link to={`/dashboard/payment/${bookings._id}`}><button className='btn btn-primary'>Payment</button></Link>
                                    }
                                    {
                                        bookings.price && bookings.paid && <span className='text-primary'>Paid</span>
                                    }
                                </td>
                                <td><label
                                    onClick={() => setDeletingOrder(bookings)}
                                    htmlFor="order-modal" className="btn btn-info">Delete</label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingOrder && <MyOrdersModal
                    title={`Are you sure you want to delete`}
                    message={`If you delete ${deletingOrder.name}. It cant be undone`}
                    successAction={handleDeleteOrder}
                    modalData={deletingOrder}
                    closeModal={closeModal}
                    successButtonName="Delete"
                ></MyOrdersModal>
            }
        </div>
    );
};

export default MyOrders;