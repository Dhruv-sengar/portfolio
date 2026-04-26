'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment, Lightformer } from '@react-three/drei';
import * as THREE from 'three';

const GlassKnot = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.5}>
        <torusKnotGeometry args={[1, 0.3, 128, 64]} />
        <MeshTransmissionMaterial 
          backside
          samples={4}
          thickness={0.5}
          chromaticAberration={1}
          anisotropy={0.5}
          distortion={0.5}
          distortionScale={0.5}
          temporalDistortion={0.2}
          color="#ffffff"
          attenuationDistance={1}
          attenuationColor="#ffffff"
        />
      </mesh>
    </Float>
  );
};

export const HeroSculpture = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-70">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" />
        
        <GlassKnot />
        
        <Environment resolution={256}>
          <group rotation={[-Math.PI / 3, 0, 1]}>
            <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
            <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
            <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[5, 1, -1]} scale={2} />
            <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
          </group>
        </Environment>
      </Canvas>
    </div>
  );
};
