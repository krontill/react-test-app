import React, { Component, PropTypes } from 'react';
import styles from './renderMenuUl.css';

class RenderMenuUl extends Component {

    static propTypes = {
        titleList: PropTypes.string
    };

    constructor() {
        super();
        this.state = {
            classList: 'sandybrown'
        };
    }
    //{this.RenderMenuList()}
    render() {
        const { classList } = this.state;
        const { titleList } = this.props;
        const linksMenu = [
            {link: '#link1', linkName: 'link1'},
            {link: '#link2', linkName: 'link2'},
            {link: '#link3', linkName: 'link3'}
        ];
        return (
            <div>
                <h3>{titleList}</h3>
                <ul className={classList}>
                    {linksMenu.map(function(linkMenu) {
                        return <a href={linkMenu.link}>{linkMenu.linkName}</a>
                    })};
                </ul>
            </div>
        );
    }
}

export default RenderMenuUl;
