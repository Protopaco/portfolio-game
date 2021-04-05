import changePosition from '../utils/changePosition';
import checkCollision from '../utils/collisionChecker';
import { wallArray } from '../../data/walls';
const playerSpeed = 20;

export default function handleKeyPress(
    dir,
    movePlayer,
    playerPosition,
    playerDimension,
    changeMap,
    buildingWallArray) {


    const newPosition = changePosition(playerPosition.current, playerSpeed, dir);

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
            movePlayer(newPosition);
            break;
        case 'object':
            console.log(collisionResult);

            break;
        case 'portal':
            changeMap(collisionResult);
            break;
    }
}
