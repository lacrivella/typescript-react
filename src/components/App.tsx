import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions'
import { StoreState } from '../reducers'

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

export class App extends React.Component<AppProps> {
  render() {
    return <div>Hello Again</div>;
  }
}
