import React from 'react';
import TodoForm from './TodoForm';
import database from '../firebase/firebase';

class TodoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: []
    };
  };

  componentWillMount() {
    database.ref('todos').on('child_added', (snapshot) => {
      const todo = {
        id: snapshot.key,
        text: snapshot.val().text,
        completed: false,
        completedAt: ''
      };

      const addTodo = [...this.state.todos, todo];

      this.setState({
        todos: addTodo
      });
    })
  };

  onChangeNewTodo(newTodo) {
    // push new todo to firebase
    database.ref('todos').push({
      text: newTodo.newTodo,
      completed: false,
      completedAt: ''
    }).then(() => {
      console.log(this.state.todos)
    });
  };

  render() {
    return (
      <div>
        <h3>TodoList Component</h3>
        <TodoForm changeTodos={this.onChangeNewTodo.bind(this)} />
        <p>List of todos</p>
        {this.state.todos.map((todo) => {
          return <p key={todo.id}>{todo.text} {todo.id} {todo.completed} {todo.completedAt}</p>
        })}
      </div>
    )
  }

};



export default TodoList;
