/*
一系列 Action Creator
*/

const GET_ALL_TODOS = 'GET_ALL_TODOS',
      ADD_TODO = 'ADD_TODO',
      DELETE_TODO = 'DELETE_TODO',
      TOGGLE_TODO = 'TOGGLE_TODO',
      SET_SORT_METHOD = 'SET_SORT_METHOD',
      EDIT_TODO = 'EDIT_TODO';


export const getAllTodos = (todos) => {
    return {
        type: GET_ALL_TODOS,
        todos,
        }
    };

export const addTodo = (text, id, priority, expire, create) => {
    return {
        type: ADD_TODO,
        id,
        text,
        priority,
        expire,
        create,
    }
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id,
    }
};

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id,
    }
};

export const setSortMethod = (method) => {
    return {
        type: SET_SORT_METHOD,
        method,
    }
};

export const editTodo = (text, id) => {
    return {
        type: EDIT_TODO,
        text,
        id,
    }
};
