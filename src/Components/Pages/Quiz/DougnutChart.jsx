import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Enregistrer les composants nécessaires de Chart.js
Chart.register(ArcElement, Tooltip, Legend);

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
                ],
                hoverBackgroundColor: [
                    "rgb(3, 72, 25)", // Couleur au survol pour "Oui"
                    "rgb(144, 10, 42)", // Couleur au survol pour "Non"
                ],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.label || '';
                        let value = context.raw || 0;
                        return `${label}: ${value} (${((value / totalAnswered) * 100).toFixed(2)}%)`;
                    },
                },
            },
            legend: {
                position: "top",
            },
        },
    };

    return (
        <div>
            <h3>Résultats du niveau {level}</h3>
            <Pie data={data} options={options} />
        </div>
    );
};

export default PieChart;
