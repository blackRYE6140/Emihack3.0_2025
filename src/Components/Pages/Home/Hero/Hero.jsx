import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
<<<<<<< HEAD
import { motion } from "framer-motion";
import "../../../../assets/css/Hero.css";
import ParticleEffectButton from "react-particle-effect-button";
import { ModelVirus } from "../../../ModelsThreeJS/VirusModel";
import ModelLand from "../../../ModelsThreeJS/Land";

const Hero = () => {
  const [hidden, setHidden] = React.useState(false);

  const handleClick = () => {
    setHidden(true);

    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }, 800); // Attendre la fin de l'animation
  };

  return (
    <div>
      <section className="hero-container">
        {/* Texte à gauche */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hero-text"
        >
          <h2>Comprendre l'épidémie avec l'IA et le Big Data</h2>
          <p>
            "Les technologies émergentes, comme l'IA et le Big Data, permettent d'anticiper les menaces sanitaires et de protéger la santé publique."
          </p>

          <ParticleEffectButton
            color="#16a34a"
            duration={800}
            easing="easeOutSine"
            hidden={hidden}
            onComplete={handleClick}
          >
            <button className="start-button" onClick={handleClick}>
              Découvrir
            </button>
          </ParticleEffectButton>
        </motion.div>

        {/* Modèles 3D à droite */}
        <div className="hero-model">
          {/* Canvas pour le modèle Virus */}
          <Canvas style={{ width: "33%", height: "50rem", display: "inline-block" }}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
            <ambientLight intensity={0.9} />
            <directionalLight position={[5, 5, 5]} intensity={2} />
            <ModelVirus position={[0, -1, 0]} scale={[1, 0.9, 0.9]} />
            <OrbitControls enablePan enableRotate enableZoom={false} autoRotate autoRotateSpeed={5} />
          </Canvas>

          {/* Canvas pour le modèle Land */}
          <Canvas style={{ width: "33%", height: "25rem", display: "inline-block" }}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
            <ambientLight intensity={0.9} />
            <directionalLight position={[5, 5, 5]} intensity={2} />
            <ModelVirus position={[-2, 0, 0]} scale={[0.4, 0.4, 0.4]} />
            <OrbitControls enablePan enableRotate enableZoom={false} autoRotate autoRotateSpeed={5} />
          </Canvas>

          {/* Canvas pour le modèle Virus à nouveau */}
          <Canvas style={{ width: "33%", height: "40rem", display: "inline-block" }}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
            <ambientLight intensity={0.9} />
            <directionalLight position={[5, 5, 5]} intensity={2} />
            <ModelVirus position={[2, 0, 0]} scale={[0.3, 0.3, 0.3]} />
            <OrbitControls enablePan enableRotate enableZoom={false} autoRotate autoRotateSpeed={5} />
          </Canvas>
        </div>
      </section>
    </div>
  );
=======
import ModelLand from "../../../ModelsThreeJS/Land";
import { motion } from "framer-motion";
import "../../../../assets/css/Hero.css";
import ParticleEffectButton from 'react-particle-effect-button';

const Hero = () => {
    const [hidden, setHidden] = React.useState(false);
  
    const handleClick = () => {
      setHidden(true);
  
      setTimeout(() => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }, 800); // Attendre la fin de l'animation
    };
    return (
        <div>
                <section className="hero-container">
                    {/* Texte à gauche */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="hero-text"
                    >
                        <h2>Estimez vous dans la nature et prenez soin d'eux</h2>
                        <p>
                            "Soyez responsable et déterminé à sauver la nature en tant qu'être vivant. 
                            Veillez toujours à l'avenir du monde et au bien-être de notre écosystème."
                        </p>
                        <ParticleEffectButton
                            color="#16a34a"
                            duration={800}
                            easing="easeOutSine"
                            hidden={hidden}
                            onComplete={handleClick}
                            >
                                <button  className="start-button"  onClick={handleClick}> Découvrir</button>
                               
                      </ParticleEffectButton>
                    </motion.div>

                    {/* Modèle 3D à droite */}
                    <div className="hero-model">
                        <Canvas style={{width : "100vh" , height : "35rem"}}>
                            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
                            <ambientLight intensity={0.5} /> 
                            <directionalLight position={[5, 5, 5]} intensity={1} /> 
                            <ModelLand position={[0, -0.8 , 0]} scale={[0.6, 0.6, 0.6]} /> 
                            <OrbitControls enablePan enableRotate enableZoom={false} autoRotate autoRotateSpeed={5} />
                        </Canvas>
                    </div>
                </section>
        </div>
    );
>>>>>>> 524d912287b76f7ece6fdf4591d98b0089bdf98e
};

export default Hero;
