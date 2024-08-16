"use client";
import React from "react";
import { useRef } from "react";
import { vertex } from "./vertex";
import { fragment } from "./fragment";
import { useFrame } from "@react-three/fiber";


function Gradient() {
  const materialRef = useRef<any>(null);
  
  useFrame((state, delta) => {
    if (materialRef.current && materialRef.current.uniforms) {
      materialRef.current.uniforms.time.value += delta * 0.5; // 不断增加 time 值
    }
  });
  return (
    <mesh scale={[1, 1, 5]}>
      <boxGeometry args={[8, 8, 1]} />
      <shaderMaterial
        ref={materialRef}
        args={[
          {
            uniforms: {
              time: { value: 0.01 },
            },
            vertexShader: vertex,
            fragmentShader: fragment,
          },
        ]}
      />
    </mesh>
  );
}

export default Gradient;
