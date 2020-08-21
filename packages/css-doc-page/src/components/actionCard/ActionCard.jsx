import React from 'react';
import styles from './ActionCard.module.scss'
import { useHistory } from "react-router-dom";

function ActionCard(props) {
    const 
    {
        actionImage,
        imageOffset,
        actionHeading,
        actionPhrase,
        actionButtonText,
        buttonRedirectUrl,
        tall = true
    } = props;
    const history = useHistory();

    function redirect() {
        history.push(buttonRedirectUrl);
    }

    return (
        <div className={`${styles.Card} ${tall ? styles.Tall : styles.Short}`}>
            <div className={`${styles.Card_circle} ${tall ? styles.BigCircle : styles.SmallCircle}`}>
                <img className={styles[imageOffset]} src={actionImage} alt="actionImage"/>
            </div>
            <h1 className={styles.Card_heading}>
                {actionHeading}
            </h1>
            <p className={styles.Card_phrase}>
                {actionPhrase}
            </p>
            <button className={`eds-primary-button " ${styles.Card_button}`} onClick={redirect}>{actionButtonText}</button>
        </div>
    );
}

export default ActionCard;