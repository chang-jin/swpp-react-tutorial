import React, { Component } from 'react'
import './TodoList.css'
import Todo from '../../components/Todo/Todo'

export default class TodoList extends Component {
    state = {
        todos: [
            { id: 1, title: 'SWPP', content: 'take swpp class', done: true },
            { id: 2, title: 'Movie', content: 'watch movie', done: false },
            { id: 3, title: 'Dinner', content: 'eat dinner', done: false }
        ]
    }
    render() {
        const todos = this.state.todos.map((td) => {
            return (<Todo key={td.id} title={td.title} done={td.done}></Todo>)
        })
        return (
            <div className="TodoList">
                <div className="title">{this.props.title}</div>
                <div className="todos">{todos}</div>
            </div>
        )
    }
}
