import React, { useState, useCallback } from 'react'
import TodoMemo from './TodoMemo';

const CallbackHooks = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = useCallback(() => {
        setTodos((todo) => [...todo, "New Todo"]);
    }, [todos]);

    return (
        <>
            <TodoMemo todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count} {" :::  "}
                <button onClick={increment}> Add 1</button>
            </div>
        </>
    );
}

export default CallbackHooks