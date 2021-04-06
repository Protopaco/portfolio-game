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
            return { cType: 'none', newPosition };
        case 'object':
            return { cType: 'collision', ...collisionResult };
        case 'portal':
            return { cType: 'collision', ...collisionResult };
        case 'building':
            return { cType: 'collision', ...collisionResult };
        case 'npc':
            resetEye(eyeStarting.current);
            return { cType: 'collision', ...collisionResult };
    }
}
