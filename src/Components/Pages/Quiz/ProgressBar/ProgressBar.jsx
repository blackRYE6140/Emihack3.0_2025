<<<<<<< HEAD
const ProgressBar = ({ totalAnswered, yesCount }) => {
    const noCount = totalAnswered - yesCount; // Calcul du nombre de réponses "Non"
  
    return (
      <div className="percentage">
        <div className="progressPercent">OUI : {yesCount}/10</div>
        <div className="progressPercent">NON : {noCount}/10</div>
      </div>
    );
  };
  
=======
const ProgressBar = ({ total, score }) => {
    return (
        <div className="percentage">
            <div className="progressPercent">Question : {total}/15</div>
            <div className="progressPercent">Réussi : {score}/15</div>
        </div>
    );
};
>>>>>>> 524d912287b76f7ece6fdf4591d98b0089bdf98e

export default ProgressBar;
