import React, { use, useRef, useState, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router';

const ForgotPassword = () => {
    const { forgetPassword } = use(AuthContext);
    const location = useLocation();
    const [email, setEmail] = useState(location.state.email);
    console.log(location.state.email);


    useEffect(() => {
        // Pre-fill email if passed from Signin page
        if (location.state?.email) {
            console.log(location.state.email);

            setEmail(location.state.email);
        }
    }, [location.state]);

    const handleForgotPassword = (e) => {
        e.preventDefault();

        if (!email) {
            toast.error('Please enter your email');
            return;
        }

        forgetPassword(email)
            .then(() => {
                toast.success('Check your Gmail inbox to reset your password!');
                // Optional: redirect user to Gmail
                window.location.href = 'https://mail.google.com/';
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className='w-[1320px] mx-auto'>
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-4xl font-bold pt-3.5 pl-5">Forgot Password</h1>
                    <form onSubmit={handleForgotPassword} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="input"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type="submit" className="btn btn-neutral mt-4">Send Email</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
