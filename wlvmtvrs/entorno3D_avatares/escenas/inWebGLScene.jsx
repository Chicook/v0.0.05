import React from 'react';
import { Canvas } from '@react-three/fiber';
import Avatar from '../avatares/Avatar';

const InWebGLScene = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Avatar />
        </Canvas>
    );
};

export default InWebGLScene;