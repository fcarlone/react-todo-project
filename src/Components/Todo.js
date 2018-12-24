// Stateless React Component
import React from 'react';
import styles from '../styles/components/TodoList.scss';

const Todo = (props) => (
  <div>
    <span>
      <button
        className={styles.completedButton}
        onClick={props.toggleComplete}
      >
        completed
        </button>
    </span>
    <span style={{
      textDecoration: props.todo.completed ? "line-through" : ""
    }}>
      {props.todo.text}
    </span>

    <span>{props.todo.completedAt}</span>

    <span>
      <button
        className={styles.deleteButton}
        onClick={props.onRemoveTodo}
      >
        delete
      </button>
    </span>


  </div>
);

export default Todo;
