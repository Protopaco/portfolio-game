import changePosition from '../utils/changePosition';
import checkCollision from '../utils/collisionChecker';
import { wallArray } from '../../data/walls';


export default function handleProjectileMovement(
    direction,
    position,
    dimension,
    buildingWallArray) {

    const newPosition = changePosition(position, 20, direction);

    const objectArray = [
        ...wallArray,
        ...buildingWallArray.current
    ];

    const collisionResult = checkCollision(
        objectArray,
        newPosition,
        dimension);
    console.log('🚀 ~ file: handleProjectileMovement.js ~ line 22 ~ collisionResult', collisionResult);

    switch (collisionResult.type) {
        case false:
            return newPosition;
        case 'object':
            return 'collision';
        case 'portal':
            return newPosition;
    }
}
