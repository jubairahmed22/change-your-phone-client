import React from 'react';
import service from '../../../images/service.jpg';

const Items = () => {
    return (
        <div>

            <div className='text-center mt-20'>
                <h3 className='text-xl font-bold uppercase'>Our Servicing Center</h3>
            </div>
            <div className="flex flex-col w-full lg:flex-row mt-10">
                <div className="grid flex-grow h-60 card bg-base-300 rounded-box place-items-center">
                    <div className='text-left p-6'>
                        <h1>Address: Shop-220, Joynal Complex, Joynal Market, Uttara, Dhaka 1230</h1>
                        <br />
                        <h1>Hours: Closed ⋅ Opens 9:30AM</h1>
                        <br />
                        <h1>Phone: 017****</h1>
                    </div>


                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className="grid flex-grow h-60  card bg-base-300 rounded-box place-items-center">
                    <div className='text-left p-6'>
                        <h1>Address: Polwel Carnation, Shop No- 21, Level-7 Shopping Center, Dhaka 1230</h1>
                        <br />
                        <h1>Hours: Closed ⋅ Opens 10:30AM</h1>
                        <br />
                        <h1>Phone: 0170***</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items; <h2>This is Items</h2>