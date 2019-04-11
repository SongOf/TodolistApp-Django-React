const GET_ALL_TODOS = 'GET_ALL_TODOS',
      ADD_TODO = 'ADD_TODO',
      DELETE_TODO = 'DELETE_TODO',
      TOGGLE_TODO = 'TOGGLE_TODO',
      EDIT_TODO = 'EDIT_TODO';

const todo = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false,
                priority: action.priority,
                expire: action.expire,
                create: action.create,
            };

        case TOGGLE_TODO: {
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {
                completed: !state.completed
            })
        }

        case EDIT_TODO: {
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {
                text: action.text
            })
        }

        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case GET_ALL_TODOS:
            return [...action.todos];
        case ADD_TODO:
            return [todo(undefined, action),...state];
        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.id);
        case TOGGLE_TODO:
            return state.map((t) => todo(t, action));
        case EDIT_TODO:
            return state.map((t) => todo(t, action));
        default:
            return state;
    }
};

export default todos;
