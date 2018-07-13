import React, { Component } from 'react';
import './style.css';

class Total extends Component {
    render() {
        return (
            <div className="total">
                <h3>{this.props.total} <span>NOK</span></h3>
            </div>
        )
    }
}

export default Total;