import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="card w-2/3 lg:w-1/2 mx-auto bg-base-100">
            <div className="card-body">
                <h1 className='text-4xl font-semibold text-center'>Login</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <span className='label-text-alt'>Already have an account?<Link to='/register' className="link link-hover"> Register</Link></span>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;