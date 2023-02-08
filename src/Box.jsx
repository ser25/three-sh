import React, {useRef} from 'react';
import {useLoader, useFrame} from "@react-three/fiber";
import {TextureLoader} from "three/src/loaders/TextureLoader";
import {useBox} from "@react-three/cannon";
const Box = (props) => {
    const [ref] = useBox(() => ({
        position: [0, 5, 0],
        mass: 1,
        ...props
    }))
    const [colorMap, wood, crate] = useLoader(TextureLoader, [
        "stone.jpg",
        "wood.jpg",
        "crate.gif"
    ])
    return (
        <mesh  ref={ref}>
            <boxGeometry/>
            <meshStandardMaterial map={crate}/>
        </mesh>
    );
};

export default Box;