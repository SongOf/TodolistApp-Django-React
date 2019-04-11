import React from 'react';
import { connect } from 'react-redux';
import Menu from '../Menu';

const activeCount = (todos) => {
    return todos.reduce((count, todo) => todo.completed ? count: count + 1, 0);
};

const mapStateToProp = (state) => {
    return {
        activeCount: activeCount(state.todos.present),
    }
};

const MenuInfo = connect(
    mapStateToProp
)(Menu);

export default MenuInfo;
