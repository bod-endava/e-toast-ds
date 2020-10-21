import React , { useState } from 'react';
import ctaMark from '../../assets/markdown/buttons/cta.md';
import ctaMarkIcon from '../../assets/markdown/buttons/cta-icon.md';
import fillMark from '../../assets/markdown/buttons/primary.md';
import fillMarkIcon from '../../assets/markdown/buttons/primary-icon.md';
import textMark from '../../assets/markdown/buttons/text.md';
import textMarkIcon from '../../assets/markdown/buttons/text-icon.md';
import outlineMark from '../../assets/markdown/buttons/outline.md';
import outlineMarkIcon from '../../assets/markdown/buttons/outline-icon.md';
import iconMark from '../../assets/markdown/buttons/icon.md';
import ButtonsIcon from '../../assets/img/button-docs.svg';
import Markdown from '../../components/markdown';
import Hero from '../../components/hero';
import styles from './ButtonDocs.module.scss';

const Sources = {
  Fill: fillMark,
  FillIcon: fillMarkIcon,
  Cta: ctaMark,
  CtaIcon: ctaMarkIcon,
  Outline: outlineMark,
  OutlineIcon: outlineMarkIcon,
  Text: textMark,
  TextIcon: textMarkIcon,
  Icon: iconMark,
  IconIcon: iconMark,
};

const ButtonTypes = (props) => {
  const { onChange } = props;
  return (
    <div className="eds-select">
      <select onChange={onChange}>
        <option value="Fill">Fill</option>
        <option value="Cta">Cta</option>
        <option value="Outline">Outline</option>
        <option value="Text">Text</option>
        <option value="Icon">Icon</option>
      </select>
    </div>
  );
}

const ButtonDocs = () => {
    const [buttonType, setButtonType] = useState("Fill");
    const [withIcon, setWithIcon] = useState("");

    const handleChange = (e) => setButtonType(e.target.value);
    const handleIconChange = (e) => setWithIcon(withIcon === "" ? "Icon" : "");

    return (
      <div className={styles.ButtonDocs}>
        <Hero 
          title="Buttons"
          text="Express what action will occur on a page when the user interacts with them"
          image={ButtonsIcon}
          secondary
        />
        <main className={styles.Main}>
          <header className={styles.MainHeader}>
            <h1 className={styles.MainTitle}>Button</h1>
            <p className={styles.MainHeaderContent}>
              The button is an interactive element that is usually to send events or messages to other components. 
              A button can have text elements inside of it to describe its action or effect on the rest of the page
            </p>
          </header>
          <div className={styles.DocChooser}>
            <div className={styles.Select}>
              <label className={styles.SelectLabel}>Select a specific button</label>
              <ButtonTypes onChange={handleChange}/>
            </div>
            <div className={styles.IconToggle}>
              <input id="with-icon" type="checkbox" class="eds-toggle" value="Yes" onChange={handleIconChange} disabled={buttonType === "Icon"} />
              <label for="with-icon" class="eds-toggle__label ">With Icon</label>
            </div>
          </div>
          <Markdown src={Sources[`${buttonType}${withIcon}`]} />
        </main>
      </div>
    );
}

export default ButtonDocs;
