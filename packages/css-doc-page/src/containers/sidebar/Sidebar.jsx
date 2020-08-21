import React from 'react';
import styles from './Sidebar.module.scss';
import logo from '../../assets/img/logosymbol.svg';
import chevron from '../../assets/img/chevron.svg';

function Sidebar() {
    return (
        <div className={styles.Sidebar}>
            <div className={styles.Sidebar_image}>
                <img src={logo} alt="Logo"/>
            </div>
            <nav>
                <div>
                    <p>GETTING STARTED</p>
                </div>
                <div>
                    <p>VISUAL GUIDELINES</p> <img src={chevron} alt="chevron"/>
                </div>
                <div>
                    <p>COMPONENTS</p> <img src={chevron} alt="chevron"/>
                </div>
            </nav>
        </div>
    );
}

export default Sidebar;