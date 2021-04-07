import Marquee from 'react-fast-marquee';
import styles from './MarqueeBox.scss';
import React from 'react';
import { wallWidth, engineWidth, engineHeight, headerHeight } from '../../sizeConstants';

export default function MarqueeBox({ marqueeText }) {
    console.log(marqueeText);
    return (
        <div
            className={styles.container}
            style={{
                top: engineHeight + headerHeight - (wallWidth * 2),
                width: engineWidth - (wallWidth * 2)
            }}>
            < Marquee
                gradient={false} >
                <div className={styles.text}>
                    {marqueeText.map(line => <span>{line}</span>)}
                </div>
            </Marquee>
        </ div>
    );
}
