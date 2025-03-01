import React, { useState, useEffect } from 'react';
import { FaUser, FaLanguage, FaMusic, FaVolumeMute } from 'react-icons/fa';
import { FiAlignJustify } from "react-icons/fi";
import '../../assets/css/NavBar.css';
import { motion } from "framer-motion";
<<<<<<< HEAD
import confetti from 'canvas-confetti';
import useAudio from '../../assets/Animations/Sound'; // Importer le hook personnalisé

const menuItems = [
  { path: "/home", label: "Accueil" },
  { path: "/quiz", label: "Consultation" },
  { path: "/greenland", label: "Zone epidemique" },
  { path: "/experience", label: "Témoignage" },
  { path: "/whiteBoard", label: "Tableau blanc" },
  {path : "mydoctor" , label : "MyDokotera"}
=======
// import 'animate.css';
import confetti from 'canvas-confetti';
import useAudio from '../../assets/Animations/Sound'; // Importer le hook personnalisé
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const menuItems = [
  { path: "/home", label: "Accueil" },
  { path: "/quiz", label: "Quiz" },
  { path: "/greenland", label: "GreenLand" },
  { path: "/experience", label: "Experience" },
  { path: "/whiteBoard", label: "Tableau blanc" },
>>>>>>> 7cb862510af39779e4d755266dba6892211c79a0
];

const menuItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

<<<<<<< HEAD
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // État pour le menu mobile
  const [isScrolled, setIsScrolled] = useState(false);  // Ajouter un état pour vérifier le scroll
  const { isPlaying, play, pause } = useAudio();  // Utilisation du hook personnalisé

  // Surveiller le scroll et appliquer le flou
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Lorsque l'utilisateur fait défiler la page de plus de 50px
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Ajouter un écouteur d'événements pour le scroll
    window.addEventListener('scroll', handleScroll);

    // Nettoyer l'événement lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);  // Toggle l'état du menu mobile
  };

  return (
    <>
      <nav className={`nav-container ${isScrolled ? 'blurred' : ''}`}>
        <span className="nav-logo">GREEN HOUSE</span>
        <div className="nav-left">
          <motion.ul
            className={`nav-links ${isMenuOpen ? 'active' : ''}`}
=======
const startDriverGuide = () => {
  const driverObj = driver({
    showProgress: true,
    steps: [
      { element: '.nav-links > li:nth-child(1)', popover: { title: 'Accueil', description: 'Bienvenue dans la page d\'accueil de la plateforme.' } },
      { element: '.nav-links > li:nth-child(2)', popover: { title: 'Quiz', description: 'Cliquez pour participer au quiz du plateforme.' } },
      { element: '.nav-links > li:nth-child(3)', popover: { title: 'GreenLand', description: 'Cliquez pour explorer GreenLand.' } },
      { element: '.nav-links > li:nth-child(4)', popover: { title: 'Experience', description: 'Cliquez pour découvrir et partager des expériences.' } },
    ],
    onDestroyStarted: () => {
      if (!driverObj.hasNextStep() || confirm("Voulez-vous zapper l'intro?")) {
        driverObj.destroy();
      }
    },
  })
  driverObj.drive();
  sessionStorage.setItem('introShown', 'true');
};

const selectLanguage = (lang) => {
  confetti({
    particleCount: 150,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: ['rgb(97, 26, 26)', '#16a34a']
  });
  confetti({
    particleCount: 150,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: ['rgb(97, 26, 26)', '#16a34a']
  });
};

const NavBar = () => {
  const [guideStarted, setGuideStarted] = useState(false);
  const { isPlaying, play, pause } = useAudio();  // Utilisation du hook personnalisé

  useEffect(() => {
    const isIntroShownInSession = sessionStorage.getItem('introShown');
    const isIntroShown = localStorage.getItem('introShown');

    if (!isIntroShownInSession) {
      startDriverGuide();
      setGuideStarted(true);
      localStorage.setItem('driverTourCompleted', 'true');
    }
    if (!isIntroShown) {
      localStorage.setItem('introShown', 'true');
    }
  }, []);

  return (
    <>
      <nav className="nav-container">
        <span className="nav-logo">GREEN HOUSE</span>
        <div className="nav-left">
          <motion.ul
            className="nav-links"
>>>>>>> 7cb862510af39779e4d755266dba6892211c79a0
            initial="hidden"
            animate="visible"
          >
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                custom={index}
                variants={menuItemVariants}
              >
                <a href={item.path} className="nav-link">
                  {item.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="nav-right">
          <motion.button className="icon" whileHover={{ scale: 1.1 }} onClick={isPlaying ? pause : play}>
            {isPlaying ? <FaVolumeMute size={15} /> : <FaMusic size={15} />}
          </motion.button>
          <motion.button className="icon" whileHover={{ scale: 1.1 }}>
            <FaUser size={15} />
          </motion.button>
          <motion.button className="icon" whileHover={{ scale: 1.1 }}>
            <FaLanguage size={25} onClick={() => selectLanguage()} />
          </motion.button>
        </div>

<<<<<<< HEAD
        <div className="nav-mobile" onClick={toggleMenu}>
=======
        <div className="nav-mobile">
>>>>>>> 7cb862510af39779e4d755266dba6892211c79a0
          <FiAlignJustify />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
