import React from 'react';
import PropTypes from 'prop-types';
import styles from './ActionCard.module.scss'
import { useHistory } from "react-router-dom";

function ActionCard(props) {
    const {
        actionImage,
        imageOffset,
        actionHeading,
        actionPhrase,
        actionButtonText,
        buttonRedirectUrl,
        bigCircle = false,
        height
    } = props;
    const history = useHistory();

    function redirect() {
        if (buttonRedirectUrl) {
            history.push(buttonRedirectUrl);
            window.scrollTo(0, 0)
        }
    }

    return (
        <div className={styles.Card} style={{ height }} onClick={redirect}>
            <div className={`${styles.Card_circle} ${bigCircle ? styles.BigCircle : styles.SmallCircle}`}>
                <img className={styles[imageOffset]} src={actionImage} alt="actionImage" />
            </div>
            <h1 className={styles.Card_heading}>
                {actionHeading}
            </h1>
            <p className={styles.Card_phrase}>
                {actionPhrase}
            </p>
            {actionButtonText && (
                <button className={`eds-primary-button " ${styles.Card_button}`} onClick={redirect}>{actionButtonText}</button>
            )}

        </div>
    );
}

ActionCard.propTypes = {
    actionImage: PropTypes.string,
    imageOffset: PropTypes.oneOf(['BottomOffset', 'CenterOffset', 'TopOffset']),
    actionHeading: PropTypes.string,
    actionPhrase: PropTypes.string,
    actionButtonText: PropTypes.string,
    buttonRedirectUrl: PropTypes.string,
    bigCircle: PropTypes.bool,
    height: PropTypes.string.isRequired,
};

export default ActionCard;