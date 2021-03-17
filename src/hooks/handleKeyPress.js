import changePosition from '../utils/changePosition';
import checkCollision from '../utils/collisionChecker';
import { wallArray } from '../../data/walls';

const playerDimension = { x: 100, y: 100 };
export default function handleKeyPress(e, handlePlayerMove, playerPosition) {
    e.preventDefault();
    console.log(e.key);
    console.log('🚀 ~ file: handleKeyPress.js ~ line 13 ~ handleKeyPress ~ playerPosition', playerPosition);

    const dir = e.key.split('Arrow')[1].toLowerCase();

    const newPosition = changePosition(playerPosition.current, 50, dir);

    const objectArray = [
        ...wallArray
    ];

    const collisionResult = checkCollision(objectArray, newPosition, playerDimension);

    switch (collisionResult.type) {
        case false:
            handlePlayerMove(newPosition);
            break;
    }



}
