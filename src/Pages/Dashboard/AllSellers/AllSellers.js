import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loader from '../../Loader/Loader';
import SellersModal from '../../Shared/SellersModal/SellersModal';

const AllSellers = () => {


    const [deletingSellers, setDeletingSelllers] = useState(null);

    const closeModal = () => {
        setDeletingSelllers(null)
    }



    const { data: cetagory = [], isLoading, refetch } = useQuery({
        queryKey: ['cetagory'],
        queryFn: async () => {
            const res = await fetch('https://change-your-phone-server.vercel.app/allsellers');
            const data = await res.json();
            return data
        }



    })
    const handleDeleteSeller = doctor => {
        fetch(`https://change-your-phone-server.vercel.app/allsellers/${doctor._id}`, {
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

            <h3 className='text-3xl mb-5'>All Sellers</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>image</th>
                            <th>Emai</th>

                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cetagory.map((allusers, i) => <tr
                                key={allusers._id}
                            >
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 mask mask-squircle">
                                            <img src={allusers.img} alt="" />
                                        </div>
                                    </div>
                                </td>

                                <td>{allusers.email}</td>
                                <td>
                                    <label
                                        onClick={() => setDeletingSelllers(allusers)}
                                        htmlFor="sellers-modal" className="btn btn-primary">Delete
                                    </label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingSellers && <SellersModal
                    title={`Are you sure you want to delete`}
                    message={`If you delete ${deletingSellers.name}. It can't be get the data back`}
                    closeModal={closeModal}
                    successAction={handleDeleteSeller}
                    modalData={deletingSellers}
                    successButtonName='Delete'
                ></SellersModal>
            }
        </div>
    );
};

export default AllSellers; 