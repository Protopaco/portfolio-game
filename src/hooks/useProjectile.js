import { useRef } from 'react';
import handleProjectileMovement from '../utils/handleProjectileMovement';

export const useProjectile = () => {
    const projectileArray = useRef([]);
    const dimension = { x: 15, y: 15 };

    const fireProjectile = (playerPosition,
        playerDimension,
        playerDirection) => {

        const position = {
            x: playerPosition.current.x + (playerDimension.x / 2),
            y: playerPosition.current.y + (playerDimension.y / 2),
        };
        const projectile = {
            position,
            direction: playerDirection.current
        };

        projectileArray.current = projectile;
    };

    const updateProjectiles = (
        buildingWallArray,
        eyeCollision,
        resetEye,
        eyeStarting) => {
        const { position, direction } = projectileArray.current;


        if (position) {
            const newPosition = handleProjectileMovement(
                direction,
                position,
                dimension,
                buildingWallArray,
                eyeCollision,
                resetEye,
                eyeStarting);

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
