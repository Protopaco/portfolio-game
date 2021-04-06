import { useRef } from 'react';


export const useCharacter = () => {
    const playerPosition = useRef({ x: 620, y: 400 });
    const playerDimension = { x: 20, y: 55 };
    const playerDirection = useRef('right');

    const changeDirection = (newDirection) => {
        playerDirection.current = newDirection;
    };

    const movePlayer = (newPosition) => {
        playerPosition.current = newPosition;
    };

    return {
        playerPosition,
        playerDimension,
        movePlayer,
        playerDirection,
        changeDirection
    };
};
