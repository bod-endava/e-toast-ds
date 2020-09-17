import React , { useState } from 'react'
import ctaMark from '../../assets/markdown/buttons-cta.md'
import fillMark from '../../assets/markdown/buttons-primary.md'
import textMark from '../../assets/markdown/buttons-text.md'
import outlineMark from '../../assets/markdown/buttons-outline.md'
import ButtonsIcon from '../../assets/img/button-docs.svg'
import Markdown from '../../components/markdown'
import Hero from '../../components/hero'
import styles from './ButtonDocs.module.scss';

const Sources = {
    Fill: fillMark,
    Cta: ctaMark,
    Outline: outlineMark,
    Text: textMark,
}

const ButtonTypes = (props) => {
    const { onChange } = props
    return <div className="eds-select">
        <select onChange={onChange}>
            <option value={Sources.Fill}>Fill</option>
            <option value={Sources.Cta}>Cta</option>
            <option value={Sources.Outline}>Outline</option>
            <option value={Sources.Text}>Text</option>
        </select>
    </div>
}

const ButtonDocs = () => {
    const [ src , setSrc ] = useState(Sources.Fill)

    const handleChange = (e) => setSrc(e.target.value)

    return (
        <section className={styles.ButtonDocs}>
            <Hero 
                title="Buttons"
                text="Express what action will occur on a page when the user interacts with them"
                image={ButtonsIcon}
            />
            <main className={styles.Main}>
                <header className={styles.MainHeader}>
                    <h1 className={styles.MainTitle}>Button</h1>
                    <p className={styles.MainHeaderContent}>
                        The button is an interactive element that is usually to send events or messages to other components. 
                        A button can have text elements inside of it to describe its action or effect on the rest of the page
                    </p>
                </header>
                <div className={styles.Select}>
                    <label className={styles.SelectLabel}>Select a specific button</label>
                    <ButtonTypes onChange={handleChange}/>
                </div>
                <Markdown src={src} />
            </main>
        </section>
    )
}

export default ButtonDocs