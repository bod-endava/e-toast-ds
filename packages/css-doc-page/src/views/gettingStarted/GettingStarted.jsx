import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GettingStarted.module.scss';
import Rocket from '../../assets/img/getting-started.svg';
import Figma from '../../assets/img/figma.svg';
import Sketch from '../../assets/img/sketch.svg';
import Hero from '../../components/hero/Hero';

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
              <h3>Steps to have a fun development experience</h3>
              <ol>
                <li>
                  Install dependencies
                  <code>
                    yarn install
                  </code>
                </li>
                <li>
                  Install all the dependencies on the packages and Symlink packages
                  <code>
                    yarn bootstrap
                  </code>
                </li>
                <li>
                  Run all packages in dev mode
                  <code>
                    yarn start
                  </code>
                </li>
                <li>
                  Alternatively, move to each package and run
                  <code>
                    yarn start
                  </code>
                </li>
                <li>
                  Also, you have scripts for running individual packages
                  <code>
                    {`// yarn start:[package_name]`}
                    <br />
                    yarn start:react
                  </code>
                </li>
              </ol>
            </div>
            <div>
              <h3>Using E-toast as your design system</h3>
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

          <h3>Things to keep in mind</h3>
          <ul>
            <li>The React package is not ready. It is currently only used for development of the css package.</li>
            <li>react-scripts version 3.4.0 needs to be used. The 3.4.1 version introduced a bug that makes it unusable with lerna</li>
            <li>Local symlink is suggested due to the fact that the packages are not published yet.</li>
            <li>Prefer the use of root scripts instead of package scripts.</li>
          </ul>


          <h2>On boarding</h2>

          <h4>Technologies</h4>
          <p>lerna for managing React and CSS code bases.</p>

          <h4>CSS</h4>
          <p>
            sass as CSS preprocessor <br />
            node-sass for NodeJs bindings with sass
          </p>

          <h4>React</h4>
          <p>Jest for unit testing</p>


          <h3>Setting up</h3>
          <h4>Prerequisites</h4>
          <p>
            <strong>Mac:</strong> if you do not have homebrew, it is adviced to install it since it makes the installation process a lot easier.<br />
            <a href="https://brew.sh/" target="_blank" rel="noopener noreferrer">https://brew.sh/</a><br />
            <strong>Windows:</strong> if you do not have chocolatey, it is adviced to install it since it makes the installation process a lot easier.<br />
            <a href="https://chocolatey.org/docs/installation" target="_blank" rel="noopener noreferrer">https://chocolatey.org/docs/installation</a>
          </p>

          <h4>NodeJs And Npm</h4>
          <p>
            <strong>Mac:</strong> <a href="https://changelog.com/posts/install-node-js-with-homebrew-on-os-x" target="_blank" rel="noopener noreferrer">https://changelog.com/posts/install-node-js-with-homebrew-on-os-x</a>
            <br />
            <strong>Windows:</strong> <a href="https://chocolatey.org/packages/nodejs" target="_blank" rel="noopener noreferrer">https://chocolatey.org/packages/nodejs</a>
          </p>

          <h4>Yarn</h4>
          <p>
            <strong>Mac:</strong> <a href="https://classic.yarnpkg.com/en/docs/install/#mac-stable" target="_blank" rel="noopener noreferrer">https://classic.yarnpkg.com/en/docs/install/#mac-stable</a>
            <br />
            <strong>Windows:</strong> <a href="https://classic.yarnpkg.com/en/docs/install/#windows-stable" target="_blank" rel="noopener noreferrer">https://classic.yarnpkg.com/en/docs/install/#windows-stable</a>
          </p>

          <h4>Launching Project</h4>
          <p>
            Run command <kbd>yarn</kbd> to install dependencies<br />
            <br />
            Run command <kbd>yarn bootstrap</kbd> to install all dependencies on the packages and symlink packages<br />
            <br />
            Run command <kbd>yarn start</kbd> every time you want to launch proyect on your default browser<br />
            <br />
            <small>Note: you may need to refresh the browser page on the first launch because React finishes compiling before Sass.</small>
          </p>

          <h3>Architecture/Philosophy</h3>
          <p>
            Etoast architecture is based around a 3 layer architecture with the purpose to provide different abstraction levels for customization.
             The first layer is global which provides raw values for the theme layer. The theme layer adds a semantic value to the global values,
             and provides the tokens for the component layer. Finally, the component layer uses those token to create the components.
             For a more in-depth look at the architecture go to the css package README.md
          </p>

          <h3>Browser coverage</h3>
          <p>
            Chrome, Firefox, Edge, Safari.
          </p>
        </div>
      </>
    );
}

export default GettingStarted;
