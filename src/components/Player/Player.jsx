import React, { useState, useEffect } from 'react';
import styles from './Player.module.scss';

export default function Player({ idle, playerPosition }) {
    const [frame, setFrame] = useState(1);
    const [sprite, setSprite] = useState('/sprites/robo-run/robo-run-1.png');

    useEffect(() => {
        setTimeout(() => {
            if (idle.current === true) {
                idleAnimation();
            } else {
                runAnimation();
            }
        }, 100);
    }, [frame, idle]);

    const runAnimation = () => {
        frame < 4 ? setFrame(frame + 1) : setFrame(1);
        setSprite(`/sprites/robo-run/robo-run-${frame}.png`);
    };

    const idleAnimation = () => {
        frame < 9 ? setFrame(frame + 1) : setFrame(4);
        setSprite(`/sprites/robo-idle/robo-idle-${frame}.png`);
    };

    return (
        <div
            className={styles.char}
            style={{
                transform: `translate3d(${playerPosition.current.x}px, ${playerPosition.current.y}px, 0)`
            }}
        >
            <br />
            <img src={sprite} />
        </div>
    );
}
