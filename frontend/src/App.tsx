import React, { FC } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import LoginPage from "./views/pages/authentication/LoginPage";
import SignupPage from "./views/pages/authentication/SignupPage";
import { HomePage } from "./views/pages/home/HomePage";
import { DiscoverPage } from "./views/pages/resources/DiscoverPage";
import { WarPage } from "./views/pages/map/WarPage";
import { RecruitmentPage } from "./views/pages/recruitment/RecruitmentPage";
import { CrewPage } from "./views/pages/crew/CrewPage";
import { ProfilePage } from "./views/pages/profile/ProfilePage";
import { AppProviders } from "./context/AppProviders";
import ProtectedRoute from "./views/components/ProtectedRoute/ProtectedRoute";

const App: FC = () => {
    return (
        <AppProviders>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/" element={<LoginPage />} />
                <Route path="*" element={<LoginPage />} />

                <Route element={<ProtectedRoute />}>
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/majandus/avasta" element={<DiscoverPage />} />
                        <Route path="/majandus/kamp" element={<CrewPage />} />
                        <Route path="/sojandus/varbamine" element={<RecruitmentPage />} />
                        <Route path="/sojandus/kaart" element={<WarPage />} />
                        <Route path="/seaded/profiil" element={<ProfilePage />} />
                </Route>
            </Routes>
        </AppProviders>
    );
};

export default App;
