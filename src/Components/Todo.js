// Stateless React Component
import React from 'react';
import styles from '../styles/components/TodoList.scss';

const Todo = (props) => (
  <div>
    <span style={{
      textDecoration: props.todo.completed ? "line-through" : ""
    }}>
      {props.todo.text}
    </span>

    <span>
      <button
        className={styles.completedButton}
        onClick={props.toggleComplete}
      >
        completed
      </button>
    </span>

    <span>
      <button
        className={styles.deleteButton}
        onClick={props.onRemoveTodo}
      >
        delete
      </button>
    </span>

    <span>{props.todo.completedAt}</span>
  </div>
);

export default Todo;
