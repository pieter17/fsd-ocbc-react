import React from 'react';

import {
  useTodoItems,
  TodoItemsActionTypes,
  TodoItem,
} from './components/todo';
import { TodoList } from './components/TodoList';
import './App.css';

function App() {
  let [items, dispatchItems] = useTodoItems([
    {
      checked: false,
      text: 'First todo',
    },
  ]);
  let [input, setInput] = React.useState('');

  function handleCheck(item: TodoItem) {
    dispatchItems({
      action: TodoItemsActionTypes.CHECK_ITEM,
      payload: item,
    });
    setInput('');
  }

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <div>
        <input
          type='text'
          placeholder='create new todo'
          className='todo-input'
          value={input}
          onChange={(v) => setInput(v.currentTarget.value)}
          onKeyPress={(evt) => {
            if (evt.key === 'Enter') {
              dispatchItems({
                action: TodoItemsActionTypes.ADD_ITEM,
                payload: {
                  checked: false,
                  text: input,
                },
              });
              setInput('');
            }
          }}
        />
      </div>
      <TodoList items={items} onCheck={handleCheck} />
    </div>
  );
}

export default App;
