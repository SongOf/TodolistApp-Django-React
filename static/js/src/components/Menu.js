/*
菜单组件，包括剩余待办数提示和列表排序方式控制组件
*/

import React from 'react';
import DisplayInfo from './containers/DisplayInfo';


const Menu = ({activeCount}) => (
    <section className="menu">
        <span className="todo-active-count">
            <strong>{activeCount}</strong> 项待办
        </span>

        <ul className="display-method">
            <DisplayInfo method="SHOW_BY_CREATE">按创建时间</DisplayInfo>
            <DisplayInfo method="SHOW_BY_EXPIRE">按过期时间</DisplayInfo>
            <DisplayInfo method="SHOW_BY_PRIORITY">按优先级</DisplayInfo>
        </ul>
    </section>
);

export default Menu;
