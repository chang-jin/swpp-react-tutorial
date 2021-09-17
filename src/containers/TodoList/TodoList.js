import React, { Component } from 'react';
import Todo from '../../components/Todo/Todo'
import TodoDetail from '../../components/TodoDetail/TodoDetail'
import './TodoList.css';
import { NavLink } from 'react-router-dom';

class TodoList extends Component {

    state = {
        todos: [
            { id: 1, title: 'SWPP', content: 'blah blah', done: false },
            { id: 2, title: 'GONE', content: 'goneongeon', done: true },
            { id: 3, title: 'BLAH', content: 'orange', done: false }
        ]
    }

    clickTodoHandler = td => {
        if (this.state.selectedTodo === td) {
            this.setState( {selectedTodo: null});
        } else {
            this.setState({selectedTodo: td})
        }
    }

    render() {
        let todoDetail = null;
        if (this.state.selectedTodo) {
            todoDetail = <TodoDetail title={this.state.selectedTodo.title}
            content = {this.state.selectedTodo.content} />
        }
        const todos = this.state.todos.map((td) => {
            return ( <Todo key={td.id} title={td.title} done={td.done} clicked={() => this.clickTodoHandler(td)}/>);
        })

        return (
            <div className="TodoList">
                <div className='title'>{this.props.title}</div>
                <div className='todos'>{todos}</div>
                {todoDetail}
                <NavLink to='/new-todo' exact>New Todo</NavLink>
            </div>
        )
    }
}
export default TodoList;