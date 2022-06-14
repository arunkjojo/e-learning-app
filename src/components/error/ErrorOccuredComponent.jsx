import { Button } from 'antd';
import React, { Component } from 'react';

class ErrorOccuredComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count:0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    this.setState(({count}) => ({
      count: count + 1
    }));
  }

  render() {
    if (this.state.count >=3) {
      // Simulate a JS error
      throw new Error('I crashed becouse I called same method in several times!');
    }
    return <>
      <h1>Count is {this.state.count}</h1>
      <Button type='primary'  onClick={this.handleClick}>Add +1</Button>
    </>
  }
}

export default ErrorOccuredComponent;