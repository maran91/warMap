import { Header } from "./header/Header";
import { NavBar } from "./navbar/NavBar";
import { Footer } from "./footer/Footer";
import React from "react";

interface AdminLayoutProps {
    children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    return (
        <div className="grid grid-cols-10 grid-rows-10 h-screen w-screen ">
            <Header className="col-span-10 row-span-1 bg-gray-800" />
            <NavBar className="col-span-2 row-span-8 bg-gray-800" />
            <div className="col-span-8 row-span-8">{children}</div>
            <Footer className="col-span-10 row-span-2 bg-gray-800 overflow-y-auto" />
        </div>
    );
};
