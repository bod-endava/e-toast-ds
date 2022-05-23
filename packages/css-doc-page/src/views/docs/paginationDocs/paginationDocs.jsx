import React from "react";

import Markdown from "../../../tostaditas-components/markdown";
import Hero from "../../../tostaditas-components/hero";

import textDefault from "../../../assets/markdown/components/pagination/pagination.md";
import styles from "./paginationDocs.module.scss";

const PaginationDocs = () => {
  return (
    <div className={styles.PaginationDocs}>
      <Hero
        title="Pagination"
        text="Pagination is an element in HTML created to represent navigation links"
        secondary
      />
      <main className={styles.Main}>
        <header className={styles.MainHeader}>
          <h1 className={styles.MainTitle}>Pagination</h1>
          <p className={styles.MainHeaderContent}>
            Pagination is an element in HTML created to represent navigation links. You could say, nav is a container of links that will direct us to other pages. But the link that is in the element
          </p>
        </header>
        <div>
          <nav className="eds-pagination" role="navigation">
            <ul>
              <a href="#"><li>Prev</li></a>
              <a href="#"><li>1</li></a>
              <a href="#"><li>2</li></a>
              <a href="#" className="eds-pagination--is-active"><li>3</li></a>
              <a href="#"><li>4</li></a>
              <a href="#" className="eds-pagination--is-disabled"><li>5</li></a>
              <a href="#"><li>Next</li></a>
            </ul>
          </nav>
        </div>
        <Markdown src={textDefault} />
      </main>
    </div>
  );
};

export default PaginationDocs;
