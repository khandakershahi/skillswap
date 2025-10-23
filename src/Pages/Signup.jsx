import React, { use, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';



const Signup = () => {
    const { createUser } = use(AuthContext);
    const [error, setError] = useState('')
    const [nameError, setNameError] = useState('');

     const [showPassword, setShowPassword] = useState(false)

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        if (name.length < 5) {
            setNameError('Name should be more than 5 charecter');
            return;
        } else {
            setNameError('');
        }
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Account create successful');

            })
            .catch(error => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
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
                    <h1 className="text-5xl font-bold pt-3.5 pl-5">Signup now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">
                            {/* name */}
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" required />
                            {nameError && <p className='text-error text-xs'>{nameError}</p>}
                            {/* Photo URL */}
                            <label className="label">Photo</label>
                            <input type="text" name='photo' className="input" placeholder="Photo URL" required />
                            {/* email */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required />
                            {/* password  */}
                            <label className="label">Password</label>
                            <div className='relative'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="input" placeholder="Password" name='password' required />
                                <button
                                    onClick={handleTogglePasswordShow}
                                    className="btn btn-ghost btn-xs absolute right-5 top-2 z-10">
                                    {

                                        showPassword ? <FaEyeSlash /> : <FaEye />
                                    }
                                </button>
                            </div>
                            <div><a className="link link-hover font-semibold">Alread have account? <span className='text-accent'>Sign-in</span></a></div>

                            {error && <p className='text-error text-xs'>{error}</p>}

                            <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Signup;