import React from "react";

import Markdown from "../../../tostaditas-components/markdown";
import Hero from "../../../tostaditas-components/hero";

import textDefault from "../../../assets/markdown/components/pagination/pagination.md";
import styles from "./paginationDocs.module.scss";

const NavbarDocs = () => {
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
        <nav class="eds-Pagination" role="navigation">
          <span class="eds-Pagination-toggle" id="js-Pagination-toggle">
            <i class="eds-icon menu"></i>
          </span>
          <a class="eds-Pagination-brand" href="#">Brand</a>
          <ul class="eds-Pagination-links">
            <li class="eds-Pagination-item eds-Pagination-item--active">
              <a href="#">Home</a>
            </li>
            <li class="eds-Pagination-item">
              <a class="eds-Pagination-link" href="#">Projects</a>
            </li>
            <li class="eds-Pagination-item">
              <a class="eds-Pagination-link" href="#">About</a>
            </li>
            <li class="eds-Pagination-item eds-Pagination-item--disabled">
              <a href="#">Disabled</a>
            </li>
          </ul>
        </nav>
        <Markdown src={textDefault} />
      </main>
    </div>
  );
};

export default PaginationDocs;
