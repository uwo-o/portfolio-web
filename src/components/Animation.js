import { Canvas } from '@react-three/fiber';
import Model from './Model';

function Animation() {

    return (
        <div className='hidden h-screen overflow-hidden 2xl:block w-3/5 absolute right-0'>
            <Canvas>
                <Model/>
            </Canvas>
        </div>
    );
}

export default Animation;