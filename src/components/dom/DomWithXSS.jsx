import React, {useState, useEffect} from 'react';
import { Col, Row, Input, Button, Spin } from 'antd';

const { TextArea } = Input;

const DomWithXSS = () => {
  const [htmlCode, setHtmlCode] = useState('');
  const [output, setOutput] = useState(false);
 
  const changCode = (e) => {
    setHtmlCode(e.target.value);
    setOutput(false);
  }
  const runCode = () => {
    console.log(htmlCode);
    setOutput(true);
  }
  function dangerouslySetInnerHTML() {
    return {__html: htmlCode}; 
  }
  return (
    <Row>
      <Col span={12}>
        <TextArea autoFocus={true} onChange={changCode} rows={30} placeholder="HTML Code" value={htmlCode}/>

        <Button onClick={runCode} type="primary" block>Run</Button>

      </Col>
      <Col span={12}>
        {output ? (
          <div style={{ padding:'6px'}} dangerouslySetInnerHTML={dangerouslySetInnerHTML()}></div> // using dangerouslySetInnerHTML

          // <div style={{ padding:'6px'}}>{htmlCode}</div> // this is not use the dangerouslySetInnerHTML
        ) : 
          <div style={{textAlign: 'center', padding:'20% 50px'}}>
            <Spin />
          </div>
        }
      </Col>
    </Row>
  )
}

export default DomWithXSS