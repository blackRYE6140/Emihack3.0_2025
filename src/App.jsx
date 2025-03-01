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
=======
>>>>>>> 7cb862510af39779e4d755266dba6892211c79a0
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { tailChase} from "ldrs";
import { useState, useEffect } from 'react';

<<<<<<< HEAD

=======
>>>>>>> 7cb862510af39779e4d755266dba6892211c79a0
tailChase.register();

function Loader() {
  return (
    <div className="loader-container">
      <l-tail-chase size="40" speed="1.5" color="#16a34a"/>
      <p>Veuillez patientez . . .</p>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1500); 
  }, []);

  return (
<<<<<<< HEAD
    <div className="appContainer font-poppins">
=======
    <div className="appContainer" style={{fontFamily:"Rigtheous"}}>
>>>>>>> 7cb862510af39779e4d755266dba6892211c79a0
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
            <Route path="/whiteBoard" element={<Layout><Whiteboard /></Layout>} />
<<<<<<< HEAD
            <Route path="/mydoctor" element={<Layout><MyDoctor /></Layout>} />
=======
>>>>>>> 7cb862510af39779e4d755266dba6892211c79a0
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
