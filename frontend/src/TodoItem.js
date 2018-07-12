import React from 'react';

const TodoItem = ({name, dateStart, dateEnd, timeStart, timeEnd, shiftType, onDelete, onToggle}) => (
    <li>
        <span onClick={onToggle}>
            {name}, {dateStart}, {dateEnd}
        </span>
        <span onClick={onDelete}> x </span>
    </li>
)


export default TodoItem;