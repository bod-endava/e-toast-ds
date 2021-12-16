import React , { useState } from 'react';
// import docs

import Markdown from '../../components/markdown';
import Hero from '../../components/hero';
import styles from './CheckboxDocs.module.scss';

const Sources = {
};

const CheckboxDocs = () => {
    return (
      <div className={styles.CheckboxDocs}>
        <Hero
          title="Checkbox"
          text=""
          image={""}
        />
        <main className={styles.Main}>
          <Markdown src={""} />
        </main>
      </div>
    );
}

export default CheckboxDocs;
