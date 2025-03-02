import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function ModelRobot(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('/models/tour_ia.glb');
    const { actions } = useAnimations(animations, group);
  
    return (
      <group 
      ref={group} 
      {...props} 
      dispose={null}
      position={[0, -0.8, 0]} // Ajuste la hauteur
      rotation={[0, Math.PI, 0]} // Ajuste la rotation si besoin
      scale={[1.7, 1.7, 1.7]} // Réduit la taille pour éviter un modèle trop grand
      >
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="bb57980ed1b9400a920cbf6dd7f551b4fbx" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Object_2">
                <group name="RootNode">
                  <group name="Character" rotation={[-Math.PI / 2, 0, 0]} scale={1}>
                    <group name="Object_5">
                      <primitive object={nodes._rootJoint} />
                      <skinnedMesh
                        name="Object_16"
                        geometry={nodes.Object_16.geometry}
                        material={materials['Material.001']}
                        skeleton={nodes.Object_16.skeleton}
                      />
                      <skinnedMesh
                        name="Object_17"
                        geometry={nodes.Object_17.geometry}
                        material={materials['Material.002']}
                        skeleton={nodes.Object_17.skeleton}
                      />
                      <skinnedMesh
                        name="Object_19"
                        geometry={nodes.Object_19.geometry}
                        material={materials.Material}
                        skeleton={nodes.Object_19.skeleton}
                      />
                      <group name="Object_15" rotation={[-Math.PI / 2, 0, 0]} scale={1} />
                      <group name="Object_18" rotation={[-Math.PI / 2, 0, 0]} scale={1} />
                    </group>
                  </group>
                  <group name="Avatar" rotation={[-Math.PI / 2, 0, 0]} scale={1} />
                  <group name="Face" rotation={[-Math.PI / 2, 0, 0]} scale={1} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    );
  }
  
  useGLTF.preload('/models/tour_ia.glb');
  