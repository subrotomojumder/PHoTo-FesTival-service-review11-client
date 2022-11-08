import React, { useContext, useState } from 'react';
import { FaGooglePlusG } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {
    const [inputInfo, setInputInfo] = useState({});
    const [error, setError] = useState('');
    const { createUser, updateUser, googleLogin } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        setError('');
        createUser(inputInfo.email, inputInfo.password)
            .then(res => {
                updateUser(inputInfo.name, inputInfo.photoUrl).then().catch(err=> setError(err.message));
            })
            .catch(err => {
                setError(err.message)
            })
    }
    const handleInputValue = e => {
        setInputInfo({ ...inputInfo, [e.target.name]: e.target.value })
    }
    const handleGoogleLogin = () => {
        googleLogin()
        .then(res => {
            
        })
        .then(err => setError(err.message))
    }
    return (
        <div className="card w-2/3 lg:w-1/2 mx-auto my-6 bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
                <h1 className='text-4xl font-semibold text-center'>Register</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input onChange={handleInputValue} name='name' type="text" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo url</span>
                    </label>
                    <input onChange={handleInputValue} name='photoUrl' type="url" placeholder="put your photo url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input onChange={handleInputValue} name='email' type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input onChange={handleInputValue} name='password' type="password" placeholder="password" className="input input-bordered" required />
                    {error && <small className='text-red-600 mt-1 ml-2'>{error}</small>}
                    <label className="label">
                        <span className='label-text-alt'>Already have an account?<Link to='/login' className="link link-hover"> Login</Link></span>
                    </label>
                </div>
                <div className="form-control mt-3 w-1/2 mx-auto">
                    <button className="btn btn-primary">Sign up</button>
                </div>
                <div className='text-center'>
                    <h3 className='underline font-semibold'>or</h3>
                    <p onClick={handleGoogleLogin}><FaGooglePlusG className='text-4xl hover:text-warning mx-auto mb-[-8px]' /> </p>
                    <small>google</small>
                </div>
            </form>
        </div>
    );
};

export default Register;