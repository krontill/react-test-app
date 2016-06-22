import React, { Component, PropTypes } from 'react';
import styles from './renderMenuList.css';

class RenderMenuList extends Component {
    render() {
        const linksMenu = [
            {link: '#link1', linkName: 'link1'},
            {link: '#link2', linkName: 'link2'},
            {link: '#link3', linkName: 'link3'}
        ];

        return (
            <li>
                {linksMenu.map(function(linkMenu) {
                    return <a href={linkMenu.link}>{linkMenu.linkName}</a>
                })};
            </li>
        );
    }
}

export default RenderMenuList;
