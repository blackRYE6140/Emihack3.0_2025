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
  
  export default ProgressBar;
  
=======
const ProgressBar = ({ total, score }) => {
    return (
        <div className="percentage">
            <div className="progressPercent">Question : {total}/15</div>
            <div className="progressPercent">Réussi : {score}/15</div>
        </div>
    );
};

export default ProgressBar;
>>>>>>> 7cb862510af39779e4d755266dba6892211c79a0
