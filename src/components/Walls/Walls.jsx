import React from 'react';
import styles from './Walls.scss';
import { wallArray } from '../../../data/walls';

export default function Walls() {

    const renderWalls = () => {
        return wallArray.map(wall => {
            return (
                <div className={styles.wall}
                    key={wall.name}
                    style={{
                        height: wall.dimension.y,
                        width: wall.dimension.x
                    }}
                />
            );
        });
    };

    return renderWalls();

}
