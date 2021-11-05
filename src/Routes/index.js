import React, { useContext } from "react";
import {authContext} from "../contexts/authContext";

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes = () => {
    const { signed, loading } = useContext(authContext);

    if (loading){
        return <h1>Loading...</h1>
    }
    return signed ? <AppRoutes /> : <AuthRoutes />
};

export default Routes;