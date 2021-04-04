import React, { useEffect, useRef } from 'react';
import { useCharacter } from '../../hooks/useCharacter';
import { useProjectile } from '../../hooks/useProjectile';
// import { lobbyMap } from '../../../data/maps/lobbyMap';
// import { contactMap } from '../../../data/maps/contactMap';
import { useMap } from '../../hooks/useMap';
import handleKeyPress from '../../hooks/handleKeyPress';
import styles from './Engine.scss';
import Player from '../Player/Player';
import Walls from '../Walls/Walls';
import Buildings from '../Buildings/Buildings';
import Projectile from '../Projectile/Projectile';

const movementKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

export default function Engine() {

    const {
        playerPosition,
        movePlayer,
        playerDimension,
        playerDirection,
        changeDirection } = useCharacter();

    const {
        fireProjectile,
        updateProjectiles,
        projectileArray } = useProjectile();

    const {
        buildingArray,
        buildingWallArray,
        changeMap } = useMap(movePlayer);


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
            updateProjectiles();

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
                    playerDimension,
                    changeMap,
                    buildingWallArray);
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
            <Buildings
                buildingArray={buildingArray}
            />
            <Projectile
                projectileArray={projectileArray}
            />
        </div>
    );
}
