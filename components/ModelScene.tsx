import { Canvas, useLoader } from '@react-three/fiber'; // useLoader is imported from @react-three/fiber
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function Model({ scale }: { scale?: [number, number, number] }) {
    const materials = useLoader(MTLLoader, '/win95.mtl'); // Tải tệp MTL
    const obj = useLoader(OBJLoader, '/win95.obj', (loader) => {
        materials.preload();
        loader.setMaterials(materials); // Áp dụng vật liệu từ MTLLoader
    });


    const ref = useRef<THREE.Object3D | null>(null);

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.01; // Xoay mô hình
        }
    });

    return <primitive ref={ref} object={obj} scale={scale || [1, 1, 1]} />;
}


export default function ThreeScene() {
    return (
        <div className=' mx-auto'>
            <Canvas camera={{ position: [0, 0, 5] }}>
                {/* Ánh sáng */}
                <ambientLight intensity={0.5} /> {/* Ánh sáng môi trường */}
                <directionalLight position={[10, 10, 5]} intensity={1.5} /> {/* Ánh sáng có hướng */}
                <pointLight position={[0, 0, 5]} intensity={2} /> {/* Ánh sáng điểm */}

                {/* Model */}
                <Model scale={[0.75, 0.75, 0.75]} />

                {/* Điều khiển xoay camera */}
                <OrbitControls enableDamping />
            </Canvas>
        </div>
    );
}
