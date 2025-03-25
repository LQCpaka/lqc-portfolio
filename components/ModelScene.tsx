import { Canvas, useLoader } from '@react-three/fiber'; // useLoader is imported from @react-three/fiber
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { TextureLoader } from 'three';

function Model({ scale }: { scale?: [number, number, number] }) {
    const obj = useLoader(OBJLoader, '/win95.obj'); // Tải file OBJ
    const texture = useLoader(TextureLoader, '/win95.png'); // Tải texture

    // Áp dụng texture vào mô hình
    obj.traverse((child) => {
        if (child.isMesh) {
            child.material.map = texture; // Gán texture vào thuộc tính map
        }
    });
    const ref = useRef<THREE.Object3D>(); // Tạo reference để truy cập object

    // Cập nhật rotation mỗi frame
    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.01; // Thay đổi giá trị để điều chỉnh tốc độ xoay
        }
    });

    return <primitive ref={ref} object={obj} scale={scale || [1, 1, 1]} />;
}

export default function ThreeScene() {
    return (
        <div className='canvas-container'>
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
