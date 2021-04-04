import { useRef } from 'react';
import handleProjectileMovement from './handleProjectileMovement';

export const useProjectile = () => {
    const projectileArray = useRef([]);
    const dimension = { x: 5, y: 5 };

    const fireProjectile = (playerPosition,
        playerDimension,
        playerDirection) => {

        const position = {
            x: playerPosition.current.x - (playerDimension.x / 2),
            y: playerPosition.current.y,
        };
        const projectile = {
            position,
            direction: playerDirection.current
        };

        projectileArray.current = projectile;
    };

    const updateProjectiles = () => {
        const { position, direction } = projectileArray.current;
        if (position) {
            const newPosition = handleProjectileMovement(direction, position, dimension);

            if (newPosition === 'collision') {
                projectileArray.current = [];
            } else {
                projectileArray.current.position = newPosition;
            }
        }

    };

    return {
        projectileArray,
        fireProjectile,
        updateProjectiles
    };
};