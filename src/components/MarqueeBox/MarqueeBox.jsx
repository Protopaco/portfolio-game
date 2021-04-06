import Marquee from 'react-fast-marquee';
import styles from './MarqueeBox.scss';
import React from 'react';

export default function MarqueeBox({ marqueeText }) {
    console.log(marqueeText);
    return (
        <div
            className={styles.container}>
            <Marquee
                gradient={false}>
                <div className={styles.text}>
                    {marqueeText}
                </div>
            </Marquee>
        </div>
    );
}
