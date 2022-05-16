import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const RequirAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adLoading] = useAdmin(user);
    const location = useLocation();

    if(loading || adLoading){
        return <div className="flex items-center justify-center ">
                    <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
               </div>
    };

    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    };

    return children;
};

export default RequirAdmin;