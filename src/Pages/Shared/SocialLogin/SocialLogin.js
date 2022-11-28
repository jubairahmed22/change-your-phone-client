import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const [createUserEmail, setCreateUserEmail] = useState('');
    const [token] = useToken(createUserEmail);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    if (token) {
        navigate(from, { replace: true })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                setCreateUserEmail(user?.email);
                if (user) {
                    const userInfo = {
                        name: user?.displayName,
                        email: user?.email,
                        role: 'Buyer'
                    };
                    fetch('https://change-your-phone-server.vercel.app/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                // setCreateUserEmail(user?.email);
                                toast.success('Account Create successfull with save user')
                            } else {
                                // setCreateUserEmail(user?.email);
                                toast.error(data.message)
                                navigate(from, { replace: true })
                            }
                        })
                        .catch(err => {
                            console.error(err.message);
                        })

                }
                //   authJwt(user)
            })
            .then(err => console.error(err))
    }
    return (
        <div className='text-center mt-5'>
            <p><small>Social Login</small></p>
            <p><small>Only Google is active</small></p>
            <hr />
            <div className='mt-5'>
                <button onClick={handleGoogleSignIn} className="btn btn-ghost text-xl">
                    GOOGLE
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;