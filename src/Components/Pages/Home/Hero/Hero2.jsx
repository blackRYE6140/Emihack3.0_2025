import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../../../assets/css/Hero2.css";  // Si tu veux des styles personnalisés
import {motion} from "framer-motion"
import img from "../../../../assets/Images/thinking.png"

gsap.registerPlugin(ScrollTrigger); 
const Hero2 = () => {
  const features = [
    { id: 1,  desc: "Description de la consultation" },
    { id: 2,  desc: "Voir les zones à risques" },
    { id: 3, desc: "Recevoir des alertes instantanées" },
   
  ];
  const feature = [
    { id: 4,  desc: "Consultation en vidéo avec un médecin" },
    { id: 5,  desc: "Interaction avec un assistant virtuel intelligent" },
    { id: 4,  desc: "Une application multilingue faciliatant l'interaction utilisateur" },
  ]
  useEffect(() => {
    const paths = document.querySelectorAll('.my-svg path');

    paths.forEach((path, index) => {
      const length = path.getTotalLength();

      // Utiliser ScrollTrigger pour animer lorsque le SVG est dans la vue
      gsap.fromTo(
        path,
        { strokeDasharray: length, strokeDashoffset: length },  // Commencer avec des traits invisibles
        {
          strokeDashoffset: 0,
          duration: 0.5,
          delay: index * 0.5,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".svg-container", // Section qui déclenche l'animation
            start: "top center", // Quand le haut de l'élément touche le centre de la fenêtre
            toggleActions: "play none none none", // Déclenche l'animation
          }
        }
      );
    });
  }, []);

  return (
    <div className="features-container">
       <div className="grid-container">
        {features.map((feature, index) => (
          <motion.div
          key={feature.id}
          className="feature-card"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // Animation seulement quand dans la vue
          transition={{ duration: 0.5, delay: index * 0.3 }}
        >
            <h3>{feature.id}</h3> {/* Numéro de la fonctionnalité */}
            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    <div className="svg-container">
      {/* Le SVG directement dans le JSX */}
      <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com" width="300px" height="300px" className="my-svg">
        <defs>
          <bx:export>
            <bx:file format="svg" path="Sans titre.svg" excluded="true" />
            <bx:file format="svg" path="Sans titre 2.svg" />
          </bx:export>
        </defs>
        <g transform="matrix(1.2, 0, 0, 1.2, -20, -10)"> {/* Ajustement pour un meilleur agrandissement */}
          <path
            style={{ stroke: "rgb(0, 0, 0)", fill: "rgb(42, 157, 31)", paintOrder: "fill", strokeDasharray: 5 }}
            d="M 63.527 41.832 L 62.18449999999999 38.62733333333333 C 60.842000000000006 35.422666666666665 58.157000000000004 29.013333333333332 49.366166666666665 25.592333333333332 C 40.57533333333333 22.171333333333333 25.67866666666667 21.73866666666667 18.23033333333333 21.522333333333336 L 10.782 21.306"
          />
          <path
            style={{ stroke: "rgb(0, 0, 0)", fill: "rgb(42, 157, 31)", strokeDasharray: 5 }}
            d="M 163.56 40.013 L 167.0675 36.895 C 170.57500000000002 33.776999999999994 177.59 27.540999999999997 187.24666666666667 24.466333333333335 C 196.90333333333334 21.391666666666666 209.20166666666668 21.478333333333335 215.35083333333333 21.521666666666665 L 221.5 21.565"
          />
          <path
            style={{ stroke: "rgb(0, 0, 0)", fill: "rgb(42, 157, 31)", strokeDasharray: 5 }}
            d="M 154.206 133.291 L 156.78816666666668 136.67516666666666 C 159.37033333333332 140.05933333333334 164.53466666666668 146.82766666666666 175.232 150.06016666666667 C 185.92933333333335 153.2926666666667 202.15966666666668 152.98933333333335 210.2748333333333 152.83766666666668 L 218.39 152.686"
          />
          <path
            style={{ stroke: "rgb(0, 0, 0)", fill: "rgb(42, 157, 31)", strokeDasharray: 5 }}
            d="M 64.826 90.159 L 14.42 89.379"
          />
          <path
            style={{ stroke: "rgb(0, 0, 0)", fill: "rgb(42, 157, 31)", strokeDasharray: 5 }}
            d="M 167.717 88.34 L 219.421 88.34"
          />
          <path
            style={{ stroke: "rgb(0, 0, 0)", fill: "rgb(58, 161, 39)", strokeDasharray: 5 }}
            d="M 70.2 133.351 L 68.36566666666667 135.81366666666668 C 66.53133333333334 138.27633333333333 62.86266666666668 143.20166666666668 52.656666666666666 145.5716666666667 C 42.45066666666667 147.9416666666667 25.707333333333334 147.75633333333334 17.33566666666667 147.66366666666667 L 8.964 147.571"
          />
          <g>
            <path
              fill="#16A34A"
              d="M 140.774 54.913 C 148.473 62.205 155.275 68.925 158.932 77.23 C 162.589 85.599 163.037 95.552 160.278 104.682 C 157.456 113.811 151.489 122.053 143.597 127.188 C 135.642 132.324 125.889 134.352 116.907 133.275 C 107.925 132.197 99.713 127.95 91.18 123.004 C 82.646 118.059 73.792 112.416 70.969 104.682 C 68.21 96.884 71.547 86.993 76.038 78.815 C 80.529 70.573 86.239 64.043 93.104 56.498 C 99.969 48.89 108.053 40.332 116.33 39.951 C 124.606 39.634 133.14 47.623 140.774 54.913 Z"
            />
          </g>

        </g>
      </svg>
    </div>
    <div className="grid-container_rigth">
        {feature.map((feature, index) => (
            <motion.div
            key={feature.id}
            className="feature-card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} // Animation seulement quand dans la vue
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <h3>{feature.id}</h3> {/* Numéro de la fonctionnalité */}
            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
  </div>
  );
};

export default Hero2;
