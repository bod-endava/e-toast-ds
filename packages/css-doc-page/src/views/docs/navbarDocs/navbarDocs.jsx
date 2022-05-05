import React from "react";
import textDefault from "../../../assets/markdown/navbar/navbar.md";
import Markdown from "../../../tostaditas-components/markdown";
import Hero from "../../../tostaditas-components/hero";
import styles from "./navbarDocs.module.scss";

const NavbarDocs = () => {
  return (
    <div className={styles.NavbarDocs}>
      <Hero
        title="Navbar"
        text="Express what action will occur on a page when the user interacts with them"
        secondary
      />
      <main className={styles.Main}>
        <header className={styles.MainHeader}>
          <h1 className={styles.MainTitle}>Navbar</h1>
            <p className={styles.MainHeaderContent}>
              Nav is an element in HTML created to represent navigation links. You could say, nav is a container of links that will direct us to other pages. But the link that is in the element
            </p>
        </header>
          <nav class="eds-navbar" role="navigation">
            <span class="eds-navbar-toggle" id="js-navbar-toggle">
              <i class="fa-bars"></i>
            </span>
            <a class="eds-navbar-brand" href="#">Brand</a>
            <ul class="eds-navbar-links">
              <li class="eds-navbar-item eds-navbar-item--active">
                <a href="#">Home</a>
              </li>
              <li class="eds-navbar-item">
                <a class="eds-navbar-link" href="#">Projects</a>
              </li>
              <li class="eds-navbar-item">
                <a class="eds-navbar-link" href="#">About</a>
              </li>
              <li class="eds-navbar-item eds-navbar-item--disabled">
                <a href="#">Disabled</a>
              </li>
            </ul>
          </nav>
        <Markdown src={textDefault} />
      </main>
    </div>
  );
};

export default NavbarDocs;
