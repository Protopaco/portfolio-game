import React, { useState, useEffect, useRef } from 'react';
import styles from './Building.scss';
import Line from '../Line/Line';

export default function Building({ building, handlePopup, changeMap }) {
    const frame = useRef(1);
    const { sprite,
        spriteNum,
        position,
        dimension,
        link,
        wordArrays,
        fontSize,
        popup,
        map } = building;

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
            }}
            onClick={() => {
                console.log();
                if (map) {
                    changeMap({ name: map });
                }
                else {
                    handlePopup(popup);
                }
            }}
        >
            <a href={link}
                target="_blank"
                rel="noopener noreferrer">
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
                            height: dimension.y,
                            fontSize
                        }}
                    >
                        {wordArrays.map((line, index) => <Line
                            line={line}
                            key={index + line} />)}
                    </div>
                    : null
                }
            </a>
        </div>
    );
}
