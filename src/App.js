import './App.css';
import {Canvas} from "@react-three/fiber";
import Box from "./Box";
import {Suspense} from "react";
import Plane from "./Plane";
import {Physics} from "@react-three/cannon";

function App() {
    return (
        <div className="App">
            <Suspense fallback={null}>
                <Canvas>
                    <Physics>
                        <ambientLight intensity={0.1}/>
                        <pointLight position={[10, 10, 10]}/>
                        <Box position={[-1, 1, 0]}/>
                        <Box position={[1, 1, 0]}/>
                        <Box position={[1, -2, 0]}/>
                        <Box position={[2, 1, 0]}/>
                        <Plane />
                    </Physics>
                </Canvas>
            </Suspense>

        </div>
    );
}

export default App;
