'use client';

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField: React.FC = (props) => {
  const points = useRef<THREE.Points>(null!);

  useEffect(() => {
    // Create random sphere positions
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 1.2;
      const z = (Math.random() - 0.5) * 2.4;

      posArray[i] = Math.cos(angle) * radius;
      posArray[i + 1] = Math.sin(angle) * radius;
      posArray[i + 2] = z;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    if (points.current) {
      points.current.geometry = particlesGeometry;
    }
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x -= 0.001;
      points.current.rotation.y -= 0.002;
      
      // Mouse interaction
      const targetX = state.pointer.x * 0.2;
      const targetY = state.pointer.y * 0.2;
      
      points.current.rotation.y += (targetX - points.current.rotation.y) * 0.05;
      points.current.rotation.x += (-targetY - points.current.rotation.x) * 0.05;
    }
  });

  return (
    <group>
      <Points ref={points} {...props}>
        <PointMaterial
          transparent
          color="#60a5fa"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// ParticleField.displayName = 'ParticleField';

export const ParticleScene: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 1.5], fov: 75 }}
      style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 2]}
    >
      <ParticleField />
    </Canvas>
  );
};
