/*
待办事项列表组件
*/

import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, onCompleteClick, onDeleteClick, textEdit}) => (
    <main>
        <ul className="todo-list">
            { todos.map(todo =>
                <Todo
                    key = {todo.id}
                    text = {todo.text}
                    {...todo}
                    onCompleteClick = {() => onCompleteClick(todo.id)}
                    onDeleteClick = {() => onDeleteClick(todo.id)}
                    textEdit = {textEdit}
                />
            )}
        </ul>
    </main>
);

export default TodoList;
