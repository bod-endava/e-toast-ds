import React from 'react';
import Hero from '../../components/hero/Hero';
import Eye from '../../assets/img/eye.svg';
import styles from './AccessibilitySpecifications.module.scss';
import proximity from '../../assets/img/proximity-illustration.svg';
import continuation from '../../assets/img/continuation-illustration.svg';
import similarity from '../../assets/img/similarity-illustration.svg';
import closure from '../../assets/img/clousure-illustration.svg';
import figureAndGround from '../../assets/img/figure-ground-illustration.svg';
import contrastPass from '../../assets/img/ContrastRatio-pass.svg';
import contrastFail from '../../assets/img/ContrastRatio-fail.svg';
import colorDo from '../../assets/img/color-do.svg';
import colorDont from '../../assets/img/color-dont.svg';
import interactiveElements from '../../assets/img/interactive-elements.svg';
import formElements from '../../assets/img/form-elements.svg';

function AccessibilitySpecifications() {
    return (
        <div className={styles.AccessibilitySpecifications}>
            <Hero
                title="Accessibility"
                text='"The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect."'
                image={Eye}
                secondary
            />
            <nav>
                <ul>
                    <li><a href="#HIERARCHY">HIERARCHY</a></li>
                    <li><a href="#COLOR">COLOR</a></li>
                    <li><a href="#TYPOGRAPHY">TYPOGRAPHY</a></li>
                    <li><a href="#INTERACTIONS">INTERACTIONS</a></li>
                    <li><a href="#FORMS">FORMS</a></li>
                    <li><a href="#RESPONSIVENESS">RESPONSIVENESS</a></li>
                </ul>
            </nav>
            <section>
                <h4>
                    <strong>
                        ETOAST’s design is focused on providing the necessary tools and information 
                        to achieve the accessibility required for your product. According to The 
                        World Wide Web Consortium accessibility means that Websites, tools, and 
                        technologies are designed and developed so that people can perceive, 
                        understand, navigate, and interact with them.
                    </strong>
                </h4>
                <div className={styles.DisabilitiesRow}>
                    <div className={styles.DisabilitiesColumn}>
                        <strong>People with Disabilities</strong>
                        <p>AUDITORY</p>
                        <p>COGNITIVE</p>
                        <p>NEUROLOGICAL</p>
                        <p>PHYSICAL</p>
                        <p>SPEECH</p>
                        <p>VISUAL</p>
                    </div>
                    <div className={styles.DisabilitiesColumn}>
                        <strong>People without Disabilities</strong>
                        <p>
                            People using mobile phones, smartwatches, smart TVs, and other devices 
                            with small screens, different input modes, etc.
                        </p>
                        <p>
                            Older people with changing abilities due to aging People with 
                            “temporary disabilities” such as a broken arm or lost glasses.
                        </p>
                        <p>
                            People with “situational limitations” such as in bright sunlight or in 
                            an environment where they cannot listen to audio.
                        </p>
                        <p>
                            People using a slow Internet connection, or who have limited or 
                            expensive bandwidth.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <h2 id="HIERARCHY">
                    HIERARCHY
                </h2>
                <p>
                    Make sure key information is perceived at first look. Users take a few seconds 
                    scanning a page so make sure to create a clear Hierarchy base on content 
                    importance. Organizing the content based on levels of importance.Make sure key 
                    information is perceived at first look. Users take a few seconds scanning a page 
                    so make sure to create a clear Hierarchy base on content importance. Organizing 
                    the content based on levels of importance.
                </p>
                <h3>
                    Page Structure
                </h3>
                <p>
                    Build an Intuitive layout for web pages and applications, so the user can 
                    quickly identify and navigate the content. Every basic layout should have a 
                    header, clear navigation, content space, and a footer. Ensure all content and 
                    design fits into a logical heading structure. The reading order should be the 
                    same as the visual order.Use headings and spacing to group related content
                </p>
                <h3>
                    Gestalt Principles
                </h3>
                <p>When Designing Consider Gestalt principles:</p>
                <br />
                <p>
                    Gestalt laws say that the mind understands the whole is greater than the sum of 
                    its parts. In other words, the mind will always try to simplify a group of 
                    things. For example: when you see a house, you will see the whole and quickly 
                    define it as "a house" not as "a roof with a structure and a door. Your mind 
                    will identify the whole first and then will appreciate the details.
                </p>
                <div className={styles.FigureColumn}>
                    <figure>
                        <img src={proximity} alt="proximity"/>
                        <p>
                            A human eye identifies design elements that are close to each other as 
                            related.
                        </p>
                    </figure>
                    <figure>
                        <img src={continuation} alt="continuation"/>
                        <p>
                            the human eye follows lines, curves, or a sequence of shapes in order 
                            to determine a relationship between design elements. This means that 
                            all the design elements place as a list horizontal or vertical will be 
                            identified as part of the same group.
                        </p>
                    </figure>
                    <figure>
                        <img src={similarity} alt="similarity"/>
                        <p>
                            A User will visually group design elements that have visual similarities; 
                            Color, shapes, and iconography.
                        </p>
                    </figure>
                    <figure>
                        <img src={closure} alt="closure"/>
                        <p>
                            The human eye perceives design elements such as shapes, letters, and 
                            pictures as a whole when they are not complete. Our perception will 
                            fill the gaps.
                        </p>
                    </figure>
                    <figure>
                        <img src={figureAndGround} alt="figure and ground"/>
                        <p>
                            The human eye has the ability to visually separate elements on different 
                            planes of focus. To execute this we need to take into account layering, 
                            contrast, and information hierarchy.
                        </p>
                    </figure>
                </div>
            </section>
            <section>
                <h2 id="COLOR">
                    COLOR
                </h2>
                <h3>
                    Color Contrast
                </h3>
                <p>
                    According to The Web Content Accessibility Guidelines (WCAG) “Foreground text 
                    needs to have sufficient contrast with background colors. This includes text on 
                    images, background gradients, buttons, and other elements. This does not apply 
                    for logos, or incidental text, such as text that happens to be in a photograph”
                </p>
                <div className={styles.ContrastColumn}>
                    <div className={styles.ContrastItem}>
                        <h3>
                            Contrast (Minimum) Level AA
                        </h3>
                        <p>
                            The visual presentation of text and images of text has a contrast ratio 
                            of at least 4.5:1, except for the following:
                        </p>
                        <p>
                            Large Text (18px bold or 24px normal): 
                            <br/> 
                            Large-scale text and images of large-scale text have a contrast ratio 
                            of at least 3:1;
                            <br/>
                            <br/>
                            Incidental: Text or images of text that are part of an inactive user 
                            interface component, that are pure decoration, that are not visible to 
                            anyone, or that are part of a picture that contains significant other 
                            visual content, have no contrast requirement.
                            <br/>
                            <br/>
                            Logotypes: Text that is part of a logo or brand name has no contrast 
                            requirement.
                        </p>
                    </div>
                    <div className={styles.ContrastItem}>
                        <h3>
                            Contrast (Enhanced) Level AAA
                        </h3>
                        <p>
                            The visual presentation of text and images of text has a contrast ratio 
                            of at least 7:1, except for the following:
                        </p>
                        <p>
                            Large Text (18px bold or 24px normal):
                            <br/>
                            Large-scale text and images of large-scale text have a contrast ratio 
                            of at least 4.5:1;
                            <br/>
                            <br/>
                            Incidental: Text or images of text that are part of an inactive user 
                            interface component, that are pure decoration, that are not visible to 
                            anyone, or that are part of a picture that contains significant other 
                            visual content, have no contrast requirement.
                            <br/>
                            <br/>
                            Logotypes: Text that is part of a logo or brand name has no contrast 
                            requirement.
                        </p>
                    </div>
                    <div className={styles.ContrastItem}>
                        <h3>
                            Non Text Contrast (Minimum) Level AA
                        </h3>
                        <p>
                            The visual presentation of the following have a contrast ratio of at least 
                            3:1 against adjacent color(s):
                        </p>
                        <p>
                            User Interface Components: Visual information required to identify user 
                            interface components and states, except for inactive components or where 
                            the appearance of the component is determined by the user agent and not 
                            modified by the author;
                            <br/>
                            <br/>
                            Graphical Objects: Parts of graphics required to understand the content, 
                            except when a particular presentation of graphics is essential to the 
                            information being conveyed.
                        </p>
                    </div>
                </div>
                <div className={styles.FigureColumn}>
                    <figure>
                        <img src={contrastPass} alt="contrast pass"/>
                    </figure>
                    <figure>
                        <img src={contrastFail} alt="contrast fail"/>
                    </figure>
                </div>
                <p>
                    Take into account that theses rules applies to everything that is part of the 
                    content and the user needs to understand or interact with. Yes, Icons, 
                    Components, especially Button, and form elements like Text fields (filled or 
                    border) and of course Text.
                </p>
                <br/>
                <p>
                    We carefully created Color Pallettes that passes AA Minimum W3C Standards is you 
                    follow the application rules. If they don't match what you are looking for feel 
                    Free to create your own color Pallette following the rules (Color, How to), 
                    taking into account the accessibility standards that meet your needs.
                </p>
            </section>
            <section>
                <h3>
                    Don’t use color alone to convey information
                </h3>
                <p>
                    Don't rely only on color to convey an important message. For example Error 
                    messages, success states, system warnings or brand information. Be sure to 
                    combine it with appropriate messaging and iconography
                </p>
                <div className={styles.FigureColumn}>
                    <figure>
                        <img src={colorDo} alt="color do"/>
                    </figure>
                    <figure>
                        <img src={colorDont} alt="color don't"/>
                    </figure>
                </div>
            </section>
            <section>
                <h2 id="TYPOGRAPHY">
                    TYPOGRAPHY
                </h2>
                <h3>
                    Font
                </h3>
                <p>
                    Choose a common font that most users have encountered before. Research shows 
                    that readers read faster and are happier with familiar typefaces than with 
                    unfamiliar ones. Sans-Serif or Serif are safe choices. Choose a typeface that 
                    works well in various sizes.
                </p>
                <h3>
                    Size
                </h3>
                <p>
                    Use 16 pixel for body text or as the base to create the Type scale. Ensure that 
                    default fonts are no smaller than 9 pt (12px). Smaller sizes may be illegible 
                    on some platforms.
                </p>
                <p>
                    Remember to provide relative font size such as percentages or units of em apart 
                    from absolutes such as pixels or points. This will allows the text to easily 
                    rezise across multiple devices and platforms.
                </p>
                <p>
                    WCAG recommendation is to ensure that text can be zoomed to 200%. As well, we 
                    recommend using liquid layouts that can accommodate 200% text.
                </p>
            </section>
            <section>
                <h2 id="INTERACTIONS">
                    INTERACTIONS
                </h2>
                <h3>
                    Interactive Elements
                </h3>
                <p>
                    Ensure that interactive elements are easy to identify. All interactive 
                    components that are or need to be clicked must have the different transition 
                    or states. Default, Hover, focus, Disabled and touch screen activation.
                </p>
                <div className={styles.CenteredImage}>
                    <img src={interactiveElements} alt="Interactive elements"/>
                </div>
            </section>
            <section>
                <h2 id="FORMS">
                    FORM ELEMENTS
                </h2>
                <h3>
                    Ensure that form elements include clearly associated labels
                </h3>
                <p>
                    Ensure that all fields have a descriptive label next to the field. For 
                    left-to-right languages, labels are usually positioned to the left or above 
                    the field, except for checkboxes and radio buttons where they are usually to 
                    the right. Don't leave too much space between labels and fields.
                </p>
                <div className={styles.CenteredImage}>
                    <img src={formElements} alt="Form elements"/>
                </div>
                <h3>
                    Provide easily Identifiable feedback
                </h3>
                <p>
                    Provide feedback for interactions, such as Confirmation, Warning, or alerting 
                    an Error or Danger. The instruction should be clear and important feedback that 
                    requires user attention should be visually prominent.
                </p>
            </section>
            <section>
                <h2 id="RESPONSIVENESS">
                    RESPONSIVENESS
                </h2>
                <h3>
                    Create designs for different viewport sizes
                </h3>
                <p>
                    Design for different viewports, such as mobile phones or zoomed browser windows. 
                    Make sure that text size and line width are set to maximize readability and 
                    legibility.
                </p>
            </section>
            <section>
                <h2>
                    USEFUL LINKS
                </h2>
                <h3>
                    More Info provided by the WCAG
                </h3>
                <h5>
                    WCAG
                </h5>
                <p>
                    TYPOGRAPHY
                </p>
                <a href="https://www.w3.org/WAI/WCAG21/quickref/#resize-text">1.4.4 Resize text Level AA</a>
                <a href="https://www.w3.org/WAI/WCAG21/quickref/#text-spacing">1.4.12 Text Spacing Level AA (Added in 2.1)</a>
                <p>
                    COLOR
                </p>
                <a href="https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum">Contrast (Minimum) 1.4.3 (Understanding 1.4.3)</a>
                <a href="https://www.w3.org/WAI/WCAG21/quickref/#use-of-color">Use of Color 1.4.1 (Understanding 1.4.1)</a>
                <a href="https://www.w3.org/WAI/WCAG21/quickref/#non-text-contrast">Non-text Contrast Level AA</a>
                <p>
                    FORM ELEMENTS
                </p>
                <a href="https://www.w3.org/WAI/WCAG21/quickref/#error-identification">Error Identification 3.3.1 (Understanding 3.3.1)</a>
                <a href="https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions">Labels or Instructions 3.3.2 (Understanding 3.3.2)</a>
                <a href="https://www.w3.org/WAI/WCAG21/quickref/#error-suggestion">Error Suggestion 3.3.3 (Understanding 3.3.3)</a>
                <p>
                    HIERARCHY
                </p>
                <a href="https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels">Headings and Labels 2.4.6 (Understanding 2.4.6)</a>
                <a href="https://www.w3.org/WAI/WCAG21/quickref/#section-headings">Section Headings 2.4.10 (Understanding 2.4.10)</a>
                <a href="https://www.w3.org/WAI/WCAG21/quickref/#consistent-navigation">Consistent Navigation 3.2.3 (Understanding 3.2.3)</a>
                <a href="https://www.w3.org/WAI/WCAG21/quickref/#multiple-ways">Multiple Ways 2.4.5 (Understanding 2.4.5)</a>
                <h5>
                    Support Tool
                </h5>
                <p>
                    COLOR
                </p>
                <a href="https://www.w3.org/WAI/test-evaluate/preliminary/#contrast">How to check contrast ratio</a>
                <p>
                    FORM ELEMENTS
                </p>
                <a href="https://www.w3.org/WAI/tutorials/forms/notifications/">User Notifications</a>
                <a href="https://www.w3.org/WAI/tutorials/forms/labels/#visual-position-of-label-text">Visual position of label text</a>
                <p>
                    RESPONSIVE
                </p>
                <a href="https://www.w3.org/TR/mobile-accessibility-mapping/#h-small-screen-size">Small Screen Size</a>
                <a href="https://www.w3.org/TR/mobile-accessibility-mapping/#mobile-accessibility-considerations-related-primarily-to-principle-3-understandable">Mobile considerations related to Understandability</a>
                <p>HIERARCHY</p>
                <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Headings</a>
                <h3>
                    Articles, Tools & Stories 
                </h3>
                <h4>
                    User Stories
                </h4>
                <p>
                    COLOR
                </p>
                <a href="http://colorsafe.co/">color safe</a>
                <a href="https://webaim.org/resources/contrastchecker/">Contrast Checker</a>
                <p>
                    HIERARCHY
                </p>
                <a href="https://medium.muz.li/gestalt-principles-in-ui-design-6b75a41e9965?gi=92604929b5a6">Gestalt principles in UI design.</a>
                <a href="https://www.justinmind.com/blog/navigation-design-almost-everything-you-need-to-know/">Navigation design: Almost everything you need to know</a>
                <h4>
                    REFERENCES
                </h4>
                <a href="https://www.w3.org/WAI/tips/designing/#use-headings-and-spacing-to-group-related-content">Designing for Web Accessibility</a>
                <a href="https://material.io/design/usability/accessibility.html">material design accessibility</a>
                <a href="https://accessibility.digital.gov/visual-design/layout-and-hierarchy/">Accessibility for Teams</a>
                <a href="https://accessibility.psu.edu/fontsizehtml/">Accessibility and Usability at Penn State</a>
            </section>
        </div>
    )
}

export default AccessibilitySpecifications;