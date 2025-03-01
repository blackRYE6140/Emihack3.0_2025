import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

const RenderModel = ({ children}) => {
    return (
        <div>
            <Canvas style={{width : "100%" , height : "100%"}}>
                <ambientLight intensity={0.7} />
                <directionalLight position={[5, 10, 5]} intensity={1.5} />
                <spotLight position={[0, 5, 0]} intensity={1} angle={0.3} penumbra={1} />
                <Suspense fallBack={null}>
                    {children}
                </Suspense>
                <Environment preset="sunset" />
            </Canvas>

        </div>
    )
}
export default RenderModel;