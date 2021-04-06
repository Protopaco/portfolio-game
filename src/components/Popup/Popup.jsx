import React from 'react';
import styles from './Popup.scss';

export default function Popup({ handleClosePopup, popupInfo }) {
    const { title, text } = popupInfo;


    return (
        <div
            className={styles.container}
            onClick={handleClosePopup}>
            <div
                className={styles.title}>{title}</div>
            <ul
                className={styles.list}>
                {text.map(line => (
                    <li
                        key={line}
                        className={styles.listItem}
                    >
                        {line}</li>
                ))}

            </ul>
        </div>
    );
}
