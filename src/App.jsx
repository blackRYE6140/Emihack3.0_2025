import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Pages/Home/HomePage';
import Quiz from './Components/Pages/Quiz/Quiz';
import Experience from './Components/Pages/Experience/Experience';
import GreenLand from './Components/Pages/GeenLand/GreenLand';
import LoginForm from "./Components/Pages/Login/Login";
import SignupForm from "./Components/Pages/Signup/Signup";
import OTPForm from './Components/Pages/OTP/otp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { tailChase} from "ldrs";
import { useState, useEffect } from 'react';

tailChase.register();

function Loader() {
  return (
    <div className="loader-container">
      <l-tail-chase size="40" speed="1.75" color="#16a34a"/>
      <p>Veuillez patientez . . .</p>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000); 
  }, []);

  return (
    <div className="appContainer" style={{fontFamily:"Rigtheous"}}>
      <ToastContainer />
      {!loading ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" exact element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/otp" element={<OTPForm />} />
            <Route path="/home" element={<Layout><Home /></Layout>} />
            <Route path="/quiz" element={<Layout><Quiz /></Layout>} />
            <Route path="/greenLand" element={<Layout><GreenLand /></Layout>} />
            <Route path="/experience" element={<Layout><Experience /></Layout>} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
