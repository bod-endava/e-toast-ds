import React from 'react';
import styles from './DesignGuidelines.module.css';
import pencil from '../../assets/img/pencilthin.svg'
import ActionCard from '../../containers/actionCard/ActionCard';
import tokens from '../../assets/img/tokens.svg'
import typography from '../../assets/img/typography.svg'
import shapes from '../../assets/img/shapes.svg'
import icons from '../../assets/img/icons.svg'
import color from '../../assets/img/color.svg'
import accessibility from '../../assets/img/accessibility.svg'

function DesignGuidelines() {
    return (
        <>
            <section className={styles.TopSection}>
                <h1>Design Guidelines</h1>
                <p>
                    The Design Guidelines are here to lead users on how to
                    apply design principles to ensure the best User Experience.
                </p>
            </section>
            <div className={styles.Circle}>
                <img src={pencil} alt="pencil"/>
            </div>
            <section className={styles.BottomSection}>
                <h2>
                    Design Principles
                </h2>
                <div className={styles.BottomSection_cards}>
                    {/* This div has flex-direction: column; */}
                    <ActionCard
                            actionImage={tokens}
                            tall = {false}
                            imageOffset="CenterOffset"
                            actionHeading="TOKENS"
                            actionPhrase="Design tokens are central and tiny pieces of UI information."
                            actionButtonText="READ MORE"
                    />
                    <ActionCard
                            actionImage={typography}
                            tall = {false}
                            imageOffset="CenterOffset"
                            actionHeading="TYPOGRAPHY"
                            actionPhrase="Design tokens are central and tiny pieces of UI information."
                            actionButtonText="READ MORE"
                    />
                    <ActionCard
                            actionImage={shapes}
                            tall = {false}
                            imageOffset="CenterOffset"
                            actionHeading="SHAPES"
                            actionPhrase="Shapes direct attention, identify components, communicate state, and express brand."
                            actionButtonText="READ MORE"
                    />
                    <ActionCard
                            actionImage={icons}
                            tall = {false}
                            imageOffset="CenterOffset"
                            actionHeading="ICONS"
                            actionPhrase="Design tokens are central and tiny pieces of UI information."
                            actionButtonText="READ MORE"
                    />
                    <ActionCard
                            actionImage={color}
                            tall = {false}
                            imageOffset="CenterOffset"
                            actionHeading="COLOR"
                            actionPhrase="Design tokens are central and tiny pieces of UI information."
                            actionButtonText="READ MORE"
                    />
                    <ActionCard
                            actionImage={accessibility}
                            tall = {false}
                            imageOffset="CenterOffset"
                            actionHeading="ACCESSIBILITY"
                            actionPhrase="Design tokens are central and tiny pieces of UI information."
                            actionButtonText="READ MORE"
                    />
                </div>
            </section>
        </>
    );
}

export default DesignGuidelines;