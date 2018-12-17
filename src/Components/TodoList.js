import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import database from '../firebase/firebase';
import moment from 'moment';

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

  onRemoveTodo = (id) => {
    // console.log('onRemoveTodo function call', id);
    // remove state
    this.setState((preState) => ({
      todos: preState.todos.filter((todo) => {
        return todo.id !== id
      })
    }));

    // remove firebase
    database.ref(`todos/${id}`).remove()
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        const testCompletedValue = todo.completed ? '' : moment().format('MMMM Do YYYY, h: mm: ss a');
        const completedValue = todo.completed;
        const completedAtValue = testCompletedValue;

        if (todo.id === id) {
          // update firesbase
          database.ref(`todos/${id}`).update({
            completed: !completedValue,
            completedAt: completedAtValue
          })

          // update state
          return {
            id: todo.id,
            text: todo.text,
            // ...todo,
            completed: !completedValue,
            completedAt: completedAtValue
          }
        } else {
          return todo;
        }
      })
    });
  };

  render() {
    return (
      <div>
        <h3>TodoList Component</h3>
        <TodoForm changeTodos={this.onChangeNewTodo.bind(this)} />
        <p>List of todos</p>
        {this.state.todos.map((todo) => {
          return <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onRemoveTodo={() => this.onRemoveTodo(todo.id)}
            todo={todo}
          />
        })}
      </div>
    )
  }
};

export default TodoList;
