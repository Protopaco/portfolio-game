import { useRef } from 'react';
import handleEyeMovement from '../utils/handleEyeMovement';

export const useEye = () => {
    const eyeDimension = { x: 24, y: 54 };
    const eyePosition = useRef({ x: 50, y: 50 });

    const updateEye = (buildingWallArray, playerPosition) => {

        const newPosition = handleEyeMovement(
            playerPosition.current,
            eyePosition.current,
            eyeDimension,
            buildingWallArray);

        if (newPosition !== 'collision') {
            eyePosition.current = newPosition;
        }
    };

    return {
        eyePosition,
        updateEye
    };
};
