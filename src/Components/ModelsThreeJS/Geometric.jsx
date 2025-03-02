import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeJSGeometricModels = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Création de la scène, de la caméra et du renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeeeeee);

    const { clientWidth, clientHeight } = mountRef.current;
    const camera = new THREE.PerspectiveCamera(75, clientWidth / clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(clientWidth, clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Ajout des contrôles d'orbite
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Création des modèles géométriques

    // Cube
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = -2;
    scene.add(cube);

    // Sphère
    const sphereGeometry = new THREE.SphereGeometry(0.75, 32, 32);
    const sphereMaterial = new THREE.MeshNormalMaterial();
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = 0;
    scene.add(sphere);

    // Cône
    const coneGeometry = new THREE.ConeGeometry(0.75, 1.5, 32);
    const coneMaterial = new THREE.MeshNormalMaterial();
    const cone = new THREE.Mesh(coneGeometry, coneMaterial);
    cone.position.x = 2;
    scene.add(cone);

    // Boucle d'animation
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;

      cone.rotation.x += 0.01;
      cone.rotation.y += 0.01;

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Gestion du redimensionnement de la fenêtre
    const handleResize = () => {
      const { clientWidth, clientHeight } = mountRef.current;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Nettoyage à la destruction du composant
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />
  );
};

export default ThreeJSGeometricModels;
