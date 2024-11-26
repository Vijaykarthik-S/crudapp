import React , {useCallback, useContext}from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Components/AuthContext";

export default function ProtectedRoute({condition}){
    const {isLoggedIn} = useContext(AuthContext);
    const isAllowed = isLoggedIn && (condition ? condition() : true );
    return isAllowed? <Outlet/> : <Navigate to="/login"/>;
}
