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
        eyeStarting,
        handlePopup,
        handleBackButton) => {
        const { position, direction } = projectileArray.current;

        if (position) {
            const collisionResult = handleProjectileMovement(
                direction,
                position,
                dimension,
                buildingWallArray,
                eyeCollision,
                resetEye,
                eyeStarting);

            if (collisionResult.cType === 'collision') {
                projectileArray.current = [];
                if (collisionResult.popup) {
                    handlePopup(collisionResult.popup);
                } else if (collisionResult.name === 'BackButton') {
                    handleBackButton();
                } else if (collisionResult.link) {
                    window.open(collisionResult.link, '_blank');
                }

            } else {
                projectileArray.current.position = collisionResult.newPosition;
            }
        }

    };

    return {
        projectileArray,
        fireProjectile,
        updateProjectiles
    };
};
