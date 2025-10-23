import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    // console.log(user);

    const location = useLocation();

    // console.log(location);


    if (loading) {
        return <Loading></Loading>
    }

    if (user && user?.email) {

        return children;
    }

    return <Navigate state={location.pathname} to='/auth/signin'></Navigate>
    // return <Navigate to="/auth/signin" state={{ from: location }} replace />;

    // if-> user is availble return children
    //
    // navigate --> login
};

export default PrivateRoute;