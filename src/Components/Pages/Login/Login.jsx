import React, { useState } from 'react';
import { handleLogin } from '../../Services/api';
import { Link } from 'react-router-dom';
import { GoogleOAuthProvider , GoogleLogin } from '@react-oauth/google'; 
import "../../../assets/css/Auth.css";
import Particle from '../../../assets/Animations/Particles';
import {motion }from "framer-motion";
import { toast } from "sonner"

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleGoogleLogin = (response) => {
    console.log("Google Token:", response.credential);
  };

  return (
    <>
    <Particle/>
      <motion.div className="auth-container"
      >
        <div className="auth-card">
          <h2>GREEN HOUSE</h2>
          <form onSubmit={handleLogin(email, password)}>
            <div className="input-group">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>
            <div className="input-group">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Mot de passe</label>
            </div>
            {errorMessage && <p className="error-text">{errorMessage}</p>}
            <button type="submit" className="btn-green">Se connecter</button>
            <p className="link-text">
              <Link to="/signup">Vous n'avez pas encore de compte ?</Link>
            </p>
            <div className="google-login-container">
            <p className="google-text">Ou</p>
            <GoogleOAuthProvider clientId="792826417387-6mqd7esqjivg6l96ie747u9uf14llopb.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={() => toast('Échec de la connexion Google')}
              />
            </GoogleOAuthProvider>
          </div>
          </form>
         
        </div>
      </motion.div>
    </>
  );
};

export default LoginForm;
