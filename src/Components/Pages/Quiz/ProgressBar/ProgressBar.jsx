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
  