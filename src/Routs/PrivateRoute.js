import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    // console.log(location)
    if (loading) {
        return <div className='flex justify-center'><progress className="progress w-56 ml-40 lg:ml-96"></progress></div>
    }

    if(user && user.uid){
        return children;
    }

    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivateRoute;