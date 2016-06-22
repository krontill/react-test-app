import React, { Component, PropTypes } from 'react';
import styles from './renderMenuList.css';

class RenderMenuList extends Component {

    static propTypes = {
        link: PropTypes.string,
        linkName: PropTypes.string,
    };

    render() {
        const { link } = this.props;
        const { linkName } = this.props;
        return (
            <li>
                <a href={link}>
                    {linkName}
                </a>
            </li>
        );
    }
}

export default RenderMenuList;
