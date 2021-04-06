import React, { useState, useEffect, useRef } from 'react';
import styles from './Player.scss';

export default function Player({ idle, playerPosition, playerDirection }) {
    const frame = useRef(1);
    const [sprite, setSprite] = useState('/sprites/robo-run/robo-right-run-1.png');
    const [spriteDirection, setSpriteDirection] = useState('right');

    useEffect(() => {
        setInterval(() => {
            if (idle.current === true) {
                idleAnimation();
            } else {
                runAnimation();
            }
        }, 100);

    }, []);

    const runAnimation = () => {
        frame.current < 3 ? frame.current = frame.current + 1 : frame.current = 1;
        if (playerDirection.current === 'right' || playerDirection.current === 'left') {
            setSpriteDirection(playerDirection.current);
        }
        setSprite(`/sprites/robo-run/robo-${spriteDirection}-run-${frame.current}.png`);
    };

    const idleAnimation = () => {
        frame.current < 3 ? frame.current = frame.current + 1 : frame.current = 1;
        if (playerDirection.current === 'right' || playerDirection.current === 'left') {
            setSpriteDirection(playerDirection.current);
        }
        setSprite(`/sprites/robo-idle/robo-${spriteDirection}-idle-${frame.current}.png`);
    };

    return (
        <div
            className={styles.player}
            style={{
                transform: `translate3d(
                    ${playerPosition.current.x}px, 
                    ${playerPosition.current.y}px, 
                    0)`
            }}
        >
            <img src={sprite} />
        </div>
    );
}
