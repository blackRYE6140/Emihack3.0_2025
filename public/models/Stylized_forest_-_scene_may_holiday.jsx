/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 stylized_forest_-_scene_may_holiday.glb --transform 
Files: stylized_forest_-_scene_may_holiday.glb [12.08MB] > C:\Users\Ismael\Desktop\Template de réalité augmenté\frontend\public\models\stylized_forest_-_scene_may_holiday-transformed.glb [679.45KB] (94%)
Author: borsh_and (https://sketchfab.com/borsh_and)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/stylized-forest-scene-may-holiday-c4baeda6e099461ab507b48245609eae
Title: Stylized forest - Scene "May holiday"
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/stylized_forest_-_scene_may_holiday-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Soil_soil_0.geometry} material={materials.soil} position={[0.027, -0.223, -0.004]} rotation={[Math.PI / 2, 0, 2.755]} scale={[-5.576, 5.576, 3.172]} />
      <mesh geometry={nodes.Circle_Birch_tree_0.geometry} material={materials.Birch_tree} position={[0.179, -0.212, -4.454]} rotation={[-1.659, -0.081, -0.383]} scale={0.762} />
      <mesh geometry={nodes.Circle_foliage_base_color_0.geometry} material={materials.foliage_base_color} position={[0.179, -0.212, -4.454]} rotation={[-1.659, -0.081, -0.383]} scale={0.762} />
      <mesh geometry={nodes.Circle001_Fir_0.geometry} material={materials.material} position={[1.677, 0.01, -1.785]} rotation={[-1.606, 0.019, -1.087]} scale={0.842} />
      <mesh geometry={nodes.Circle001_Line__0.geometry} material={materials.Line} position={[1.677, 0.01, -1.785]} rotation={[-1.606, 0.019, -1.087]} scale={0.842} />
      <mesh geometry={nodes.Circle002_Wood_0.geometry} material={materials.Wood} position={[0.393, -0.064, -3.273]} rotation={[-1.771, -0.041, -1.279]} scale={0.842} />
      <mesh geometry={nodes.Cube_Stones_0.geometry} material={materials.Stones} position={[2.213, 0.195, -2.937]} rotation={[-1.685, 0.016, -1.685]} scale={0.842} />
      <mesh geometry={nodes.Cube003_Vaz_2107_0.geometry} material={materials.Vaz_2107} position={[-0.873, 0.034, -1.002]} rotation={[-2.124, 0.473, -0.508]} scale={0.065} />
      <mesh geometry={nodes.Barbecue_Barbecue_0.geometry} material={materials.Barbecue} position={[-1.667, 0.463, -0.291]} rotation={[-1.51, -0.028, -0.445]} scale={[1.64, 1.64, 1.312]} />
      <mesh geometry={nodes.Plane_Brick_0.geometry} material={materials.Brick} position={[-0.821, 0.168, -1.265]} rotation={[-1.6, 0.03, 2.312]} scale={0.872} />
      <mesh geometry={nodes.Smoke_albedo_Smoke_albedo_0.geometry} material={materials.Smoke_albedo} position={[-1.778, 1.17, -0.302]} rotation={[-3.086, -1.282, 1.739]} scale={1.046} />
      <mesh geometry={nodes.Fire_albedo_Fire_albedo_0.geometry} material={materials.Fire_albedo} position={[-1.767, 0.901, -0.296]} rotation={[-2.499, -0.931, -2.642]} scale={0.993} />
      <mesh geometry={nodes.grass_albedo002_grass_0.geometry} material={materials.grass} position={[-1.86, 0.067, 3.678]} rotation={[0.243, -0.615, 0.096]} scale={[0.597, 0.703, 0.597]} />
    </group>
  )
}

useGLTF.preload('/stylized_forest_-_scene_may_holiday-transformed.glb')
