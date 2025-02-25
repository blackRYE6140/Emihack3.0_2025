import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Enregistrer les composants nécessaires de Chart.js
Chart.register(ArcElement, Tooltip, Legend);

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
                ],
                hoverOffset: 4,
            },
        ],
    };

    return (
        <div>
            <h3>Niveau : {level}</h3>
            <Pie data={data} />
        </div>
    );
};

export default PieChart;
