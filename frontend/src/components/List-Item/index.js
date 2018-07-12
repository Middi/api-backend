import React, { Component } from 'react';
import './style.css';


class ListItem extends Component {
    render() {
        const day = this.props.stuff.dateStart;
        
        return (
            <article>
                <h1 class="list-day">{day.slice(-2)}</h1>
                <div className="list-content">
                    <h2 className="list-title">{this.props.stuff.name}</h2>
                    <p className="list-time">{this.props.stuff.timeStart} - {this.props.stuff.timeEnd}</p>
                </div>
            </article>
        )
    }
}

export default ListItem;