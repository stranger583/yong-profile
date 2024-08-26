"use client";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import Gradient from "@components/gradient/gradient";

function GradientBg() {
  const [totalHeight, setTotalHeight] = useState(0);

  useEffect(() => {
    const resize = () => {
      const pageHeight = document.documentElement.scrollHeight;
      setTotalHeight(pageHeight);
    };
    resize()
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div
      className="absolute top-0 left-0 w-full h-full tablet:h-dvh -z-10"
      style={{ height: totalHeight }}
    >
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <Gradient />
      </Canvas>
    </div>
  );
}

export default GradientBg;
