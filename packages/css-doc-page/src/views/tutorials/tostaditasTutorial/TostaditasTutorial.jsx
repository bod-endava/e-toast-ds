
import React from 'react';

import cssMarkdown from "../../../assets/markdown/tutorials/tostaditas.md";

import Hero from '../../../tostaditas-components/hero';
import Markdown from '../../../tostaditas-components/markdown';

import styles from './TostaditasTutorial.module.scss';

function TostaditasTutorial() {
    return (
        <div className={styles.TostaditasTutorial}>
            <Hero
                title="Tostaditas"
                text=""
                secondary
            />

            <main className={styles.Main}>
                <Markdown src={cssMarkdown} />
            </main>

        </div>
    );
}

export default TostaditasTutorial;