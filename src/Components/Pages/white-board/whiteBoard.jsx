import React, { useState, useRef, useEffect } from 'react';
import { FaPhoneAlt, FaVideo, FaDesktop } from 'react-icons/fa';
import { Tldraw } from 'tldraw'; 
import 'tldraw/tldraw.css';
import Webcam from 'react-webcam';
import "../../../assets/css/Draw.css";
import useAudio from '../../../assets/Animations/Call';

const Whiteboard = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);
  const webcamRef = useRef(null);
  const screenStreamRef = useRef(null); // Référence pour le flux d'écran
  const videoRef = useRef(null); // Référence pour l'élément vidéo de l'appel

  const { isPlaying, play, pause } = useAudio();
  useEffect(() => {
    if (isCameraOpen) {
      // Demander l'accès à la caméra
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
          setMediaStream(stream);
          if (videoRef.current) {
            videoRef.current.srcObject = stream; // Afficher le flux dans l'élément vidéo
          }
          play(); 
        })
        .catch(error => {
          console.error("Erreur lors de l'accès à la caméra: ", error);
        });
        pause();
    } else {
      // Si la caméra est fermée, arrêtez le flux
      if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
      }
    }
  }, [isCameraOpen]);

  // Fonction pour basculer la caméra
  const toggleCamera = () => {
    setIsCameraOpen(prev => !prev);
  };

  // Fonction pour démarrer/arrêter le partage d'écran
  const toggleScreenSharing = async () => {
    if (isScreenSharing) {
      // Arrêter le partage d'écran
      const tracks = screenStreamRef.current.getTracks();
      tracks.forEach(track => track.stop());
      setIsScreenSharing(false);
    } else {
      try {
        // Demander l'accès à l'écran
        const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        screenStreamRef.current = screenStream;
        if (videoRef.current) {
          videoRef.current.srcObject = screenStream; // Afficher l'écran partagé dans l'élément vidéo
        }
        setIsScreenSharing(true);
      } catch (err) {
        console.error("Erreur lors du partage d'écran: ", err);
      }
    }
  };

  return (
    <div className="containerDraw" style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* Section du Tldraw à gauche */}
      <div style={{ width: '50%', height: '80vh', backgroundColor: '#16a34a' }}>
        <Tldraw persistenceKey="whiteboard-storage" />
      </div>

      {/* Section du bouton et webcam à droite */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto',
        }}
      >
        {/* Bouton "Consulter un médecin" */}
        <button
          onClick={toggleCamera}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#16a34a',
            color: 'white',
            padding: '15px 30px',
            fontSize: '16px',
            borderRadius: '30px',
            border: 'none',
            cursor: 'pointer',
            marginBottom: '20px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            width: '300px',
            gap: '10px',
          }}
        >
          <FaVideo size={20} /> Consulter un médecin
        </button>

        {/* Webcam ou partage d'écran */}
        <div style={{ width: '100%', height: '80vh', position: 'relative' }}>
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            width="100%"
            height="100%"
            style={{ objectFit: 'cover' }}
          />
          {/* Bouton de partage d'écran */}
          <button
            onClick={toggleScreenSharing}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: '#4a90e2',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              borderRadius: '30px',
              cursor: 'pointer',
            }}
          >
            <FaDesktop size={20} />
          </button>

          {/* Bouton de décrochage */}
          <button
            onClick={toggleCamera}
            style={{
              position: 'absolute',
              top: '10px',
              right: '5px',
              width: '80px',
              backgroundColor: '#ff4d4d',
              color: 'white',
              border: 'none',
              padding: '10px',
              borderRadius: '30px',
              cursor: 'pointer',
            }}
          >
            <FaPhoneAlt size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Whiteboard;
