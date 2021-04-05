import React, { useEffect, useState } from 'react';
import { simulateKeyPress, simulateKeyUp, simulateSingleKeyPress } from '../../utils/simulateKeyPress';
import styles from './Buttons.scss';

export default function Buttons() {
    const [selectedButton, setSelectedButton] = useState('');

    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            e.preventDefault();
            setSelectedButton(e.key);
            setTimeout(() => {
                setSelectedButton('');
            }, 50);
        });



        window.removeEventListener('keydown', (e) => {
            e.preventDefault();
            setSelectedButton(e.key);
            setTimeout(() => {
                setSelectedButton('');
            }, 50);
        });
    }, []);

    return (
        <div className={styles.directions}>
            <span className={styles.button}
                id={styles[selectedButton === 'ArrowLeft' ? 'selected' : null]}
                onMouseDown={() => simulateKeyPress('ArrowLeft')}
                onMouseUp={() => simulateKeyUp()}>
                <img
                    className={styles.arrow}
                    src={'/arrows/LeftArrow.png'}
                    alt="left arrow" />
            </span>
            <span className={styles.button}
                id={styles[selectedButton === 'ArrowRight' ? 'selected' : null]}
                onMouseDown={() => simulateKeyPress('ArrowRight')}
                onMouseUp={() => simulateKeyUp()}>
                <img
                    className={styles.arrow}
                    src={'/arrows/RightArrow.png'}
                    alt="Right arrow" />
            </span>
            <span className={styles.button}
                id={styles[selectedButton === 'ArrowUp' ? 'selected' : null]}
                onMouseDown={() => simulateKeyPress('ArrowUp')}
                onMouseUp={() => simulateKeyUp()}>

                <img
                    className={styles.arrow}
                    src={'/arrows/UpArrow.png'}
                    alt="Up arrow" />
            </span>
            <span className={styles.button}
                id={styles[selectedButton === 'ArrowDown' ? 'selected' : null]}
                onMouseDown={() => simulateKeyPress('ArrowDown')}
                onMouseUp={() => simulateKeyUp()}>

                <img className={styles.arrow}
                    src={'/arrows/DownArrow.png'}
                    alt="Down arrow" />
            </span>
            <span className={styles.space}
                id={styles[selectedButton === ' ' ? 'selected' : null]}

                onClick={() => simulateSingleKeyPress(' ')}>
                {'SPACE'}
            </span>
        </div >
    );

}
