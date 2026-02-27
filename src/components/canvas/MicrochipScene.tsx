"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useScrollStore } from "@/store/useScrollStore";

export function MicrochipScene() {
    const group = useRef<THREE.Group>(null);
    const coreRef = useRef<THREE.Mesh>(null);
    const progress = useScrollStore((state) => state.progress);

    const pinCount = 300;
    const dummy = useMemo(() => new THREE.Object3D(), []);
    const pinsRef = useRef<THREE.InstancedMesh>(null);

    useFrame((state, delta) => {
        if (!group.current || !pinsRef.current || !coreRef.current) return;

        // --- HORIZONTAL PANNING LOGIC ---
        // Scene 1 (0): Center
        // Scene 2 (~0.25): TEXT on Right -> 3D on LEFT (-4)
        // Scene 3 (~0.50): TEXT on Left -> 3D on RIGHT (+4)
        // Scene 4 (~0.75): TEXT on Right -> 3D on LEFT (-4)
        // Scene 5 (1.00): Center (0)
        let targetX = 0;

        if (progress > 0.05 && progress < 0.95) {
            if (progress < 0.35) {
                targetX = THREE.MathUtils.mapLinear(progress, 0.05, 0.25, 0, -4.5);
            } else if (progress < 0.6) {
                targetX = THREE.MathUtils.mapLinear(progress, 0.35, 0.5, -4.5, 4.5);
            } else if (progress < 0.85) {
                targetX = THREE.MathUtils.mapLinear(progress, 0.6, 0.75, 4.5, -4.5);
            } else {
                targetX = THREE.MathUtils.mapLinear(progress, 0.85, 0.95, -4.5, 0);
            }
            // clamp
            targetX = Math.max(-4.5, Math.min(4.5, targetX));
        }

        const targetZ = THREE.MathUtils.lerp(0, -15, progress * 1.5);
        const time = state.clock.getElapsedTime();
        const targetRotX = THREE.MathUtils.lerp(0, Math.PI / 2, progress);
        const targetRotY = time * 0.2 + (progress * Math.PI * 2);

        group.current.position.x = THREE.MathUtils.damp(group.current.position.x, targetX, 4, delta);
        group.current.position.z = THREE.MathUtils.damp(group.current.position.z, targetZ, 4, delta);
        group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetRotX, 4, delta);
        group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetRotY, 4, delta);

        const coreScale = 1 + Math.sin(time * 3) * 0.05;
        coreRef.current.scale.set(coreScale, coreScale, coreScale);

        // --- INSTANCED NODES LOGIC ---
        // Interpolators
        // Fan out (0 to 0.4) -> peaks at 1 around 0.25
        let fanOut = 0;
        if (progress < 0.45) {
            fanOut = Math.sin(Math.max(0, Math.min(1, progress / 0.45)) * Math.PI);
        }

        // SDK Pillars (0.4 to 0.7) -> peaks at 1 around 0.55
        let pillarMode = 0;
        if (progress > 0.35 && progress < 0.8) {
            pillarMode = Math.sin(Math.max(0, Math.min(1, (progress - 0.35) / 0.45)) * Math.PI);
        }

        // Network expansion (0.7 -> 1.0) -> goes to 1 at the end
        let networkMode = 0;
        if (progress > 0.6) {
            networkMode = Math.max(0, Math.min(1, (progress - 0.6) / 0.4));
        }

        for (let i = 0; i < pinCount; i++) {
            // spherical distribution for a "network core" Look
            const phi = Math.acos(-1 + (2 * i) / pinCount);
            const theta = Math.sqrt(pinCount * Math.PI) * phi;

            // Base tight spherical position
            const baseR = 2.5;
            const bx = baseR * Math.cos(theta) * Math.sin(phi);
            const by = baseR * Math.sin(theta) * Math.sin(phi);
            const bz = baseR * Math.cos(phi);

            // Calculate final position
            let x = bx;
            let y = by;
            let z = bz;

            // Apply Fan Out (Parallelism)
            x += (bx * fanOut * 3);
            z += (bz * fanOut * 3);

            // Apply Pillar Mode (Transpilation)
            const pillarY = Math.abs(bx * bz) * 0.5;
            y = THREE.MathUtils.lerp(y, pillarY, pillarMode);
            const targetScaleY = THREE.MathUtils.lerp(1, 4, pillarMode);

            // Apply Network Expansion (Finality)
            x += (bx * networkMode * 6);
            y += (by * networkMode * 6);
            z += (bz * networkMode * 6);

            // gentle floating bounce
            y += Math.sin(time * 2 + i) * 0.1;

            dummy.position.set(x, y, z);
            dummy.scale.y = targetScaleY;

            dummy.updateMatrix();
            pinsRef.current.setMatrixAt(i, dummy.matrix);

            // Color transition logic
            const color = new THREE.Color();
            if (progress > 0.4 && progress < 0.7) {
                color.setHex(0xFF6B00); // Sol2Zig Orange
            } else if (progress >= 0.7) {
                color.setHex(0x00F0FF); // Consensus Cyan
            } else {
                color.setHex(0x00F0FF); // Parallelism Cyan
            }

            // Add pulse variation to colors
            const pulse = (Math.sin(time * 5 + i) + 1) * 0.5;
            color.multiplyScalar(0.5 + pulse * 0.5);

            pinsRef.current.setColorAt(i, color);
        }
        pinsRef.current.instanceMatrix.needsUpdate = true;
        if (pinsRef.current.instanceColor) pinsRef.current.instanceColor.needsUpdate = true;
    });

    return (
        <group ref={group}>
            {/* The Central Abstract Core (Replaces Microchip) */}
            <mesh ref={coreRef}>
                <icosahedronGeometry args={[1.5, 1]} />
                <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.1} wireframe={false} />
            </mesh>

            {/* Inner Core Energy */}
            <mesh>
                <icosahedronGeometry args={[1.3, 2]} />
                <meshBasicMaterial color="#00F0FF" toneMapped={false} wireframe opacity={0.3} transparent />
            </mesh>

            {/* Instanced Fragments/Nodes */}
            <instancedMesh ref={pinsRef} args={[undefined, undefined, pinCount]}>
                <boxGeometry args={[0.1, 0.1, 0.1]} />
                <meshBasicMaterial toneMapped={false} />
            </instancedMesh>
        </group>
    );
}
