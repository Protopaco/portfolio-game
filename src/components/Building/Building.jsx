import React, { useState, useEffect, useRef } from 'react';
import styles from './Building.scss';

export default function Building({ building }) {
    const frame = useRef(1);
    const [sprite, setSprite] = useState(`${building.sprite}1.png`);

    useEffect(() => {
        setInterval(() => {
            buildingAnimation();
        }, 200);
    }, []);

    const buildingAnimation = () => {

        if (frame.current < building.spriteNum) {
            frame.current = frame.current + 1;
        } else { frame.current = 1; }

        setSprite(`${building.sprite}${frame.current}.png`);
    };

    return (
        <div className={styles.building}
            style={{
                top: building.position.y - 50,
                left: building.position.x
            }}>
            {/* <span
                className={styles.name}>
                {building.name}
            </span> */}
            <img src={sprite}
                // className={styles.building}

                style={{
                    height: building.dimension.y,
                    width: building.dimension.x
                }}

            />
        </div>
    );
}
