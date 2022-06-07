import { Button } from 'antd';
import React from 'react'

class ErrorTryCatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter:0, error: null };
    this.handleClick = this.handleClick.bind(this);
    this.getRectArea = this.getRectArea.bind(this);
  }

  getRectArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
      throw 'Parameter is not a number!';
    }
  }

  handleClick() {
    try {
      // Do something that could throw
      this.setState(({counter}) => ({
        counter: counter + 1
      }));
      // error
      this.getRectArea(3, 'A');
    } catch (error) {
      this.setState({
        error: error
      })
    }
  }

  render() {
    if (this.state.error) {
      return <div>
        <h2>Something went wrong.</h2>
        <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
        </details>
    </div>
    }
    return <>
      <h1>Count is {this.state.counter}</h1>
      <Button type='primary' onClick={this.handleClick}>Click Me</Button>
    </>
  }
}

export default ErrorTryCatch