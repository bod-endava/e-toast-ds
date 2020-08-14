import React from 'react';
import ActionCard from '../../containers/actionCard/ActionCard'
import './Home.css';
import rocket from '../../assets/img/rocket.png'
import pencil from '../../assets/img/pencil.png'
import atom from '../../assets/img/atom.png'

function Home() {
    return (
        <>
            <section className="TopSection">
                <h1 className="TopSection_greet-text">Hello!</h1>
            </section>
            <section>
                <p className="Description-text">
                    I am <span>ETOAST</span>, a design and development tool that provides
                    customizable and reusable components. I am valuable for anyone who requires a
                    standardized solution for building faster and more effective UI projects
                </p>
                <button className="eds-primary-button">LETS GET STARTED</button>
            </section>
            <section className="Bottom-section">
                <h2>
                    Design, Build, Deliver
                </h2>
                <p className="Description-text Wider">
                    I am <span>ETOAST</span>, a design and development tool that provides
                    customizable and reusable components. I am valuable for anyone who requires a
                    standardized solution for building faster and more effective UI projects
                </p>
                <div className="Bottom-section_cards">
                    <ActionCard
                        actionImage={rocket}
                        actionHeading="GETTING STARTED"
                        actionPhrase="Start Using ETOAST with our onboarding guide."
                        actionButtonText="GET STARTED"
                    />
                    <ActionCard
                        actionImage={pencil}
                        imageOffset="BottomOffset"
                        actionHeading="DESIGN GUIDELINE"
                        actionPhrase="A set of recomendation towars design good practice."
                        actionButtonText="DESIGN GUIDELINES"
                    />
                    <ActionCard
                        actionImage={atom}
                        imageOffset="CenterOffset"
                        actionHeading="COMPONENTS"
                        actionPhrase="Navigate through our different components and discover their ussability and guidelines."
                        actionButtonText="DESIGN GUIDELINES"
                    />
                </div>
            </section>
        </>
    );
}

export default Home;