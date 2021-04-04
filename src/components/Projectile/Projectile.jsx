import React, { useEffect, useState } from 'react';
import styles from './Projectile.scss';

export default function Projectile({ projectileArray }) {
    const [position, setPosition] = useState({});
    // const [count, setCount] = useState(0);
    // const speed = 30;

    useEffect(() => {

        setInterval(() => {
            setPosition(projectileArray.current.position);
        }, 50);

    }, []);

    return (
        <div>
            {position ?
                <div className={styles.projectile}>
                    <img src="/sprites/robo-projectile.png"
                        style={{
                            transform: `translate3d(${position.x}px, ${position.y}px, 0)`
                        }}
                    />
                </div>
                :
                null
            }
        </div>
    );
}
