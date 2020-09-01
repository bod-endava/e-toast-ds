import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from "react-router-dom";
import styles from './SidebarItem.module.scss';
import Chevron from '../svgComponents/chevron';

function SidebarItem(props) {
    const {
        itemName,
        expanded,
        childrenList = []
    } = props;
    const history = useHistory();
    const location = useLocation()

    function redirect(event, url) {
        event.stopPropagation();
        history.push(url);
    }

    const listItems = childrenList.map((child, index) =>
        <li
            key={index}
            onClick={(event) => redirect(event, child.url)}
            className={location.pathname === child.url ? styles.Highlight : null}
        >
            {child.label}
        </li>
    );

    return (
        <div className={styles.SidebarItem}>
            <p>{itemName}</p> {childrenList.length > 0 && <Chevron />}
            {expanded && (
                <ul className={styles.Subtabs}>
                    {listItems}
                </ul>
            )}
        </div>
    )
}

SidebarItem.propTypes = {
    itemName: PropTypes.string.isRequired,
    expanded: PropTypes.bool,
    childrenList: PropTypes.array,
};

export default SidebarItem;