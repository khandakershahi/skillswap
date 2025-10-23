import React, { use, useRef, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Signin = () => {

    const { logIn, forgetPassword } = use(AuthContext);

    const emailRef = useRef();

    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);


        logIn(email, password)
            .then(result => {
                const user = result.user;
                toast.success('Login successful');

            })
            .catch(error => {
                toast.error(error);

            })

    }

    const handleForgotPassword = () => {
        const email = emailRef.current.value;
        console.log('fotgot password', email);
        forgetPassword(email)
            .then(() => {
                toast.success('check your email');
            })
            .catch(error => {
              toast.error(error);

            })

    }


    const handleTogglePasswordShow = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword)
    }

    return (
        <div className='w-[1320px] mx-auto'>
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold pt-3.5 pl-5">Signin now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">
                            {/* email */}
                            <label className="label">Email</label>
                            <input
                                type="email"
                                name='email'
                                className="input"
                                placeholder="Email"
                                ref={emailRef} />
                            {/* password  */}
                            <label className="label">Password</label>
                            <div className='relative'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="input" placeholder="Password" name='password' />
                                <button
                                    onClick={handleTogglePasswordShow}
                                    className="btn btn-ghost btn-xs absolute right-5 top-2 z-10">
                                    {

                                        showPassword ? <FaEyeSlash /> : <FaEye />
                                    }
                                </button>
                            </div>
                            <div>
                                <a
                                    onClick={handleForgotPassword}
                                    className="link link-hover font-semibold">Forgot Password?</a>
                            </div>
                            <button type='submit' className="btn btn-neutral mt-4">Login</button>
                            <div><a className="link link-hover font-semibold">Don't have account? <span className='text-accent'>Sign-up</span></a></div>
                        </fieldset>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Signin;