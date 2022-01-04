import { useReducer } from 'react';

export type TodoItem = {
  text: string;
  checked: boolean;
};

export enum TodoItemsActionTypes {
  ADD_ITEM = 'TODO/ITEMS/ADD_ITEMS',
  CHECK_ITEM = 'TODO/ITEMS/CHECK_ITEM',
}

export type TodoItemsActions = {
  action: TodoItemsActionTypes;
  payload: TodoItem;
};

export function useTodoItems(defaultItems: TodoItem[]) {
  function reducer(state: TodoItem[], action: TodoItemsActions) {
    switch (action.action) {
      case TodoItemsActionTypes.ADD_ITEM:
        return state.concat(action.payload);
      case TodoItemsActionTypes.CHECK_ITEM:
        action.payload.checked = true;
        return [...state];
      default:
        return state;
    }
  }

  return useReducer(reducer, defaultItems);
}
