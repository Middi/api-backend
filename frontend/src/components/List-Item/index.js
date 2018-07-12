import React, { Component } from 'react';
import './style.css';


class ListItem extends Component {
    render() {
        const day = this.props.stuff.dateStart;
        
        return (
            <article>
                {
                    this.props.stuff.dateStart ? <h1 class="list-day">{day.slice(-2)}</h1>
                : ''
                }
                <h2 className="list-title">{this.props.stuff.name}</h2>
            </article>
        )
    }
}

export default ListItem;