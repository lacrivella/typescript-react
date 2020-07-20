import axios from 'axios';
import { Dispatch } from 'redux';

const url = 'https://jsonplaceholder.tpicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(url);

    dispatch({
      type: 'FETCH_TODOS',
      payload: response.data,
    });
  };
};
