import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string;
}

const App = (props: AppProps): JSX.Element => {
  return <div>{props.color}</div>;
};
// class App extends React.Component<AppProps> {
//   state = { counter: 0 };

//   onIncrease = (): void => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   onDecrease = (): void => {
//     this.setState({ counter: this.state.counter - 1 });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.onIncrease}>Increase</button>
//         <button onClick={this.onDecrease}>Decrease</button>
//         {this.state.counter}
//       </div>
//     );
//   }
// }

ReactDOM.render(<App color="blue" />, document.querySelector('#root'));
