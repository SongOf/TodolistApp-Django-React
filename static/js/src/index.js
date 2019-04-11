import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import todoApp from './reducers';
import { fetchTodolist } from './actions';
import '../../../static/css/index.css';
import 'babel-polyfill';


const store = createStore(todoApp, applyMiddleware(thunkMiddleware));

store.dispatch(fetchTodolist());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
