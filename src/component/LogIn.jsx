import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const LogIn = () => {

    const { loginUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        // console.log(email, password)
        loginUser(email, password)
            .then(result => {
                if (result) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Log In successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    }).then(() => {
                        const lastSignInTime = result?.user?.metadata?.lastSignInTime
                        const loginInfo = { email, lastSignInTime }
                        fetch(`http://localhost:5000/users`, {
                            method: "PATCH",
                            headers: {  // <-- Corrected here
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(loginInfo)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log('Sign in data updated', data)
                            })
                        navigate('/');
                    });
                    e.target.reset();
                }
            })
            .catch(error => {
                console.log('Error', error.message)
            })
    }

    return (
        <div>
            <div className="card bg-base-100 w-full shadow-2xl mt-[70px] pt-[50px] bg-slate-50">
                <h2 className='text-5xl font-semibold text-gray-700 text-center mt-5'>Log In</h2>
                <form onSubmit={handleLogin} className="card-body text-center space-y-10">
                    <div className='flex flex-col lg:flex-row gap-5 mt-5'>
                        <div className="form-control flex-1">
                            <label className="label mr-3">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Write your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label mr-3">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                        </div>
                    </div>
                    <label className="label mx-auto">
                        <p className="label-text-alt">Don't have an account? <Link to={'/signup'} className='text-orange-500 hover:text-orange-700'>Sign Up </Link></p>
                    </label>
                    <div className="form-control mt-6 w-1/4 mx-auto pb-10">
                        <button className="btn w-full md:text-lg bg-orange-300 hover:bg-orange-400 text-gray-700">Log In</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;