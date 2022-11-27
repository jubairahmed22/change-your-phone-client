import React from 'react';
import Cetagories from '../../Cetagories/Cetagories';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Cetagories></Cetagories>
            <Items></Items>


        </div>
    );
};

export default Home;