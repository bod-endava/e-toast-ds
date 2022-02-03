import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorTheme.module.scss';

function ColorTheme(props) {
    const {
        name,
        variant,
        hex,
        number,
        accessibilityPasses,
        whiteText = false,
        whiteMarks = false,
    } = props;

    function buildThemeInlineStyleObject(hex, whiteText) {
        return {
            ...(whiteText ? {color: 'white'} : {}),
            backgroundColor: `#${hex}`
        };
    }

    function buildMarksInlineStyleObject(whiteMarks) {
        return {
            ...(whiteMarks ? {backgroundColor: 'white', color: 'black'} : {})
        }
    }

    return (
        <div className={styles.ColorTheme} style={buildThemeInlineStyleObject(hex, whiteText)}>
            <div className={styles.Number}>
                {number}
            </div>
            <h1>
                {name}
            </h1>
            <h1>
                {variant} variant
            </h1>
            <p>
                HEX {hex}
            </p>
            <section className={styles.AccessibilitySection}>
                <div className={styles.AccessibilityPasses}>
                    <div>
                        <div className={styles.AChar}>
                            A
                        </div>
                        <p style={buildMarksInlineStyleObject(whiteMarks)}>
                            {accessibilityPasses[0]}
                        </p>
                    </div>
                    <div>
                        <div className={styles.AChar}>
                            A
                        </div>
                        <p style={buildMarksInlineStyleObject(whiteMarks)}>
                            {accessibilityPasses[1]}
                        </p>
                    </div>
                    <div>
                        <div className={styles.AChar}>
                            A
                        </div>
                        <p style={buildMarksInlineStyleObject(whiteMarks)}>
                            {accessibilityPasses[2]}
                        </p>
                    </div>
                    <div>
                        <div className={styles.AChar}>
                            A
                        </div>
                        <p style={buildMarksInlineStyleObject(whiteMarks)}>
                            {accessibilityPasses[3]}
                        </p>
                    </div>
                </div>
                <p>
                    Min Accessibility standard at least 4.5:1
                </p>
            </section>
        </div>
    )
}

ColorTheme.defaultProps = {
    accessibilityPasses : ["", "", "", ""]
};

ColorTheme.propTypes = {
    name: PropTypes.string,
    variant: PropTypes.string,
    hex: PropTypes.string,
    number: PropTypes.number,
    accessibilityPasses: PropTypes.array,
    whiteText: PropTypes.bool,
    whiteMarks: PropTypes.bool
};

export default ColorTheme;