'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const DNAHelix = () => {
  const groupRef = useRef<THREE.Group>(null!);

  const particles = useMemo(() => {
    const temp = [];
    const count = 40;
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const angle = t * Math.PI * 4;
      const y = (t - 0.5) * 8;
      
      // Strand 1
      temp.push({
        position: [Math.cos(angle) * 1.5, y, Math.sin(angle) * 1.5],
        color: '#ffffff'
      });
      // Strand 2
      temp.push({
        position: [Math.cos(angle + Math.PI) * 1.5, y, Math.sin(angle + Math.PI) * 1.5],
        color: '#aaaaaa'
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((props, i) => (
        <Sphere key={i} position={props.position as [number, number, number]} args={[0.1, 16, 16]}>
          <meshStandardMaterial color={props.color} emissive={props.color} emissiveIntensity={0.5} />
        </Sphere>
      ))}
      {/* Connecting lines */}
      {Array.from({ length: 40 }).map((_, i) => {
        const t = i / 40;
        const angle = t * Math.PI * 4;
        const y = (t - 0.5) * 8;
        const p1 = new THREE.Vector3(Math.cos(angle) * 1.5, y, Math.sin(angle) * 1.5);
        const p2 = new THREE.Vector3(Math.cos(angle + Math.PI) * 1.5, y, Math.sin(angle + Math.PI) * 1.5);
        
        return (
          <line key={`line-${i}`}>
            <bufferGeometry attach="geometry">
              <bufferAttribute 
                attach="attributes-position" 
                count={2} 
                array={new Float32Array([...p1.toArray(), ...p2.toArray()])} 
                itemSize={3} 
              />
            </bufferGeometry>
            <lineBasicMaterial attach="material" color="#ffffff" transparent opacity={0.1} />
          </line>
        )
      })}
    </group>
  );
};

export const JourneyGeometry = () => {
  return (
    <div className="absolute left-0 top-0 w-full h-full pointer-events-none opacity-20 z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <DNAHelix />
        </Float>
      </Canvas>
    </div>
  );
};
