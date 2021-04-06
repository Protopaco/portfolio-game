import React, { useState, useEffect, useRef } from 'react';
import styles from './Player.scss';

export default function Player({ idle, playerPosition }) {
    const frame = useRef(1);
    const [sprite, setSprite] = useState('/sprites/robo-run/robo-run-1.png');

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
        frame.current < 4 ? frame.current = frame.current + 1 : frame.current = 1;
        setSprite(`/sprites/robo-run/robo-run-${frame.current}.png`);
    };

    const idleAnimation = () => {
        frame.current < 9 ? frame.current = frame.current + 1 : frame.current = 1;
        setSprite(`/sprites/robo-idle/robo-idle-${frame.current}.png`);
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
