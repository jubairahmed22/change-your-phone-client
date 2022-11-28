import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PrivateRoute from '../../Routes/PrivateRoute/PrivateRoute';
import BuyModal from '../Cetagories/BuyModal/BuyModal';
import DetailsCard from './DetailsCard';


const CetagoriesDeatails = () => {

    const details = useLoaderData();
    const [treatement, setTreatment] = useState(null)
     
    return (
        <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>


            {
                details.map(allDetails => <DetailsCard
                    key={details.id}
                    allDetails={allDetails}
                    setTreatment={setTreatment}
                ></DetailsCard>)
            }
            {
                treatement &&
                <PrivateRoute>
                    <BuyModal
                        key={treatement.id}
                        treatement={treatement}
                        setTreatment={setTreatment}
                    ></BuyModal>
                </PrivateRoute>
            }
        </div>
    );
};

export default CetagoriesDeatails;