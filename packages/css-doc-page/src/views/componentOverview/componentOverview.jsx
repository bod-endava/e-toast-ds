import React from 'react';
import styles from './ComponentOverview.module.scss';
import atomthin from '../../assets/img/atomthin.svg';
import buttonIcon from '../../assets/img/button-icon.svg';
import checkboxIcon from '../../assets/img/checkbox-icon.svg';
import textFieldIcon from '../../assets/img/text-field-icon.svg';
import toggleIcon from '../../assets/img/toggle-icon.svg';
import ActionCard from '../../components/actionCard/ActionCard';

function ComponentOverview() {
    return (
        <>
            <section className={styles.TopSection}>
                <h1>Component Overview</h1>
                <p>
                    Components are one of the key building blocks of our design system that
                    meets a UI need. All of the components in E-Toast have been designed 100%
                    customizable where the designer or developer can play with the color, shape,
                    and typography related to the design guidelines to improve components experience
                    consistently.
                </p>
            </section>
            <div className={styles.Circle}>
                <img src={atomthin} alt="atom"/>
            </div>
            <section className={styles.BottomSection}>
                <h2>
                    E-Toast Components
                </h2>
                <div className={styles.BottomSection_cards}>
                    <ActionCard
                        height='330px'
                        actionImage={buttonIcon}
                        imageOffset="CenterOffset"
                        actionHeading="BUTTONS"
                        actionPhrase="Express what action will occur on a page when the user interacts with them."
                    />
                    <ActionCard
                        height='330px'
                        actionImage={checkboxIcon}
                        imageOffset="CenterOffset"
                        actionHeading="CHECKBOXES"
                        actionPhrase="Interactive box that can be clicked by the user to indicate a choice."
                    />
                    <ActionCard
                        height='330px'
                        actionImage={textFieldIcon}
                        imageOffset="CenterOffset"
                        actionHeading="TEXT FIELDS"
                        actionPhrase="Is an input let users enter and edit or write text."
                        actionButtonText=""
                        buttonRedirectUrl="/TokenPrinciples"
                    />
                </div>
                <div className={styles.BottomSection_cards}>
                        <ActionCard
                            height='330px'
                            actionImage={toggleIcon}
                            imageOffset="CenterOffset"
                            actionHeading="TOGGLES"
                            actionPhrase="Design tokens are central and tiny pieces of UI information."
                            actionButtonText=""
                            buttonRedirectUrl="/TokenPrinciples"
                        />
                    </div>
            </section>
        </>
    )
}

export default ComponentOverview;