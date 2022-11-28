import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loader from '../../Loader/Loader';
import BuyerModal from '../../Shared/BuyerModal/BuyerModal';

const AllBuyers = () => {

    const [deletingBuyer, setDeletingBuyer] = useState(null);

    const closeModal = () => {
        setDeletingBuyer(null)
    }

    const { data: cetagory = [], isLoading, refetch } = useQuery({
        queryKey: ['cetagory'],
        queryFn: async () => {
            const res = await fetch('https://change-your-phone-server.vercel.app/allbuyers');
            const data = await res.json();
            return data
        }
    })
    const handleDeleteBuyers = doctor => {
        console.log(doctor);
        fetch(`https://change-your-phone-server.vercel.app/allbuy/${doctor._id}`, {
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
            <div>

                <h3 className='text-3xl mb-5'>All Sellers</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>

                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                cetagory.map((allusers, i) => <tr
                                    key={allusers._id}
                                >
                                    <th>{i + 1}</th>
                                    <td>{allusers.name}</td>
                                    <td>{allusers.email}</td>

                                    <label
                                        onClick={() => setDeletingBuyer(allusers)}
                                        htmlFor="buyer-modal" className="btn btn-primary">Delete</label>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            {
                deletingBuyer && <BuyerModal
                    title={`Are you sure you want to delete?`}
                    message={`if you delete ${deletingBuyer.name} it cant be undone`}
                    successAction={handleDeleteBuyers}
                    modalData={deletingBuyer}
                    successButtonName="Delete"
                    closeModal={closeModal}
                ></BuyerModal>
            }
        </div >
    );
};

export default AllBuyers; 