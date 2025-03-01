import React, { useState } from 'react';
import { handleSubmit } from '../../Services/api';
import Particle from '../../../assets/Animations/Particles';
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import "../../../assets/css/Auth.css";

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptcha = (value) => {
    setCaptchaValue(value); // Met à jour la réponse reCAPTCHA
  };

  return (
    <>
      <Particle />
      <div className="auth-container">
        <div className="auth-card">
          <h2>GREEN HOUSE</h2>
          <form onSubmit={
            handleSubmit(
              password,
              confirmPassword,
              username,
              email,
              password,
              confirmPassword,
              captchaValue)}>
            <div className="input-group">
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Nom d'utilisateur</label>
            </div>
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
            <div className="input-group">
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label>Confirmer le mot de passe</label>
            </div>
            <div className="recaptcha-container">
              <ReCAPTCHA
                sitekey="6Lc29S0qAAAAABuR00MS7tL0RgDzvoUyaejbyhrO"
                onChange={handleCaptcha}
              />
            </div>
            <button type="submit" className="btn-green">S'inscrire</button>
            <p className="link-text">
              <Link to="/"> Vous avez déjà un compte ?</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;