import { FetchTodosAction, DeleteTodoAction } from './todos';

export enum ActionTypes {
  //by default assigns 0 to enums unless given a value
  fetchTodos,
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
