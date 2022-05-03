import React from "react";
import Hero from "../../../tostaditas-components/hero";
import ButtonsIcon from "../../../assets/img/button-docs.svg";
import styles from "./LoaderDocs.module.scss";
import Markdown from "../../../tostaditas-components/markdown";
import loaderDefault from "../../../assets/markdown/loader/default.md";

const LoaderDocs = () => {
  return (
    <div className={styles.LoaderDocs}>
      <Hero
        title="Loader"
        text="Loaders inform the user of loading or computing processes being carried out by the system"
        image={ButtonsIcon}
        secondary
      />
      <main className={styles.Main}>
        <header className={styles.MainHeader}>
          <p className={styles.MainHeaderContent}>
          The progress can either be displayed with specific details or communicated as undefined by means of a repeated animation.
          </p>
        </header>
        <div className="loader"></div>
        <Markdown src={loaderDefault}/>
      </main>
    </div>
  );
};

export default LoaderDocs;
