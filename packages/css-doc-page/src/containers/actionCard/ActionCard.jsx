import React from 'react';
import './ActionCard.css'

function ActionCard(props) {
    const 
    {
        actionImage,
        imageOffset,
        actionHeading,
        actionPhrase,
        actionButtonText
    } = props;
    return (
        <div className="Card">
            <div className="Card_circle">
                <img className={imageOffset} src={actionImage} alt="actionImage"/>
            </div>
            <h1 className="Card_heading">
                {actionHeading}
            </h1>
            <p className="Card_phrase">
                {actionPhrase}
            </p>
            <button className="eds-primary-button Card_button">{actionButtonText}</button>
        </div>
    );
}

export default ActionCard;