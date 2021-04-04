import React from 'react';
import styles from './Header.scss';
import Buttons from '../Buttons/Buttons';

export default function Header() {

    return (

        <div className={styles.header}>
            <div>
                <span className={styles.primary}>{'Paul Stevens'}</span>
                <br />
                <span
                    className={styles.secondary}>
                    {'<> Software Developer'}
                </span>
            </div>
            <Buttons />
        </div >
    );
}
