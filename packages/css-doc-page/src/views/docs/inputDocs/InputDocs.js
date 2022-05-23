import React , { useState } from 'react';


// #CLEAN NotUsed: import input from '../../assets/markdown/components/inputs/inputs.md';
import inputMark from '../../../assets/markdown/components/inputs/input-mark.md';
import inputLabel from '../../../assets/markdown/components/inputs/input-label.md';
import inputIcon from '../../../assets/img/input-icon.svg';
import Markdown from '../../../tostaditas-components/markdown';
import Hero from '../../../tostaditas-components/hero';
import styles from './InputDocs.module.scss';


import inputMarkIcon from '../../../assets/markdown/components/inputs/inputMark-icon.md';
import inputLabelIcon from '../../../assets/markdown/components/inputs/inputLabel-icon.md';





const Sources = {
  InputMark:inputMark,
  InputLabel:inputLabel,

  InputMarkIcon:inputMarkIcon,
  InputLabelIcon:inputLabelIcon


};

const InputTypes = (props) => {
  const { onChange } = props;
  return (
    <div className="eds-select">
      <select onChange={onChange}>
        <option value="InputMark">Input-general</option>
        <option value="InputLabel">Input-label</option>
      </select>
    </div>
  );
}

const InputDocs = () => {
    const [iconType, setIconType] = useState("InputMark");
    const [withIcon, setWithIcon] = useState("");

    const handleChange = (e) => setIconType(e.target.value);
    const handleIconChange = (e) => setWithIcon(withIcon === "" ? "Icon" : "");

    return (
      <div className={styles.ButtonDocs}>
        <Hero
          title="Inputs"
          text="Express what action will occur on a page when the user interacts with them"
          image={inputIcon}
          secondary
        />
        <main className={styles.Main}>
          <header className={styles.MainHeader}>
            <h1 className={styles.MainTitle}>Input</h1>
            <p className={styles.MainHeaderContent}>
            The input control that presents users with an interactive control for entering data.
            </p>
          </header>
          <div className={styles.DocChooser}>
            <div className={styles.Select}>
              <label className={styles.SelectLabel}>Select a specific input</label>
              <InputTypes onChange={handleChange}/>
            </div>
            <div className={styles.IconToggle}>
              <input id="with-icon" type="checkbox" class="eds-toggle" value="Yes" onChange={handleIconChange} disabled={iconType === "Icon"} />
              <label for="with-icon" class="eds-toggle__label ">With Icon</label>
            </div>
          </div>
          <Markdown src={Sources[`${iconType}${withIcon}`]} />
        </main>
      </div>
    );
}

export default InputDocs;
