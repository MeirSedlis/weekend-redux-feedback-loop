import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelingReducer = (state = 0, action) => {
    // TODO set feelings with data from server
    return state
}

const understandingReducer = (state = 0, action) => {
    // TODO set understanding with data from server?
    return state
}

const supportReducer = (state = 0, action) => {
    // TODO set support with data from server?
    return state
}

const commentReducer = (state = '', action) => {
    //TODO set comments with data from server?
    return state
}


const reduxStore = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentReducer
    }),
    applyMiddleware(logger)
  );

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
