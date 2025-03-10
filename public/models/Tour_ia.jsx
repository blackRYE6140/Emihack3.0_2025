/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 tour_ia.glb --transformed 
Author: Diego Nachon (https://sketchfab.com/diegonachon)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/tour-ia-571baf9cfcd74cc69eaa22d423678b25
Title: Tour IA
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/tour_ia.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="bb57980ed1b9400a920cbf6dd7f551b4fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Character" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_15" rotation={[-Math.PI / 2, 0, 0]} scale={52.526} />
                    <group name="Object_18" rotation={[-Math.PI / 2, 0, 0]} scale={52.571} />
                    <skinnedMesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials['Material.001']} skeleton={nodes.Object_16.skeleton} />
                    <skinnedMesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials['Material.002']} skeleton={nodes.Object_17.skeleton} />
                    <skinnedMesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials.Material} skeleton={nodes.Object_19.skeleton} />
                  </group>
                </group>
                <group name="Avatar" rotation={[-Math.PI / 2, 0, 0]} scale={52.526} />
                <group name="Face" rotation={[-Math.PI / 2, 0, 0]} scale={52.571} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/tour_ia.glb')
