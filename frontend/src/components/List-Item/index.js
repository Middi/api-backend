import React, { Component } from 'react';
import './style.css';


class ListItem extends Component {
    render() {
        const day = this.props.stuff.dateStart;
        return (
            <article>
                <h1 className="list-day">{day.slice(-2)}</h1>
                <div className="list-content">
                    <h2 className="list-title">{this.props.stuff.name}</h2>
                    <p className="list-location">{this.props.stuff.location}</p>
                    <p className="list-time">{this.props.stuff.timeStart} - {this.props.stuff.timeEnd}</p>
                </div>
                <span className="delete-button" onClick={() => this.props.removeTodo(this.props.stuff._id)}>+</span>
            </article>
        )
    }
}

export default ListItem;