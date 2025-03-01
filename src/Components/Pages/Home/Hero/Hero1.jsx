import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion";
import { Model1 } from "../../../ModelsThreeJS/Model1";
import "../../../../assets/css/Hero1.css";


const Hero1 = () => {
    return (
        <section className="hero1-section">

            <div className="hero1-container">
                {/* Modèle 3D à gauche */}
                <div className="hero1-model">
                    <Canvas style={{ width: "100%", height: "35rem" }}>
                        <PerspectiveCamera makeDefault position={[0, 0, 6.4]} fov={50} />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[5, 5, 5]} intensity={1} />
                        <Model1 scale={[0.6, 0.6, 0.6]} />
                        <OrbitControls enablePan enableRotate enableZoom={false} autoRotate autoRotateSpeed={10} />
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
<<<<<<< HEAD
                    <h2>C'est quoi Epidemic Insights ?</h2>
                    <p>
                        "Epidemic Insights est une plateforme utilisateur intuitive dédiée à la gestion
                        et à l'analyse des épidémies mondiales. Grâce à cette plateforme, il devient plus facile
                        de comprendre et de prédire les menaces sanitaires en utilisant l'intelligence artificielle
                        et le Big Data, afin de protéger la santé publique et d'adopter des solutions préventives efficaces."
                    </p>

=======
                    <h2>C'est quoi Green House ?</h2>
                    <p>
                        "Green House est une plateforme utilisateur intuitive dédiée
                        à la gestion et à l’optimisation des espaces de vie écologiques.
                        Grâce à cette plateforme, il devient plus simple d’adopter
                        un mode de vie durable tout en profitant d’un confort moderne
                        et personnalisé.."
                    </p>
>>>>>>> 524d912287b76f7ece6fdf4591d98b0089bdf98e
                </motion.div>
            </div>
        </section>
    );
};

export default Hero1;
