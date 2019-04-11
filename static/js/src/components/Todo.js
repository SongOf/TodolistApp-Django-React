/*
待办事项(一项)组件
*/

import React from 'react'
import classname from 'classname';

const Todo = ({ onCompleteClick, onDeleteClick, textEdit,
              create, completed, text, priority, expire, id}) => {

    const create_date = new Date(create.slice(0,10).replace(/-/g, "/"));
    const expire_date = new Date(expire.slice(0,10).replace(/-/g, "/"));
    const timeDiff = expire_date.getTime() - create_date.getTime();
    const dayDiff = Math.floor(timeDiff / (24 * 3600 * 1000));

    let expire_result = '今天',
        expire_level = 'outdate';

    if (dayDiff < 0) {
        expire_result = '已过期';
    } else if (dayDiff === 1) {
        expire_result = '明天';
        expire_level = 'middlePriority';
    } else if (dayDiff === 2) {
        expire_result = '后天';
        expire_level = 'middlePriority';
    } else if (dayDiff === 0) {
        expire_result = '今天';
        expire_level = 'highPriority';
    } else {
        expire_result = dayDiff + '天后';
        expire_level = 'lowPriority';
    }

    let priority_result = '!',
        priority_level = 'lowPriority';

    switch (priority) {
      case '1':
          priority_result = '!';
          priority_level = 'lowPriority';
          break;
      case '2':
          priority_result = '!!';
          priority_level = 'middlePriority';
          break;
      case '3':
          priority_result = '!!!';
          priority_level = 'highPriority';
          break;
      default:
          break;
    }


    return(
      <li className={classname({completed: completed})}>
          <div className="todo-item">
              <input
                  type="checkbox"
                  className="toggle"
                  onChange={onCompleteClick}
                  checked={completed}
              />
              <label className="toggleLabel" htmlFor="toggle"></label>
              <label className={priority_level + " " + "priority"}>
                  {priority_result}
              </label>

              <input
                  type="text"
                  className="text"
                  value={text}
                  onChange={(e) => {textEdit(e.target.value, id)}}
              />

              <label className={expire_level + " " + "expire"}>
                  {expire_result}
              </label>
          <button className="delete" onClick={onDeleteClick}></button>
        </div>
      </li>
    );
};


export default Todo
