import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { AdminLayout } from "../../layout/AdminLayout";

const ProtectedRoute: React.FC = () => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" />;
    }
    return (
        <>
            <AdminLayout>
                <Outlet />
            </AdminLayout>
        </>
    );
};

export default ProtectedRoute;
