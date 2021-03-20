import React, { useState, useEffect } from 'react';
import changePosition from '../../utils/changePosition';
import styles from './Projectile.scss';

export default function Projectile({ startingPosition, direction }) {
    const [position, setPosition] = useState(startingPosition);
    const speed = 30;

    useEffect(() => {
        setInterval(() => {
            moveProjectile();
        }, 100);
    }, []);

    const moveProjectile = () => {
        const newPosition = changePosition(
            position,
            speed,
            direction);
        console.log(newPosition);
        setPosition(newPosition);
        console.log(position);
    };

    return (
        <div className={styles.projectile}
        >
            <img src="/sprites/robo-projectile.png"
                style={{
                    transform: `translate3d(${position.x}px, ${position.y}px, 0)`
                }}
            />
        </div>
    );
}
