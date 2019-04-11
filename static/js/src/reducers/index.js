import { combineReducers } from 'redux';
import undoable, { distinctState } from 'redux-undo';
import todos from './todos';
import sortMethod from './sortMethod';

// 合并 Reducers
const todoApp = combineReducers({
    todos: undoable(todos, {method: distinctState()}),
    sortMethod,
});

export default todoApp;
