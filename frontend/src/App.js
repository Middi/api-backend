import React, { Component } from 'react';
import * as apiCalls from './api';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import Monthly from './components/Monthly';
import Total from './components/Total';
import List from './components/List-view';
import Modal from './components/Modal/modal';
import './App.css';

class App extends Component {

  state = {
    todos: [],
    year: '',
    modalOpen: false,
    event: {
      name: '',
      dateStart: '',
      dateEnd: '',
      timeStart: '',
      timeEnd: '',
      shiftType: 'Full Day'
    }
  }


  getDate = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let monthName = monthNames[month];
    let today = date.getDate();
    let daysInMonth = new Date(year, month, 0).getDate();

    this.setState({
      year,
      monthName,
      today,
      daysInMonth
    });
  }

  change = e => {
    // Spread state into new variable
    const NS = {...this.state};
    // Change what needs to be changed
    NS.event[e.target.name] = e.target.value;
    // Set state with new version of state
    this.setState(NS);
  }

  clickSubmit = e => {
    e.preventDefault();
    this.addTodo(this.state.event);
    this.ModalEvent();
  }

  ModalEvent = () => {
    const newState = {...this.state};
    newState.modalOpen = !this.state.modalOpen;
    this.setState(newState)
  }



  componentWillMount() {
    this.loadTodos();
    this.getDate();
  }

  async loadTodos() {
    let todos = await apiCalls.getTodos();
    this.setState({ todos });
  }

  async addTodo(val) {
    let newTodo = await apiCalls.createTodo(val);
    this.setState({ todos: [...this.state.todos, newTodo] })
  }


  async deleteTodo(id) {
    await apiCalls.removeTodo(id);
    const todos = this.state.todos.filter(todo => todo._id !== id);
    this.setState({ todos })
  }

  async toggleTodo(todo) {
    let updatedTodo = await apiCalls.toggle(todo);
    const todos = this.state.todos.map(todo => (todo._id === updatedTodo._id)
      ? { ...todo, completed: !todo.completed } : todo)
    this.setState({ todos })
  }

  render() {
    // const items = this.state.todos.map((todo) => (
    //   <List
    //     key={todo._id}
    //     {...this.state}
    //     onDelete={this.deleteTodo.bind(this, todo._id)}
    //     onToggle={this.toggleTodo.bind(this, todo)}
    //   />
    // ));
    return (
      <div>
        
        <div className="wrapper">
        <div className="App">
          <div className="left">
            <Monthly addEvent={this.ModalEvent} monthMinus={this.monthMinus} {...this.state} />
            <Total />
          </div>
          <List items={this.state.todos} />
        </div>
          {
            this.state.modalOpen ?
              <Modal closeModal={this.ModalEvent} clickSubmit={this.clickSubmit} change={this.change} /> :
              null
          }
      </div>


        {/* <TodoForm addTodo={this.addTodo} />
        <ul>
          {items}
        </ul> */}
      </div>
    )
  }
}


export default App;
