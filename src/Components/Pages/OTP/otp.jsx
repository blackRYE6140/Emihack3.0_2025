import React, { useState } from 'react';
import { Input, Button, Typography, Card } from 'antd';
import "../../../assets/css/Auth.css";
import { handleVerifyOTP } from '../../Services/api';
import Particle from '../../../assets/Animations/Particles';
import { toast , Toaster } from "sonner";

const { Title, Text } = Typography;

const OTPForm = () => {
  const [otp, setOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.trim().length === 6) {
      handleVerifyOTP(otp);
      console.log("Vérification OTP :", otp);
    } 
    else if(otp.trim().length ==""){
      toast.warning("Veuillez complétez l'otp a 6 chiffres")
    }
    else {
      setErrorMessage("Le code OTP doit contenir 6 chiffres.");
    }
  };

  return (
    <>
    <Toaster/>
    <Particle/>
      <div className="otp-container">
        <Card className="otp-card">
          <Title style={{ color: "#fff" }} level={3}>Vérification OTP</Title>
          <Text style={{ color: "#fff" }}>Nous vous avons envoyé un code à 6 chiffres. Veuillez vérifier votre email.</Text>

          <form onSubmit={handleSubmit} className="otp-form">
            <Input.OTP
              length={6}
              mask="🔒"
              value={otp}
              onChange={(text) => setOtp(text)}
              required
            />

            {errorMessage && <p className="error-text">{errorMessage}</p>}

            <button type="primary" className='btn-otp' htmlType="submit" block>
              Vérifier
            </button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default OTPForm;
