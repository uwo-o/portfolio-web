import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';

const vertex = `

    uniform float u_mouse_x;
    uniform float u_mouse_y;

    float k = 1.0;
    float w = 2.0;
    float a = 0.75;

    void main() {

        vec3 newPosition = position;

        float waveX = a*cos(k*position.x + u_mouse_x);
        float waveY = a*cos(k*position.y + u_mouse_y);

        newPosition.z -= waveX;
        newPosition.z -= waveY;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
`

const fragment = `
    void main() {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
`

function Model() {

    const plane = useRef();
    const sphere_int = useRef();
    const sphere_ext = useRef();

    const { mouse } = useThree();

    const uniform = useRef(
        {
            u_mouse_x: { value: 0 },
            u_mouse_y: { value: 0 }
        }
    )

    useFrame( () => {
        plane.current.material.uniforms.u_mouse_x.value = -mouse.x;
        plane.current.material.uniforms.u_mouse_y.value = -mouse.y;
        sphere_int.current.position.x = mouse.x;
        sphere_int.current.position.y = mouse.y;
        sphere_ext.current.position.x = mouse.x;
        sphere_ext.current.position.y = mouse.y;
        sphere_ext.current.rotation.z += 0.5;
    });

    return(
        <>
            <color attach="background" args={['#191919']}/>
            <mesh rotation={[-Math.PI/4, 0, Math.PI/3]} ref={plane}>
                <planeGeometry args={[5, 5, 16, 16]}/>
                <shaderMaterial
                    vertexShader={vertex}
                    fragmentShader={fragment}
                    wireframe={true}
                    uniforms={uniform.current}
                />
            </mesh>
            <mesh position={[0,-1.5,0]} ref={sphere_int}>
                <sphereGeometry args={[0.5, 32, 32]}/>
                <meshStandardMaterial color='black'/>
            </mesh>
            <mesh rotation={[0,Math.PI,0]} position={[0,-1.5,0]} ref={sphere_ext}>
                <sphereGeometry args={[0.6, 16, 16, 0, Math.PI]}/>
                <meshStandardMaterial color='white' wireframe/>
            </mesh>
            <ambientLight intensity={10} />
        </>
    );
}

export default Model;