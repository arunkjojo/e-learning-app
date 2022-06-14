import React, { useState, useMemo } from 'react'
import TodoMemo from './TodoMemo';

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};

const MemoHooks = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    return (
        <div>
            <TodoMemo todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count} {" ::: "}
                <button onClick={increment}>Add 1</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    );
};

export default MemoHooks
