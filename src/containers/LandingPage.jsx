import React from 'react';
import Engine from '../components/Engine/Engine';
import styles from './LandingPage.scss';
import Header from '../components/Header/Header';
import { engineWidth } from '../sizeConstants';

export default function LandingPage() {

    return (
        <div
            className={styles.frame}
            style={{ width: engineWidth }}>
            <Header />
            <Engine />
        </div>
    );
}
