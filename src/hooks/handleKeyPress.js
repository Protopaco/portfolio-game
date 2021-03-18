import changePosition from '../utils/changePosition';
import checkCollision from '../utils/collisionChecker';
import { wallArray } from '../../data/walls';

const playerDimension = { x: 45, y: 45 };
export default function handleKeyPress(key,
    handlePlayerMove,
    playerPosition) {

    const dir = key.split('Arrow')[1].toLowerCase();

    const newPosition = changePosition(playerPosition.current, 15, dir);
    console.log('🚀 ~ file: handleKeyPress.js ~ line 13 ~ newPosition', newPosition);

    const objectArray = [
        ...wallArray
    ];

    const collisionResult = checkCollision(
        objectArray,
        newPosition,
        playerDimension);

    switch (collisionResult.type) {
        case false:
            handlePlayerMove(newPosition);
            break;
    }
}
