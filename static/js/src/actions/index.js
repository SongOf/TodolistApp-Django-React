/*
一系列异步操作 (fetch实现)的 action creator
用来向服务器发送请求或处理从服务器返回的信息
*/

import fetch from 'isomorphic-fetch';
import * as actionCreators from './ActionCreators';


// 从数据库中获取全部待办事项列表
export const fetchTodolist = () => {
    return (dispatch) => {
        return fetch(`/todolist`)
        .then(response => response.json())
        .then(json => dispatch(actionCreators.getAllTodos(json)))
        .catch(e => console.error(e));
    }
};

// 添加待办到数据库
export const addTodo = (text, id, priority, expire, create) => {
    return (dispatch) => {
        return fetch('/todolist/', {
            method: "post",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text, id, priority, expire, create })
        })
        .then(response => response.json())
        .then(json => dispatch(actionCreators.addTodo(text, json.id,
                              json.priority, json.expire, json.create)))
        .catch(e => console.error(e));
    }
};

// 删除事项
export const deleteTodo = (id) => {
    return (dispatch) => {
        return fetch('tododetail/' + id, {
            method: "DELETE"
        })
        .then(() => dispatch(actionCreators.deleteTodo(id)))
        .catch(e => console.error(e));
    }
};

// 反转事项状态
export const toggleTodo = (id) => {
    return (dispatch) => {
        return fetch('tododetail/' + id, {
            method: "TOGGLE",
        })
        .then(() => dispatch(actionCreators.toggleTodo(id)))
        .catch(e => console.error(e))
    }
};

// 编辑事项内容
export const editTodo = (text, id) => {
    return (dispatch) => {
        return fetch('tododetail/' + id, {
            method: "EDIT",
            body: text,
        })
        .then(() => dispatch(actionCreators.editTodo(text, id)))
        .catch(e => console.error(e))
    }
};

export const setSortMethod = actionCreators.setSortMethod;
