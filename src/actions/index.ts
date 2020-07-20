import axios from 'axios';
import { Dispatch } from 'redux';

const url = 'https://jsonplaceholder.typicode.com/todos';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch({
      type: 'FETCH_TODOS',
      payload: response.data,
    });
  };
};
