import React from 'react';
import styles from './Popup.scss';

export default function Popup({ handleClosePopup, popupInfo }) {
    const { title, text, website, github, presentation } = popupInfo;


    return (
        <div
            className={styles.container}
            onClick={handleClosePopup}>
            <div
                className={styles.title}>{title}</div>
            <div
                className={styles.links}>
                {website ?
                    <a href={website}
                        target="_blank"
                        rel="noopener noreferrer">
                        <span
                            className={styles.aTag}>
                            website
                        </span>
                    </a>
                    : null}
                {github ?

                    <a href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span
                            className={styles.aTag}>
                            github
                        </span>

                    </a>
                    : null}
                {presentation ?

                    <a href={presentation}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span
                            className={styles.aTag}>
                            presentation
                        </span>

                    </a>
                    : null}
            </div>
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
