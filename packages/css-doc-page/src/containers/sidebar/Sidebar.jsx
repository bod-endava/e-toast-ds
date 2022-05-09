import React from 'react';
import styles from './Sidebar.module.scss';
import logo from '../../assets/img/logosymbol.svg';
import { useHistory, useLocation } from "react-router-dom";
import { SidebarItem } from '../../tostaditas-components';
import { useDispatch, useSelector } from 'react-redux';
import { setSidebarState } from '../../store/actions';

function Sidebar() {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const expandedTabs = useSelector(
        state => state.sideBarExpandedItems
    );

    function ToggleExpand(event) {
        event.preventDefault();
        const tab = event.currentTarget.id;
        let newState;
        if (expandedTabs.includes(tab)) {
            newState = expandedTabs.filter(element => element !== tab);
        } else {
            newState = [...expandedTabs, tab];
        }
        dispatch(setSidebarState(newState));
    }

    function redirect(event, url) {
        event.stopPropagation();
        history.push(url);
    }

    return (
        <div className={styles.Sidebar}>
            <div onClick={(event) => redirect(event, '/')}>
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <div id="getting-started" onClick={(event) => redirect(event, '/GettingStarted')}>
                    <SidebarItem
                        itemName='GETTING STARTED'
                        className={location.pathname === '/GettingStarted' ? styles.Highlight : null}
                    />
                </div>
                <div id="guidelines" onClick={ToggleExpand}>
                    <SidebarItem
                        itemName='VISUAL GUIDELINES'
                        expanded={expandedTabs.includes("guidelines")}
                        childrenList={[
                            { label: 'Overview', url: '/DesignGuidelines' },
                            { label: 'Tokens', url: '/TokenPrinciples' },
                            { label: 'Shape', url: '/ShapeGuidelines' },
                            { label: 'Color', url: '/ColorGuidelines' },
                            { label: 'Typography', url: '/TypographyGuidelines' },
                            { label: 'Icons', url: '/IconGuidelines' },
                            { label: 'Accessibility', url: '/AccessibilitySpecifications' }
                        ]}
                    />
                </div>
                <div id="components" onClick={ToggleExpand}>
                    <SidebarItem
                        itemName='COMPONENTS'
                        expanded={expandedTabs.includes("components")}
                        childrenList={[
                            { label: 'Overview', url: '/ComponentOverview' },
                            { label: 'Buttons', url: '/Buttons' },
                            { label: 'Checkbox', url: '/Checkbox' },
                            { label: 'Text Field', url: '' },
                            { label: 'Toggle', url: '' },
                            { label: 'Inputs', url: '/Inputs' },
                            { label: 'Pagination', url: '/Pagination' },
                            { label: 'Selects', url: '/Selects' },
                            { label: 'Navbar', url: '/Navbar' }
                        ]}
                    />
                </div>
                <div id="tutorials" onClick={ToggleExpand}>
                    <SidebarItem
                        itemName='TUTORIALS'
                        expanded={expandedTabs.includes("tutorials")}
                        childrenList={[
                            { label: 'CssTutorial', url: '/CssTutorial' },
                        ]}
                    />
                </div>
            </nav>
        </div>
    );
}

export default Sidebar;
