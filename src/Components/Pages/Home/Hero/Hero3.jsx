<<<<<<< HEAD
// import  { useState, useEffect } from "react";
=======
import  { useState, useEffect } from "react";
>>>>>>> 524d912287b76f7ece6fdf4591d98b0089bdf98e
import img1 from "../../../../assets/Images/feed.jpeg"; // Une seule image
import { motion } from "framer-motion";
import "../../../../assets/css/Hero3.css"

const Hero3 = () => {
    return (
        <section className="hero3-container">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="hero3-image-container">
                <img src={img1} alt="Feedback" className="hero3-image" /> {/* Une seule image */}

                <p className="hero3-text">
                    Contactez-nous à tout moment pour nous faire part de vos suggestions et de vos retours d'expérience.
                    Nous apprécions tous vos commentaires pour améliorer nos services et vous offrir une meilleure expérience.
                </p>
            </motion.div>
            <div className="hero3-separator"></div>
            <div className="hero3-form-container">
                <h2>Vos feedbacks seront apprécier pour nous améliorer</h2> {/* Nouveau texte */}
                <form>
                    <div className="input-container">
                        <label htmlFor="email">Email :</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="name">Nom :</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="message">Message :</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </section>
    );
};

export default Hero3;
