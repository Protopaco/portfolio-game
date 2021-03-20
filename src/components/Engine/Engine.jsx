import React, { useEffect, useRef, useState } from 'react';
import { useCharacter } from '../../hooks/useCharacter';
import { useProjectile } from '../../hooks/useProjectile';
import handleKeyPress from '../../hooks/handleKeyPress';
import styles from './Engine.scss';
import Player from '../Player/Player';
import Walls from '../Walls/Walls';
import Buildings from '../Buildings/Buildings';

const movementKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

export default function Engine() {
    const { playerPosition, movePlayer, playerDimension, playerDirection, changeDirection } = useCharacter();
    const { projectileArray, fireProjectile } = useProjectile();
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
            let idleTimeout;
            if (currentKey.current &&
                movementKeys.includes(currentKey.current)) {

                const dir = currentKey.current.split('Arrow')[1].toLowerCase();
                changeDirection(dir);
                idle.current = false;
                handleKeyPress(
                    dir,
                    handlePlayerMove,
                    playerPosition,
                    playerDimension);
                currentKey.current = '';
                clearTimeout(idleTimeout);

            } else if (currentKey.current === ' ') {
                idle.current = false;
                currentKey.current = '';
                fireProjectile(
                    playerPosition,
                    playerDimension,
                    playerDirection);

            } else {
                idleTimeout = setTimeout(() => {
                    idle.current = true;
                }, 500);
            }
        }, 150);
    }, []);

    const handlePlayerMove = (newPosition) => {
        movePlayer(newPosition);
    };

    return (
        <div className={styles.container}>
            <Walls />
            <Player
                idle={idle}
                playerPosition={playerPosition}
            />
            <Buildings />
            {projectileArray}
        </div>
    );
}
