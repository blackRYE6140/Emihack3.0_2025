import React from "react";
<<<<<<< HEAD
import PieChart from "./DougnutChart"; // Assurez-vous que ce composant est importé correctement
=======
import PieChart from "./DougnutChart";
>>>>>>> 524d912287b76f7ece6fdf4591d98b0089bdf98e
import { Modal } from "antd";

const ModalChart = ({ isOpen, onClose, correctAnswers, incorrectAnswers, level }) => {
    return (
<<<<<<< HEAD
        <Modal title="Résultats" open={isOpen} onCancel={onClose} footer={null}>
            <PieChart 
                yesCount={correctAnswers} // Passez correctAnswers comme 'yesCount'
                totalAnswered={correctAnswers + incorrectAnswers} // Passez totalAnswered (oui + non)
                level={level} // Affichez l'état d'infection
            />
=======
        <Modal title="Résultats du Quiz" open={isOpen} onCancel={onClose} footer={null}>
            <PieChart correctAnswers={correctAnswers} incorrectAnswers={incorrectAnswers} level={level} />
>>>>>>> 524d912287b76f7ece6fdf4591d98b0089bdf98e
        </Modal>
    );
};

export default ModalChart;
