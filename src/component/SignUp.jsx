import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser } = useContext(AuthContext)

    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const imgUrl = form.imgUrl.value
        const email = form.email.value
        const password = form.password.value
        const user = { name, imgUrl, email, password }
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                axios.post('http://localhost:5000/users', user)
                    .then(data => {
                        if (data.data.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'Registration successful',
                                icon: 'success',
                                confirmButtonText: 'Ok'
                            });
                            e.target.reset();
                        }
                    })
            })
            .catch(error => {
                console.log('error', error.message)
            })

    }
    return (
        <div>
            <div className="card bg-base-100 w-full shadow-2xl mt-[70px] pt-[50px] bg-slate-50">
                <h2 className='text-5xl font-semibold text-gray-700 text-center mt-5'>Registration</h2>
                <form onSubmit={handleSignUp} className="card-body text-center space-y-10">

                    <div className='flex flex-col lg:flex-row gap-5 mt-5'>
                        <div className="form-control flex-1">
                            <label className="label mr-3">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name='name' placeholder="Write your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label mr-3">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name='imgUrl' placeholder="Image URL" className="input input-bordered" required />
                        </div>
                    </div>
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
                        <p className="label-text-alt">Already have an account? <Link to={'/login'} className='text-orange-500 hover:text-orange-700'>Log In </Link></p>
                    </label>
                    <div className="form-control mt-6 w-1/4 mx-auto pb-10">
                        <button className="btn w-full md:text-lg bg-orange-300 hover:bg-orange-400 text-gray-700">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;