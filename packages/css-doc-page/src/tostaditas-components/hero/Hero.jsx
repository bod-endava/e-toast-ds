import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.module.scss';

function Hero(props) {
  const {
      title,
      text,
      image,
      secondary = false
  } = props;

  return (
    <section className={`${styles.Hero} ${secondary ? styles.Secondary : ""}`}>
      <div className={styles.Title}>
        <h1>{title}</h1>
        <p>
          {text}
        </p>
      </div>
      <div className={styles.Image}>
        <img src={image} alt={title} />
      </div>
    </section>
  );
}

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    image: PropTypes.string,
    secondary: PropTypes.bool
};

export default Hero;
