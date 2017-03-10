var React = require('react');
import * as Redux from 'react-redux';
import * as actions from 'actions';
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
var TodoAPI = require('TodoAPI');

export var TodoApp = React.createClass({
  /*getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },*/
  onLogout(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    dispatch(actions.startLogout());
  },
  render() {
/*    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);*/
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList />
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default Redux.connect()(TodoApp);
