import changePosition from '../utils/changePosition';
import checkCollision from '../utils/collisionChecker';
import { wallArray } from '../../data/walls';

export default function handleKeyPress(
    dir,
    handlePlayerMove,
    playerPosition,
    playerDimension,
    changeMap,
    buildingWallArray) {


    const newPosition = changePosition(playerPosition.current, 20, dir);

    const objectArray = [
        ...wallArray,
        ...buildingWallArray.current
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
            changeMap(collisionResult);
            break;
    }
}
