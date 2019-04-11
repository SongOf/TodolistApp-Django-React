/*
顶层主 App 组件
*/

import React from 'react';
import Header from './Header';
import Menu from './containers/MenuInfo';
import AddTodo from './AddTodo';
import TodoList from './containers/TodoListInfo';

const App = () => (
    <div>
        <Header/>
        <Menu/>
        <AddTodo/>
        <TodoList/>
    </div>
);

export default App;
