import { useRef } from 'react';
import changePosition from '../utils/changePosition';

export const useProjectile = () => {
    const projectileArray = useRef([]);

    const fireProjectile = (playerPosition,
        playerDimension,
        playerDirection) => {

        const position = {
            x: playerPosition.current.x + (playerDimension.x / 2),
            y: playerPosition.current.y + (playerDimension.y / 2)

        };
        const projectile = {
            position,
            direction: playerDirection.current
        };

        projectileArray.current = projectile;
    };

    const updateProjectiles = () => {
        const { position, direction } = projectileArray.current;
        const newPosition = changePosition(position, 30, direction);

        projectileArray.current.position = newPosition;
        return projectileArray.current;
    };

    return {
        projectileArray,
        fireProjectile,
        updateProjectiles
    };
};
