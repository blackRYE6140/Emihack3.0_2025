import React, { useState } from "react";
import { motion } from "framer-motion"; // Importer Framer Motion
import "../../../assets/css/MyDoctor.css";
import { IoIosSend } from "react-icons/io"; 
import Particle from "../../../assets/Animations/Particles";
import Gif from "../../../assets/Images/doctor-penguin.gif"

const MyDoctor = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Bonjour, je suis votre assistant médical. Comment puis-je vous aider aujourd'hui ?" }
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = () => {
    if (userInput.trim()) {
      // Ajouter le message de l'utilisateur
      setMessages([...messages, { sender: "user", text: userInput }]);
      
      // Simuler une réponse du bot
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { sender: "bot", text: "Je vais vous aider avec ça !" }
        ]);
      }, 1000);

      setUserInput("");
    }
  };

  return (
    <>
    <Particle/>
    <div className="harona-chat">
      <div className="lohateny-chat">
        <h2>Bienvenue dans MyDokotera</h2>
        <img src={Gif} alt="Doctor"/>
      </div>
      
      <div className="boaty-chat">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            className={`hafatra ${msg.sender}`}
            initial={{ opacity: 0, y: 50 }} // Départ du bas
            animate={{ opacity: 1, y: 0 }} // Animation vers le centre
            transition={{ duration: 0.5 }}
          >
            <span>{msg.text}</span>
          </motion.div>
        ))}
      </div>

      <div className="fampidirana-chat">
        <textarea
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Tapez votre message..."
          onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && handleSendMessage()}
        />
        <button onClick={handleSendMessage}>
        <IoIosSend />
        </button>
      </div>
    </div>
    </>
  );
};

export default MyDoctor;
