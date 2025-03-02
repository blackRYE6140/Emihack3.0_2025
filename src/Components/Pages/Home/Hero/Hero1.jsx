import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion";
import { ModelRobot } from "../../../ModelsThreeJS/Robot";
import "../../../../assets/css/Hero1.css";
import ia from "../../../../assets/Images/IA.gif";

const Hero1 = () => {
    return (
        <section className="hero1-section">
            <div className="hero1-container">
                <div className="hero1-model">
                    <Canvas style={{ width: "100%", height: "35rem" }}>
                        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
                        <ambientLight intensity={0.7} />
                        <directionalLight position={[5, 5, 5]} intensity={1} />

                        <ModelRobot position={[0, -1, 0]} scale={[1, 0.9, 0.9]} />

                        {/* Contrôles pour interagir avec le modèle */}
                        <OrbitControls enablePan enableRotate enableZoom={false} autoRotate autoRotateSpeed={2} />

                        {/* Image HTML dans la scène */}
                        <Html position={[1, 2, 0]} center>
                            <div style={{ background: 'none', padding: '5rem' }}>
                                <img src={ia} alt="ia" style={{ width: '350px', height: 'auto' , borderRadius : "50%" }} />
                                <p style={{color : "white"}}>Learning</p>
                            </div>
                        </Html>
                    </Canvas>
                </div>

                {/* Texte à droite */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="hero1-text"
                >
                    <h2>C'est quoi Epidemic Insights ?</h2>
                    <p>
                        "Epidemic Insights est une plateforme intuitive
                        qui permet d’analyser, surveiller et prédire l’évolution
                        des épidémies en temps réel. Grâce à des outils basés sur
                        le Big Data et l’IA, elle facilite la prise de décisions
                        pour les professionnels de santé et les autorités en
                        fournissant des données précises et exploitables."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero1;
