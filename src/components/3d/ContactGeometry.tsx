'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Torus } from '@react-three/drei';
import * as THREE from 'three';

const CommunicationRings = () => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      
      // Animate individual rings
      groupRef.current.children.forEach((child, i) => {
        child.rotation.x = Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.5;
        child.rotation.y = Math.cos(state.clock.elapsedTime * 0.3 + i) * 0.5;
      });
    }
  });

  return (
    <group ref={groupRef}>
      <Torus args={[2, 0.02, 16, 100]} rotation={[Math.PI/2, 0, 0]}>
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.8} />
      </Torus>
      <Torus args={[1.5, 0.05, 16, 100]} rotation={[Math.PI/3, Math.PI/4, 0]}>
        <meshStandardMaterial color="#aaaaaa" transparent opacity={0.5} />
      </Torus>
      <Torus args={[1, 0.08, 16, 100]} rotation={[-Math.PI/4, Math.PI/2, 0]}>
        <meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.2} />
      </Torus>
      
      {/* Central Core */}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
      </mesh>
    </group>
  );
};

export const ContactGeometry = () => {
  return (
    <div className="absolute right-0 top-1/4 w-full md:w-1/2 h-[500px] pointer-events-none opacity-40 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" />
        <Float speed={3} rotationIntensity={1} floatIntensity={2}>
          <CommunicationRings />
        </Float>
      </Canvas>
    </div>
  );
};
