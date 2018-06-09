import React, {Component} from 'react';
import TodoItem from './TodoItem';
const APIURL = './api/todos';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos:[]
        }
    }

    componentWillMount() {
        this.loadTodos();
    }

    loadTodos() {
        fetch(APIURL)
        .then(res => {
            if(!res.ok) {
                if(res.status >= 400 && res.status < 500) {
                    return res.json()
                    .then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    })
                }
                else {
                    let err = {errorMessage: 'server is not responding'};
                    throw err;
                }
            }
            return res.json();
        })
        .then(todos => this.setState({todos}))
    }

    render() {
        const todos = this.state.todos.map((todo) => (
            <TodoItem 
            key={todo._id}
            {...todo}
            />
        ));
        return (
            <div>
                <h1>Todo List</h1>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

export default TodoList;