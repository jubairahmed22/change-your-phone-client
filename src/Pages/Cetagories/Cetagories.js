import React, { useEffect, useState } from 'react';

import CetagoriesCard from './CetagoriesCard';
import { useQuery } from '@tanstack/react-query';
import { async } from '@firebase/util';
import Loader from '../Loader/Loader';

const Cetagories = () => {


    const { data: cetagory = [], isLoading } = useQuery({
        queryKey: ['cetagory'],
        queryFn: async () => {
            const res = await fetch('https://change-your-phone-server.vercel.app/cetagory');
            const data = await res.json();
            return data
        }


    })

    if (isLoading) {
        return <Loader></Loader>
    }


    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold uppercase'>Catagories</h3>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    cetagory.map(cetagories => <CetagoriesCard

                        key={cetagory._id}
                        cetagories={cetagories}
                    ></CetagoriesCard>)
                }
            </div>
        </div>
    );
};

export default Cetagories;