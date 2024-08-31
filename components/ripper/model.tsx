
'use client'
import { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useFBO, useTexture } from "@react-three/drei";
import * as THREE from "three";
import useMouse from "@hooks/useMouse";
import useDimension from "@hooks/useDimension";
import { vertex } from "./vertex";
import { fragment } from "./fragment";
import brush from "@public/images/ripples-brush.png";
import fish from "@public/images/fish.webp";

export default function Model() {
  const { viewport } = useThree();
  const texture = useTexture(brush.src);
  const meshRefs = useRef<THREE.Mesh[]>([]);
  const [meshes, setMeshes] = useState<JSX.Element[]>([]);
  const mouse = useMouse();
  const device = useDimension();
  const [prevMouse, setPrevMouse] = useState({ x: 0, y: 0 });
  const [currentWave, setCurrentWave] = useState(0);
  const { gl, camera } = useThree();

  const scene = new THREE.Scene();
  const max = 100;

  const uniforms = useRef<any>({
    uDisplacement: { value: null },
    uTexture: { value: null },
    winResolution: {
      value: new THREE.Vector2(0, 0),
    },
  });

  const fboBase = useFBO(device.width, device.height);
  const fboTexture = useFBO(device.width, device.height);

  const { scene: imageScene, camera: imageCamera } = Images(viewport);

  useEffect(() => {
    const generatedMeshes = Array.from({ length: max }).map((_, i) => (
      <mesh
        key={i}
        position={[0, 0, 0]}
        // @ts-ignore
        ref={(el) => ((meshRefs.current)[i] = el)}
        rotation={[0, 0, Math.random()]}
        visible={false}
      >
        <planeGeometry args={[60, 60, 1, 1]} />
        <meshBasicMaterial transparent={true} map={texture} />
      </mesh>
    ));
    setMeshes(generatedMeshes);
  }, [texture]);

  function setNewWave(x: number, y: number, currentWave: number) {
    const mesh = meshRefs.current?.[currentWave];
    if (mesh) {
      mesh.position.x = x;
      mesh.position.y = y;
      mesh.visible = true;
      (mesh.material as THREE.Material).opacity = 1;
      mesh.scale.x = 1.75;
      mesh.scale.y = 1.75;
    }
  }

  function trackMousePos(x: number, y: number) {
    if (Math.abs(x - prevMouse.x) > 0.1 || Math.abs(y - prevMouse.y) > 0.1) {
      setCurrentWave((currentWave + 1) % max);
      setNewWave(x, y, currentWave);
    }
    setPrevMouse({ x: x, y: y });
  }

  useFrame(({ gl, scene: finalScene }) => {
    const x = mouse.x - device.width / 2;
    const y = -mouse.y + device.height / 2;
    trackMousePos(x, y);
    meshRefs.current?.forEach((mesh) => {
      if (mesh.visible) {
        mesh.rotation.z += 0.025;
        (mesh.material as THREE.Material).opacity *= 0.95;
        mesh.scale.x = 0.98 * mesh.scale.x + 0.155;
        mesh.scale.y = 0.98 * mesh.scale.y + 0.155;
      }
    });

    if (device.width > 0 && device.height > 0) {
      // uniforms.current.uTexture.value = imageTexture;

      // Render to base texture with meshes
      gl.setRenderTarget(fboBase);
      gl.clear();
      meshRefs.current?.forEach((mesh) => {
        if (mesh.visible) {
          scene.add(mesh);
        }
      });
      gl.render(scene, camera);
      meshRefs.current?.forEach((mesh) => {
        if (mesh.visible) {
          scene.remove(mesh);
        }
      });
      uniforms.current.uTexture.value = fboTexture.texture;

      gl.setRenderTarget(fboTexture);
      gl.render(imageScene, imageCamera);
      uniforms.current.uDisplacement.value = fboBase.texture;

      gl.setRenderTarget(null);
      gl.render(finalScene, camera);

      uniforms.current.winResolution.value = new THREE.Vector2(
        device.width,
        device.height
      ).multiplyScalar(device.pixelRatio);
    }
  }, 1);

  function Images(viewport: { width: number, height: number }) {
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      viewport.width / -2,
      viewport.width / 2,
      viewport.height / 2,
      viewport.height / -2,
      -1000,
      1000
    );
    camera.position.z = 2;
    scene.add(camera);
    const geometry = new THREE.PlaneGeometry(1, 1);
    const group = new THREE.Group();
    const texture1 = useTexture(fish.src);
    const material1 = new THREE.MeshBasicMaterial({ map: texture1 });
    const image1 = new THREE.Mesh(geometry, material1);
    image1.position.x = 0;
    image1.position.y = 0;
    image1.position.z = 1;
    image1.scale.x = viewport.width;
    image1.scale.y = viewport.height;

    // 計算圖片的寬高比例
    const imageAspect = texture1.image.width / texture1.image.height;
    const viewportAspect = viewport.width / viewport.height;

    if (imageAspect > viewportAspect) {
      // 如果圖片寬高比大於視口寬高比，則根據高度來縮放
      image1.scale.x = viewport.height * imageAspect;
      image1.scale.y = viewport.height;
    } else {
      // 否則根據寬度來縮放
      image1.scale.x = viewport.width;
      image1.scale.y = viewport.width / imageAspect;
    }

    image1.position.set(0, 0, 1);

    group.add(image1);

    scene.add(group);
    return { scene, camera };
  }

  return (
    <group>
      {meshes}
      <mesh>
        <planeGeometry args={[device.width, device.height, 1, 1]} />
        <shaderMaterial
          vertexShader={vertex}
          fragmentShader={fragment}
          transparent={true}
          uniforms={uniforms.current}
        ></shaderMaterial>
      </mesh>
    </group>
  );
}
