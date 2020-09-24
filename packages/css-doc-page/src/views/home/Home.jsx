import React, { useRef } from 'react';
import ActionCard from '../../components/actionCard'
import styles from './Home.module.scss';
import rocket from '../../assets/img/rocket.svg'
import pencil from '../../assets/img/pencil.svg'
import atom from '../../assets/img/atom.svg'

function Home() {
  const myRef = useRef(null)
  const srollToBottomSection = () => window.scrollTo({
    left: 0,
    top: myRef.current.offsetTop,
    behavior: 'smooth'
  })

  return (
    <div className={styles.Home}>
      <section className={styles.TopSection}>
        <h1 className={styles.TopSection_greetText}>Hello!</h1>
      </section>
      <section>
        <p className={styles.DescriptionText}>
          I am <span>ETOAST</span>, a design and development tool that provides
          customizable and reusable components. I am valuable for anyone who requires a
          standardized solution for building faster and more effective UI projects
        </p>
        <button className="eds-primary-button" onClick={srollToBottomSection}>
          LETS GET STARTED
        </button>
      </section>
      <section className={styles.BottomSection} ref={myRef}>
        <h2>
          Design, Build, Deliver
        </h2>
        <p className={`${styles.DescriptionText} ${styles.Wider}`}>
          I am <span>ETOAST</span>, a design and development tool that provides
          customizable and reusable components. I am valuable for anyone who requires a
          standardized solution for building faster and more effective UI projects
        </p>
        <div className={styles.BottomSection_cards}>
          <ActionCard
            height='506px'
            bigCircle
            actionImage={rocket}
            imageOffset="TopOffset"
            actionHeading="GET STARTED"
            actionPhrase="Start Using ETOAST with our onboarding guide."
            actionButtonText="GET STARTED"
            buttonRedirectUrl="/GettingStarted"
          />
          <ActionCard
            height='506px'
            bigCircle
            actionImage={pencil}
            imageOffset="BottomOffset"
            actionHeading="DESIGN GUIDELINE"
            actionPhrase="A set of recomendation towars design good practice."
            actionButtonText="OVERVIEW"
            buttonRedirectUrl="/DesignGuidelines"
          />
          <ActionCard
            height='506px'
            bigCircle
            actionImage={atom}
            imageOffset="CenterOffset"
            actionHeading="COMPONENTS"
            actionPhrase="Navigate through our different components and discover their ussability and guidelines."
            actionButtonText="OVERVIEW"
            buttonRedirectUrl="/ComponentOverview"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;