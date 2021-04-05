import changePosition from '../utils/changePosition';
import checkCollision from '../utils/collisionChecker';
import { wallArray } from '../../data/walls';
const projectileSpeed = 25;

export default function handleProjectileMovement(
    direction,
    position,
    dimension,
    buildingWallArray) {

    const newPosition = changePosition(position, projectileSpeed, direction);

    const objectArray = [
        ...wallArray,
        ...buildingWallArray.current
    ];

    const collisionResult = checkCollision(
        objectArray,
        newPosition,
        dimension);

    switch (collisionResult.type) {
        case false:
            return newPosition;
        case 'object':
            console.log(collisionResult);
            return 'collision';
        case 'portal':
            return newPosition;
    }
}
