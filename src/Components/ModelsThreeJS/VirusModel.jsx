import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function ModelVirus(props) {
  const { nodes, materials } = useGLTF('/models/virus.glb');
  return (
    <group {...props} dispose={null} position={[0, -0.9, 0]} rotation={[0.25, 0, 0]} scale={[0.40, 0.40, 0.37]}>
      <mesh
        name="Object_2"
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials['Scene_-_Root']}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/models/virus.glb');

