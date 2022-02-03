import React from 'react';
import styles from './IconGuidelines.module.scss';
import Hero from '../../../tostaditas-components/hero';
import iconsImage from '../../../assets/img/icons.svg';

function IconGuidelines() {
  const icons = ["add", "alert-message", "announcement", "arrow-down", "arrow-left", "arrow-right", "arrow-up", "back", "bookmark", "calendar", "caret-down", "caret-left", "caret-right", "caret-up", "chat", "check", "circle-check", "circle-x", "clock", "close", "cloud", "compress", "copy", "document", "down", "download", "edit", "expand", "filter", "folder", "full-screen", "home", "image", "information", "label", "lock", "mail", "menu", "money", "more", "new-file", "new-folder", "next", "notification", "search", "settings", "share", "trash", "up", "upload", "warning-circle-fill", "warning-circle", "warning"];

  return (
    <div className={styles.IconGuidelines}>
      <Hero
        title="Icon Guidelines"
        text="Icons are simple but effective graphic representations of actions, files, locations, or concepts."
        image={iconsImage}
        secondary
      />
      <section className={styles.BottomSection}>
        <h2>Custom Icon font creation</h2>
        <p>
          There might be several reasons to create your own custom icon font or extend the current set. We use a service called <a href="https://icomoon.io/" target="_blank" rel="noopener noreferrer">Icomoon</a> to create our set, but feel free to use tools like <a href="https://fontforge.org/en-US/" target="_blank" rel="noopener noreferrer">FontForge</a> if you have knowledgable typographic designers.<br />
          Our font uses Private Use Areas of Unicode for our icons. This helps with screen readers compatibility and the use of ligatures to allow using icons to be semantic and meaningful. 
        </p>
      </section>
      <section className={styles.BottomSection}>
        <h2>Using Icomoon to create your own icon font.</h2>
        <ol>
          <li>Start by creating the icons you want to use in your favorite vector software.</li>
          <li>We recommend expanding any line you might be used to create a filled shape without an intrinsic line value.</li>
          <li>Flatten any shape that is part of your icon and delete any group around it to decrease the complexity and font size at the end.</li>
          <li>Export each icon as an SVG.</li>
          <li>Import each icon into Icomoon.</li>
          <li>Create your set and select all the icons you want in your font.</li>
          <li>Click on generate font at the bottom of the font.</li>
          <li>Active ligatures and add semantic ligatures to each of the icons.</li>
          <li>Download the font and add it to your project.</li>
        </ol>
      </section>
      <section className={styles.BottomSection}>
        <h2>
          Etoast Icon Library
        </h2>
        <div className={styles.IconTable}>
          {
            icons.map( i => <div className={styles.Icon} key={i}><span className={`eds-icon ${i}`} /> <p>{i}</p></div>)
          }
        </div>
      </section>
    </div>
  );
}

export default IconGuidelines;
