import React from "react";
import textDefault from "../../../assets/markdown/components/selects/default.md";
import ButtonsIcon from "../../../assets/img/button-docs.svg";
import Markdown from "../../../tostaditas-components/markdown";
import Hero from "../../../tostaditas-components/hero";
import styles from "./selectDocs.module.scss";

const SelectDocs = () => {
  // Select Docs Page
  return (
    <div className={styles.SelectDocs}>
      <Hero
        title="Selects"
        text="Express what action will occur on a page when the user interacts with them"
        image={ButtonsIcon}
        secondary
      />
      <main className={styles.Main}>
        <header className={styles.MainHeader}>
          <h1 className={styles.MainTitle}>Select</h1>
          <div class="eds-select">
            <select>
              <option hidden>Choose one</option>
              <option>First</option>
              <option>Second</option>
              <option>Third</option>
            </select>
          </div>
        </header>
        <Markdown src={textDefault} />
      </main>
    </div>
  );
};

export default SelectDocs;
