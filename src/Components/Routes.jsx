import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Hero/Hero';
import Quiz from './Quiz/Quiz';

const Roote = () => {
    <Router>
        <Routes>
            <Route path="/" exact element={ <Hero />} />
            <Route path="/quiz" element={ <Quiz />} />
        </Routes>
    </Router>
}
export default Roote;