import React from 'react';
import styles from './ColorGuidelines.module.scss';
import Hero from '../../components/hero';
import palette from '../../assets/img/palette-thin.svg';
import singleArrow from '../../assets/img/arrow1.svg';
import multipleArrows from '../../assets/img/arrows2.svg';
import ColorTheme from '../../components/colorTheme';
import { Link } from 'react-router-dom';

function ColorGuidelines() {
  return (
    <div className={styles.ColorGuidelines}>
      <Hero
        title="Color"
        text="Toast color system is carefully selected to can help you create a color
              theme that reflects your brand or style. It has been tested to meet WCAG
              accessibility requirements for contrast and color. Using colors outside of
              this palette may result in an inaccessible experience for some users, and
              should be avoided when possible."
        image={palette}
        secondary
      />
      <section className={styles.LightSection}>
        <h2>
          HOW TO CREATE A COLOR PALETTE ON E TOAST?
        </h2>
        <p>
          ETOAST COLOR PALETTE is composed of a Base color, two shades (Dark Variant,
          Darkest Variant) 2 tints (Mid Variant, Light Variant). The base color is a variable,
          where it can be any color of your choice. The shade and tint variation have a set
          of values (based on the HSL color code) these values depend on the HSL code of the
          base color (HSL stands for Hue Saturation an Lightness).
        </p>
        <h2>
          STEPS
        </h2>
        <p>
          First choose a base color and get the HSL values:
        </p>
        <div className={`${styles.BigColorStrip} ${styles.Orange}`}>
          BASE (H12 S80 L45)
        </div>
        <p>
          To create the variants Etoast will replicate the Hue and Saturation Values from the base
          and we will copy the values of lightness provided bellow to generate the shades and tints.
        </p>
        <div className={styles.Gradient}>
          <div className={`${styles.BigColorStrip} ${styles.OrangeLight}`}>
            LIGHT VARIANT (H12 S80 <span className={styles.OrangeHighLight}>L90)</span>
          </div>
          <div className={`${styles.BigColorStrip} ${styles.OrangeMid}`}>
            MID VARIANT (H12 S80 <span className={styles.OrangeHighLight}>L75)</span>
          </div>
          <div className={`${styles.BigColorStrip} ${styles.Orange}`}>
            BASE <span className={styles.GrayHighLight}>(H12 S80 L45)</span> &#160;
            <img src={singleArrow} alt="arrow" /> &#160;
            Base HSL values
          </div>
          <div className={`${styles.BigColorStrip} ${styles.OrangeDark}`}>
            DARK VARIANT (H12 S80 <span className={styles.GrayHighLight}>L14)</span>
          </div>
          <div className={`${styles.BigColorStrip} ${styles.OrangeDarkest}`}>
            DARKEST VARIANT (H12 S80 <span className={styles.GrayHighLight}>L4)</span>
          </div>
          <div className={styles.Arrows}>
            <img src={multipleArrows} alt="arrows" />
            <p>
              Lightness Value Provided
            </p>
          </div>
        </div>
        <h2>
          CASE STUDY:
        </h2>
        <p>
          The client provided a base color:
        </p>
        <div className={`${styles.BigColorStrip} ${styles.StudyBlue}`}>
          BASE (hex 1773CF)
        </div>
        <p>
          Obtain the HSL color Values
        </p>
        <div className={`${styles.BigColorStrip} ${styles.StudyBlue}`}>
          BASE (H210 S80 L45)
        </div>
        <p>
          Obtain the Tint and shades Variant: repeat the hue and saturation value for
          the base color and copy the values of lightness provided for ETOAST
        </p>
        <div className={styles.Gradient}>
          <div className={`${styles.BigColorStrip} ${styles.StudyBlueLight}`}>
            LIGHT VARIANT (H210 S80 <span className={styles.OrangeHighLight}>L90)</span>
          </div>
          <div className={`${styles.BigColorStrip} ${styles.StudyBlueMid}`}>
            MID VARIANT (H210 S80 <span className={styles.OrangeHighLight}>L75)</span>
          </div>
          <div className={`${styles.BigColorStrip} ${styles.StudyBlue}`}>
            BASE <span className={styles.GrayHighLight}>(H210 S80 L45)</span> &#160;
            <img src={singleArrow} alt="arrow" /> &#160;
            Base HSL values
          </div>
          <div className={`${styles.BigColorStrip} ${styles.StudyBlueDark}`}>
            DARK VARIANT (H210 S80 <span className={styles.GrayHighLight}>L14)</span>
          </div>
          <div className={`${styles.BigColorStrip} ${styles.StudyBlueDarkest}`}>
            DARKEST VARIANT (H210 S80 <span className={styles.GrayHighLight}>L4)</span>
          </div>
          <div className={styles.Arrows}>
            <img src={multipleArrows} alt="arrows" />
            <p>
              Lightness Value Provided
            </p>
          </div>
        </div>
      </section>
      <section className={styles.DarkSection}>
        <h2>
          RECOMMENDATIONS
        </h2>
        <p>
          Take into account the contrast ratio of your base color in must pass basic Accessibility
          Standards.
        </p>
      </section>
      <section className={styles.LightSection}>
        <h2>
          ETOAST COLOR SCHEME
        </h2>
        <p>
          We created a color scheme tailored made to the design system, carefully apply to the design
          of every component guaranteeing and accessible experience.
        </p>
        <div className={styles.Schemes}>
          <div className={styles.SchemeColumnWide}>
            <figure className={styles.Orange}>
              <div className={`${styles.SmallColorStrip} ${styles.OrangeDarkest}`} />
              <div className={`${styles.SmallColorStrip} ${styles.OrangeDark}`} />
              <div className={`${styles.SmallColorStrip} ${styles.OrangeMid}`} />
              <div className={`${styles.SmallColorStrip} ${styles.OrangeLight}`} />
            </figure>
            <h3>
              Primary
            </h3>
            <p>
              The primary color is the dominant color within the visuals, by default. This color
              is the color displayed most frequently across screens and components. Take into
              account when choosing the color that it will be used on Text buttons and content so
              it has to pass minimum Accessibility standards. Use the variants function as a color
              option to convey transition between states a provided interaction.
            </p>
            <Link to="/AccessibilitySpecifications">SEE ACCESSIBILITY STANDARDS</Link>
          </div>
          <div className={styles.SchemeColumnWide}>
            <figure className={styles.StudyBlue}>
              <div className={`${styles.SmallColorStrip} ${styles.StudyBlueDarkest}`} />
              <div className={`${styles.SmallColorStrip} ${styles.StudyBlueDark}`} />
              <div className={`${styles.SmallColorStrip} ${styles.StudyBlueMid}`} />
              <div className={`${styles.SmallColorStrip} ${styles.StudyBlueLight}`} />
            </figure>
            <h3>
              CTA
            </h3>
            <p>
              Accent colors should be used  in small amounts to focus the eye to a specific
              part of the visual.
              <br />
              Take into account when choosing the color that it will be used on Text buttons
              and content so it has to pass minimum Accessibility standards.  Use the variants
              function as a color option to convey transition between states a provided
              interaction.
            </p>
            <Link to="/AccessibilitySpecifications">SEE ACCESSIBILITY STANDARDS</Link>
          </div>
          <div className={styles.SchemeColumnWide}>
            <figure className={styles.Secondary}>
              <div className={`${styles.SmallColorStrip} ${styles.SecondaryDarkest}`} />
              <div className={`${styles.SmallColorStrip} ${styles.SecondaryDark}`} />
              <div className={`${styles.SmallColorStrip} ${styles.SecondaryMid}`} />
              <div className={`${styles.SmallColorStrip} ${styles.SecondaryLight}`} />
            </figure>
            <h3>
              Secondary (optional)
            </h3>
            <p>
              Secondary color is the optional to apply within the visuals to generate contrast.
              <br />
              Take into account when choosing the color that it will be used on Text buttons and
              content so it has to pass minimum Accessibility standards.  Use the variants
              function as a color option to convey transition between states a provided
              interaction.
            </p>
            <Link to="/AccessibilitySpecifications">SEE ACCESSIBILITY STANDARDS</Link>
          </div>
        </div>
        <div className={styles.Schemes}>
          <div className={styles.SchemeColumnWide}>
            <figure className={styles.LightGray} />
            <h3>
              Secondary Background
            </h3>
            <p>
              The Secondary Background is only to be used on fields, sections and cards.
              Light Contrast is a  tint of the Primary, CTA or Secondary options where the
              lightness value is 90%.
            </p>
          </div>
          <div className={styles.SchemeColumnWide}>
            <figure className={styles.Black} />
            <h3>
              Content
            </h3>
            <p>
              The content color is only to be use for readable information (text/icons).
              Darkest Contrast is a shade of of the Primary, CTA or Secondary options where
              the lightness value is 4%.
            </p>
          </div>
          <div className={styles.SchemeColumnWide}>
            <figure className={styles.Outline} />
              <h3>
                Background
              </h3>
              <p>
                Background color is the default color for most of the visuals.
              </p>
            </div>
        </div>
        <div className={styles.Schemes}>
            <div className={styles.SchemeColumnNarrow}>
              <figure className={styles.LightRed}>
                <div className={`${styles.SmallColorStrip} ${styles.LightRedDarkest}`} />
                <div className={`${styles.SmallColorStrip} ${styles.LightRedDark}`} />
                <div className={`${styles.SmallColorStrip} ${styles.LightRedMid}`} />
                <div className={`${styles.SmallColorStrip} ${styles.LightRedLight}`} />
              </figure>
              <h3>
                Danger
              </h3>
              <p>
                The elements and text that provide warnings (negative semantics) are colored red.
                Take into account when choosing the color that it will be used on Text buttons
                and content so it has to pass minimum Accessibility standards.  Use the variants
                function as a color option to convey transition between states a provided
                interaction.
              </p>
            </div>
            <div className={styles.SchemeColumnNarrow}>
              <figure className={styles.Green}>
                <div className={`${styles.SmallColorStrip} ${styles.GreenDarkest}`} />
                <div className={`${styles.SmallColorStrip} ${styles.GreenDark}`} />
                <div className={`${styles.SmallColorStrip} ${styles.GreenMid}`} />
                <div className={`${styles.SmallColorStrip} ${styles.GreenLight}`} />
              </figure>
              <h3>
                Success
              </h3>
              <p>
                The elements and text that provide success or positive semantics are colored green.
                Take into account when choosing the color that it will be used on Text buttons
                and content so it has to pass minimum Accessibility standards. Use the variants
                function as a color option to convey transition between states a provided
                interaction.
              </p>
            </div>
            <div className={styles.SchemeColumnNarrow}>
              <figure className={styles.Yellow}>
                <div className={`${styles.SmallColorStrip} ${styles.YellowDarkest}`} />
                <div className={`${styles.SmallColorStrip} ${styles.YellowDark}`} />
                <div className={`${styles.SmallColorStrip} ${styles.YellowMid}`} />
                <div className={`${styles.SmallColorStrip} ${styles.YellowLight}`} />
              </figure>
              <h3>
                Warning
              </h3>
              <p>
                The elements and text that provide warnings (negative semantics) are colored yellow.
                Take into account when choosing the color that it will be used on Text buttons
                and content so it has to pass minimum Accessibility standards.  Use the variants
                function as a color option to convey transition between states a provided
                interaction.
              </p>
            </div>
            <div className={styles.SchemeColumnNarrow}>
              <figure className={styles.Disabled}>
                <div className={`${styles.SmallColorStrip} ${styles.DisabledDarkest}`} />
                <div className={`${styles.SmallColorStrip} ${styles.DisabledDark}`} />
                <div className={`${styles.SmallColorStrip} ${styles.DisabledMid}`} />
                <div className={`${styles.SmallColorStrip} ${styles.DisabledLight}`} />
              </figure>
              <h3>
                Disabled
              </h3>
              <p>
                The elements and text that provide are disabled are colored gray. Use the
                variants function as a color option to convey transition between states a
                provided interaction. Disabled buttons do not need to pass color contrast
                guidelines.
              </p>
              <Link to="/AccessibilitySpecifications">SEE ACCESSIBILITY STANDARDS</Link>
            </div>
          </div>
      </section>
      <section className={styles.DarkSection}>
        <h2>
          RECOMMENDATIONS
        </h2>
        <p>
          Carefully choose the color base on the background you’re going to design upon. If your
          background is dark choose a color palette that passes accessibility testing against a
          dark background and carefully select your primary, CTA and secondary colors.
        </p>
      </section>
      <section className={styles.LightSection}>
        <h2>
          ETOAST COLOR THEMES
        </h2>
        <p>
          ETOAST provides a group of color pallettes ready to use for design and development
        </p>
        <div className={styles.Themes}>
          <div className={styles.ThemeColumn}>
            <ColorTheme
              name="BRIGHT BLUE"
              variant="LIGHT"
              hex="D1E5FA"
              number="10"
              accessibilityPasses={["PASS","PASS","FAIL","FAIL"]}
            />
            <ColorTheme
              name="BRIGHT BLUE"
              variant="MID"
              hex="8CBFF2"
              number="30"
              accessibilityPasses={["PASS","PASS","FAIL","FAIL"]}
            />
            <ColorTheme
              name="BRIGHT BLUE"
              variant="BASE"
              hex="1773CF"
              number="50"
              accessibilityPasses={["PASS","FAIL","PASS","PASS"]}
              whiteText
            />
            <ColorTheme
              name="BRIGHT BLUE"
              variant="DARK"
              hex="072440"
              number="70"
              accessibilityPasses={["FAIL","FAIL","PASS","PASS"]}
              whiteText
              whiteMarks
            />
            <ColorTheme
              name="BRIGHT BLUE"
              variant="DARKEST"
              hex="020A12"
              number="90"
              accessibilityPasses={["FAIL","FAIL","PASS","PASS"]}
              whiteText
              whiteMarks
            />
          </div>
          <div className={styles.ThemeColumn}>
            <ColorTheme
              name="BRIGHT BLUE"
              variant="LIGHT"
              hex="D9E5F2"
              number="10"
              accessibilityPasses={["PASS","PASS","FAIL","FAIL"]}
            />
            <ColorTheme
              name="BRIGHT BLUE"
              variant="MID"
              hex="9FBFDF"
              number="30"
              accessibilityPasses={["PASS","PASS","FAIL","FAIL"]}
            />
            <ColorTheme
              name="BRIGHT BLUE"
              variant="BASE"
              hex="285078"
              number="50"
              accessibilityPasses={["FAIL","FAIL","PASS","PASS"]}
              whiteText
            />
            <ColorTheme
              name="BRIGHT BLUE"
              variant="DARK"
              hex="122436"
              number="70"
              accessibilityPasses={["FAIL","FAIL","PASS","PASS"]}
              whiteText
              whiteMarks
            />
            <ColorTheme
              name="BRIGHT BLUE"
              variant="DARKEST"
              hex="050A0F"
              number="90"
              accessibilityPasses={["FAIL","FAIL","PASS","PASS"]}
              whiteText
              whiteMarks
            />
          </div>
          <div className={styles.ThemeColumn}>
            <ColorTheme
              name="AQUA"
              variant="LIGHT"
              hex="D4F1F7"
              number="10"
              accessibilityPasses={["PASS","PASS","FAIL","FAIL"]}
            />
            <ColorTheme
              name="AQUA"
              variant="MID"
              hex="93DDEC"
              number="30"
              accessibilityPasses={["PASS","PASS","FAIL","FAIL"]}
            />
            <ColorTheme
              name="AQUA"
              variant="BASE"
              hex="177082"
              number="50"
              accessibilityPasses={["PASS","FAIL","PASS","PASS"]}
              whiteText
            />
            <ColorTheme
              name="AQUA"
              variant="DARK"
              hex="0B343D"
              number="70"
              accessibilityPasses={["FAIL","FAIL","PASS","PASS"]}
              whiteText
              whiteMarks
            />
            <ColorTheme
              name="AQUA"
              variant="DARKEST"
              hex="030F11"
              number="90"
              accessibilityPasses={["FAIL","FAIL","PASS","PASS"]}
              whiteText
              whiteMarks
            />
          </div>
          <div className={styles.ThemeColumn}>
            <ColorTheme
              name="ACHROMATIC"
              variant="LIGHT"
              hex="E2E6E9"
              number="10"
              accessibilityPasses={["PASS","PASS","FAIL","FAIL"]}
            />
            <ColorTheme
              name="ACHROMATIC"
              variant="MID"
              hex="B8C1C7"
              number="30"
              accessibilityPasses={["PASS","PASS","FAIL","FAIL"]}
            />
            <ColorTheme
              name="ACHROMATIC"
              variant="BASE"
              hex="48545B"
              number="50"
              accessibilityPasses={["FAIL","FAIL","PASS","PASS"]}
              whiteText
            />
            <ColorTheme
              name="ACHROMATIC"
              variant="DARK"
              hex="1F2528"
              number="70"
              accessibilityPasses={["FAIL","FAIL","PASS","PASS"]}
              whiteText
              whiteMarks
            />
            <ColorTheme
              name="ACHROMATIC"
              variant="DARKEST"
              hex="090B0B"
              number="90"
              accessibilityPasses={["FAIL","FAIL","PASS","PASS"]}
              whiteText
              whiteMarks
            />
          </div>
          <div className={styles.ThemeColumn}>
            <ColorTheme
              name="RED"
              variant="LIGHT"
              hex="FFD3CC"
              number="10"
              accessibilityPasses={["PASS","PASS","FAIL","FAIL"]}
            />
            <ColorTheme
              name="RED"
              variant="MID"
              hex="FF9080"
              number="30"
              accessibilityPasses={["PASS","PASS","FAIL","FAIL"]}
            />
            <ColorTheme
              name="RED"
              variant="BASE"
              hex="C31900"
              number="50"
              accessibilityPasses={["PASS","FAIL","PASS","PASS"]}
              whiteText
            />
            <ColorTheme
              name="RED"
              variant="DARK"
              hex="470A00"
              number="70"
              accessibilityPasses={["FAIL","FAIL","PASS","PASS"]}
              whiteText
              whiteMarks
            />
            <ColorTheme
              name="RED"
              variant="DARKEST"
              hex="140300"
              number="90"
              accessibilityPasses={["FAIL","FAIL","PASS","PASS"]}
              whiteText
              whiteMarks
            />
          </div>
          <div className={styles.ThemeColumn}>
            <ColorTheme
              name="GREEN"
              variant="LIGHT"
              hex="D6F5D6"
              number="10"
              accessibilityPasses={["PASS","PASS","FAIL","FAIL"]}
            />
            <ColorTheme
              name="GREEN"
              variant="MID"
              hex="609566"
              number="30"
              accessibilityPasses={["PASS","PASS","FAIL","FAIL"]}
            />
            <ColorTheme
              name="GREEN"
              variant="BASE"
              hex="1D781D"
              number="50"
              accessibilityPasses={["PASS","FAIL","PASS","PASS"]}
              whiteText
            />
            <ColorTheme
              name="GREEN"
              variant="DARK"
              hex="0E390E"
              number="70"
              accessibilityPasses={["FAIL","FAIL","PASS","PASS"]}
              whiteText
              whiteMarks
            />
            <ColorTheme
              name="GREEN"
              variant="DARKEST"
              hex="041004"
              number="90"
              accessibilityPasses={["FAIL","FAIL","PASS","PASS"]}
              whiteText
              whiteMarks
            />
          </div>
          <div className={styles.ThemeColumn}>
            <ColorTheme
              name="ORANGE"
              variant="LIGHT"
              hex="F9DAD2"
              number="10"
              accessibilityPasses={["PASS","PASS","FAIL","FAIL"]}
            />
            <ColorTheme
              name="ORANGE"
              variant="MID"
              hex="FF9080"
              number="30"
              accessibilityPasses={["PASS","PASS","FAIL","FAIL"]}
            />
            <ColorTheme
              name="ORANGE"
              variant="BASE"
              hex="CF3B17"
              number="50"
              accessibilityPasses={["PASS","FAIL","PASS","PASS"]}
              whiteText
            />
            <ColorTheme
              name="ORANGE"
              variant="DARK"
              hex="401308"
              number="70"
              accessibilityPasses={["FAIL","FAIL","PASS","PASS"]}
              whiteText
              whiteMarks
            />
            <ColorTheme
              name="ORANGE"
              variant="DARKEST"
              hex="120502"
              number="90"
              accessibilityPasses={["FAIL","FAIL","PASS","PASS"]}
              whiteText
              whiteMarks
            />
          </div>
          <div className={styles.ThemeColumn}>
            <ColorTheme
              name="YELLOW"
              variant="LIGHT"
              hex="FCEFCF"
              number="10"
              accessibilityPasses={["PASS","PASS","FAIL","FAIL"]}
            />
            <ColorTheme
              name="YELLOW"
              variant="MID"
              hex="F8D887"
              number="30"
              accessibilityPasses={["PASS","PASS","FAIL","FAIL"]}
            />
            <ColorTheme
              name="YELLOW"
              variant="BASE"
              hex="8D6708"
              number="50"
              accessibilityPasses={["FAIL","FAIL","PASS","PASS"]}
              whiteText
            />
            <ColorTheme
              name="YELLOW"
              variant="DARK"
              hex="433104"
              number="70"
              accessibilityPasses={["FAIL","FAIL","PASS","PASS"]}
              whiteText
              whiteMarks
            />
            <ColorTheme
              name="YELLOW"
              variant="DARKEST"
              hex="130E01"
              number="90"
              accessibilityPasses={["FAIL","FAIL","PASS","PASS"]}
              whiteText
              whiteMarks
            />
          </div>
          <div className={styles.ThemeColumn}>
            <ColorTheme
              name="PURPLE"
              variant="LIGHT"
              hex="DFD1FA"
              number="10"
              accessibilityPasses={["PASS","PASS","FAIL","FAIL"]}
            />
            <ColorTheme
              name="PURPLE"
              variant="MID"
              hex="AF8DF2"
              number="30"
              accessibilityPasses={["PASS","PASS","FAIL","FAIL"]}
            />
            <ColorTheme
              name="PURPLE"
              variant="BASE"
              hex="5417CF"
              number="50"
              accessibilityPasses={["FAIL","FAIL","PASS","PASS"]}
              whiteText
            />
            <ColorTheme
              name="PURPLE"
              variant="DARK"
              hex="1A0741"
              number="70"
              accessibilityPasses={["FAIL","FAIL","PASS","PASS"]}
              whiteText
              whiteMarks
            />
            <ColorTheme
              name="PURPLE"
              variant="DARKEST"
              hex="070212"
              number="90"
              accessibilityPasses={["FAIL","FAIL","PASS","PASS"]}
              whiteText
              whiteMarks
            />
          </div>
          <div className={styles.ThemeColumn}>
            <ColorTheme
              name="MAGENTA"
              variant="LIGHT"
              hex="FAD1E6"
              number="10"
              accessibilityPasses={["PASS","PASS","FAIL","FAIL"]}
            />
            <ColorTheme
              name="MAGENTA"
              variant="MID"
              hex="F28CBF"
              number="30"
              accessibilityPasses={["PASS","PASS","FAIL","FAIL"]}
            />
            <ColorTheme
              name="MAGENTA"
              variant="BASE"
              hex="CF1773"
              number="50"
              accessibilityPasses={["PASS","FAIL","PASS","PASS"]}
              whiteText
            />
            <ColorTheme
              name="MAGENTA"
              variant="DARK"
              hex="400724"
              number="70"
              accessibilityPasses={["FAIL","FAIL","PASS","PASS"]}
              whiteText
              whiteMarks
            />
            <ColorTheme
              name="MAGENTA"
              variant="DARKEST"
              hex="12020A"
              number="90"
              accessibilityPasses={["FAIL","FAIL","PASS","PASS"]}
              whiteText
              whiteMarks
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ColorGuidelines;
