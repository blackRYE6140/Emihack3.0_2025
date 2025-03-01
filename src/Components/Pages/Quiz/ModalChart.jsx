import React from "react";
import PieChart from "./DougnutChart"; // Assurez-vous que ce composant est importé correctement
import { Modal } from "antd";

const ModalChart = ({ isOpen, onClose, correctAnswers, incorrectAnswers, level }) => {
    return (
        <Modal title="Résultats" open={isOpen} onCancel={onClose} footer={null}>
            <PieChart 
                yesCount={correctAnswers} // Passez correctAnswers comme 'yesCount'
                totalAnswered={correctAnswers + incorrectAnswers} // Passez totalAnswered (oui + non)
                level={level} // Affichez l'état d'infection
            />
        </Modal>
    );
};

export default ModalChart;

