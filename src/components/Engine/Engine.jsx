import React, { useEffect, useRef, useState } from 'react';
import { useCharacter } from '../../hooks/useCharacter';
import handleKeyPress from '../../hooks/handleKeyPress';
import styles from './Engine.module.scss';
import Player from '../Player/Player';

const movementKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

export default function Engine() {
    const { playerPosition, movePlayer } = useCharacter();
    const currentKey = useRef('');
    const idle = useRef(true);

    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            e.preventDefault();
            currentKey.current = e.key;
        });

        window.removeEventListener('keydown', (e) => {
            e.preventDefault();
            currentKey.current = e.key;
        });

        setInterval(() => {
            if (currentKey.current) {
                idle.current = false;
                handleKeyPress(currentKey.current,
                    handlePlayerMove,
                    playerPosition);
                currentKey.current = '';
            } else {
                idle.current = true;
            }
        }, 150);
    }, []);

    const handlePlayerMove = (newPosition) => {
        movePlayer(newPosition);
    };

    return (
        <div className={styles.container}>
            <Player
                idle={idle}
                playerPosition={playerPosition}
            />
        </div>
    );
}
