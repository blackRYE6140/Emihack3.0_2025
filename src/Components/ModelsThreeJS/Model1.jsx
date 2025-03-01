import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Model1(props) {
  const { nodes, materials } = useGLTF('/models/low_poly_nature-transformed.glb');
  const modelRef = useRef();

    useFrame((state)=>{
        modelRef.current.position.y = -2.2 + Math.sin(state.clock.elapsedTime) * 0.15
    })
 

  return (
    <group
      {...props}
      ref={modelRef} 
      dispose={null}
      position={[-0.5, -10, 0]}
      scale={[0.13, 0.13, 0.13]}
    >
      <mesh
        name="Object_2"
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.PaletteMaterial001}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="Object_11"
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.PaletteMaterial002}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="Object_18"
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials.PaletteMaterial003}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/models/low_poly_nature-transformed.glb');
