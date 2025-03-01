import React from "react";
<<<<<<< HEAD
import PieChart from "./DougnutChart"; // Assurez-vous que ce composant est importé correctement
=======
import PieChart from "./DougnutChart";
>>>>>>> 7cb862510af39779e4d755266dba6892211c79a0
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
>>>>>>> 7cb862510af39779e4d755266dba6892211c79a0
        </Modal>
    );
};

export default ModalChart;
