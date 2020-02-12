import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <h3>We click {this.state.count} times</h3>
        <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>
          Click me
        </button>
      </div>
    );
  }
}

export default Counter;