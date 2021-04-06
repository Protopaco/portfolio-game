import React, { useEffect, useRef, useState } from 'react';
import { useCharacter } from '../../hooks/useCharacter';
import { useProjectile } from '../../hooks/useProjectile';
import { useMap } from '../../hooks/useMap';
import { useEye } from '../../hooks/useEye';
import handleKeyPress from '../../hooks/handleKeyPress';
import styles from './Engine.scss';
import Player from '../Player/Player';
import Walls from '../Walls/Walls';
import Buildings from '../Buildings/Buildings';
import Projectile from '../Projectile/Projectile';
import Eye from '../Eye/Eye';
import BackButton from '../BackButton/BackButton';
import Popup from '../Popup/Popup';

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
        eyePosition,
        eyeDimension,
        updateEye,
        resetEye
    } = useEye(eyePosition);

    const {
        buildingArray,
        buildingWallArray,
        changeMap,
        eyeStarting,
        backButton } = useMap(movePlayer, resetEye);

    const currentKey = useRef('');
    const idle = useRef(true);
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupInfo, setPopupInfo] = useState({});

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
            const eyeCollision = {
                position: eyePosition.current,
                dimension: eyeDimension,
                type: 'npc',
                name: 'eye'
            };

            updateProjectiles(
                buildingWallArray,
                eyeCollision,
                resetEye,
                eyeStarting);
            updateEye(buildingWallArray, playerPosition);

            let idleTimeout;
            if (currentKey.current &&
                movementKeys.includes(currentKey.current)) {

                const dir = currentKey.current.split('Arrow')[1].toLowerCase();
                changeDirection(dir);
                idle.current = false;
                handleKeyPress(
                    dir,
                    movePlayer,
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

    const handleBackButton = () => {
        changeMap({ name: 'Lobby-Portal' });
        setPopupOpen(false);
    };

    const handlePopup = (object) => {
        console.log('🚀 ~ file: Engine.jsx ~ line 114 ~ handlePopup ~ object', object);

        if (object) {
            setPopupOpen(true);
            setPopupInfo(object);
        }
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    };

    return (
        <div className={styles.container}>
            <Walls />
            <Eye
                eyePosition={eyePosition}
            />
            <Player
                idle={idle}
                playerPosition={playerPosition}
            />
            {buildingArray ?
                <Buildings
                    buildingArray={buildingArray}
                    handlePopup={handlePopup}
                />
                : null}
            {backButton ?
                <BackButton
                    position={backButton.position}
                    dimension={backButton.dimension}
                    handleBackButton={handleBackButton} />
                : null}
            <Projectile
                projectileArray={projectileArray}
            />
            {popupOpen ?
                <Popup
                    handleClosePopup={handleClosePopup}
                    popupInfo={popupInfo}
                />
                : null}
        </div>
    );
}
