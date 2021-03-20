import changePosition from '../utils/changePosition';
import checkCollision from '../utils/collisionChecker';
import { wallArray } from '../../data/walls';
import { buildingWallArray } from '../../data/buildings';

export default function handleKeyPress(
    dir,
    handlePlayerMove,
    playerPosition,
    playerDimension) {


    const newPosition = changePosition(playerPosition.current, 20, dir);

    const objectArray = [
        ...wallArray,
        ...buildingWallArray
    ];

    const collisionResult = checkCollision(
        objectArray,
        newPosition,
        playerDimension);

    switch (collisionResult.type) {
        case false:
            handlePlayerMove(newPosition);
            break;
        case 'object':
            break;
        case 'portal':
            console.log(collisionResult);
            break;
    }
}
