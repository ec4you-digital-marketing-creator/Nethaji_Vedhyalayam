import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
    const token = localStorage.getItem('token');
    const userType = localStorage.getItem('userType');

    // 1. Check if user is logged in
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // 2. Check if user has permission (if roles are specified)
    if (allowedRoles.length > 0 && !allowedRoles.includes(userType)) {
        // If user is a student trying to access staff pages, redirect to home
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
