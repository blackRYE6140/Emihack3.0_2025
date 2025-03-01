import React from "react";
import Landing from "./Landing/LandingPage";
import '../../../assets/css/Home.css';

const Home = () => {
    return (
        <div className="app">
            <div className="home-container">
                <div className="navbar">
                    <Landing/>
                </div>
            </div>
           
        </div>
    );
};

export default Home;
