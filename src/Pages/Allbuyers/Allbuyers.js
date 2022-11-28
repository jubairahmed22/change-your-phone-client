import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import AdminModal from '../Shared/AdminModal/AdminModal';

const Allbuyers = () => {
    const [deletingUser, setDeletingUser] = useState(null);

    const closeModal = () => {
        setDeletingUser(null);
    }


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://change-your-phone-server.vercel.app/users')
            const data = await res.json();
            return data;
        }
    });
    const handleDeleteUser = doctor => {
        fetch(`https://change-your-phone-server.vercel.app/users/${doctor._id}`, {
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

    const handleMakeAdmin = id => {
        fetch(`https://change-your-phone-server.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('This user is make Admin successfully')
                    refetch();
                }
            })
    }
    return (
        <div>
            <h3 className='text-3xl mb-5'>My Buyers</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((allusers, i) => <tr
                                key={allusers._id}
                            >
                                <th>{i + 1}</th>
                                <td>{allusers.name}</td>
                                <td>{allusers.email}</td>
                                <td>{allusers?.role !== 'admin' && <button onClick={() => handleMakeAdmin(allusers._id)} className="btn btn-active btn-primary">Admin</button>}</td>
                                <td>  <label

                                    onClick={() => setDeletingUser(allusers)}
                                    htmlFor="confirmation-modal" className="btn btn-info">Delete</label></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingUser && <AdminModal
                    title={`Are you sure you want to delete`}
                    message={`If you delete ${deletingUser.name}. you will lost this user`}
                    successAction={handleDeleteUser}
                    successButtonName="Delete"
                    modalData={deletingUser}
                    closeModal={closeModal}
                ></AdminModal>
            }
        </div>
    );
};

export default Allbuyers;