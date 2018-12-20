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
    firebase.auth().onAuthStateChanged((user) => {
      const firebaseUserID = user.uid

      return database.ref(`users/${firebaseUserID}/todos`).on('child_added', (snapshot) => {
        const todo = {
          id: snapshot.key,
          text: snapshot.val().text,
          completed: snapshot.val().completed,
          completedAt: snapshot.val().completedAt
        };

        const addTodo = [...this.state.todos, todo];

        this.setState({
          todos: addTodo,
          user: firebaseUserID
        });
      })
    })
  };

  onChangeNewTodo(newTodo) {
    firebase.auth().onAuthStateChanged((user) => {
      const firebaseUserID = user.uid
      // push new todo to firebase
      database.ref(`users/${firebaseUserID}/todos`).push({
        text: newTodo.newTodo,
        completed: false,
        completedAt: ''
      });
    })
  };

  onRemoveTodo = (id) => {
    // remove state
    this.setState((preState) => ({
      todos: preState.todos.filter((todo) => {
        return todo.id !== id
      })
    }));

    // remove firebase
    const firebaseUserID = this.state.user;
    database.ref(`users/${firebaseUserID}/todos/${id}`).remove()
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        const completedValue = todo.completed;
        const conditionalCompletedValue = todo.completed ? '' : moment().format('MMMM Do YYYY, h:mm:ss a');
        const completedAtValue = conditionalCompletedValue;

        if (todo.id === id) {
          // update firesbase
          const firebaseUserID = this.state.user;
          database.ref(`users/${firebaseUserID}/todos/${id}`).update({
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
