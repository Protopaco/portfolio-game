import changePosition from '../utils/changePosition';
import checkCollision from '../utils/collisionChecker';
import { wallArray } from '../../data/walls';

const playerDimension = { x: 100, y: 100 };
export default function handleKeyPress(key,
    handlePlayerMove,
    playerPosition,
    idle) {

    setTimeout(() => {
        idle.current = true;
    }, 500);

    idle.current = false;
    const dir = key.split('Arrow')[1].toLowerCase();

    const newPosition = changePosition(playerPosition.current, 10, dir);

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
