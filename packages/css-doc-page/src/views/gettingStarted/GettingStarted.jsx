import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GettingStarted.module.scss';
import Rocket from '../../assets/img/getting-started.svg';
import Figma from '../../assets/img/figma.svg';
import Sketch from '../../assets/img/sketch.svg';
import Hero from '../../components/Hero';

function GettingStarted() {
  return (
      <>
        <Hero
          title="Getting Started"
          text="Starting using etoast is straight forward. We provide resources such as best practices, component documentation, sketch and Figma files, and more."
          image={Rocket}
        />
        <div className={styles.Content}>
          <h2>Design</h2>
          <p className={styles.IntroParagraph}>
            Read the documentation we have; we use a systemic approach, and it extends to the way our design resources work.<br />
            Explore our <Link to={"/ComponentsOverview"}>component section</Link> to get familiar with all the components we offer to quickstart your designs.<br />
            You can download our <Link to={"/Downloads"}>Sketch file</Link> or access our <Link to={"/Downloads"}>Figma library</Link>.
          </p>

          <div className={styles.TwoColumns}>
            <div>
              <div className={styles.DesignToolsTitle}>
                <img src={Figma} alt="Figma"/>
                <h3>Figma</h3>
              </div>
              <ol>
                <li>Open the file.</li>
                <li>Duplicate the file by clicking at the name of the file.</li>
                <li>In the new file, go to libraries in the main menu.</li>
                <li>In the modal, click publish in the current file section.</li>
                <li>Activate the library in any file you want to use ETOAST by going into the libraries section.</li>
                <li>You can start using ETOAST in your designs by accessing our components trough the asset panel.</li>
              </ol>
            </div>
            <div>
              <div className={styles.DesignToolsTitle}>
                <img src={Sketch} alt="Sketch"/>
                <h3>Sketch</h3>
              </div>
              <ol>
                <li>Download the file.</li>
                <li>Go to preferences.</li>
                <li>Select libraries.</li>
                <li>Click add library.</li>
                <li>Chose the ETOAST file.</li>
                <li>You can now start using ETOAST in your design by accessing our components trough symbols.</li>
              </ol>
            </div>
          </div>

          <h2>Code</h2>
          <p>Take a look at our component documentation and familiarize yourself with how our design system is constructed and work. Then you can go to our repo and play with our system.</p>

          <div className={styles.TwoColumns}>
            <div>
              <h3>Pre-toasted: Use the default toasty style</h3>
              <ol>
                <li>
                  Install dependencies
                  <code>
                    yarn add @e-toast/css
                  </code>
                  or
                  <code>
                    npm install --dev @e-toast/css
                  </code>
                </li>
                <li>
                  Import it in your project
                  <code>
                    import "@e-toast/css"<br />
                    import "@e-toast/css/behaviors.js"
                  </code>
                </li>
                <li>
                  Enjoy your Toast!
                </li>
              </ol>
            </div>
            <div>
              <h3>Toast it yourself: Use E-toast as your design system</h3>
              <ol>
                <li>Clone this repository on a subfolder of your application.<br /></li>
                <li>Install Toast dependencies running inside the <strong>css</strong> subfolder <code>yarn install</code></li>
                <li>Compile the CSS <code>yarn build:css</code></li>
                <li>Add Toast to your project dependencies <code>yarn add file:/path/to/toast</code></li>
                <li>Import the compiled CSS on your application
                  <code>
                    import "@e-toast/css";
                    <br/>
                    or
                    <br />
                    &lt;link href="/toast-path/etoast.css" rel="stylesheet"&gt;
                  </code>
                </li>
                <li>You're ready to go!</li>
              </ol>
            </div>
          </div>
        </div>
      </>
    );
}

export default GettingStarted;
