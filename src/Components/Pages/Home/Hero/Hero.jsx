import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import "../../../../assets/css/Hero.css";
import ParticleEffectButton from 'react-particle-effect-button';
import { ModelVirus } from "../../../ModelsThreeJS/VirusModel";

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
            <button className="start-button" onClick={handleClick}>Découvrir</button>
          </ParticleEffectButton>
        </motion.div>

        <div className="hero-model">
          {/* Canvas pour le premier modèle */}
          <Canvas style={{ width: "33%", height: "50rem", display: "inline-block" }}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
            <ambientLight intensity={0.9} />
            <directionalLight position={[5, 5, 5]} intensity={2} />
            <ModelVirus position={[0, -1, 0]} scale={[0.8, 0.8, 0.8]} />
            <OrbitControls enablePan enableRotate enableZoom={false} autoRotate autoRotateSpeed={5} />
          </Canvas>

          {/* Canvas pour le deuxième modèle */}
          <Canvas style={{ width: "33%", height: "25rem", display: "inline-block" }}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
            <ambientLight intensity={0.9} />
            <directionalLight position={[5, 5, 5]} intensity={2} />
            <ModelVirus position={[-2, 0, 0]} scale={[0.4, 0.4, 0.4]} />
            <OrbitControls enablePan enableRotate enableZoom={false} autoRotate autoRotateSpeed={5} />
          </Canvas>

          {/* Canvas pour le troisième modèle */}
          <Canvas style={{ width: "33%", height: "40rem", display: "inline-block" }}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
            <ambientLight intensity={0.9} />
            <directionalLight position={[5, 5, 5]} intensity={2} />
            <ModelVirus position={[2, 0, 0]} scale={[0.4, 0.4, 0.4]} />
            <OrbitControls enablePan enableRotate enableZoom={false} autoRotate autoRotateSpeed={5} />
          </Canvas>
        </div>
      </section>
    </div>
  );
};

export default Hero;
