import React, { useEffect, useState } from 'react';
import './carte.css';

function CarteCentreDeSoin() {
  const [userLat, setUserLat] = useState(null);
  const [userLon, setUserLon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLat(position.coords.latitude);
          setUserLon(position.coords.longitude);
        },
        (error) => {
          setError("Erreur de géolocalisation : " + error.message);
        }
      );
    } else {
      setError("La géolocalisation n'est pas supportée par ce navigateur.");
    }
  }, []);

  const mapUrl = userLat && userLon
    ? `https://umap.openstreetmap.fr/fr/map/carte-sans-nom_1184412#map=17/${userLat}/${userLon}`
    : null;

  return (
    <div className="section1">
      <div className='cartographie'>
        <div className="carte">
          {error ? (
            <p style={{ color: "red" }}>{error}</p>
          ) : userLat && userLon ? (
            <iframe
              width="100%"
              height="500px"
              allowFullScreen
              allow="geolocation"
              src={mapUrl}
              title="Carte des centres médicaux et hospitaliers de Madagascar"
            ></iframe>
          ) : (
            <p>Localisation en cours...</p>
          )}
        </div>
        <div className="legend">
          <h1>Carte des centres médicaux et hospitaliers</h1>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: "blue" }}></div>
            <span>Centre hospitalier (CHRD, CHRR, CHU)</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: "green" }}></div>
            <span>Centre médicaux (CSB I, CSB II, Case de Santé, Site communautaire)</span>
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

export default CarteCentreDeSoin;