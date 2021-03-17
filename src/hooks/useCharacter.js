import { useRef } from 'react';


export const useCharacter = () => {
    const playerPosition = useRef({ x: 250, y: 250 });
    const playerDimension = { x: 50, y: 50 };


    const movePlayer = (newPosition) => {
        console.log('🚀 ~ file: useCharacter.js ~ line 8 ~ movePlayer ~ newPosition', newPosition);
        playerPosition.current = newPosition;
    };

    return { playerPosition, playerDimension, movePlayer };
};
