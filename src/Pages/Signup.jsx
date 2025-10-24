import React, { use, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router';



const Signup = () => {
    const { createUser, setUser, updateUser, signInWithGoogle } = use(AuthContext);
    const [error, setError] = useState('')
    const [nameError, setNameError] = useState('');

    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate();

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

        // console.log(name, photo, email, password);

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

        if (!passwordPattern.test(password)) {
            setError(
                'Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one special character.'
            );
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                toast.success("Sign up successful")
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        navigate('/')
                    })
                    .catch((error) => {
                        toast.error(error);
                        setUser(user)

                    });


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

    const handleGogoleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                // console.log(result);
                toast.success('Sigin success')
                navigate(location?.state || '/')

            })
            .catch(error => {
                toast.error(error);

            })
    }

    return (
        <div className='w-auto lg:w-[1320px] mx-auto space-x-3 lg:space-x-0'>
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

export default Signup;