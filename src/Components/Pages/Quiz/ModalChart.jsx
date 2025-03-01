import React from "react";
import PieChart from "./DougnutChart";
import { Modal } from "antd";

const ModalChart = ({ isOpen, onClose, correctAnswers, incorrectAnswers, level }) => {
    return (
        <Modal title="Résultats du Quiz" open={isOpen} onCancel={onClose} footer={null}>
            <PieChart correctAnswers={correctAnswers} incorrectAnswers={incorrectAnswers} level={level} />
        </Modal>
    );
};

export default ModalChart;
