'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Sphere, MeshDistortMaterial, Line } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
  { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', orbit: 2.5, speed: 0.5, offsetAngle: 0 },
  { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', orbit: 2.5, speed: 0.5, offsetAngle: Math.PI },
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', orbit: 3.5, speed: 0.4, offsetAngle: 0 },
  { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', orbit: 3.5, speed: 0.4, offsetAngle: Math.PI },
  { name: 'Flask', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', orbit: 4.5, speed: 0.3, offsetAngle: 0 },
  { name: 'FastAPI', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', orbit: 4.5, speed: 0.3, offsetAngle: Math.PI },
  { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', orbit: 5.5, speed: 0.2, offsetAngle: 0 },
  { name: 'Kubernetes', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', orbit: 5.5, speed: 0.2, offsetAngle: Math.PI },
  { name: 'Pandas', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', orbit: 6.5, speed: 0.1, offsetAngle: 0 },
  { name: 'Scikit-Learn', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg', orbit: 6.5, speed: 0.1, offsetAngle: Math.PI },
];

const OrbitingIcon = ({ skill, offset }: { skill: any, offset: number }) => {
  const ref = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    const t = state.clock.elapsedTime * skill.speed + skill.offsetAngle;
    if (ref.current) {
      ref.current.position.x = Math.cos(t) * skill.orbit;
      ref.current.position.z = Math.sin(t) * skill.orbit;
    }
  });

  return (
    <group ref={ref}>
      <Html center className="pointer-events-none">
        <div className="flex flex-col items-center justify-center transition-transform hover:scale-125 duration-300">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center p-3 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <img src={skill.url} alt={skill.name} className="w-full h-full object-contain filter drop-shadow-lg" />
          </div>
          <span className="mt-2 text-xs font-bold text-white/50 uppercase tracking-widest">{skill.name}</span>
        </div>
      </Html>
    </group>
  );
};

const OrbitRings = () => {
  const rings = [2.5, 3.5, 4.5, 5.5, 6.5];
  
  return (
    <group>
      {rings.map((r, i) => {
        const points = [];
        for(let j=0; j<=64; j++) {
          const angle = (j / 64) * Math.PI * 2;
          points.push(new THREE.Vector3(Math.cos(angle)*r, 0, Math.sin(angle)*r));
        }
        return (
          <Line key={i} points={points} color="#ffffff" opacity={0.05} transparent lineWidth={1} />
        )
      })}
    </group>
  )
}

const SolarSystem = () => {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (group.current) {
      // Gentle tilt and rotation of the entire system
      group.current.rotation.x = 0.4 + Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <group ref={group}>
      {/* Central Black Hole / Core */}
      <Sphere args={[0.8, 64, 64]}>
        <MeshDistortMaterial
          color="#000000"
          attach="material"
          distort={0.2}
          speed={2}
          roughness={0.1}
          metalness={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </Sphere>

      {/* Glow behind core */}
      <Sphere args={[0.9, 32, 32]}>
        <meshBasicMaterial color="#ffffff" transparent opacity={0.05} />
      </Sphere>

      <OrbitRings />

      {skills.map((skill, i) => (
        <OrbitingIcon key={i} skill={skill} offset={0} />
      ))}
    </group>
  );
};

export const SkillCubeCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 5, 12], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={2} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#444444" />
        
        <SolarSystem />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          enableRotate={true}
          autoRotate 
          autoRotateSpeed={0.5} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
};
