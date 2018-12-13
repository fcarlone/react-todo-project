import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './Components/TodoApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';

ReactDOM.render(<TodoApp />, document.getElementById('app'));
