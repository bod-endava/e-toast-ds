
import React from 'react';

import cssMarkdown from "../../../assets/markdown/tutorials/css.md";

import Hero from '../../../tostaditas-components/hero';
import Markdown from '../../../tostaditas-components/markdown';

import styles from './CssTutorial.module.scss';

function CssTutorial() {
    return (
        <div className={styles.CssTutorial}>
            <Hero
                title="CssTutorial"
                text=""
                secondary
            />

            <Markdown src={cssMarkdown} />
        </div>
    );
}

export default CssTutorial;