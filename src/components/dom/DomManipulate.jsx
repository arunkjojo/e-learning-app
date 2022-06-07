import React from 'react';
import { Divider } from 'antd';


const DomManipulate = () => {
  function domManipulator() {
    const changeBtn = document.getElementById('changeBtn');
    const changeTxt = document.getElementById('changeTxt');
    const changeNmb = document.getElementById('changeNmb');

    changeBtn.setAttribute("className", "danger");
    changeBtn.setAttribute("name", "changedButton");
    changeBtn.textContent= "changedButton";


    changeTxt.setAttribute("type", "number");
    changeNmb.setAttribute("min", 6);
    changeTxt.value=2235;
    changeTxt.setAttribute("name", "changedNumber");


    changeNmb.setAttribute("type", "text");
    changeNmb.value= "AJoin";

    changeNmb.setAttribute("name", "changedText");
    changeNmb.focus();
  }
  return (
    <div style={{textAlign:'center'}}>
      <Divider orientation="right" plain>Button</Divider>
        <button id="changeBtn" name="changeButton" type="button" className='btn btn-info'>Button</button> 


      <Divider orientation="left" plain>Text Input</Divider>
        <input id="changeTxt" name="changeText" type='text' value="Text Input" required/><br/><br/>
        <input id="changeNmb" name="changeNumber" type='number' value="5" min="1" max="10" style={{minWidth: 100}} />


      <Divider plain>Manipulator Button</Divider>
        <button onClick={domManipulator}>OnClick</button>
        <br/><br />
        <input onChange={domManipulator} placeholder='OnChange' />
    </div>
  )
}

export default DomManipulate