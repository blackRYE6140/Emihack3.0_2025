import React from 'react';
import './cartee.css';

function CarteEpidemi() {
  const mapUrl = "https://umap.openstreetmap.fr/fr/map/carte-depidemie-de-peste_1184560";

  return (
    <div className="section1">
      <div className='cartographie'>
        <div className="carte">
          <iframe
            width="100%"
            height="500px"
            allowFullScreen
            allow="geolocation"
            src={mapUrl}
            title="Carte de l'épidémie de peste"
          ></iframe>
        </div>
        <div className="legend">
          <h1>Carte de l'épidémie de peste</h1>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: "red" }}></div>
            <span>Nombre élevé de cas</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: "orange" }}></div>
            <span>Nombre moyen de cas</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: "green" }}></div>
            <span>Nombre faible de cas</span>
          </div>
          <button 
            onClick={() => window.open(mapUrl, '_blank')}
            className="fullscreen-button"
          >
            Voir en plein écran
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarteEpidemi;
