import React from 'react';
import TodoForm from './TodoForm';

class TodoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [
        { text: 'test 123', id: '1' },
        { text: 'test 234', id: '2' }
      ]
    };
  };

  onChangeNewTodo(newTodo) {
    const todo = {
      text: newTodo.newTodo,
      id: newTodo.id
    };

    const addTodo = [...this.state.todos, todo];

    this.setState({
      todos: addTodo
    });
  };

  render() {
    return (
      <div>
        <h3>TodoList Component</h3>
        <TodoForm changeTodos={this.onChangeNewTodo.bind(this)} />
        <p>List of todos</p>
        {this.state.todos.map((todo) => {
          return <p key={todo.id}>{todo.text} {todo.id}</p>
        })}
      </div>
    )
  }
};

export default TodoList;
