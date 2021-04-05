import React, { useState, useEffect, useRef } from 'react';
import styles from './Building.scss';
import Line from '../Line/Line';

export default function Building({ building }) {
    const frame = useRef(1);
    const { sprite,
        spriteNum,
        position,
        dimension,
        link,
        wordArrays } = building;

    const [currentSprite, setCurrentSprite] = useState(`${sprite}1.png`);

    useEffect(() => {
        setInterval(() => {
            buildingAnimation();
        }, 200);
    }, []);

    const buildingAnimation = () => {

        if (frame.current < spriteNum) {
            frame.current = frame.current + 1;
        } else { frame.current = 1; }

        setCurrentSprite(`${sprite}${frame.current}.png`);
    };

    return (
        <div className={styles.building}
            style={{
                top: position.y,
                left: position.x
            }}>
            <a href={link}>
                {sprite ?
                    <img src={currentSprite}
                        style={{
                            height: dimension.y,
                            width: dimension.x
                        }}

                    />
                    : null}
                {wordArrays ?
                    <div
                        className={styles.textcontainer}
                        style={{
                            width: dimension.x,
                            height: dimension.y
                        }}
                    >
                        {wordArrays.map(line => <Line
                            line={line}
                            key={line} />)}
                    </div>
                    : null
                }
            </a>
        </div>
    );
}
