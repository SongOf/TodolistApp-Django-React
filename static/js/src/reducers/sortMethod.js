const SHOW_BY_CREATE = 'SHOW_BY_CREATE',
      SET_SORT_METHOD = 'SET_SORT_METHOD';

// 修改显示方式
const sortMethod = (state = SHOW_BY_CREATE, action) => {
    switch (action.type) {
        case SET_SORT_METHOD:
            return action.method;
        default:
            return state;
    }
};

export default sortMethod;
