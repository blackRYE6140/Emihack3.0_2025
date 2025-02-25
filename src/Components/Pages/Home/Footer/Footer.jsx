import "../../../../assets/css/Footer.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../../assets/Images/Acces_Banque.jpg";
import img2 from "../../../../assets/Images/Akata.jpg";
import img3 from "../../../../assets/Images/Computer.jpg";
import img4 from "../../../../assets/Images/emitech.jpg";
import img5 from "../../../../assets/Images/FiharySoft.jpg";
import img6 from "../../../../assets/Images/relia.jpg";


const Footer = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    return (
      
        <footer className="footer-svg">
          
             <div className="footer-content">
        <div className="footer-left">
        <span>"La passion est la clé de tous et nous détermine à réaliser nos rêves"</span>
          <h3>La team 🔥API Leka🔥 vous remercie de votre visite</h3>
          <div className="mern-icons">
            <SiMongodb className="mern-icon" />
            <SiExpress className="mern-icon" />
            <FaReact className="mern-icon" />
            <FaNodeJs className="mern-icon" />
          </div>
        </div>

        <div className="footer-sidebar"></div>
        <div className="footer-right">
          <h3>Partenaire officiel durant cet évenement</h3>
          <Slider {...settings} className="footer-carousel">
            <div>
              <img src={img1} alt="Partenaire 1" />
            </div>
            <div>
              <img src={img2} alt="Partenaire 2" />
            </div>
            <div>
              <img src={img3} alt="Partenaire 3" />
            </div>
            <div>
              <img src={img4} alt="Partenaire 4" />
            </div>
            <div>
              <img src={img5} alt="Partenaire 5" />
            </div>
            <div>
              <img src={img6} alt="Partenaire 6" />
            </div>
          </Slider>
        </div>
      </div>

      {/* Droits réservés */}
      <div className="footer-bottom">
        <p>© 2025 API Leka. Tous droits réservés.</p>
      </div>
         </footer>
  
    
    )
  };
  
  export default Footer;
  