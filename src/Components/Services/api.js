import axios from 'axios';

export const handleLogin = async (ev , email , password) => {
    ev.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email , password});
      localStorage.setItem('token', response.data.token);
      alert("Réussite de connexion")
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

export const handleVerifyOTP = async (e , mail , otp) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/auth/verify-otp', { mail, otp });
      alert('Email vérifié ! Vous pouvez maintenant vous connecter.');
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };
export const handleSubmit = async (
    event,
    username,
    gmail,
    pass,
    confirmPassword,
    captchaValue) => {
    event.preventDefault();
    if (pass !== confirmPassword) {
      toast.error('Les mots de passe ne correspondent pas');
      return;
    }
    if (!captchaValue) {
      alert("Veuillez valider le reCAPTCHA");
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        username,
        gmail,
        pass,
        confirmPassword,
      });

      // Si l'inscription réussit
      toast.success('Inscription réussie ! Vérifiez votre email.');
      navigate('/otp');
      
    } catch (error) {
      // Gestion des différents types d'erreurs
      const errorMessage = error.response?.data?.message || 
                         error.message || 
                         'Une erreur est survenue lors de l\'inscription';
      
      toast.error(errorMessage);
    } 
  };