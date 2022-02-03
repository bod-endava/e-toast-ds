import React from 'react';
import styles from './DesignGuidelines.module.scss';
import ActionCard from '../../../tostaditas-components/actionCard';
import Hero from '../../../tostaditas-components/hero';
import pencil from '../../../assets/img/pencil-thin.svg';
import tokens from '../../../assets/img/tokens.svg';
import typography from '../../../assets/img/typography.svg';
import shapes from '../../../assets/img/shapes.svg';
import icons from '../../../assets/img/icons.svg';
import color from '../../../assets/img/color.svg';
import accessibility from '../../../assets/img/accessibility.svg';

function DesignGuidelines() {
  return (
    <div className={styles.DesignGuidelines}>
      <Hero
        title="Design Guidelines"
        text="The Design Guidelines are here to lead users on how to
              apply design principles to ensure the best User Experience."
        image={pencil}
      />
      <section className={styles.BottomSection}>
        <h2>
          Design Principles
        </h2>
        <div className={styles.BottomSection_cards}>
          <ActionCard
            height='377px'
            actionImage={tokens}
            imageOffset="CenterOffset"
            actionHeading="TOKENS"
            actionPhrase="Design tokens are central and tiny pieces of UI information."
            actionButtonText="READ MORE"
            buttonRedirectUrl="/TokenPrinciples"
          />
          <ActionCard
            height='377px'
            actionImage={typography}
            imageOffset="CenterOffset"
            actionHeading="TYPOGRAPHY"
            actionPhrase="Design tokens are central and tiny pieces of UI information."
            actionButtonText="READ MORE"
            buttonRedirectUrl="/TypographyGuidelines"
          />
          <ActionCard
            height='377px'
            actionImage={shapes}
            imageOffset="CenterOffset"
            actionHeading="SHAPES"
            actionPhrase="Shapes direct attention, identify components, communicate state, and express brand."
            actionButtonText="READ MORE"
            buttonRedirectUrl="/ShapeGuidelines"
          />
          <ActionCard
            height='377px'
            actionImage={icons}
            imageOffset="CenterOffset"
            actionHeading="ICONS"
            actionPhrase="Design tokens are central and tiny pieces of UI information."
            actionButtonText="READ MORE"
            buttonRedirectUrl="/IconGuidelines"
          />
          <ActionCard
            height='377px'
            actionImage={color}
            imageOffset="CenterOffset"
            actionHeading="COLOR"
            actionPhrase="Design tokens are central and tiny pieces of UI information."
            actionButtonText="READ MORE"
            buttonRedirectUrl="/ColorGuidelines"
          />
          <ActionCard
            height='377px'
            actionImage={accessibility}
            imageOffset="CenterOffset"
            actionHeading="ACCESSIBILITY"
            actionPhrase="Design tokens are central and tiny pieces of UI information."
            actionButtonText="READ MORE"
            buttonRedirectUrl="/AccessibilitySpecifications"
          />
        </div>
      </section>
    </div>
  );
}

export default DesignGuidelines;