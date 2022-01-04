import * as React from 'react';
import { TodoItem } from './todo';

type TodoListProps = {
  items: TodoItem[];
  onCheck: (items: TodoItem) => void;
};

type TodoListItemProps = {
  item: TodoItem;
  onCheck: (item: TodoItem) => void;
};

export function TodoListItem(props: TodoListItemProps) {
  const { item, onCheck } = props;
  const handleCheck = React.useCallback(() => onCheck(item), [onCheck, item]);
  return (
    <li className='todo-list-item'>
      <input type='checkbox' onChange={handleCheck} />
      {item.text}
    </li>
  );
}

export function TodoList(props: TodoListProps) {
  const { items, onCheck } = props;
  return (
    <ul className='todo-list'>
      {items.map((item, index) =>
        item.checked ? null : (
          <TodoListItem key={index} item={item} onCheck={onCheck} />
        )
      )}
    </ul>
  );
}
