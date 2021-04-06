import React from 'react';
import Word from '../Word/Word';
import styles from './Line.scss';

export default function Line({ line }) {

    return (
        <div
            className={styles.container}>
            <ul
                className={styles.list}>
                {line ?
                    line.map(word =>
                        <Word
                            key={word}
                            word={word}
                        />
                    )
                    : null}
            </ul>
        </div>
    );
}
