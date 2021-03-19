import React from 'react';
import Engine from '../components/Engine/Engine';
import styles from './LandingPage.scss';
import Header from '../components/Header/Header';

export default function LandingPage() {

    return (
        <div className={styles.frame}>
            <Header />
            <Engine />
        </div>
    );
}
