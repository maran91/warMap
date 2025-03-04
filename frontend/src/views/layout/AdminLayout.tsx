import { Header } from "./header/Header";
import { NavBar } from "./navbar/NavBar";
import React from "react";

interface AdminLayoutProps {
    children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    return (
        <div className="grid grid-cols-10 grid-rows-10 h-screen w-screen  bg-charcoal-black">
            <Header className="col-span-10 row-span-1 bg-charcoal-black"></Header>

            <NavBar className="col-span-1 row-span-10 bg-charcoal-black" />
            <div className="col-span-6 col-start-3 row-span-10 bg-charcoal-black">
                {" "}
                {children}
            </div>
            {/* <Footer className="col-span-10 row-span-2 bg-dark-brown overflow-y-auto" />*/}
        </div>
    );
};
