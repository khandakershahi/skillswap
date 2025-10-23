import React, { use, useRef, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';

const Signin = () => {

    const { logIn, signInWithGoogle } = use(AuthContext);

    const locaiton = useLocation();

    const navigate = useNavigate();

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
                navigate(`${locaiton.state ? locaiton.state : '/'}`)

            })
            .catch(error => {
                toast.error(error);

            })

    }




    const handleTogglePasswordShow = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword)
    }

    const handleGogoleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                // console.log(result);
                toast.success('Login successful');
                navigate(`${locaiton.state ? locaiton.state : '/'}`)

            })
            .catch(error => {
                toast.error(error);

            })
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
                                <Link
                                    to="/auth/forgotpassword"
                                    state={{ email: emailRef.current?.value || '' }}
                                    className="link link-hover font-semibold"
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                            <button type='submit' className="btn btn-neutral mt-4">Login</button>
                            <div><a className="link link-hover font-semibold">Don't have account? <span className='text-accent'>Sign-up</span></a></div>
                        </fieldset>
                    </form>
                    {/* sign in with google  */}
                    {/* Google */}
                    <button onClick={handleGogoleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Signin;