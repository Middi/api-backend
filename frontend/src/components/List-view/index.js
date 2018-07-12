import React, { Component } from 'react';
import ListItem from '../List-Item';
import './style.css';


class List extends Component {
    render() {
        const items = this.props.items.map((todo) => (
        <ListItem key={todo._id} stuff={todo} />
     ));
        return (
            <div className="list">
            {items}
            </div>
        )
    }
}

export default List;