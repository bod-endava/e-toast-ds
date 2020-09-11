import React from 'react';
import styles from './Sidebar.module.scss';
import logo from '../../assets/img/logosymbol.svg';
import { useHistory } from "react-router-dom";
import SidebarItem from '../../components/sidebarItem/SidebarItem';
import { useDispatch, useSelector } from 'react-redux';
import { setSidebarState } from '../../store/actions';

function Sidebar() {
    const history = useHistory();
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

    function redirectHome() {
        history.push('/');
    }

    return (
        <div className={styles.Sidebar}>
            <div onClick={redirectHome}>
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <div>
                    <SidebarItem
                        itemName='GETTING STARTED'
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
                            { label: 'Icons', url: '' },
                            { label: 'Accessibility', url: '' }
                        ]}
                    />
                </div>
                <div id="components" onClick={ToggleExpand}>
                    <SidebarItem
                        itemName='COMPONENTS'
                        expanded={expandedTabs.includes("components")}
                        childrenList={[
                            { label: 'Overview', url: '/ComponentOverview' },
                            { label: 'Buttons', url: '' },
                            { label: 'Checkbox', url: '' },
                            { label: 'Text Field', url: '' },
                            { label: 'Toggle', url: '' }
                        ]}
                    />
                </div>
            </nav>
        </div>
    );
}

export default Sidebar;