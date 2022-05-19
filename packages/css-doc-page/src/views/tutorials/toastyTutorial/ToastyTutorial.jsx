
import React from 'react';

import cssMarkdown from "../../../assets/markdown/tutorials/toasty.md";

import Hero from '../../../tostaditas-components/hero';
import Markdown from '../../../tostaditas-components/markdown';

import styles from './ToastyTutorial.module.scss';

function ToastyTutorial() {
    return (
        <div className={styles.ToastyTutorial}>
            <Hero
                title="Toasty"
                text=""
                secondary
            />

            <main className={styles.Main}>
                <Markdown src={cssMarkdown} />
            </main>

        </div>
    );
}

export default ToastyTutorial;