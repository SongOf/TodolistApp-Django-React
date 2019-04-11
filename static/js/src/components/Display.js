/*
控制列表排序方式的组件
*/

import React from 'react';

const Display = ({active, children, onClick}) => {
    if (active) {
        return (
            <li>
                  <a className="selected">{children}</a>
            </li>
          )
    }

    return (
        <li className="selected" href="#"
            onClick={e => {
                e.preventDefault();
                onClick();
            }}
        >
            <a>{children}</a>
        </li>
    )
};


export default Display;
