import React from 'react';
import {usePlane} from "@react-three/cannon";
import {useLoader, useFrame} from "@react-three/fiber";
import {TextureLoader} from "three/src/loaders/TextureLoader";

const Plane = () => {
    const wood = useLoader(TextureLoader, 'wood.jpg')
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [-1, -2, -1]
    }))
    return (
        <mesh ref={ref}>
            <planeGeometry args={[10, 10]}/>
            <meshStandardMaterial map={wood}/>
        </mesh>
    );
};

export default Plane;