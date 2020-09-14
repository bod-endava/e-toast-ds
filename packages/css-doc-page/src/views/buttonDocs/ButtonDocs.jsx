import React , {useState} from 'react'
import ctaMark from '../../assets/markdown/buttons-cta.md'
import fillMark from '../../assets/markdown/buttons-primary.md'
import textMark from '../../assets/markdown/buttons-text.md'
import outlineMark from '../../assets/markdown/buttons-outline.md'
import ButtonsIcon from '../../assets/img/button-docs.svg'
import Markdown from '../../components/markdown/Markdown'
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
            {
                Object.entries(Sources).map(([key,src]) => 
                    <option key={src} value={src}>{key}</option> 
                )
            }
        </select>
    </div>
}

const getSource = (type) => type

const ButtonDocs = () => {
    const [ docs , setDocs ] = useState(Sources.Fill)

    const handleChange = (e) => {
        setDocs(e.target.value)
    }

    return (
        <section>
            <header className={styles.Splash}>
                <div className={styles.SplashTitleContainer}>
                    <h1 className={styles.SplashTitle}>Buttons</h1>
                    <p className={styles.SplashContent}>Express what action will occur on a page when the user interacts with them</p>
                </div>
                <img className={styles.SplashIcon} src={ButtonsIcon} alt="Buttons!"/>
            </header>
            <main className={styles.Main}>
                <h1 className={styles.Title}>Button</h1>
                <p>The button is an interactive element that is usually to send events or messages to other components. 
                    A button can have text elements inside of it to describe its action or effect on the rest of the page</p>
                <div>
                    <label className={styles.Label}>Select a specific button</label>
                    <ButtonTypes onChange={handleChange}/>
                </div>
                <Markdown src={getSource(docs)} />
            </main>
        </section>
    )
}

export default ButtonDocs