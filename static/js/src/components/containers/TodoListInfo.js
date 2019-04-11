import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from '../../actions';
import TodoList from '../TodoList';

const SHOW_BY_CREATE = 'SHOW_BY_CREATE',
      SHOW_BY_EXPIRE = 'SHOW_BY_EXPIRE',
      SHOW_BY_PRIORITY = 'SHOW_BY_PRIORITY';

// 根据状态切换条目的排序方式
const sortTodos = (todos, sortMethod) => {
    switch (sortMethod) {
        case SHOW_BY_CREATE:
            return todos.sort((a, b) => b.id - a.id).filter(t=>true);

        case SHOW_BY_EXPIRE:
            return todos.sort((a, b) => {
              const a_date = new Date(a.expire.slice(0,10).replace(/-/g, "/")),
                    b_date = new Date(b.expire.slice(0,10).replace(/-/g, "/"));
              return a_date.getTime() - b_date.getTime();
            }).filter(t=>true);

        case SHOW_BY_PRIORITY:
            return todos.sort((a, b) => b.priority - a.priority).filter(t=>true);
    }
};


const mapStateToProps = (state) => {
    return {
        todos: sortTodos(state.todos.present, state.sortMethod),
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        onCompleteClick: (id) => dispatch(toggleTodo(id)),
        onDeleteClick: (id) => dispatch(deleteTodo(id)),
        textEdit: (text, id) => dispatch(editTodo(text, id)),
    }
};

const TodoListInfo = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default TodoListInfo;
