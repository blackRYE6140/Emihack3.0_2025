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
import Whiteboard from './Components/Pages/white-board/whiteBoard';
<<<<<<< HEAD
import MyDoctor from './Components/Pages/MyDoctor/Mydoctor';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { tailChase } from "ldrs";
=======
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { tailChase} from "ldrs";
>>>>>>> 524d912287b76f7ece6fdf4591d98b0089bdf98e
import { useState, useEffect } from 'react';

tailChase.register();

function Loader() {
  return (
    <div className="loader-container">
<<<<<<< HEAD
      <l-tail-chase size="40" speed="1.5" color="#16a34a" />
      <p>Veuillez patienter . . .</p>
=======
      <l-tail-chase size="40" speed="1.5" color="#16a34a"/>
      <p>Veuillez patientez . . .</p>
>>>>>>> 524d912287b76f7ece6fdf4591d98b0089bdf98e
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1500); // Attendre 1.5 secondes avant de changer l'état 'loading'

    // Clear the timeout in case the component unmounts before the timer completes
    return () => clearTimeout(timer);
  }, []); // Dépendance vide pour que le useEffect soit exécuté une seule fois

  return (
    <div className="appContainer font-poppins">
      <ToastContainer />
      {loading ? (
=======
    setTimeout(() => {
      setLoading(true);
    }, 1500); 
  }, []);

  return (
    <div className="appContainer" style={{fontFamily:"Rigtheous"}}>
      <ToastContainer />
      {!loading ? (
        <Loader />
      ) : (
>>>>>>> 524d912287b76f7ece6fdf4591d98b0089bdf98e
        <Router>
          <Routes>
            <Route path="/" exact element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/otp" element={<OTPForm />} />
            <Route path="/home" element={<Layout><Home /></Layout>} />
            <Route path="/quiz" element={<Layout><Quiz /></Layout>} />
            <Route path="/greenLand" element={<Layout><GreenLand /></Layout>} />
            <Route path="/experience" element={<Layout><Experience /></Layout>} />
            <Route path="/whiteBoard" element={<Layout><Whiteboard /></Layout>} />
<<<<<<< HEAD
            <Route path="/mydoctor" element={<Layout><MyDoctor /></Layout>} />
          </Routes>
        </Router>
      ) : (
        <Loader />
=======
          </Routes>
        </Router>
>>>>>>> 524d912287b76f7ece6fdf4591d98b0089bdf98e
      )}
    </div>
  );
}

export default App;
