import React, { useContext, useState } from 'react';
import { FaGooglePlusG } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../api/AuthToken';
import { AuthContext } from '../../context/AuthProvider';
import { useTitle } from '../../Hooks/UseTitle';
import loginImage from '../../assets/login.png';

const Register = () => {
    const [inputInfo, setInputInfo] = useState({});
    const [error, setError] = useState('');
    const { createUser, updateUser, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    useTitle('Register')

    const handleSubmit = e => {
        e.preventDefault();
        setError('');
        createUser(inputInfo.email, inputInfo.password)
            .then(res => {
                const email = res.user.email;
                navigate('/');
                setAuthToken(email);
                updateUser(inputInfo.name, inputInfo.photoUrl)
                    .then(() => { })
                    .catch(err => setError(err.message));
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
            .then(results => {
                const user = results.user.email;
                setAuthToken(user);
            })
            .then(err => setError(err.message))
    }
    return (
        <div className='min-h-screen flex flex-col md:flex-row justify-center items-center my-5'>
            <img src={loginImage} className="w-1/3 md:w-1/3" alt="" />
            <div className="card w-full md:w-1/2 mx-8 md:mx-auto bg-base-100 shadow-lg">
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
                            <span className='label-text-alt'>Already have an account? <Link to='/login' className="link link-hover">Login</Link></span>
                        </label>
                    </div>
                    <div className="form-control mt-3 w-1/2 mx-auto">
                        <button className="btn btn-primary">Sign up</button>
                    </div>
                    <div className='text-center'>
                        <hr className='my-2' />
                        <p onClick={handleGoogleLogin}><FaGooglePlusG className='text-4xl hover:text-warning mx-auto mb-[-8px]'/> </p>
                        <small>Login by google</small>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;