import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'

class ClassBasedCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
  }
  decrease = () => {
    this.setState(() => ({
      counter: this.state.counter>0 ? this.state.counter - 1 : 0
    }));
  }
  increase() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  }
  render() {
    return <>
        <h3 style={{textAlign:'center', color:'red'}}>Counter in Class Component</h3>
        <Row gutter={16}>
            <Col className="gutter-row" span={8}>
                <Button type='link' block onClick={this.decrease}>
                    Minus by 1
                </Button>
            </Col>
            <Col className="gutter-row" span={8}>
                <Button type='dashed' block>
                    {this.state.counter}
                </Button>
            </Col>
            <Col className="gutter-row" span={8}>
                <Button type='link' block onClick={this.increase}>
                    Add by 1
                </Button>
            </Col>
        </Row>
    </>
  }
}
export default ClassBasedCounter