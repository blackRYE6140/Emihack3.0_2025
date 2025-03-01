const ProgressBar = ({ total, score }) => {
    return (
        <div className="percentage">
            <div className="progressPercent">Question : {total}/15</div>
            <div className="progressPercent">Réussi : {score}/15</div>
        </div>
    );
};

export default ProgressBar;
