import React from 'react';
import styles from './Walls.scss';
import { wallArray } from '../../../data/walls';

export default function Walls() {
    return wallArray.map(wall => {
        return (
            <div className={styles.wall}
                key={wall.name}
                style={{
                    height: wall.dimension.y,
                    width: wall.dimension.x,
                    top: wall.position.y,
                    left: wall.position.x
                }}
            />
        );
    });


}
