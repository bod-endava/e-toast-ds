
import React from 'react';

import cssMarkdown from "../../../assets/markdown/tutorials/css.md";

import Hero from '../../../tostaditas-components/hero';
import Markdown from '../../../tostaditas-components/markdown';

import styles from './CssTutorial.module.scss';

function CssTutorial() {
    return (
        <div className={styles.CssTutorial}>
            <Hero
                title="Css"
                text=""
                secondary
            />

            <main className={styles.Main}>
                <Markdown src={cssMarkdown} />
            </main>

        </div>
    );
}

export default CssTutorial;