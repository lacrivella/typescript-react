import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string;
}

class App extends React.Component<AppProps> {
  // redefined the Component's state when we had inline state = { counter: 0 }
  // that's why it worked compared to now

  constructor(props: AppProps) {
    super(props);

    //this doesn't redefine state. it just reassigns a new value.
    //this. state is currently an empty object. we cannot define properties on it
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
