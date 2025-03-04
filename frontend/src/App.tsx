import React, { FC } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./views/pages/authentication/LoginPage";
import SignupPage from "./views/pages/authentication/SignupPage";
import { HomePage } from "./views/pages/home/HomePage";
import { DiscoverPage } from "./views/pages/resources/DiscoverPage";
import { Map } from "./views/pages/map/Map";
import { RecruitmentPage } from "./views/pages/recruitment/RecruitmentPage";
import { CrewPage } from "./views/pages/crew/CrewPage";
import { ProfilePage } from "./views/pages/profile/ProfilePage";
import { AppProviders } from "./context/AppProviders";
import ProtectedRoute from "./views/components/ProtectedRoute/ProtectedRoute";
import { OwnedProvinces } from "./views/pages/owned_provinces/OwnedProvinces";

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
                    <Route
                        path="/economy/discover"
                        element={<DiscoverPage />}
                    />
                    <Route path="/economy/crew" element={<CrewPage />} />
                    <Route
                        path="/warfare/recruitment"
                        element={<RecruitmentPage />}
                    />
                    <Route path="/warfare/map" element={<Map />} />
                    <Route
                        path="/warfare/provinces"
                        element={<OwnedProvinces />}
                    />
                    <Route path="/settings/profile" element={<ProfilePage />} />
                </Route>
            </Routes>
        </AppProviders>
    );
};

export default App;
