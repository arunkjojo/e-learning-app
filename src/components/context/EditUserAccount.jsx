import { Row, Col } from "antd";
import React, { useContext } from "react";
import { Context } from "./Context";

const EditUserAccount = () => {
    const [context, setContext] = useContext(Context);
    return (
        <Row>
            <Col span={6}>
                User Name: 
            </Col>
            <Col span={6}>
                <input type="text" value={context.name} onChange={(e)=>setContext({
                    ...context,
                    name:e.target.value
                })} required/>
            </Col>
            <Col span={6}>
                User Email: 
            </Col>
            <Col span={6}>
                <input type="text" value={context.email} onChange={(e)=>setContext({
                    ...context,
                    email:e.target.value
                })} required/>
            </Col>
        </Row>
    );
};

export default EditUserAccount;
