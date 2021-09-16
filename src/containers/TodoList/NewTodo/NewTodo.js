import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './NewTodo.css';

export default class NewTodo extends Component {
  state = {
    title: '',
    content: '',
    submitted: false,
  }

  postTodoHandler = () => {
    const data = { title: this.state.title, content: this.state.content };
    alert('Submitted\n' + data.title + '\n' + data.content);
    this.setState({ submitted: true });
  }

  render() {
    let redirect = null;

    if (this.state.submitted) {
      redirect = <Redirect to='/todos' />
    }


    return (
      <div className="NewTodo">
        {redirect}
        <h1>Add a Todo</h1>
        <label>Title</label>
        <input type="text" value={this.state.title}
          onChange={(e) => this.setState({ title: e.target.value })} />
        <label>Content</label>
        <textarea rows="4" type="text" value={this.state.content}
          onChange={(e) => this.setState({ content: e.target.value })} />
        <button onClick={this.postTodoHandler}>Submit</button>
      </div>
    );
  }
}