import styles from './BackButton.scss';
import React from 'react';

export default function BackButton({ position, dimension, handleBackButton }) {
    return (
        <span
            className={styles.button}
            onClick={handleBackButton}
            style={{
                top: position.y,
                left: position.x,
                width: dimension.x,
                height: dimension.y
            }}>
            BACK
        </span>
    );
}
