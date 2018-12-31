import React from 'react';
import styles from '../styles/components/TodoList.scss';

const Todo = (props) => (
  <div>
    <span>
      <span style={{
        textDecoration: props.todo.completed ? "line-through" : ""
      }}>
        {props.todo.text}
      </span>
      <span style={{ marginLeft: 8 }}><span style={{ fontWeight: 600 }}>{props.todo.completed ? " Completed at: " : ""}</span>{props.todo.completedAt}</span>
      <button
        className={styles.completedButton}
        onClick={props.toggleComplete}
      >
        {props.todo.completed ? "undo" : "completed"}
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
  </div>
);

export default Todo;
