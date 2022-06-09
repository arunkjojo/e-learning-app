import React, { useState } from 'react'
import { Row, Col, Button } from 'antd'

const FunctionalBasedCounter = () => {
    const [counter, setCounter] = useState(0);
    const increase = () => {
        setCounter(count => count + 1);
    };
    function decrease() {
        setCounter(count => count > 0 ? count - 1 : 0);
    };
    return <>
        <h3 style={{textAlign:'center', color:'red'}}>Counter in Functional Component</h3>
        <Row gutter={16}>
            <Col className="gutter-row" span={8}>
                <Button type='link' block onClick={decrease}>
                    Minus by 1
                </Button>
            </Col>
            <Col className="gutter-row" span={8}>
                <Button type='dashed' block>
                    {counter}
                </Button>
            </Col>
            <Col className="gutter-row" span={8}>
                <Button type='link' block onClick={increase}>
                    Add by 1
                </Button>
            </Col>
        </Row>
    </>
}

export default FunctionalBasedCounter