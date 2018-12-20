// Stateless React Component
import React from 'react';
import database from '../firebase/firebase';

const Todo = (props) => (
  <div>
    <span style={{
      textDecoration: props.todo.completed ? "line-through" : ""
    }}>
      {props.todo.text}
    </span>

    <span>
      <button
        onClick={props.toggleComplete}
      >
        completed
      </button>
    </span>

    <span>
      <button
        onClick={props.onRemoveTodo}
      >
        delete
      </button>
    </span>

    <span>{props.todo.completedAt}</span>
  </div>
);

export default Todo;
