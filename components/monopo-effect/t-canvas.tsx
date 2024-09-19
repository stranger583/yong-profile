'use client'
import { Suspense } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import {
	enFragmentShader, enVertexShader, jpFragmentShader, jpVertexShader
} from './shader';
import { Background } from './background';
import { Lense } from './lense';
import { TextPlane } from './text-plane';

export const TCanvas = () => {
	const OrthographicCamera = new THREE.OrthographicCamera(-5, 5, 5, -5, -10, 10)

	const devicePixelRatio = typeof window !== 'undefined' ? window.devicePixelRatio : 1;
	return (
		<Canvas camera={OrthographicCamera} dpr={devicePixelRatio}>
			<Suspense fallback={null}>
				<Background />
				<Lense />
				<TextPlane
					text={['What shall', 'I create today?']}
					vertexShader={enVertexShader}
					fragmentShader={enFragmentShader}
				/>
				<TextPlane text={['今日は', '何を作ろうか?']} vertexShader={jpVertexShader} fragmentShader={jpFragmentShader} />
			</Suspense>
			{/* helper */}
			{/* <Stats /> */}
		</Canvas>
	)
}