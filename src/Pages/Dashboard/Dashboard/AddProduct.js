import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loader from '../../Loader/Loader';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);

    const navigate = useNavigate();

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://change-your-phone-server.vercel.app/chooseCategory');
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = data => {

        const image = data.img[0];
        console.log(image);
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const seller = {
                        email: data.email,
                        title: data.title,
                        price: data.price,

                        brand: data.brand,
                        img: imgData.data.url

                    }
                    console.log(seller);

                    fetch('https://change-your-phone-server.vercel.app/service', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(seller)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.title} is added successfully`);

                        })

                    fetch('https://change-your-phone-server.vercel.app/sellerscategory', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(seller)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                        })
                }
                //save info

                navigate('/')
            })
            .catch(error => console.error(error))


    }

    if (isLoading) {
        return <Loader></Loader>
    }

    return (

        <div className='w-96 p-7'>
            <h2>My Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>



                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Type this Email <span className='font-xl'>{user.email}</span></span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} placeholder={user.email} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                {/* <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span> </label>
                    <input type="email" {user.email}  {...register("user", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                </div> */}




                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Model Name</span> </label>
                    <input type="model name"  {...register("title", {
                        required: "Name is Required"
                    })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Price</span> </label>
                    <input type="price"  {...register("price", {
                        required: "Name is Required"
                    })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Category</span> </label>
                    <select
                        {...register('brand')}
                        className="select select-bordered w-full max-w-xs">

                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.brand}
                            >{specialty.brand}</option>)
                        }


                    </select>
                    <div className='mt-5'>
                        <h2>Upload Photo</h2>
                        <input type="file" {...register("img", {
                            required: "file is Required"
                        })} className="file-input file-input-bordered file-input-primary mt-5 w-full max-w-xs" />
                        {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                    </div>

                    {/* <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Upload a Photo</span> </label>
                        <input type="file"   {...register("img", {
                            required: "Name is Required"
                        })} placeholder="Photo is required" className=" w-full max-w-xs" />
                        {errors.img && <p className='text-red-500'>{errors.img.message}</p>}

                    </div> */}

                </div>


                <input className='btn btn-primary w-full mt-5' value='Add Product' type="submit" />

            </form>
        </div>
    );
};

export default AddProduct;