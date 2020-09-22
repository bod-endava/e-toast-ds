import React from 'react';
import styles from './ShapeGuidelines.module.scss';
import Hero from '../../components/hero';
import pen from '../../assets/img/pen-thin.svg';
import outlinePill from '../../assets/img/outline-pill.svg';
import outlineRounded from '../../assets/img/outline-rounded.svg';
import outlineSquare from '../../assets/img/outline-square.svg';
import fillPill from '../../assets/img/fill-pill.svg';
import fillRounded from '../../assets/img/fill-rounded.svg';
import fillSquare from '../../assets/img/fill-square.svg';

function ShapeGuidelines() {
  return (
    <div className={styles.ShapeGuidelines}>
      <Hero
        title="Shapes"
        text="Shapes direct attention, identify components, communicate state, and express brand. 
              Etoast let use shapeshift to fit the brand Style. "
        image={pen}
        secondary
      />
      <section className={styles.ShapesSection}>
        <div>
          <span className={styles.PillShape} />
          <h3>Pill</h3>
          <p>The shape as a pill is used in all elements, but the most common use is for basic buttons or fields.</p>
        </div>
        <div>
          <span className={styles.RoundedShape} />
          <h3>Rounded</h3>
          <p>The rounded shape is used by the majority of the components. But you can use any shape depending on your decision. The corner radius is 4px.</p>
        </div>
        <div>
          <span className={styles.RectangleShape} />
          <h3>Rectangle</h3>
          <p>The shape of the rectangle is used in all elements as a container.</p>
        </div>
      </section>
      <section className={styles.OutlinesSection}>
        <h2>OUTLINE SHAPE</h2>
        <p>The border is 1 px and is mainly used to outline the shape. This is used as a border in different components as form elements, buttons, tables.</p>
        <div>
          <img src={outlinePill} alt="Pill Outline"/>
        </div>
        <div>
          <img src={outlineRounded} alt="Rounded Outline"/>
        </div>
        <div>
          <img src={outlineSquare} alt="Square Outline"/>
        </div>
      </section>
      <section className={styles.FillSection}>
        <h2>FILL SHAPE</h2>
        <p>The fill shape is mainly used in buttons or form elements but with a Light background to contrast. Also, the fill shape is used as a state when the element is selected. </p>
        <div>
          <img src={fillPill} alt="Pill Fill"/>
        </div>
        <div>
          <img src={fillRounded} alt="Rounded Fill"/>
        </div>
        <div>
          <img src={fillSquare} alt="Square Fill"/>
        </div>
      </section>
    </div>
  );
}

export default ShapeGuidelines;