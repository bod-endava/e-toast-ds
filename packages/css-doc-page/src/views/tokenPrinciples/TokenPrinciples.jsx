import React from 'react';
import styles from './TokenPrinciples.module.scss';
import tokens from '../../assets/img/token-principles.svg'

function TokenPrinciples() {
  return (
    <div className={styles.TokenPrinciples}>
      <section className={styles.Content}>
        <h1 className={styles.Title}>Tokens</h1>
        <article className={styles.Description}>
          Design tokens are central and tiny pieces of UI information that store design related 
          information such as colors, shapes, typography, etc... Their benefits is that they can be 
          transformed and formatted to meet the needs of any platform or brand style.
        </article>
      </section>
      <section className={styles.Image}>
        <img src={tokens} alt="Tokens" className={styles.TokensIcon}/>
      </section>
    </div>
  );
}

export default TokenPrinciples