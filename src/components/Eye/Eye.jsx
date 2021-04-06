import React, { useState, useEffect, useRef } from 'react';
import styles from './Eye.scss';

export default function Eye({ eyePosition }) {
    const frame = useRef(1);
    const [sprite, setSprite] = useState('/sprites/eye-run/eye-run-1.png');

    useEffect(() => {
        setInterval(() => {
            runAnimation();
        }, 100);
    }, []);

    const runAnimation = () => {
        frame.current < 4 ? frame.current = frame.current + 1 : frame.current = 1;
        setSprite(`/sprites/eye-run/eye-run-${frame.current}.png`);
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
