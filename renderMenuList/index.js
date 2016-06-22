import React, { Component, PropTypes } from 'react';
import styles from './renderMenuList.css';

class RenderMenuList extends Component {
    render() {
        return (
            <li>
                <a href={this.props.link}>
                    {this.props.linkName}
                </a>
            </li>
        );
    }
}

export default RenderMenuList;
