import { Canvas } from '@react-three/fiber';
import Model from './Model';

function Animation() {

    return (
        <div className='w-3/5 h-screen overflow-hidden absolute right-0'>
            <Canvas>
                <Model/>
            </Canvas>
        </div>
    );
}

export default Animation;