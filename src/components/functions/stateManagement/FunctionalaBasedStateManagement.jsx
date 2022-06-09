import { NodeCollapseOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'

// React functional components are plain JavaScript functions. It is not possible to persist state in local variables as these are initialized every time the function is evaluated. Thus to maintain state inside the function, React provides several hooks:
/* 
useState() :
    useState() hook allows you create and mange a state variable that can be a simple JavaScript primitive or an object.
    1. Your components can bind to the value of __firstArgs in usestate.
    2. The only way to mutate the state and its binding is to call the function __secondArgs in usestate.

useEffect() :
    The Effect Hook lets you perform side effects in function components
    If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
    1. it is the function and what is perfome the function.
    2. dependency is optional, some time the dipendenct is [] {empty} or [data] {with data} or not use dependency.
    if dependency [] :- only one time execute that inner function,
    dependency with argumenrs :- when saticfy the argument, function is execute,
    no dependency :- continues execute the function.
    In function part we add return(), it is the optional cleanup mechanism for effects like componentWillUnmount()
*/
const FunctionalaBasedStateManagement = () => {
    const [state, setState] = useState({
        name: '',
        mobile: ''
    }); // this.state
    const [updates, setUpdates] = useState(false);

    useEffect(()=>{
        
        setState({
            name: 'Arun',
            mobile: '9400247717'
        });
        console.log("componentDidMount");
        
    },[]);
    
    useEffect(()=>{
        if(updates) {
            setState({
                name: 'Arun Jojo',
                mobile: '919400247717'
            });
            console.log("componentDidUpdate");
        }
        return () => {
            console.log("componentWillUnmount");
        }
    },[updates]);

    return (
        <>
            <h2>Functionala Based State Management</h2>
            <p>
                {state.name} 
            </p>
            <p>
                {state.mobile}
            </p>
            <button onClick={() => setUpdates(!updates)}>Update</button>
        </>
    )
}

export default FunctionalaBasedStateManagement