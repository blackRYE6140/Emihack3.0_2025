import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Pages/Home/Footer/Footer.jsx";

const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            <NavBar />
            <main className="content" style={{marginTop : '5rem'}}>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
