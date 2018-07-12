import React, { Component } from 'react';
import Day from '../Day';
import './style.css';

class Monthly extends Component {
    
    render() {
        let arr = [];
        for(var i=1; i<this.props.daysInMonth+1; i++){
            arr.push(
                <Day addEvent={this.props.addEvent} date={i} key={i} today={this.props.today} />
            );  
        }
        return (
            <div className="month">
                <div className="title-month">
                    <h2 onClick={this.props.monthMinus}>&lt;</h2>
                    <h1>{this.props.monthName}</h1>
                    <h2>&gt;</h2>
                </div>
                <div className="calendar">
                    <div className="calendar-header">
                        <p className="day">M</p>
                        <p className="day">T</p>
                        <p className="day">W</p>
                        <p className="day">T</p>
                        <p className="day">F</p>
                        <p className="day">S</p>
                        <p className="day">S</p>

                        {arr}
                    </div>
                </div>
            </div>
        )
    }
}

export default Monthly;