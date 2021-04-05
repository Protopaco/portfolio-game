import changePosition from './changePosition';
import checkCollision from './collisionChecker';
import { wallArray } from '../../data/walls';
const projectileSpeed = 25;

export default function handleProjectileMovement(
    direction,
    position,
    dimension,
    buildingWallArray,
    eyeCollision,
    resetEye,
    eyeStarting) {


    const newPosition = changePosition(position, projectileSpeed, direction);

    const objectArray = [
        ...wallArray,
        ...buildingWallArray.current,
        eyeCollision
    ];

    const collisionResult = checkCollision(
        objectArray,
        newPosition,
        dimension);

    switch (collisionResult.type) {
        case false:
            return newPosition;
        case 'object':
            return 'collision';
        case 'portal':
            return newPosition;
        case 'npc':
            resetEye(eyeStarting);
    }
}
