"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Suspense } from "react";
import { MicrochipScene } from "./MicrochipScene";

export default function SceneCanvas() {
    return (
        <Canvas
            gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }}
            dpr={[1, 1.5]}
            camera={{ position: [0, 5, 12], fov: 45 }}
        >
            <color attach="background" args={["#050505"]} />

            <Suspense fallback={null}>
                <PerspectiveCamera makeDefault position={[0, 8, 12]} rotation={[-Math.PI / 6, 0, 0]} />
                <Environment preset="city" />

                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#00F0FF" />
                <pointLight position={[-10, 5, -10]} intensity={1} color="#FF6B00" />

                {/* Core dynamic scene reacting to scroll */}
                <MicrochipScene />

                {/* High performance bloom for glowing circuits */}
                <EffectComposer>
                    <Bloom
                        luminanceThreshold={0.5}
                        mipmapBlur
                        intensity={1.2}
                    />
                </EffectComposer>
            </Suspense>
        </Canvas>
    );
}
