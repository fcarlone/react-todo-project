import React from 'react';
import styles from '../styles/components/TodoList.scss';


const Todo = (props) => (
  <div>
    <span>
      <button
        className={styles.completedButton}
        onClick={props.toggleComplete}
        style={{
          backgroundColor: props.todo.completed ? "#14EB28" : "#f7f7f7"
        }}
      >
        completed
        </button>
    </span>
    <span style={{
      textDecoration: props.todo.completed ? "line-through" : ""
    }}>
      {props.todo.text}
    </span>
    <span style={{ marginLeft: 10 }}>{props.todo.completedAt}</span>
    <span>
      <button
        className={styles.deleteButton}
        onClick={props.onRemoveTodo}
      >
        delete
      </button>
    </span>


  </div >
);

export default Todo;
