import React, { useState, useEffect } from 'react';
import { FaUser, FaLanguage, FaMusic, FaVolumeMute } from 'react-icons/fa';
import { FiAlignJustify } from "react-icons/fi";
import '../../assets/css/NavBar.css';
import { motion } from "framer-motion";
import 'animate.css';
import confetti from 'canvas-confetti';
import useAudio from '../../assets/Animations/Sound'; // Importer le hook personnalisé
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import ThemeToggle from "../ui/switchMode/themeToggle";

// Menu Items
const menuItems = [
  { path: "/home", label: "Accueil" },
  { path: "/consultation", label: "Consultation" },
  { path: "/cartographie", label: "Zone epidemique" },
  { path: "/alerte", label: "Alerte" },
  { path: "/visio", label: "Visio" },
  { path: "/mydoctor", label: "MyDoctor" }
];

const menuItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isPlaying, play, pause } = useAudio();
  const [guideStarted, setGuideStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const isIntroShown = localStorage.getItem('introShown');
    if (!isIntroShown) {
      startDriverGuide();
      setGuideStarted(true);
      localStorage.setItem('introShown', 'true');
    }
  }, []);

  const startDriverGuide = () => {
    const driverObj = driver({
      showProgress: true,
      steps: [
        { element: '.nav-links > li:nth-child(1)', popover: { title: 'Accueil', description: 'Bienvenue sur la page d\'accueil.' } },
        { element: '.nav-links > li:nth-child(2)', popover: { title: 'Quiz', description: 'Participez au quiz !' } },
        { element: '.nav-links > li:nth-child(3)', popover: { title: 'GreenLand', description: 'Explorez GreenLand.' } },
        { element: '.nav-links > li:nth-child(4)', popover: { title: 'Experience', description: 'Découvrez et partagez vos expériences.' } },
      ]
    });
    driverObj.drive();
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const selectLanguage = () => {
    confetti({ particleCount: 150, angle: 60, spread: 55, origin: { x: 0 } });
    confetti({ particleCount: 150, angle: 120, spread: 55, origin: { x: 1 } });
  };

  return (
    <nav className={`nav-container ${isScrolled ? 'blurred' : ''}`}>
      <span className="nav-logo">EPIDEMIC INSIGHTS</span>
      <div className="nav-left">
        <motion.ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}
          initial="hidden" animate="visible">
          {menuItems.map((item, index) => (
            <motion.li key={index} custom={index} variants={menuItemVariants}>
              <a href={item.path} className="nav-link">{item.label}</a>
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
        <motion.button className="icon" whileHover={{ scale: 1.1 }} onClick={selectLanguage}>
          <FaLanguage size={25} />
        </motion.button>
      </div>
      <div className="nav-mobile" onClick={toggleMenu}>
        <FiAlignJustify />
      </div>
      <ThemeToggle/>
    </nav>
  );
};

export default NavBar;
