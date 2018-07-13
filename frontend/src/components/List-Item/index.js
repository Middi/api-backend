import React, { Component } from 'react';
import './style.css';


class ListItem extends Component {
    render() {
        const {stuff} = this.props;
        return (
            <article>
                <h1 className="list-day" style={stuff.shiftType === 1000 ? {color: '#367a7b'} : {color: '#F1d918'}  }>{stuff.dateStart.slice(-2)}</h1>
                <div className="list-content">
                    <h2 className="list-title">{stuff.name}</h2>
                    <p className="list-location">{stuff.location}</p>
                    <p className="list-time">{stuff.timeStart} - {stuff.timeEnd}</p>
                </div>
                <span className="delete-button" onClick={() => this.props.removeTodo(stuff._id)}>+</span>
            </article>
        )
    }
}

export default ListItem;