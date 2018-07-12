import React, { Component } from 'react';
import './style.css';


class Modal extends Component {
    render() {
        return (
            <div className="modal-bg">
                <div className="modal">
                    <span onClick={() => this.props.closeModal()} className="close">+</span>
                    <h1 className="event-title">Add Event</h1>
                    <form>
                        <label>Event</label>
                        <input type="text" name="name" onKeyUp={e => this.props.change(e)} />
                        <label>Start Date</label>
                        <input type="date" name="dateStart" onKeyUp={e => this.props.change(e)} />
                        <label>Start Time</label>
                        <input type="time" name="timeStart" onKeyUp={e => this.props.change(e)} />
                        <label>End Date</label>
                        <input type="date" name="dateEnd" onKeyUp={e => this.props.change(e)} />
                        <label>End Time</label>
                        <input type="time" name="timeEnd" onKeyUp={e => this.props.change(e)} />
                        <label>Shift Type</label>
                        <select name="shiftType" onChange={e => this.props.change(e)}>
                            <option value="Full Day" name="shiftType">Full Day</option>
                            <option value="Half Day" name="shiftType">Half Day</option>
                        </select>
                        <button onClick={(e) => this.props.clickSubmit(e)}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Modal;