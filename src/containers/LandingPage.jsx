import React from 'react';
import Engine from '../components/Engine/Engine';
import styles from './LandingPage.scss';

export default function LandingPage() {

    return (
        <div className={styles.frame}>
            <Engine />
        </div>
    );
}
