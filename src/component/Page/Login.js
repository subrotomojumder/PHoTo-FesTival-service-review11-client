import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FaGooglePlusG } from "react-icons/fa";
import { useTitle } from '../../Hooks/UseTitle';
import { setAuthToken } from '../../api/AuthToken';
import loginImage from '../../assets/login.png';

const Login = () => {
    const [inputInfo, setInputInfo] = useState({});
    const [error, setError] = useState('');
    const { userLogin, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    useTitle('Login')

    const handleSubmit = e => {
        e.preventDefault();
        setError('');
        userLogin(inputInfo.email, inputInfo.password)
            .then(results => {
                const user = results.user.email;
                setAuthToken(user);
                navigate(from, { replace: true })
            })
            .catch(err => setError(err.message))
    }
    const handleInputValue = e => {
        setInputInfo({ ...inputInfo, [e.target.name]: e.target.value })
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(results => {
                const user = results.user.email;
                setAuthToken(user)
                navigate(from, { replace: true })
            })
            .then(err => setError(err.message))
    }
    return (
        <div className='min-h-screen flex flex-col md:flex-row justify-center items-center'>
            <img src={loginImage} className="w-1/3 md:w-1/3" alt="" />
            <div className="card w-full md:w-1/2 mx-8 md:mx-auto bg-base-100 shadow-lg">
                <form onSubmit={handleSubmit} className="card-body">
                    <h1 className='text-4xl font-semibold text-center'>Please Login</h1>
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
                            <span className='label-text-alt'>Create a new account? <Link to='/register' className="text-blue-400 link link-hover">Register</Link></span>
                        </label>
                    </div>
                    <div className="form-control mt-6 w-1/2 mx-auto">
                        <button type='submit' className="btn btn-primary">Login</button>
                    </div>
                    <div className='text-center'>
                        <hr className='my-4' />
                        <p onClick={handleGoogleLogin}><FaGooglePlusG className='text-4xl text-green-400 hover:text-warning mx-auto mb-[-8px]' /> </p>
                        <small>Login by google</small>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;