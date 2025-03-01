import React, { useState, useEffect } from 'react';
import { FaUser, FaLanguage, FaMusic, FaVolumeMute } from 'react-icons/fa';
import { FiAlignJustify } from "react-icons/fi";
import '../../assets/css/NavBar.css';
import { motion } from "framer-motion";
import confetti from 'canvas-confetti';
import useAudio from '../../assets/Animations/Sound'; // Importer le hook personnalisé

const menuItems = [
  { path: "/home", label: "Accueil" },
  { path: "/quiz", label: "Consultation" },
  { path: "/greenland", label: "Zone epidemique" },
  { path: "/experience", label: "Témoignage" },
  { path: "/whiteBoard", label: "Tableau blanc" },
  {path : "mydoctor" , label : "MyDokotera"}
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

        <div className="nav-mobile" onClick={toggleMenu}>
          <FiAlignJustify />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
