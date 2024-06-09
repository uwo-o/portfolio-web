import { Canvas } from '@react-three/fiber';
import Model from './Model';

function Animation() {

    return (
        <div className='w-screen h-screen overflow-hidden'>
        <Canvas id='canvas'>
            <Model/>
        </Canvas>
        </div>
    );
}

export default Animation;