import { useRef } from 'react';


export const useCharacter = () => {
    const playerPosition = useRef({ x: 260, y: 260 });
    const playerDimension = { x: 52, y: 68 };


    const movePlayer = (newPosition) => {
        playerPosition.current = newPosition;
    };

    return { playerPosition, playerDimension, movePlayer };
};
