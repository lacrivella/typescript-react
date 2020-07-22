import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';
import styles from './App.module.css';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <ul className={styles.list}>
          <li className={styles.list} onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
            {todo.title}
          </li>
        </ul>
      );
    });
  }
  
  render() {
    return (
      <div className={styles.container}>
        <button className={styles.button} onClick={this.onButtonClick}>FETCH</button>
        {this.state.fetching ? 'LOADING' : null}
        <div className={styles.span}>To-Do List</div>
        <div className={styles.info}>click on a task to delete</div>
        <div className={styles.mainList}>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
