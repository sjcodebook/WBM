import React, { useState, Component } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('Use the below button to increase the count');

  return (
    <div>
      <p>Counter: {count}</p>
      <p>{msg}</p>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
}

export class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      msg: 'Use the below button to increase the count',
    };
  }

  render() {
    return (
      <div>
        <p>CounterClass: {this.state.count}</p>
        <p>{this.state.msg}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Count
        </button>
      </div>
    );
  }
}

export function Counter2() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('Use the below button to increase the count');

  return (
    <div>
      <p>Counter: {count}</p>
      <p>{msg}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount(count + 1);
        }}
      >
        Count
      </button>
    </div>
  );
}

export function Counter3() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('Use the below button to increase the count');

  return (
    <div>
      <p>Counter: {count}</p>
      <p>{msg}</p>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Count
      </button>
    </div>
  );
}

export function Counter4() {
  const [state, setState] = useState({
    count: 0,
    msg: 'Use the below button to increase the count',
  });

  return (
    <div>
      <p>Counter: {state.count}</p>
      <p>{state.msg}</p>
      <button onClick={() => setState({ count: 1 })}>Count</button>
    </div>
  );
}

export function Counter5() {
  const [state, setState] = useState({
    count: 0,
    msg: 'Use the below button to increase the count',
  });

  return (
    <div>
      <p>Counter: {state.count}</p>
      <p>{state.msg}</p>
      <button
        onClick={() =>
          setState((prevState) => {
            return { ...prevState, count: 1 };
          })
        }
      >
        Count
      </button>
    </div>
  );
}
