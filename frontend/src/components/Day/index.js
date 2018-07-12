import React, { Component } from 'react';
import './style.css';


class Day extends Component {
    render() {
        return (
                <p onClick={(e) => this.props.addEvent(e)} className={this.props.date === this.props.today
                    ? 'date today'
                    : 'date'}>
                    {this.props.date}
                </p>
        )
    }
}

export default Day;