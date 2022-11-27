import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';



const Add = () => {
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;


        const email = user?.email || 'unregistered';
        const title = form.title.value;
        const description = form.message.value;
        const img = form.imageURL.value;

        const price = form.price.value;

        const order = {
            email,
            title,
            price,
            description,
            img
        }
        console.log(order);
    }
    return (
        <div>
            <form onSubmit={handlePlaceOrder} >
                <textarea name="title" className="textarea textarea-bordered w-2/3"
                    placeholder="title" required>
                </textarea>
                <select className="select">

                    <option name="message">Iphone</option>
                    <option name="message">Samsung</option>
                    <option name="message">One Plus</option>
                </select>

                <div className='mt-5'>
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-1/2  input-bordered" readOnly />
                </div>
                <div>
                    <input className='input input-ghost w-1/2 mt-5 input-bordered' type="url" name="imageURL" placeholder='image url' id="" />
                </div>

                <textarea name="price" className="input input-ghost w-2/4 mt-5 input-bordered pb-3"
                    placeholder="price" required>

                </textarea>
                <div>
                    <input className='btn btn-info' type="submit" value="Add service" />
                </div>

            </form>
        </div>
    );
};

export default Add;


{/* <div >
<textarea name="title" className="textarea textarea-bordered h-18 w-2/3"
    placeholder="title" required>

</textarea>

<div className='grid grid-cols-1 lg:grid-cols-1 gap-4 '>
    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-1/2  input-bordered" readOnly />
</div>
<div>
    <input type="url" name="imageURL" placeholder='image url' id="" />
</div>
<textarea name="price" className="textarea"
    placeholder="price" required>

</textarea>

<textarea name="message" className="textarea textarea-bordered h-18 w-1/2" placeholder="description" required>

</textarea>

<div>
    <input className='btn btn-info' type="submit" value="Add service" />
</div>
</div> */}