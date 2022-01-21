import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { combineReducers, createStore } from "redux";
import { Provider } from 'react-redux';

import App from './App';

import { MainReducer, UserReducer, CoachReducer } from './Reducer'
import './index.css';

const store = createStore(combineReducers({
  main: MainReducer,
  user: UserReducer,
  coach: CoachReducer
}))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
