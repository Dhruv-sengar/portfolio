'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const ElegantGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Icosahedron ref={meshRef} args={[2, 0]} scale={1.2}>
        <meshStandardMaterial 
          color="#ffffff" 
          wireframe 
          transparent 
          opacity={0.3} 
          emissive="#ffffff" 
          emissiveIntensity={0.5}
        />
      </Icosahedron>
      <Icosahedron args={[1.5, 3]}>
        <MeshDistortMaterial
          color="#000000"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={1}
        />
      </Icosahedron>
    </Float>
  );
};

export const AboutGeometry = () => {
  return (
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-full md:w-1/2 h-[600px] pointer-events-none opacity-50">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <ElegantGeometry />
      </Canvas>
    </div>
  );
};
