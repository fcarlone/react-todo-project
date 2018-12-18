import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import database from '../firebase/firebase';
import moment from 'moment';
import { firebase } from '../firebase/firebase';

class TodoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [],
      user: ''
    };
  };

  componentWillMount() {

    // view Firebase user id
    database.ref('users').once('value', (snapshot) => {

      console.log(`snapkey`)
    })

    console.log(this.state)

    database.ref(`users/cKRus5aHggOZKlRBqb1HLQDvxtl1/todos`).on('child_added', (snapshot) => {
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
    const addUserID = this.state.user;
    database.ref(`users/cKRus5aHggOZKlRBqb1HLQDvxtl1/todos`).push({
      text: newTodo.newTodo,
      completed: false,
      completedAt: ''
    }).then(() => {
      console.log(this.state)
    });

  };

  onRemoveTodo = (id) => {
    // remove state
    this.setState((preState) => ({
      todos: preState.todos.filter((todo) => {
        return todo.id !== id
      })
    }));

    // remove firebase
    database.ref(`users/cKRus5aHggOZKlRBqb1HLQDvxtl1/todos/${id}`).remove()
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        const testCompletedValue = todo.completed ? '' : moment().format('MMMM Do YYYY, h:mm:ss a');
        const completedValue = todo.completed;
        const completedAtValue = testCompletedValue;


        if (todo.id === id) {
          // update firesbase
          database.ref(`users/cKRus5aHggOZKlRBqb1HLQDvxtl1/todos/${id}`).update({
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
