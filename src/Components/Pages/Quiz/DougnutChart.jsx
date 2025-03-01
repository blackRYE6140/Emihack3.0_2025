import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Enregistrer les composants nécessaires de Chart.js
Chart.register(ArcElement, Tooltip, Legend);

<<<<<<< HEAD
const PieChart = ({ yesCount, totalAnswered, level }) => {
    const noCount = totalAnswered - yesCount; // Calcul du nombre de "Non"

    const data = {
        labels: ["Réponses 'Oui'", "Réponses 'Non'"],
        datasets: [
            {
                label: "Résultats des questions",
                data: [yesCount, noCount],
                backgroundColor: [
                    "rgb(5, 54, 16)", // Vert foncé pour "Oui"
                    "rgb(116, 7, 30)", // Rouge foncé pour "Non"
=======
const PieChart = ({ correctAnswers, incorrectAnswers, level }) => {
    const data = {
        labels: ["Réponses exactes", "Réponses fausses"],
        datasets: [
            {
                label: "Résultats du Quiz",
                data: [correctAnswers, incorrectAnswers],
                backgroundColor: [
                    "rgb(5, 54, 16)", // Vert foncé pour les bonnes réponses
                    "rgb(116, 7, 30)", // Rouge foncé pour les mauvaises réponses
>>>>>>> 7cb862510af39779e4d755266dba6892211c79a0
                ],
                hoverOffset: 4,
            },
        ],
    };

    return (
<<<<<<< HEAD
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
        <h3>Votre état est : {level}</h3>
        <div style={{ width: "400px", height: "500px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Pie data={data} />
        </div>
    </div>
=======
        <div>
            <h3>Niveau : {level}</h3>
            <Pie data={data} />
        </div>
>>>>>>> 7cb862510af39779e4d755266dba6892211c79a0
    );
};

export default PieChart;
