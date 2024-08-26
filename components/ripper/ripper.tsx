'use client'
import { Canvas } from "@react-three/fiber";
import Model from "./model";
import useDimension from "@hooks/useDimension";
import { OrthographicCamera } from "@react-three/drei";

export default function Ripper() {
  const device = useDimension();

  if (!device.width || !device.height) {
    return null;
  }

  const frustumSize = device.height;
  const aspect = device.width / device.height;

  return (
    <div className="absolute top-0 left-0 w-full h-dvh -z-10">
      <Canvas>
        <OrthographicCamera
          makeDefault
          args={[
            (frustumSize * aspect) / -2,
            (frustumSize * aspect) / 2,
            frustumSize / 2,
            frustumSize / -2,
            -1000,
            1000,
          ]}
          position={[0, 0, 2]}
        />
        <Model />
      </Canvas>
    </div>
  );
}
