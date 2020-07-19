import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string;
}

interface AppState {
  counter: number;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { counter: 0 };
  }

  onIncrease = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrease = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrease}>Increase</button>
        <button onClick={this.onDecrease}>Decrease</button>
        {this.state.counter}
      </div>
    );
  }
}

ReactDOM.render(<App color="blue" />, document.querySelector('#root'));
