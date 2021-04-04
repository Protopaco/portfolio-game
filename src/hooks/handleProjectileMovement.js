import changePosition from '../utils/changePosition';
import checkCollision from '../utils/collisionChecker';
import { wallArray } from '../../data/walls';
import { buildingWallArray } from '../../data/buildings';

export default function handleProjectileMovement(
    direction,
    position,
    dimension) {

    const newPosition = changePosition(position, 20, direction);

    const objectArray = [
        ...wallArray,
        ...buildingWallArray
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
    }
}
