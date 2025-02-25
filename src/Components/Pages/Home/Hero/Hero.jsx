import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import ModelLand from "../../../ModelsThreeJS/Land";
import { motion } from "framer-motion";
import "../../../../assets/css/Hero.css";

const Hero = () => {
    return (
        <div>
            <section className="hero-section">
                <div className="hero-container">
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
                    </motion.div>

                    {/* Modèle 3D à droite */}
                    <div className="hero-model">
                        <Canvas style={{width : "100%" , height : "35rem"}}>
                            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
                            <ambientLight intensity={0.5} /> 
                            <directionalLight position={[5, 5, 5]} intensity={1} /> 
                            <ModelLand position={[0, -0.8 , 0]} scale={[0.6, 0.6, 0.6]} /> 
                            <OrbitControls enablePan enableRotate enableZoom={false} autoRotate autoRotateSpeed={10} />
                        </Canvas>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
