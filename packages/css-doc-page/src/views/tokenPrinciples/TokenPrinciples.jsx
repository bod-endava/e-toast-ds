import React from 'react';
import styles from './TokenPrinciples.module.scss';
import Hero from '../../components/hero';
import tokens from '../../assets/img/token-principles.svg';

function TokenPrinciples() {
  return (
    <div className={styles.TokenPrinciples}>
      <Hero
        title="Tokens"
        text="Design tokens are central and tiny pieces of UI information that store design related 
              information such as colors, shapes, typography, etc... Their benefits is that they can be 
              transformed and formatted to meet the needs of any platform or brand style."
        image={tokens}
        secondary
      />
    </div>
  );
}

export default TokenPrinciples