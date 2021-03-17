import React, { useEffect } from 'react';
import { useCharacter } from '../../hooks/useCharacter';
import handleKeyPress from '../../hooks/handleKeyPress';
import styles from './engine.module.scss';

const movementKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

export default function Engine() {
    const { playerPosition, movePlayer } = useCharacter();


    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            e.stopImmediatePropagation();
            if (movementKeys.includes(e.key)) {
                handleKeyPress(e, handlePlayerMove, playerPosition);
            }
        });

        window.removeEventListener('keydown', (e) => {
            if (movementKeys.includes(e.key)) {
                handleKeyPress(e, handlePlayerMove, playerPosition);
            }
        });
    }, []);

    const handlePlayerMove = (newPosition) => {
        movePlayer(newPosition);
        console.log('🚀 ~ file: LandingPage.jsx ~ line 8 ~ LandingPage ~ playerPosition', playerPosition.current);

    };

    return (
        <div className={styles.container}>
            {playerPosition.current.x}
            {playerPosition.current.y}
        </div>
    );
}
