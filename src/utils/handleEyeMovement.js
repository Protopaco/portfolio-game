import changePosition from './changePosition';
import checkCollision from '../utils/collisionChecker';
import { wallArray } from '../../data/walls';
import eyeDirection from './eyeDirection';
const eyeSpeed = 10;

export default function handleEyeMovement(
    playerPosition,
    eyePosition,
    eyeDimension,
    buildingWallArray) {

    const {
        firstChoice,
        secondChoice
    } = eyeDirection(playerPosition, eyePosition);

    const objectArray = [
        ...wallArray,
        ...buildingWallArray.current
    ];

    let newPosition = changePosition(eyePosition, eyeSpeed, firstChoice);

    let collisionResult = checkCollision(
        objectArray,
        newPosition,
        eyeDimension
    );

    if (collisionResult.type === false) return newPosition;

    newPosition = changePosition(eyePosition, eyeSpeed, secondChoice);

    collisionResult = checkCollision(
        objectArray,
        newPosition,
        eyeDimension
    );

    if (collisionResult.type === false) return newPosition;

    return 'collision';

}
