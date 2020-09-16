import React from 'react';
import styles from './TypographyGuidelines.module.scss';
import typography from '../../assets/img/type-thin.svg';

function TypographyGuidelines() {
    return (
        <>
            <section className={styles.TopSection}>
                <div className={styles.Title}>
                    <h1>Typography</h1>
                    <p>
                        Use typography to display your content as simply and efficiently as possible.
                    </p>
                </div>
                <div className={styles.Circle}>
                    <img src={typography} alt="typography" />
                </div>
            </section>
            <section className={styles.TypeSection}>
                <h2>
                    TYPEFACE
                </h2>
                <p>
                    The three basic kinds of Typeface are serif, sans-serif, and decorative. When choosing a
                    typeface, ensure your fonts are web browser friendly. Libraries such as Google fonts offer
                    web-based font files that can be rendered in a browser with minimal issues.
                    <br />
                    <br />
                    <strong>
                        We recommend staying with well-known sources, Sans-Serif or Serif are safe choices.
                        Avoid using Decorative typefaces. Also, choose a typeface that works well in various sizes.
                    </strong>
                </p>
            </section>
            <section className={styles.TypeSection}>
                <h2>
                    TYPE SCALE
                </h2>
                <p>
                    ETOAST typography scale is a set of fixed type sizes to provide harmony and hierarchy on the design.
                </p>
                <p>
                    <table>
                        <tr>
                            <th />
                            <th>SIZE</th>
                            <th>EM</th>
                            <th>WEIGHT</th>
                            <th>LINE HEIGHT</th>
                        </tr>
                        <tr className={styles.SpaceOver}>
                            <td className={styles.H1}>H1 Headline</td>
                            <td>29px</td>
                            <td>1.813 em</td>
                            <td>500</td>
                            <td>48px</td>
                        </tr>
                        <tr>
                            <td className={styles.H2}>H2 Headline</td>
                            <td>26px</td>
                            <td>1.625 em</td>
                            <td>500</td>
                            <td>39px</td>
                        </tr>
                        <tr>
                            <td className={styles.H3}>H3 Headline</td>
                            <td>24px</td>
                            <td>1.5 em</td>
                            <td>500</td>
                            <td>36px</td>
                        </tr>
                        <tr>
                            <td className={styles.H4}>H4 Headline</td>
                            <td>20px</td>
                            <td>1.25 em</td>
                            <td>500</td>
                            <td>30px</td>
                        </tr>
                        <tr>
                            <td>Subtitle</td>
                            <td>16px</td>
                            <td>1 em</td>
                            <td>500</td>
                            <td>24px</td>
                        </tr>
                        <tr>
                            <td>P1 Paragraph</td>
                            <td>16px</td>
                            <td>1 em</td>
                            <td>400</td>
                            <td>24px</td>
                        </tr>
                        <tr>
                            <td>Placeholder</td>
                            <td>16px</td>
                            <td>1 em</td>
                            <td>400</td>
                            <td>24px</td>
                        </tr>
                        <tr>
                            <td>BUTTON</td>
                            <td>16px</td>
                            <td>1 em</td>
                            <td>400</td>
                            <td>24px</td>
                        </tr>
                        <tr>
                            <td>Label</td>
                            <td>12px</td>
                            <td>0.75 em</td>
                            <td>400</td>
                            <td>18px</td>
                        </tr>
                    </table>
                </p>
            </section>
            <section className={styles.TypeSection}>
                <h2>
                    WEIGHT
                </h2>
                <div className={styles.TypeWeightsRow}>
                    <div className={styles.TypeWeight}>
                        <p className={styles.Weight400}>
                            400
                        </p>
                        <p>
                            Regular
                        </p>
                    </div>
                    <div className={styles.TypeWeight}>
                        <p className={styles.Weight500}>
                            500
                        </p>
                        <p>
                            Medium
                        </p>
                    </div>
                    <div className={styles.TypeWeight}>
                        <p className={styles.Weight700}>
                            700
                        </p>
                        <p>
                            Bold
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.TypeSection}>
                <h2>
                    HEIGHT
                </h2>
                <p>
                    Line height (line spacing) should be at least 1.5 times the font size
                </p>
            </section>
            <section className={styles.TypeSection}>
                <h2>
                    PARAGRAPH
                </h2>
                <p>
                    Limit line length to 70–80 characters
                </p>
            </section>
            <section className={styles.TypeSection}>
                <h2>
                    LETTER SPACING
                </h2>
                <p>
                    Larger type sizes, such as headlines, use tighter letter-spacing to improve readability 
                    and reduce space between letters. Image for post. For smaller type sizes, looser letter 
                    spacing can improve readability
                </p>
            </section>
            <section className={styles.TypeSection}>
                <h2>
                    TEXT ALIGNMENT
                </h2>
                <p>
                    Left, centered or right only (don’t justify)
                </p>
            </section>
        </>
    )
}

export default TypographyGuidelines;