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
                hoverOffset: 4,
            },
        ],
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
        <h3>Votre état est : {level}</h3>
        <div style={{ width: "400px", height: "500px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Pie data={data} />
        </div>
    </div>
    );
};

export default PieChart;
