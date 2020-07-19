import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string;
}

class App extends React.Component<AppProps> {
  state = { counter: 0 };

  render() {
    return (
      <div>
        <button>Increase</button>
        <button>Decrease</button>
        {this.state.counter}
      </div>
    );
  }
}

ReactDOM.render(<App color="blue" />, document.querySelector('#root'));
