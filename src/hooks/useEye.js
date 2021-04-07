import { useRef } from 'react';
import handleEyeMovement from '../utils/handleEyeMovement';

export const useEye = () => {
    const eyeDimension = { x: 30, y: 50 };
    const eyePosition = useRef({ x: 50, y: 50 });
    const eyeDirection = useRef('right');

    const updateEye = (buildingWallArray, playerPosition) => {

        const response = handleEyeMovement(
            playerPosition.current,
            eyePosition.current,
            eyeDimension,
            buildingWallArray);

        if (response !== 'collision') {
            eyePosition.current = response.newPosition;
            eyeDirection.current = response.direction;
        }
    };

    const resetEye = (newPosition) => {
        eyePosition.current = newPosition;
    };

    return {
        eyePosition,
        eyeDimension,
        eyeDirection,
        updateEye,
        resetEye
    };
};
