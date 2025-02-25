import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function ModelLand(props) {
  const { nodes, materials } = useGLTF('/models/stylized_forest_-_scene_may_holiday-transformed.glb')
  return (
    <group {...props} 
    dispose={null} 
    position={[0, -0.9 , 0]}
    rotation={[0.25 , 0 , 0]}
    scale={[0.40, 0.40, 0.37]}
>
      <mesh
        name="Soil_soil_0"
        castShadow
        receiveShadow
        geometry={nodes.Soil_soil_0.geometry}
        material={materials.soil}
        position={[-1.057,0,0]}
        rotation={[0,0.224,0]}
        scale={0.832}
      />
      <mesh
        name="Circle_Birch_tree_0"
        castShadow
        receiveShadow
        geometry={nodes.Circle_Birch_tree_0.geometry}
        material={materials.Birch_tree}
        position={[0.179, -0.212, -4.454]}
        rotation={[-1.659, -0.081, -0.383]}
        scale={0.762}
      />
      <mesh
        name="Circle_foliage_base_color_0"
        castShadow
        receiveShadow
        geometry={nodes.Circle_foliage_base_color_0.geometry}
        material={materials.foliage_base_color}
        position={[0.179, -0.212, -4.454]}
        rotation={[-1.659, -0.081, -0.383]}
        scale={0.762}
      />
      <mesh
        name="Circle001_Fir_0"
        castShadow
        receiveShadow
        geometry={nodes.Circle001_Fir_0.geometry}
        material={materials.material}
        position={[1.677, 0.01, -1.785]}
        rotation={[-1.606, 0.019, -1.087]}
        scale={0.842}
      />
      <mesh
        name="Circle001_Line__0"
        castShadow
        receiveShadow
        geometry={nodes.Circle001_Line__0.geometry}
        material={materials.Line}
        position={[1.677, 0.01, -1.785]}
        rotation={[-1.606, 0.019, -1.087]}
        scale={0.842}
      />
      <mesh
        name="Circle002_Wood_0"
        castShadow
        receiveShadow
        geometry={nodes.Circle002_Wood_0.geometry}
        material={materials.Wood}
        position={[0.393, -0.064, -3.273]}
        rotation={[-1.771, -0.041, -1.279]}
        scale={0.842}
      />
      <mesh
        name="Cube_Stones_0"
        castShadow
        receiveShadow
        geometry={nodes.Cube_Stones_0.geometry}
        material={materials.Stones}
        position={[2.213, 0.195, -2.937]}
        rotation={[-1.685, 0.016, -1.685]}
        scale={0.842}
      />
      <mesh
        name="Cube003_Vaz_2107_0"
        castShadow
        receiveShadow
        geometry={nodes.Cube003_Vaz_2107_0.geometry}
        material={materials.Vaz_2107}
        position={[-0.873, 0.034, -1.002]}
        rotation={[-2.124, 0.473, -0.508]}
        scale={0.065}
      />
      <mesh
        name="Barbecue_Barbecue_0"
        castShadow
        receiveShadow
        geometry={nodes.Barbecue_Barbecue_0.geometry}
        material={materials.Barbecue}
        position={[-1.667, 0.463, -0.291]}
        rotation={[-1.51, -0.028, -0.445]}
        scale={[1.64, 1.64, 1.312]}
      />
      <mesh
        name="Plane_Brick_0"
        castShadow
        receiveShadow
        geometry={nodes.Plane_Brick_0.geometry}
        material={materials.Brick}
        position={[-0.821, 0.168, -1.265]}
        rotation={[-1.6, 0.03, 2.312]}
        scale={0.872}
      />
      <mesh
        name="Smoke_albedo_Smoke_albedo_0"
        castShadow
        receiveShadow
        geometry={nodes.Smoke_albedo_Smoke_albedo_0.geometry}
        material={materials.Smoke_albedo}
        position={[-1.778, 1.17, -0.302]}
        rotation={[-3.086, -1.282, 1.739]}
        scale={1.046}
      />
      <mesh
        name="Fire_albedo_Fire_albedo_0"
        castShadow
        receiveShadow
        geometry={nodes.Fire_albedo_Fire_albedo_0.geometry}
        material={materials.Fire_albedo}
        position={[-1.767, 0.901, -0.296]}
        rotation={[-2.499, -0.931, -2.642]}
        scale={0.993}
      />
      <mesh
        name="grass_albedo002_grass_0"
        castShadow
        receiveShadow
        geometry={nodes.grass_albedo002_grass_0.geometry}
        material={materials.grass}
        position={[-1.86, 0.067, 3.678]}
        rotation={[0.243, -0.615, 0.096]}
        scale={[0.597, 0.703, 0.597]}
      />
    </group>
  )
}

useGLTF.preload('/models/stylized_forest_-_scene_may_holiday-transformed.glb')