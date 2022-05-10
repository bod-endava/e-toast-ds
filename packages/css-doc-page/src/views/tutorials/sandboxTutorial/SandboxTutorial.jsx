
import React from 'react';

import cssMarkdown from "../../../assets/markdown/tutorials/sandbox.md";

import Hero from '../../../tostaditas-components/hero';
import Markdown from '../../../tostaditas-components/markdown';

import styles from './SandboxTutorial.module.scss';

function SandboxTutorial() {
    return (
        <div className={styles.SandboxTutorial}>
            <Hero
                title="Sandbox"
                text=""
                secondary
            />

            <main className={styles.Main}>
                <Markdown src={cssMarkdown} />
            </main>

        </div>
    );
}

export default SandboxTutorial;