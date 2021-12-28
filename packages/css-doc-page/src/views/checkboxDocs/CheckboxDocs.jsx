import React , { useState } from 'react';
// import docs

import Markdown from '../../components/markdown';
import Hero from '../../components/hero';
import styles from './CheckboxDocs.module.scss';
import CheckboxIcon from '../../assets/img/checkbox-icon.svg';
import textMark from '../../assets/markdown/checkbox/default.md';

const Sources = {
};

const CheckboxDocs = () => {
    return (
      <div className={styles.CheckboxDocs}>
        <Hero
          title="Checkbox"
          text="este es el checkbox"
          image={CheckboxIcon}
        />
        <main className={styles.Main}>
          <Markdown src={textMark} />
        </main>
      </div>
    );
}

export default CheckboxDocs;
