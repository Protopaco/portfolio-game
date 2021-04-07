import React, { useState, useEffect, useRef } from 'react';
import styles from './Eye.scss';

export default function Eye({ eyePosition, eyeDirection }) {
    const frame = useRef(1);
    const [sprite, setSprite] = useState('/sprites/eye-run/eye-right-run-1.png');
    const spriteDirection = useRef('right');

    useEffect(() => {
        setInterval(() => {
            runAnimation();
        }, 100);
    }, []);

    const runAnimation = () => {
        frame.current < 4 ? frame.current = frame.current + 1 : frame.current = 1;
        if (eyeDirection.current === 'left' || eyeDirection.current === 'right') {
            spriteDirection.current = eyeDirection.current;
        }
        setSprite(`/sprites/eye-run/eye-${spriteDirection.current}-run-${frame.current}.png`);
    };

    return (
        <div className={styles.sprite}
            style={{
                transform: `translate3d(
                    ${eyePosition.current.x}px,
                    ${eyePosition.current.y}px,
                    0)`
            }}>
            <img src={sprite} />
        </div>

    );

}
