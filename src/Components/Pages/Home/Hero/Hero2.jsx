import pauseGif from "../../../../assets/Images/Pause.gif";
import { FaVideo, FaPuzzlePiece, FaGamepad } from "react-icons/fa";
import { motion } from "framer-motion";
import "../../../../assets/css/Hero2.css";

const functionnality = [
  {
    id: 0,
    text: "Une option d'appel vidéo et de chat en temps réel, pour interagir directement avec d'autres utilisateurs ou administrateurs.",
    icon: <FaVideo className="iconHero2" />,
  },
  {
    id: 1,
    text: "Un menu de quiz pour se divertir et enrichir ses connaissances.",
    icon: <FaPuzzlePiece className="iconHero2" />,
  },
  {
    id: 2,
    text: "Découvrez GreenLand en réalité augmentée pour une meilleure expérience utilisateur.",
    icon: <FaGamepad className="iconHero2" />,
  },
];

const Hero2 = () => {
  return (
    <section className="hero-container2">
      {/* Bloc gauche (Titre + GIF) */}
      <div className="gif-container">
        <h2>NOS FONCTIONNALITÉS</h2>
        <img src={pauseGif} alt="Pause Gif" />
      </div>

      {/* Bloc droit (Cartes des fonctionnalités) */}
      <div className="cards-container">
        {functionnality.map((item, index) => (
          <motion.div
            className="text-containerHero2"
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            <div className="icons-container">{item.icon}</div>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero2;
