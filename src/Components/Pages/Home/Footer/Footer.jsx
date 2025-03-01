import "../../../../assets/css/Footer.css";
import { FaReact, FaNodeJs, FaFacebook, FaGithub, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import Marquee from "react-fast-marquee";
import img3 from "../../../../assets/Images/EMIT.png";
import img4 from "../../../../assets/Images/emitech.jpg";

const Footer = () => {
  const partnerImages = [img3, img4];
  return (
    <footer className="footer-container">
    <div className="footer-content">
      <div className="footer-left">
        <p>"La passion est la clé de tous et nous détermine à réaliser nos rêves"</p>
        <div className="mern-icons">
          <SiMongodb className="mern-icon" />
          <SiExpress className="mern-icon" />
          <FaReact className="mern-icon" />
          <FaNodeJs className="mern-icon" />
        </div>
        <div className="footer-links">
        <a href="#experience">Expérience</a>
        <a href="#quiz">Quiz</a>
        <a href="#greenland">GreenLand</a>
        <a href="#whiteboard">Tableau blanc</a>
      </div>
      </div>
  
      <div className="footer-divider"></div>
  
      <div className="footer-right">
        <h3>Partenaire officiel :</h3>
        <Marquee pauseOnHover={true} speed={50}>
          {partnerImages.map((img, index) => (
            <div key={index} style={{ margin: "0 20px" }}>
              <img src={img} alt={`Partenaire ${index + 1}`} style={{ height: "150px", width: "185px" }} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  
    <div className="footer-bottom">
      <p>© 2025 API Leka. Tous droits réservés.</p>
   
      <div className="social-icons">
        <FaFacebook className="social-icon" />
        <FaEnvelope className="social-icon" />
        <FaGithub className="social-icon" />
        <FaPhoneAlt className="social-icon" /> <span>+261 034 00 890 11</span>
      </div>
    </div>
  
    <div className="custom-shape-divider-bottom-1740654120">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
      </svg>
    </div>
  </footer>
  
  );
};

export default Footer;
