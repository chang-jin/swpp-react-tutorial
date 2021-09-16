import React from 'react';
// import logo from './logo.svg';
import TodoList from './containers/TodoList/TodoList';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';
import NewTodo from './containers/TodoList/NewTodo/NewTodo';
import TodoDetail from './components/TodoDetail/TodoDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/todos" exact render={() => <TodoList title="My TODOs" />} />
          <Route path="/new-todo" exact component={NewTodo} />
          <Route path="/todos/:id" exact component={TodoDetail} />
          <Redirect exact from="/" to="/todos" />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
