'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const Starfield = () => {
  const ref = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <group ref={ref}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={200} scale={12} size={2} speed={0.4} opacity={0.2} color="#ffffff" />
    </group>
  );
};

export const SpaceBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-black pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Starfield />
      </Canvas>
      {/* Subtle nebula gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.03),transparent_50%)]" />
    </div>
  );
};
