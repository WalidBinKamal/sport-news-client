import React from 'react';

const LogIn = () => {


    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password)
        
    }

    return (
        <div>
            <div className="card bg-base-100 w-full shadow-2xl mt-[70px] pt-[50px] bg-slate-50">
                <h2 className='text-5xl font-semibold text-gray-700 text-center mt-5'>Log In</h2>
                <form onSubmit={handleLogin} className="card-body text-center space-y-10">
                    {/* headline and reporter */}
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
                    <div className="form-control mt-6 w-1/4 mx-auto ">
                        <button className="btn w-full md:text-lg bg-orange-300 hover:bg-orange-400 text-gray-700">Log In</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;