import React from 'react';
import styles from './Header.scss';

export default function Header() {

    return (
        <div className={styles.header}>
            <span className={styles.primary}>{'Paul Stevens'}</span>
            <br />
            <span className={styles.secondary}>{'<> Software Developer'}</span>

        </div>
    );
}
