import React from 'react';
import styles from './Header.scss';
import simulateKeyPress from '../../utils/simulateKeyPress';

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

            <div className={styles.directions}>
                <span className={styles.button}
                    onClick={() => simulateKeyPress('ArrowLeft')}>
                    <img
                        className={styles.arrow}
                        src={'/arrows/LeftArrow.png'}
                        alt="left arrow" />
                </span>
                <span className={styles.button}
                    onClick={() => simulateKeyPress('ArrowRight')}>
                    <img
                        className={styles.arrow}
                        src={'/arrows/RightArrow.png'}
                        alt="Right arrow" />
                </span>
                <span className={styles.button}
                    onClick={() => simulateKeyPress('ArrowUp')}>
                    <img
                        className={styles.arrow}
                        src={'/arrows/UpArrow.png'}
                        alt="Up arrow" />
                </span>
                <span className={styles.button}
                    onClick={() => simulateKeyPress('ArrowDown')}>
                    <img className={styles.arrow}
                        src={'/arrows/DownArrow.png'}
                        alt="Down arrow" />
                </span>
                <span className={styles.button}
                    id={styles.space}
                    onClick={() => simulateKeyPress(' ')}>
                    {'SPACE'}
                </span>
            </div>
        </div >
    );
}
