import React from 'react';

const Avatar = ({ avatarData }) => {
    return (
        <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color={avatarData.color} />
            {/* Additional avatar customization can be added here */}
        </mesh>
    );
};

export default Avatar;