import React, { FC } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./views/pages/authentication/LoginPage";
import ProtectedRoute from "./views/components/ProtectedRoute";
import SignupPage from "./views/pages/authentication/SignupPage";
import { HomePage } from "./views/pages/home/HomePage";
import { DiscoverPage } from "./views/pages/resources/DiscoverPage";
import { WarPage } from "./views/pages/map/WarPage";
import { RecruitmentPage } from "./views/pages/recruitment/RecruitmentPage";
import { CrewPage } from "./views/pages/crew/CrewPage";
import { ProfilePage } from "./views/pages/profile/ProfilePage";

const App: FC = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/" element={<LoginPage />} />
                <Route
                    path="/home"
                    element={
                        <ProtectedRoute>
                            <HomePage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/majandus/avasta"
                    element={
                        <ProtectedRoute>
                            <DiscoverPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/majandus/kamp"
                    element={
                        <ProtectedRoute>
                            <CrewPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/sojandus/varbamine"
                    element={
                        <ProtectedRoute>
                            <RecruitmentPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/sojandus/kaart"
                    element={
                        <ProtectedRoute>
                            <WarPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/seaded/profiil"
                    element={
                        <ProtectedRoute>
                            <ProfilePage />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </AuthProvider>
    );
};

export default App;
