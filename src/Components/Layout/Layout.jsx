import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Pages/Home/Footer/Footer.jsx";

const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            <NavBar />
            <main className="content">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
