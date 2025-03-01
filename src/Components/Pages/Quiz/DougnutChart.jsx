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
                ],
                hoverBackgroundColor: [
                    "rgb(3, 72, 25)", // Couleur au survol pour "Oui"
                    "rgb(144, 10, 42)", // Couleur au survol pour "Non"
                ],
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
                ],
                hoverOffset: 4,
>>>>>>> 524d912287b76f7ece6fdf4591d98b0089bdf98e
            },
        ],
    };

<<<<<<< HEAD
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
=======
    return (
        <div>
            <h3>Niveau : {level}</h3>
            <Pie data={data} />
>>>>>>> 524d912287b76f7ece6fdf4591d98b0089bdf98e
        </div>
    );
};

export default PieChart;
