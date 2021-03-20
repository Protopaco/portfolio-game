import React, { useState } from 'react';
import Projectile from '../components/Projectile/Projectile';

export const useProjectile = () => {
    const [projectileArray, setProjectileArray] = useState([]);

    const fireProjectile = (playerPosition,
        playerDimension,
        playerDirection) => {

        const position = {
            x: playerPosition.current.x + (playerDimension.x / 2),
            y: playerPosition.current.y + (playerDimension.y / 2)

        };
        setProjectileArray([...projectileArray,
        <Projectile
            key={`${position.x}${position.y}`}
            startingPosition={position}
            direction={playerDirection.current}
        />
        ]);
    };

    return { projectileArray, fireProjectile };
};
